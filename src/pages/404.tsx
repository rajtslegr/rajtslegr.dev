import { ExclamationCircleIcon } from '@heroicons/react/solid';
import { NextPage } from 'next';

const Custom404: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <ExclamationCircleIcon className="w-24 h-24" />
      <div className="text-2xl">Nothing to see here...</div>
    </div>
  );
};

export default Custom404;
