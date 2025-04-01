'use client';

import { useIncrementView } from '@/hooks/useIncrementViews';

interface ViewCounterProps {
  slug: string;
}

export default function ViewCounter({ slug }: ViewCounterProps) {
  useIncrementView(slug);

  return null;
}
