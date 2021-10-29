import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

interface Props {
  delay?: number;
  className?: string;
  children: ReactNode;
}

const MotionSection: React.FC<Props> = ({ children, className, delay = 0 }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{
        y: shouldReduceMotion ? 0 : 10,
        opacity: shouldReduceMotion ? 1 : 0,
      }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MotionSection;
