import prisma from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const id = req.query.id.toString();

    if (req.method === 'POST') {
      const newOrUpdatedViews = await prisma.views.upsert({
        where: { id },
        create: {
          id,
        },
        update: {
          count: {
            increment: 1,
          },
        },
      });

      return res.status(200).json({
        total: newOrUpdatedViews.count.toString(),
      });
    }

    if (req.method === 'GET') {
      const views = await prisma.views.findUnique({
        where: {
          id,
        },
      });

      return res.status(200).json({ total: views.count.toString() });
    }
  } catch (e) {
    const error = e as Error;
    return res.status(500).json({ message: error.message });
  }
};

export default handler;
