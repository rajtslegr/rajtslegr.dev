'use client';

import { ExclamationCircleIcon } from '@heroicons/react/20/solid';

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-gray-700 dark:text-gray-300">
      <ExclamationCircleIcon className="size-24" />
      <p className="text-2xl">Something went wrong!</p>
      <button
        className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        onClick={reset}
      >
        Try again
      </button>
    </div>
  );
}
