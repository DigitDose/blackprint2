import Link from "next/link";
import galleryProducts from "../../data/galleryProducts";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <div className="gallery-page container mx-auto px-4">
      <h2 className="text-center text-2xl font-bold mb-6">Gallery Page</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 xl:gap-6">
        {galleryProducts.map((product) => (
          <div key={product.id} className="product w-full">
            <Link
              href={`/gallery/@modal/${product.id}`}
              as={`/gallery/${product.id}`}
              className="block w-full h-0 pb-[100%] relative"
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                className="rounded-xl object-cover cursor-pointer absolute inset-0"
              />
            </Link>
            <h3 className="mt-2 text-center font-semibold">{product.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
