"use client";
import Modal from "components/Modal";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const images = [
  { src: "/images/3.jpg", alt: "Image 3", id: 1 },
  { src: "/images/5.jpg", alt: "Image 5", id: 2 },
  { src: "/images/16.jpg", alt: "Image 16", id: 3 },
];

export default function ImageModalPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const image = images.find((img) => img.id === parseInt(params.id));

  if (!image) {
    return null;
  }

  const handleClose = () => {
    router.back();
  };

  return (
    <Modal onClose={handleClose} size="lg">
      <div className="relative">
        <Image
          src={image.src}
          alt={image.alt}
          width={800}
          height={600}
          className="max-w-full max-h-[90vh] object-contain"
        />
        <Link
          href={`/gallery/${image.id}`}
          className="mt-4 text-blue-500 block text-center"
        >
          View details
        </Link>
      </div>
    </Modal>
  );
}
