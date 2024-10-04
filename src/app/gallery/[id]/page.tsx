import galleryProducts, { Product } from "data/galleryProducts";
import Image from "next/image";
export default function Page({ params: { id } }: { params: { id: string } }) {
  const photo: Product = galleryProducts.find(
    (product) => product.id === parseInt(id)
  )!;

  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto">
        <div>
          <h1 className="text-4xl font-bold">{photo.name}</h1>
        </div>
        <div>
          <Image src={photo.image} alt={photo.name} width={500} height={500} />
        </div>
        <div>
          <p>{photo.description}</p>
        </div>
      </div>
    </div>
  );
}
