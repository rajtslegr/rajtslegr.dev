import { PrismaClient } from '@prisma/client';

declare global {
  const globalThis: {
    prisma?: PrismaClient;
  };
}

const globalForPrisma = globalThis as { prisma?: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV === 'development') {
  globalForPrisma.prisma = prisma;
}
