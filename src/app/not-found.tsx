import { ExclamationCircleIcon } from '@heroicons/react/20/solid';

export const metadata = {
  title: '404 - Nothing to see here!',
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-gray-700 dark:text-gray-300">
      <ExclamationCircleIcon className="size-24" />
      <p className="text-2xl">Nothing to see here...</p>
    </div>
  );
}
