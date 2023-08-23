import { chatGpt } from '../../lib/chatgpt';
import { NextApiResponse, NextApiRequest } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const messages = req.body.messages;
    try {
      const chatGptResponse = await chatGpt(messages);
      res.status(200).json({ message: chatGptResponse });
    } catch (error) {
      res.status(500).json({ error: 'Error fetching response from ChatGPT' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
