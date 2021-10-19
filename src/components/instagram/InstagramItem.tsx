import { InstagramDataEdge } from '@/types/entities';
import classNames from '@/utils/classNames';
import Image from 'next/image';
import MotionSection from '../layout/MotionSection';

export interface Props {
  index: number;
  edge: InstagramDataEdge;
}

const InstagramItem: React.FC<Props> = ({ index, edge }) => (
  <MotionSection
    key={edge.id}
    delay={index / 10 + 0.1}
    className={classNames(
      index === 0 ? 'lg:row-span-2 lg:col-span-2' : '',
      'relative rounded shadow pb-1/1 ',
    )}
  >
    <a href={edge.permalink} rel="noopener noreferrer" target="_blank">
      <Image
        className="rounded"
        src={edge.thumbnail_url || edge.media_url}
        alt={edge.caption}
        placeholder="blur"
        blurDataURL={edge.thumbnail_url || edge.media_url}
        layout="fill"
        objectFit="cover"
      />
    </a>
  </MotionSection>
);

export default InstagramItem;
