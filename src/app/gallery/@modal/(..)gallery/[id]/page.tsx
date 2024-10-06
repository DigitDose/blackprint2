"use client";
import galleryProducts, { Product } from "data/galleryProducts";
import Image from "next/image";
import Modal from "components/Modal";
import { useRouter } from "next/navigation";

export default function Page({ params: { id } }: { params: { id: string } }) {
  const router = useRouter();
  const photo: Product = galleryProducts.find(
    (product) => product.id === parseInt(id)
  )!;

  const handleClose = () => {
    router.back();
  };

  return (
    <Modal size="lg" onClose={handleClose}>
      <div className="w-full max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
          {photo.name}
        </h1>
        <div className="relative w-full aspect-[1/1] sm:aspect-[4/3] md:aspect-[16/9]">
          <Image
            src={photo.image}
            alt={photo.name}
            fill
            className="object-contain"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 70vw, 60vw"
          />
        </div>
        <p className="text-white mt-4 text-center">{photo.description}</p>
        <div className="mt-4 text-center">
          <a
            href={`/gallery/${id}`}
            className="text-blue-500 hover:underline cursor-pointer"
          >
            View full page
          </a>
        </div>
      </div>
    </Modal>
  );
}
