import type { NextApiRequest, NextApiResponse } from 'next';

import prisma from '@/lib/prisma';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const id = req.query.id.toString();

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
  } catch (e) {
    const error = e as Error;
    return res.status(500).json({ message: error.message });
  }
};

export default handler;
