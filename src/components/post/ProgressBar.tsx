import { motion, useScroll } from 'framer-motion';

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="bar top-0 h-1 origin-left bg-gradient-to-r from-gray-800 via-gray-900 to-black"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ProgressBar;
