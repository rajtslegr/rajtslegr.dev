import { motion, useReducedMotion } from 'framer-motion';
import React, { ReactNode } from 'react';

interface Props {
  delay?: number;
  children: ReactNode;
}

const MotionSection: React.FC<Props> = ({ children, delay = 0 }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{
        y: shouldReduceMotion ? 0 : 10,
        opacity: shouldReduceMotion ? 1 : 0,
      }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};

export default MotionSection;
