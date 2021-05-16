import { NextPage } from 'next';
import ErrorIcon from '../components/ErrorSvg';

const Custom404: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-36 lg:h-80">
      {ErrorIcon}
    </div>
  );
};

export default Custom404;
