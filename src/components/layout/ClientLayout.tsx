import type { ReactNode } from 'react';

import Layout from '@/components/layout/Layout';

export interface ClientLayoutProps {
  children: ReactNode;
  className?: string;
  pathname?: string;
}

export default function ClientLayout({
  children,
  className,
  pathname = '/',
}: ClientLayoutProps) {
  return (
    <Layout pathname={pathname}>
      <main className={className}>{children}</main>
    </Layout>
  );
}
