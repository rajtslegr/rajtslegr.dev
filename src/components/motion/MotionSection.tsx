import { PropsWithChildren } from 'react';

import { motion, useReducedMotion } from 'framer-motion';

interface MotionSectionProps extends PropsWithChildren {
  delay?: number;
}

const MotionSection: React.FC<MotionSectionProps> = ({
  children,
  delay = 0,
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
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
