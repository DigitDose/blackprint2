// This file can be removed or left empty if no longer needed
// pages/pricing.tsx
import Head from "next/head";
import Image from "next/image";

const PricingPage = () => {
  return (
    <div className="w-3/4">
      <Head>
        <title>Pricing Page</title>
      </Head>
      <div className="container mx-auto p-4">
        <div className="shadow rounded p-6">
          <div className="border-b-2 border-gray-200 mb-6 pb-4">
            <h1 className="text-3xl font-bold text-center">PRICE</h1>
          </div>
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
          <p>VECTOR – Illustrator – *.AI *.PDF</p>
          <p>RASTER – Adobe Photoshop – *.PSD *.PDF</p>
          {/* ... */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Artwork Checklist:</h3>
            <ul className="list-disc pl-8 mb-4">
              <li>
                Artwork should be sent 100% black and white. (The black will be
                what’s printed)
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

export default PricingPage;
