import type { NextApiRequest, NextApiResponse } from 'next';

import { appendMissedLeadToSheet } from 'lib/missedLeadsSheet';

function extractLeadData(req: NextApiRequest): Record<string, unknown> {
  const b = req.body;
  if (b && typeof b === 'object' && !Array.isArray(b) && 'data' in b) {
    const data = (b as { data?: unknown }).data;
    if (data && typeof data === 'object' && !Array.isArray(data)) {
      return data as Record<string, unknown>;
    }
  }
  if (typeof b === 'string') {
    try {
      const p = JSON.parse(b) as { data?: Record<string, unknown> };
      return p.data && typeof p.data === 'object' && !Array.isArray(p.data) ? p.data : {};
    } catch {
      return {};
    }
  }
  return {};
}

function errorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  return String(error);
}

type ZohoLeadResult = {
  status?: string;
  message?: string;
  code?: string;
  details?: { api_name?: string; id?: string };
};

function isZohoLeadCreationFailure(record: ZohoLeadResult | undefined): boolean {
  if (!record) return false;
  if (String(record.status || '').toLowerCase() === 'error') return true;
  const code = String(record.code || '').toUpperCase();
  if (code && code !== 'SUCCESS') return true;
  return false;
}

function zohoRecordFailureReason(record: ZohoLeadResult | undefined, httpStatus: number): string {
  if (!isZohoLeadCreationFailure(record)) {
    return `Zoho HTTP ${httpStatus}`;
  }
  if (record?.code === 'DUPLICATE_DATA') {
    const id = record.details?.id;
    return id ? `duplicate data (Zoho) — existing id ${id}` : 'duplicate data (Zoho)';
  }
  return record?.message || record?.code || `Zoho HTTP ${httpStatus}`;
}

let accessToken = null;

const getAccessToken = async () => {
  if (accessToken) return accessToken;

  try {
    const tokenParams = `refresh_token=${process.env.ZOHO_REFRESH_TOKEN}&client_id=${process.env.ZOHO_CLIENT_ID}&client_secret=${process.env.ZOHO_CLIENT_SECRET}&grant_type=refresh_token`;

    const tokenResponse = await fetch(`${process.env.ZOHO_0AUTH_URL}?${tokenParams}`, {
      method: 'POST',
    });

    const tokenData = await tokenResponse.json();

    if (!tokenResponse.ok) {
      throw new Error(`Token Error: ${tokenData.error}`);
    }

    accessToken = tokenData.access_token;
    return accessToken;
  } catch (error) {
    console.error('Error fetching access token:', errorMessage(error));
    return null;
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const leadData = extractLeadData(req);

  try {
    const token = await getAccessToken();

    if (!token) {
      try {
        await appendMissedLeadToSheet(
          leadData,
          'Failed to retrieve Zoho access token',
          JSON.stringify(leadData).slice(0, 4000)
        );
      } catch (sheetErr) {
        console.error('Missed lead sheet append failed:', sheetErr);
      }
      return res.status(500).json({ error: 'Failed to retrieve access token' });
    }

    const requestData = JSON.stringify({
      data: [
        {
          ...leadData,
          Lead_Status: leadData?.Lead_Status ?? 'New',
        },
      ],
    });

    const response = await fetch(process.env.ZOHO_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Zoho-oauthtoken ${token}`,
      },
      body: requestData,
    });

    const responseText = await response.text();
    let responseData: { data?: ZohoLeadResult[] } = {};
    try {
      responseData = responseText ? JSON.parse(responseText) : {};
    } catch {
      responseData = {};
    }

    if (!response.ok) {
      const firstOnError = responseData?.data?.[0];
      const sheetReason = zohoRecordFailureReason(firstOnError, response.status);
      try {
        await appendMissedLeadToSheet(leadData, sheetReason, responseText.slice(0, 4000));
      } catch (sheetErr) {
        console.error('Missed lead sheet append failed:', sheetErr);
      }
      return res.status(502).json({
        error: `HTTP error! Status: ${response.status}`,
        detail: responseText.slice(0, 500),
      });
    }

    const first = responseData?.data?.[0];
    if (isZohoLeadCreationFailure(first)) {
      const detail = JSON.stringify(first);
      const reason = zohoRecordFailureReason(first, response.status);
      try {
        await appendMissedLeadToSheet(leadData, reason, detail);
      } catch (sheetErr) {
        console.error('Missed lead sheet append failed:', sheetErr);
      }
      // Duplicate (or same email) still means the user submitted; let the site show thank-you.
      if (String(first?.code || '').toUpperCase() === 'DUPLICATE_DATA') {
        return res.status(200).json({ ok: true, duplicate: true, details: first });
      }
      return res
        .status(502)
        .json({ error: first?.message || 'Lead creation failed', details: first });
    }

    return res.status(200).json(responseData);
  } catch (error) {
    const msg = errorMessage(error);
    console.error('Error processing request:', msg);
    try {
      await appendMissedLeadToSheet(leadData, msg, JSON.stringify(leadData).slice(0, 4000));
    } catch (sheetErr) {
      console.error('Missed lead sheet append failed:', sheetErr);
    }
    return res.status(500).json({ error: msg });
  }
}
