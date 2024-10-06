import galleryProducts, { Product } from "data/galleryProducts";
import Image from "next/image";
import Link from "next/link";

export default function Page({ params: { id } }: { params: { id: string } }) {
  const photo: Product = galleryProducts.find(
    (product) => product.id === parseInt(id)
  )!;

  const similarProducts = galleryProducts
    .filter((p) => p.id !== photo.id)
    .slice(0, 4);

  return (
    <div className="container mx-auto my-10 px-4">
      <div className="lg:flex lg:space-x-8">
        <div className="lg:w-1/2">
          <Image
            src={photo.image}
            alt={photo.name}
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <h1 className="text-4xl font-bold mb-4">{photo.name}</h1>
          <p className="text-2xl font-semibold mb-4">${photo.price}</p>
          <p className="mb-6">{photo.description}</p>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Dostępne rozmiary:</h2>
            <div className="overflow-x-auto">
              <table className="table table-zebra w-full">
                <thead>
                  <tr>
                    <th>Rozmiar</th>
                    <th>Wymiary</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>S</td>
                    <td>30cm x 40cm</td>
                  </tr>
                  <tr>
                    <td>M</td>
                    <td>45cm x 60cm</td>
                  </tr>
                  <tr>
                    <td>L</td>
                    <td>60cm x 80cm</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <button className="btn btn-primary">Dodaj do koszyka</button>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Podobne produkty</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {similarProducts.map((product) => (
            <Link
              href={`/gallery/${product.id}`}
              key={product.id}
              className="card bg-base-100 shadow-xl"
            >
              <figure>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p>${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
