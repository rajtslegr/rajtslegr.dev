import { useEffect, useState } from 'react';

const useOnTop = (): boolean => {
  const [onTop, setOnTop] = useState<boolean>(true);

  const handleScroll = (): void => {
    setOnTop(window.scrollY === 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return onTop;
};

export default useOnTop;
