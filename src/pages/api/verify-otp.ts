import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const OTP_API = 'https://api.msg91.com/api/v5/otp';
const AUTH_KEY = process.env.MSG91_AUTH_KEY as string;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { phone, otp } = req.body;
  if (!phone || !otp) return res.status(400).json({ error: 'Phone and OTP are required' });

  try {
    const { data } = await axios.get(`${OTP_API}/verify?authkey=${AUTH_KEY}&mobile=${phone}&otp=${otp}`);
    const isVerified = data.type === 'success';
    res.status(200).json({ success: isVerified });
  } catch (err: any) {
    console.error('Verify OTP Error:', err.response?.data || err.message);
    res.status(500).json({ success: false, error: 'Failed to verify OTP' });
  }
}
