// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type Response = {
  data?: string;
  error?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Response>) {
  if (req.method === 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { page } = req.query;
  if (typeof page !== 'string') return res.status(400).json({ error: 'Bad request' });
  let data;
  try {
    if (page.toLowerCase() === 'ourbeef') {
      data = await prisma.ourBeef.findFirst({
        orderBy: {
          date: 'desc',
        },
      });
    } else if (page.toLowerCase() === 'home') {
      data = await prisma.home.findFirst({
        orderBy: {
          date: 'desc',
        },
      });
    }
    if (!data) return res.status(404).json({ error: 'Not found' });
  } catch (e) {
    console.log((e as Error).message);
    return res.status(500).json({ error: 'Internal server error' });
  }
  res.status(200).json({ data: data.md.toString() });
}
