import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const OTP_API = 'https://api.msg91.com/api/v5/otp';
const AUTH_KEY = process.env.MSG91_AUTH_KEY as string;
const TEMPLATE_ID = process.env.MSG91_TEMPLATE_ID as string;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { phone } = req.body;
  console.log(phone);

  if (!phone) return res.status(400).json({ error: 'Phone number is required' });

  try {
    const resp = await axios.post(
      `${OTP_API}?template_id=${TEMPLATE_ID}&mobile=${`91${phone}`}&authkey=${AUTH_KEY}`
    );
    console.log(resp);

    res.status(200).json({ success: true });
  } catch (err: any) {
    console.error('Send OTP Error:', err.response?.data || err.message);
    res.status(500).json({ success: false, error: 'Failed to send OTP' });
  }
}
