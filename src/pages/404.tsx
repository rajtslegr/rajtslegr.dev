import { ExclamationCircleIcon } from '@heroicons/react/solid';
import MetaData from 'components/MetaData';
import { NextPage } from 'next';

const Custom404: NextPage = () => {
  return (
    <>
      <MetaData title="404 - Nothing to see here!" />
      <div className="flex flex-col items-center justify-center gap-4 text-gray-500 dark:text-gray-400">
        <ExclamationCircleIcon className="w-24 h-24" />
        <p className="text-2xl">Nothing to see here...</p>
      </div>
    </>
  );
};

export default Custom404;
