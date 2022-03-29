import clsx from 'clsx';
import Image from 'next/image';

import { InstagramDataEdge } from '@/types/entities';

export interface Props {
  index: number;
  edge: InstagramDataEdge;
}

const InstagramItem: React.FC<Props> = ({ index, edge }) => (
  <div
    key={edge.id}
    className={clsx(
      index === 0 ? 'lg:col-span-2 lg:row-span-2' : '',
      'relative pb-1/1 rounded-lg shadow',
      'bg-white dark:bg-card',
    )}
  >
    <a href={edge.permalink} rel="noopener noreferrer" target="_blank">
      <Image
        className="rounded-lg"
        src={edge.thumbnail_url || edge.media_url}
        alt={edge.caption}
        placeholder="blur"
        blurDataURL={edge.thumbnail_url || edge.media_url}
        layout="fill"
        objectFit="cover"
      />
    </a>
  </div>
);

export default InstagramItem;
