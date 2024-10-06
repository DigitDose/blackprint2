import React from "react";
import Image from "next/image";
import Link from "next/link";

const HomePage: React.FC = () => {
  const images = [
    { src: "/images/3.jpg", alt: "Image 3", id: 1 },
    { src: "/images/5.jpg", alt: "Image 5", id: 2 },
    { src: "/images/16.jpg", alt: "Image 16", id: 3 },
  ];

  return (
    <div className="min-h-screen w-full bg-black flex justify-center items-start">
      <div className="w-full max-w-2xl p-4 m-4 text-white space-y-4">
        <p className="antialiased text-lg text-pretty">
          Welcome to our world of unique style and creativity! We are a creative
          community of independent artists who transform clothes into works of
          art using screen printing. If you want to stand out from the crowd
          with a unique print on clothes, want to express your individuality or
          make your brand memorable? We will be happy to help you!
        </p>
        <h3 className="text-2xl text-center font-bold mt-4 mb-4">
          Our services:
        </h3>
        <p className="text-2xl text-center mb-4">What we offer:</p>
        <div className="flex flex-row justify-center items-center mb-4">
          {images.map((img) => (
            <Link
              key={img.id}
              href={`/?image=${img.id}`}
              as={`/image/${img.id}`}
              scroll={false}
            >
              <Image src={img.src} alt={img.alt} width={250} height={100} />
            </Link>
          ))}
        </div>
        <h3 className="text-2xl mb-1">Screen Printing</h3>
        <ol>
          <li className="mb-1">Clothes with unique prints.</li>
          <li className="mb-1">Individual orders based on your sketches.</li>
          <li className="mb-1">
            Limited collections created in collaboration with famous artists.
          </li>
          <li className="mb-4">
            Posters, posters, postcards, packaging and much more.
          </li>
        </ol>

        <ul className="antialiased text-2xl mb-2">Merch Branding</ul>
        <p className="mb-4">
          Clothing branding includes elements that help create a recognizable
          brand image and increase its value in the eyes of consumers. All these
          elements work well together to create a strong and memorable brand
          identity.
        </p>
        <ul className="antialiased text-2xl ">Main types</ul>
        <li> Tags and labels </li>
        <li> Embroidery </li>
        <li> Labels and stickers </li>
        <li> Patches </li>
        <li> Packaging </li>
        <ul className="antialiased text-2xl ">Clothing for printing:</ul>
        <p className="text-pretty">
          A huge selection of products for printing and branding: T-shirts,
          sweatshirts, long sleeves, caps, scarves, pants, hats, socks and much
          more.
        </p>
        <ul className="antialiased text-2xl ">
          We cooperate with leading clothing manufacturers:
        </ul>
        <p className="text-pretty">
          Gildan, Fruit of The Loom, Sol's, JHK, Russell, American Apparel,
          Buildyourbrand, Malfini, Stedmann, B&E і многие другие.
        </p>
        <div className="border border-white"> </div>
        <h3 className="text-2xl">Why choose us:</h3>
        <ol>
          <li>
            Hand-printed: Each product is created by hand, with special
            attention to detail.
          </li>
          <li>
            Exclusive designs: Our works are a reflection of individuality and
            creativity that you will not find in mass production.
          </li>
          <li>
            Quality and durability: We use the best technologies and only
            high-quality materials for bright and durable images.
          </li>
          <li>
            Exclusivity: We will help you create unique clothes that stand out.
          </li>
          <li>
            Fast and reliable work: We quickly fulfill orders without loss of
            quality.
          </li>
          <li>
            Individual approach to each project: We take into account all your
            wishes and requirements.
          </li>
          <li>Unconventional view: A creative approach to ordinary things.</li>
        </ol>
        <p className="text-pretty text-3xl">
          Join us and become part of a community where art lives on your
          clothes!
        </p>
        <div className="p-8">
          <h3 className="text-4xl font-bold text-white mb-6">About us:</h3>
          <p className="text-pretty text-xl text-white antialiased mb-4">
            Create unique clothes with us and stand out from the crowd!
          </p>
          <p className="text-white mb-4">
            What is screen printing - it is a printing technique in which an
            image is transferred to a surface using a special mesh stencil.
          </p>
          <p className="text-white mb-6">
            Silk screen printing is suitable for T-shirts, posters, labels,
            packaging and many other advertising materials. An ideal choice for
            large and small print runs with high printing accuracy and image
            durability.
          </p>
          <h1 className="text-3xl font-bold text-white mb-4">
            Technical process/main stages:
          </h1>
          <ol className="list-decimal list-inside space-y-2 mb-6">
            <li className="text-white">
              Stencil preparation - a light-sensitive emulsion is applied to a
              frame with a thin mesh stretched over it, which hardens under the
              influence of a powerful light source.
            </li>
            <li className="text-white">
              Exposure - A special film with an image is placed on the stencil
              and this structure is exposed to a light source. The emulsion
              hardens in those places where light hits, and those parts where
              light does not hit the film remain soft.
            </li>
            <li className="text-white">
              Stencil development - after exposure, the stencil is washed with
              water under high pressure. The uncured emulsion is washed off,
              leaving areas on the mesh through which the paint will be pressed.
            </li>
            <li className="text-white">
              Printing - The stencil is fixed on a special printing machine, and
              the paint is applied to the mesh by pressing with a special
              squeegee.
            </li>
            <li className="text-white">
              Drying - the finished product is placed in a special drying tunnel
              and under the influence of high temperatures, the image hardens on
              the surface.
            </li>
          </ol>
          <div className="flex space-x-6 flex-row justify-center">
            <Image
              src="/images/pracownia.jpg"
              alt="pracownia"
              width={250}
              height={100}
            />
            <Image
              src="/images/detale.jpg"
              alt="detale"
              width={250}
              height={100}
            />
            <Image
              src="/images/detale2.jpg"
              alt="detale2"
              width={250}
              height={100}
            />
          </div>
          <h1 className="text-3xl mt-3 font-bold text-white mb-4">
            Advantages of screen printing:
          </h1>
          <ul>
            <li>
              High brightness and color saturation: Due to the density of the
              paint, the colors are saturated and bright.
            </li>
            <li>Allows you to create detailed drawings and images.</li>
            <li>
              Durability - images are resistant to wear and fading compared to
              other printing techniques.
            </li>
            <li>
              Allows you to use special effect paints (for example, metallic,
              luminous, light-accumulative, UV, glitter, etc.).
            </li>
            <li>Great for large and small print runs.</li>
            <li>
              The image is more resistant to washing and much more pleasant to
              the touch compared to other types of printing.
            </li>
            <li>
              Wide range of materials: the method allows you to print on various
              materials, such as textiles, metal, plastic, glass, paper, etc.
            </li>
          </ul>
          <div className="flex items-center justify-center">
            <Image
              src="/images/18.jpg"
              alt="logo"
              width={500}
              height={300}
              className="items-center justify-center"
            />
          </div>
          <div className="border border-white"> </div>
          <h3 className="text-2xl text-white text-pretty antialiased">
            {" "}
            Pricing:
          </h3>
          <p>
            Each project is priced individually and prices are based on several
            factors:
          </p>
          <ul className="list-disc pl-8 mb-4">
            <li>Total quantity, sizes and materials of garments.</li>
            <li>Cut (style) and color of garments.</li>
            <li>Manufacturer of garments.</li>
            <li>Quantity and size of print.</li>
            <li>Number of print spots.</li>
            <li>Number of colors in design, detail, etc.</li>
          </ul>
          <div className="border-b-2 border-gray-200 mb-6 pb-4">
            <h2 className="text-2xl font-bold">
              T-shirt screen printing services:
            </h2>
          </div>
          <ul className="list-disc pl-8 mb-4">
            <li>Standard printing A3 (297x420)/ A3+ (330x450) from 20 pcs.</li>
            <li>Non-standard printing (370x490) from 50 pcs.</li>
            <li>Printing 1-2 colors from 10 pcs.</li>
            <li>Printing more than 2 colors from 50 pcs.</li>
            <li>Printing with water-based paint.</li>
            <li>Printing on plastisol.</li>
          </ul>
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Additional services:</h3>
            <ul className="list-disc pl-8 mb-4">
              <li>Printing on the customer's product: +20% to the price</li>
              <li>
                White backing is required on dark materials (+1 additional
                color)
              </li>
              <li>
                Special paints (silver/gold/UV/puff/glitter, etc.): +20-50%
                depending on the effect.
              </li>
              <li>Folding clothes: 0.12 Euro - 1 t-shirt</li>
              <li>Packing with bag: 0.35 Euro</li>
              <li>Removing tags: 0.59 Euro</li>
              <li>Handling: 0.30 Euro</li>
            </ul>
          </div>
          <div className="border-b-2 border-gray-200 mb-6 pb-4">
            <h2 className="text-2xl font-bold">Processing and delivery:</h2>
          </div>
          <ul className="list-disc pl-8 mb-4">
            <li>
              Standard Turn Around. (10-14 business days once payment is
              received)
            </li>
            <li>
              Large and non-standard orders. (14-15 business days once payment
              is received)
            </li>
            <li>Rush Orders. (5-7 day rush service available)</li>
            <li>Shipping worldwide. (5-7 business days.)</li>
          </ul>
          <div className="my-8">
            <Image
              src="/images/10.jpg"
              alt="Photo 10"
              width={500}
              height={300}
              className="mx-auto"
            />
          </div>
          <div className="border-b-2 border-gray-200 mb-6 pb-4">
            <h2 className="text-2xl font-bold">SCREENPRINTING INKS</h2>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Water-Based Inks:</h3>
            <ul className="list-disc pl-8 mb-4">
              <li>
                Environmentally Friendly: Water-based inks are generally safer
                for the environment and health since they do not contain toxic
                solvents and chemical additives.
              </li>
              <li>
                Easy to Apply: Water-based inks are easy to apply to fabric and
                dry quickly, making the screen printing process more efficient.
              </li>
              <li>
                Transparency: They have good transparency, allowing colors to be
                mixed and created in various shades and effects.
              </li>
              <li>
                Good Penetration: Water-based inks can penetrate the fabric
                well, creating an even coating and maintaining the natural look
                of the material.
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Plastisol Inks:</h3>
            <ul className="list-disc pl-8 mb-4">
              <li>
                High Wash Fastness: Plastisol inks are highly resistant to
                washing and wear, making them an ideal choice for creating
                durable and high-quality designs on garments.
              </li>
              <li>
                Vivid and Rich Colors: Plastisol inks generally provide vibrant
                and rich colors, making it possible to create expressive and
                contrasting designs.
              </li>
              <li>
                High precision and clarity: Plastisol paints provide good
                precision and clarity even in small details, making them an
                excellent choice for complex and detailed designs.
              </li>
              <li>
                Wide range of textures and effects: Plastisol paints are
                available in a variety of textures and effects, such as glitter,
                flock, relief, and others, allowing you to create uniqu and
                original designs.
              </li>
            </ul>
          </div>
          <div className="border-b-2 border-gray-200 mb-6 pb-4">
            <h2 className="text-2xl font-bold">
              We combine manual printing and automatic printing types:
            </h2>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Hand Printing:</h3>
            <p>Great for unique and creative projects, limited editions.</p>
            <ul className="list-disc pl-8 mb-4">
              <li>
                Flexibility and Creativity: Hand printing allows for creativity
                and a personalized approach to each product. This allows for the
                creation of unique, hand-made drawings and designs.
              </li>
              <li>
                Variety of Textures and Effects: With hand printing, you can
                easily experiment with different textures, effects, and shades,
                allowing for more original and interesting pieces.
              </li>
              <li>
                Suitable for Small Orders: Hand printing is ideal for small runs
                or orders with limited time, as it does not require a large
                investment in equipment and preparation.
              </li>
            </ul>
            <p>Disadvantages:</p>
            <ul className="list-disc pl-8 mb-4">
              <li>
                Time and Labor Intensive: Hand printing can be more
                time-consuming and labor-intensive than automated methods. This
                can increase the lead time and production costs.
              </li>
              <li>
                Unevenness: With hand printing, it is difficult to achieve
                perfect uniformity of ink application to the fabric, which may
                result in some imperfections in the final product.
              </li>
              <li>
                Limited Productivity: Manual printing is generally less
                productive than automated methods, making it less suitable for
                large orders or serial production.
              </li>
            </ul>
          </div>
          {/* kol; */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Plastisol Inks:</h3>
            <ul className="list-disc pl-8 mb-4">
              <li>
                High Wash Fastness: Plastisol inks are highly resistant to
                washing and wear, making them an ideal choice for creating
                durable and high-quality designs on garments.
              </li>
              <li>
                Vivid and Rich Colors: Plastisol inks generally provide vibrant
                and rich colors, making it possible to create expressive and
                contrasting designs.
              </li>
              <li>
                High precision and clarity: Plastisol paints provide good
                precision and clarity even in small details, making them an
                excellent choice for complex and detailed designs.
              </li>
              <li>
                Wide range of textures and effects: Plastisol paints are
                available in a variety of textures and effects, such as glitter,
                flock, relief, and others, allowing you to create uniqu and
                original designs.
              </li>
            </ul>
          </div>
          <div className="border-b-2 border-gray-200 mb-6 pb-4">
            <h2 className="text-2xl font-bold">
              `` We combine manual printing and automatic printing types:
            </h2>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Hand Printing:</h3>
            <p>Great for unique and creative projects, limited editions.</p>
            <ul className="list-disc pl-8 mb-4">
              <li>
                Flexibility and Creativity: Hand printing allows for creativity
                and a personalized approach to each product. This allows for the
                creation of unique, hand-made drawings and designs.
              </li>
              <li>
                Variety of Textures and Effects: With hand printing, you can
                easily experiment with different textures, effects, and shades,
                allowing for more original and interesting pieces.
              </li>
              <li>
                Suitable for Small Orders: Hand printing is ideal for small runs
                or orders with limited time, as it does not require a large
                investment in equipment and preparation.
              </li>
            </ul>
            <p>Disadvantages:</p>
            <ul className="list-disc pl-8 mb-4">
              <li>
                Time and Labor Intensive: Hand printing can be more
                time-consuming and labor-intensive than automated methods. This
                can increase the lead time and production costs.
              </li>
              <li>
                Unevenness: With hand printing, it is difficult to achieve
                perfect uniformity of ink application to the fabric, which may
                result in some imperfections in the final product.
              </li>
              <li>
                Limited Productivity: Manual printing is generally less
                productive than automated methods, making it less suitable for
                large orders or serial production.
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Automatic Printing:</h3>
            <p>Great for high volume advertising projects.</p>
            <p>Advantages:</p>
            <ul className="list-disc pl-8 mb-4">
              <li>
                High productivity: Automatic printing provides high speed and
                efficiency, allowing you to process large volumes of orders in a
                short time.
              </li>
              <li>
                High accuracy and uniformity: Automated systems typically
                provide more accurate and uniform application of ink to the
                fabric, ensuring a higher quality end product.
              </li>
              <li>
                Less labor costs: Using automated systems can reduce labor costs
                and reduce the risk of human error.
              </li>
            </ul>
            <p>Disadvantages:</p>
            <ul className="list-disc pl-8 mb-4">
              <li>
                Less design flexibility: Unlike manual printing, automated
                systems may be less flexible in creating unique and customized
                designs, as they are focused on mass production.
              </li>
            </ul>
          </div>
          <div className="my-8">
            <Image
              src="/images/11.jpg"
              alt="Photo 11"
              width={500}
              height={300}
              className="mx-auto"
            />
          </div>
          <div className="border-b-2 border-gray-200 mb-6 pb-4">
            <h2 className="text-2xl font-bold">PROJECT REQUIREMENTS</h2>
          </div>
          {/* ... */}
          <p>VECTOR - Illustrator - *.AI *.PDF</p>
          <p>RASTER - Adobe Photoshop - *.PSD *.PDF</p>
          {/* ... */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Artwork Checklist:</h3>
            <ul className="list-disc pl-8 mb-4">
              <li>
                Artwork should be sent 100% black and white. (The black will be
                what's printed)
              </li>
              <li>
                Verify your artwork is set at the actual size you want it
                printed.
              </li>
              <li>
                Make sure your .psd, .pdf, or .bmp file has a resolution of at
                least 300dpi.
              </li>
              <li>
                All text layers should be rasterized or converted to outlines.
              </li>
              <li>
                Multi-color images should have each color on a separate layer.
              </li>
            </ul>
            <p>Acceptable Formats:</p>
            <ul className="list-disc pl-8 mb-4">
              <li>.bmp</li>
              <li>.ai</li>
              <li>.psd</li>
              <li>.eps</li>
              <li>.pdf</li>
              <li>.png</li>
            </ul>
            <p>*.JPG *.BMP are NOT acceptable file formats.</p>
            <p>
              If your artwork is hand drawn or scanned make sure it is of high
              quality (300 dpi or higher) and scaled to the desired print size.
            </p>
            <p>
              Note: Usually this type of artwork needs some cleaning up to be
              acceptable for printing. If this is the case and the project is
              simple enough, we will work on preparing your illustration to the
              best of your preference. If the artwork needs extensive work we
              will not accept the project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
