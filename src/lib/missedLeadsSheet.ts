import fs from 'fs';
import path from 'path';
import type { sheets_v4 } from 'googleapis';

const DEFAULT_SPREADSHEET_ID = '16gPch4q3-Zt9Q55tm5G3sKqQg1wYb2J0iHIfJYLQVoA';

type LeadPayload = Record<string, unknown>;

function parseServiceAccountJsonString(raw: string): Record<string, unknown> | null {
  let s = raw.trim();
  if (s.charCodeAt(0) === 0xfeff) {
    s = s.slice(1);
  }
  // Whole value wrapped in single quotes: '...'
  if (s.length >= 2 && s.startsWith("'") && s.endsWith("'")) {
    s = s.slice(1, -1).trim();
  }
  s = s.replace(/[\u201C\u201D]/g, '"');

  const toObject = (input: string, depth = 0): Record<string, unknown> | null => {
    if (depth > 6) {
      return null;
    }
    try {
      const v = JSON.parse(input) as unknown;
      if (typeof v === 'string') {
        return toObject(v, depth + 1);
      }
      if (v && typeof v === 'object' && !Array.isArray(v)) {
        return v as Record<string, unknown>;
      }
    } catch {
      return null;
    }
    return null;
  };

  /** Next / Windows .env sometimes leaves JSON with doubled backslashes (\\" instead of \"). */
  const parseAfterUnescaping = (input: string): Record<string, unknown> | null => {
    const variants = new Set<string>([input]);
    if (input.length >= 2 && input.startsWith('"') && input.endsWith('"')) {
      variants.add(input.slice(1, -1));
    }
    if (input.length >= 2 && input.startsWith('"') && input[1] === '{') {
      variants.add(input.slice(1));
    }
    for (const base of variants) {
      let u = base.trim();
      for (let pass = 0; pass < 20; pass++) {
        const hit = toObject(u);
        if (hit) {
          return hit;
        }
        // Turn doubled escapes from .env (\\" → ", \\n → \n as JSON escape pair) into valid JSON.
        const next = u.replace(/\\\\n/g, '\\n').replace(/\\\\"/g, '"');
        if (next === u) {
          break;
        }
        u = next;
      }
    }
    return null;
  };

  const obj = toObject(s) ?? parseAfterUnescaping(s);
  if (obj) {
    return obj;
  }

  // Starts with {'  — invalid JSON (single-quoted); common .env mistake
  if (/^\{\s*'/.test(s)) {
    console.error(
      'GOOGLE_SERVICE_ACCOUNT_JSON uses single quotes inside {…}. Use double quotes for JSON keys/strings, or use GOOGLE_SERVICE_ACCOUNT_JSON_BASE64.'
    );
  } else {
    console.error(
      'GOOGLE_SERVICE_ACCOUNT_JSON is not valid JSON (first chars):',
      JSON.stringify(s.slice(0, 40))
    );
  }
  return null;
}

/**
 * Next.js can mangle GOOGLE_SERVICE_ACCOUNT_JSON in process.env (extra backslashes).
 * Reading the same key from .env.local / .env and unquoting like dotenv fixes it locally.
 */
function parseDotenvLineValue(afterEquals: string): string | null {
  const v = afterEquals.trim();
  if (!v) {
    return null;
  }
  if (v.startsWith('"')) {
    try {
      const parsed = JSON.parse(v) as unknown;
      return typeof parsed === 'string' ? parsed : JSON.stringify(parsed);
    } catch {
      return null;
    }
  }
  if (v.startsWith("'") && v.endsWith("'")) {
    return v.slice(1, -1);
  }
  return v;
}

function readGoogleServiceAccountJsonFromEnvFiles(): string | null {
  for (const name of ['.env.local', '.env']) {
    try {
      const envPath = path.join(process.cwd(), name);
      if (!fs.existsSync(envPath)) {
        continue;
      }
      const content = fs.readFileSync(envPath, 'utf8');
      const match = content.match(/^\s*GOOGLE_SERVICE_ACCOUNT_JSON=(.+)$/m);
      if (!match) {
        continue;
      }
      const decoded = parseDotenvLineValue(match[1]);
      if (decoded && decoded.startsWith('{')) {
        return decoded;
      }
    } catch {
      continue;
    }
  }
  return null;
}

/** Path from env or from .env / .env.local if Next did not inject it. */
function getServiceAccountKeyFilePath(): string | null {
  const fromEnv =
    process.env.GOOGLE_SERVICE_ACCOUNT_JSON_PATH?.trim() ||
    process.env.GOOGLE_APPLICATION_CREDENTIALS?.trim();
  if (fromEnv) {
    return fromEnv;
  }
  for (const name of ['.env.local', '.env']) {
    try {
      const envPath = path.join(process.cwd(), name);
      if (!fs.existsSync(envPath)) {
        continue;
      }
      const content = fs.readFileSync(envPath, 'utf8');
      const match =
        content.match(/^\s*GOOGLE_SERVICE_ACCOUNT_JSON_PATH=(.+)$/m) ||
        content.match(/^\s*GOOGLE_APPLICATION_CREDENTIALS=(.+)$/m);
      if (!match) {
        continue;
      }
      const decoded = parseDotenvLineValue(match[1]);
      if (decoded && !decoded.startsWith('{')) {
        return decoded;
      }
    } catch {
      continue;
    }
  }
  return null;
}

function loadCredentialsFromKeyFilePath(relOrAbs: string): Record<string, unknown> | null {
  const abs = path.isAbsolute(relOrAbs) ? relOrAbs : path.join(process.cwd(), relOrAbs);
  try {
    if (!fs.existsSync(abs)) {
      console.error('[missed-leads] Service account file not found:', abs);
      return null;
    }
    const text = fs.readFileSync(abs, 'utf8');
    const obj = JSON.parse(text) as Record<string, unknown>;
    if (obj?.type !== 'service_account') {
      console.error(
        '[missed-leads] JSON file must be a Google service account key (type: service_account).'
      );
      return null;
    }
    return obj;
  } catch (e) {
    console.error('[missed-leads] Could not read service account JSON file:', e);
    return null;
  }
}

function getServiceAccountCredentials(): Record<string, unknown> | null {
  const b64 = process.env.GOOGLE_SERVICE_ACCOUNT_JSON_BASE64?.trim();
  if (b64) {
    try {
      const decoded = Buffer.from(b64, 'base64').toString('utf8');
      const parsed = parseServiceAccountJsonString(decoded);
      if (parsed) {
        return parsed;
      }
    } catch (e) {
      console.error('GOOGLE_SERVICE_ACCOUNT_JSON_BASE64 could not be decoded/parsed:', e);
    }
  }

  const raw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  if (typeof raw === 'string' && raw.trim()) {
    const parsed = parseServiceAccountJsonString(raw);
    if (parsed) {
      return parsed;
    }
  }

  const fromEnvFile = readGoogleServiceAccountJsonFromEnvFiles();
  if (fromEnvFile) {
    const parsed = parseServiceAccountJsonString(fromEnvFile);
    if (parsed) {
      return parsed;
    }
  }

  const keyPath = getServiceAccountKeyFilePath();
  if (keyPath) {
    const fromKeyFile = loadCredentialsFromKeyFilePath(keyPath);
    if (fromKeyFile) {
      return fromKeyFile;
    }
    console.error(
      '[missed-leads] Service account key file path set but file missing or invalid:',
      keyPath
    );
  }

  return null;
}

const MISSED_LEADS_HEADERS = ['Sr.', 'Name', 'Phone', 'email', 'Date & time'] as const;

/** DD MMM YYYY HH:mm (24h), e.g. 08 Apr 2026 14:05 */
function formatMissedLeadSheetDateTime(date: Date): string {
  const timeZone = process.env.MISSED_LEADS_SHEET_TZ?.trim() || 'Asia/Kolkata';
  const fmt = new Intl.DateTimeFormat('en-GB', {
    timeZone,
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
  const parts = fmt.formatToParts(date);
  const v = (t: Intl.DateTimeFormatPartTypes) =>
    parts
      .find((p) => p.type === t)
      ?.value?.replace(',', '')
      ?.trim() ?? '';
  const day = v('day');
  const month = v('month');
  const year = v('year');
  let hour = v('hour');
  let minute = v('minute');
  if (hour.length === 1) hour = `0${hour}`;
  if (minute.length === 1) minute = `0${minute}`;
  return `${day} ${month} ${year} ${hour}:${minute}`;
}

async function ensureMissedLeadsTableHeader(
  sheets: sheets_v4.Sheets,
  spreadsheetId: string,
  tabName: string
): Promise<void> {
  const headerRange = `${tabName}!A1:E1`;
  const existing = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: headerRange,
  });
  const row = existing.data.values?.[0] ?? [];
  const dateHeaderOk =
    String(row[4] ?? '')
      .trim()
      .toLowerCase() === 'date & time';
  if (
    String(row[0] ?? '').trim() === 'Sr.' &&
    String(row[1] ?? '')
      .trim()
      .toLowerCase() === 'name' &&
    String(row[2] ?? '')
      .trim()
      .toLowerCase() === 'phone' &&
    String(row[3] ?? '')
      .trim()
      .toLowerCase() === 'email' &&
    dateHeaderOk
  ) {
    return;
  }
  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: headerRange,
    valueInputOption: 'USER_ENTERED',
    requestBody: { values: [MISSED_LEADS_HEADERS.slice() as string[]] },
  });
}

