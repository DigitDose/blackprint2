import Link from "next/link";
import galleryProducts from "../../data/galleryProducts";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <div className="gallery-page">
      <h2 className="text-center text-2xl font-bold mb-6">Gallery Page</h2>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {galleryProducts.map((product) => (
            <div key={product.id} className="product">
              <Link
                href={`/gallery/@modal/${product.id}`}
                as={`/gallery/${product.id}`}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="rounded-xl object-cover cursor-pointer"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
