import { motion, useScroll } from 'framer-motion';

const ProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="bar top-0 h-1 origin-left bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ProgressBar;