async function getNextMissedLeadSerial(
  sheets: sheets_v4.Sheets,
  spreadsheetId: string,
  tabName: string
): Promise<number> {
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: `${tabName}!A2:E`,
  });
  const rows = res.data.values ?? [];
  let count = 0;
  for (const row of rows) {
    const name = String(row[1] ?? '').trim();
    const phone = String(row[2] ?? '').trim();
    const email = String(row[3] ?? '').trim();
    if (name || phone || email) {
      count += 1;
    }
  }
  return count + 1;
}

/**
 * Appends one row when Zoho lead creation fails.
 * Sheet columns: Sr. | Name | Phone | email | Date & time (DD MMM YYYY HH:mm, default TZ Asia/Kolkata).
 * Credentials (first match wins): GOOGLE_SERVICE_ACCOUNT_JSON_BASE64, GOOGLE_SERVICE_ACCOUNT_JSON,
 * then GOOGLE_APPLICATION_CREDENTIALS / GOOGLE_SERVICE_ACCOUNT_JSON_PATH (key file).
 */
export async function appendMissedLeadToSheet(
  leadData: LeadPayload,
  failureReason: string,
  zohoDetail?: string
): Promise<void> {
  const credentials = getServiceAccountCredentials();
  if (!credentials) {
    console.error(
      '[missed-leads] Sheet skipped — set GOOGLE_SERVICE_ACCOUNT_JSON_BASE64 or GOOGLE_SERVICE_ACCOUNT_JSON, or GOOGLE_APPLICATION_CREDENTIALS (path to key JSON). Reason:',
      failureReason,
      zohoDetail ? `Zoho detail: ${zohoDetail}` : '',
      'Payload:',
      JSON.stringify(leadData)
    );
    return;
  }

  const spreadsheetId = process.env.MISSED_LEADS_GOOGLE_SHEET_ID?.trim() || DEFAULT_SPREADSHEET_ID;
  const tabName = process.env.MISSED_LEADS_SHEET_TAB?.trim() || 'Sheet1';

  try {
    const { google } = await import('googleapis');

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    await ensureMissedLeadsTableHeader(sheets, spreadsheetId, tabName);
    const sr = await getNextMissedLeadSerial(sheets, spreadsheetId, tabName);

    const when = formatMissedLeadSheetDateTime(new Date());
    const row: [number, string, string, string, string] = [
      sr,
      String(leadData.Last_Name ?? '').trim(),
      String(leadData.Phone ?? '').trim(),
      String(leadData.Email ?? '').trim(),
      when,
    ];

    const range = `${tabName}!A:E`;

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      requestBody: { values: [row] },
    });
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    const who =
      typeof credentials.client_email === 'string' ? credentials.client_email : '(unknown)';
    console.error(
      '[missed-leads] Google Sheets append failed:',
      msg,
      '— share the spreadsheet with this service account as Editor:',
      who,
      'spreadsheetId:',
      spreadsheetId,
      'Reason:',
      failureReason,
      zohoDetail ? `Zoho detail: ${zohoDetail}` : '',
      'Lead:',
      JSON.stringify(leadData)
    );
    throw e;
  }
}
