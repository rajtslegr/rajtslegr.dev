import { NextPage } from 'next';

import { ExclamationCircleIcon } from '@heroicons/react/20/solid';

import MetaData from '@/components/meta-data/MetaData';

const Custom404: NextPage = () => (
  <>
    <MetaData title="404 - Nothing to see here!" />
    <div className="flex flex-col items-center justify-center gap-4 text-gray-700 dark:text-gray-300">
      <ExclamationCircleIcon className="h-24 w-24" />
      <p className="text-2xl">Nothing to see here...</p>
    </div>
  </>
);

export default Custom404;
