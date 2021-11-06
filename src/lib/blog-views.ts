import prisma from './prisma';

export const getBlogViews = async (id: string) => {
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

  return String(newOrUpdatedViews.count);
};
