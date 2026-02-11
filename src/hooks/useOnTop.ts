import { useEffect, useState } from 'react';

const useOnTop = (): boolean => {
  const [onTop, setOntTop] = useState<boolean>(true);

  const handleScroll = (): void => {
    if (window.pageYOffset > 0) {
      if (onTop) setOntTop(false);
    } else if (!onTop) setOntTop(true);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  });

  return onTop;
};

export default useOnTop;
