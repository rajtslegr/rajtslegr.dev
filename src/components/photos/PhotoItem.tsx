import type { Photo } from '@/types/entities';

interface PhotoItemProps {
  photo: Photo;
}

const PhotoItem = ({ photo }: PhotoItemProps) => (
  <a
    href={photo.url}
    rel="noopener noreferrer"
    target="_blank"
    className="group overflow-hidden rounded-md transition-all duration-200"
  >
    <div className="relative aspect-square overflow-hidden">
      <img
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        src={photo.src.medium.url}
        alt={photo.title}
        title={photo.title}
        loading="lazy"
      />
    </div>
  </a>
);

export default PhotoItem;
