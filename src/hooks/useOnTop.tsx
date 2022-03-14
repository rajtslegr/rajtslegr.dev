import { useEffect, useState } from 'react';

const useOnTop = (): boolean => {
  const [onTop, setOntTop] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  });

  const handleScroll = (): void => {
    if (window.pageYOffset > 0) {
      if (onTop) setOntTop(false);
    } else if (!onTop) setOntTop(true);
  };

  return onTop;
};

export default useOnTop;
