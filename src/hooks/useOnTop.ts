import { useEffect, useState } from 'react';

const useOnTop = (): boolean => {
  const [onTop, setOntTop] = useState<boolean>(true);

  const handleScroll = (): void => {
    setOntTop(window.pageYOffset === 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return onTop;
};

export default useOnTop;
