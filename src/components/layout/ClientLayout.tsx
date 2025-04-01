'use client';

import { ReactNode } from 'react';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ThemeProvider } from 'next-themes';

import Layout from '@/components/layout/Layout';

interface ClientLayoutProps {
  children: ReactNode;
  className?: string;
}

export default function ClientLayout({
  children,
  className,
}: ClientLayoutProps) {
  return (
    <ThemeProvider
      defaultTheme="dark"
      attribute="class"
      disableTransitionOnChange={true}
    >
      <Layout>
        <main className={className}>
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
      </Layout>
    </ThemeProvider>
  );
}
