import { PropsWithChildren } from 'react';

import { motion, useReducedMotion } from 'framer-motion';

interface MotionSectionProps extends PropsWithChildren {
  delay?: number;
  id?: string;
}

const MotionSection = ({ children, delay = 0, id }: MotionSectionProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      id={id}
      className="scroll-mt-24"
      initial={{
        y: shouldReduceMotion ? 0 : 10,
        opacity: shouldReduceMotion ? 1 : 0,
      }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};

export default MotionSection;
