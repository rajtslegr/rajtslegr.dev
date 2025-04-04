'use client';

import { motion, useScroll } from 'framer-motion';

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="top-0 h-1 origin-left bg-linear-to-r from-gray-800 via-gray-700 to-gray-600 dark:from-gray-700 dark:via-gray-600 dark:to-gray-500"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ProgressBar;
