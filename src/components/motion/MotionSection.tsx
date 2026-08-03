import type { CSSProperties, PropsWithChildren } from 'react';

interface MotionSectionProps extends PropsWithChildren {
  delay?: number;
  id?: string;
}

const MotionSection = ({ children, delay = 0, id }: MotionSectionProps) => (
  <div
    id={id}
    className="motion-section scroll-mt-24"
    style={{ '--motion-delay': `${delay}s` } as CSSProperties}
  >
    {children}
  </div>
);

export default MotionSection;
