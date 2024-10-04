// components/GalleryCard.tsx
import Image from "next/image";
import { FC } from "react";

interface GalleryItemData {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}
interface GalleryCardProps {
  item: GalleryItemData;
  onImageClick: () => void;
}

const GalleryCard: FC<GalleryCardProps> = ({ item, onImageClick }) => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure onClick={onImageClick}>
        <Image
          src={item.imageUrl}
          alt={item.title}
          width={400}
          height={300}
          layout="responsive"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item.title}</h2>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default GalleryCard;
