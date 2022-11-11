// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import bcrypt from 'bcryptjs';
import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type Response = {
  success: boolean;
  error?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Response>) {
  if (req.method !== 'POST') return res.status(405).json({ success: false, error: 'Method not allowed' });
  const { password, content, page } = req.body;

  try {
    const user = await prisma.user.findFirst();
    if (!user) return res.status(500).json({ success: false, error: 'Database Error' });
    const isVerified = await bcrypt.compare(password, user.password);
    if (!isVerified) return res.status(401).json({ success: false, error: 'Incorrect password' });
    if (page.toLowerCase() === 'ourbeef') {
      await prisma.ourBeef.create({
        data: {
          md: Buffer.from(content),
        },
      });
    } else if (page.toLowerCase() === 'home') {
      await prisma.home.create({
        data: {
          md: Buffer.from(content),
        },
      });
    }
  } catch (e) {
    console.log((e as Error).message);
    return res.status(500).json({ success: false, error: 'Internal server error' });
  }
  res.status(200).json({ success: true });
}
