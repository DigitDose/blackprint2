// This file can be removed or left empty if no longer needed
import { NextPage } from "next";
import Image from "next/image";
const AboutPage: NextPage = () => (
  <div className="min-h-screen flex items-center justify-center py-12 px-4">
    <div className="max-w-2xl mx-auto  rounded-lg shadow-2xl overflow-hidden">
      <div className="p-8">
        <h3 className="text-4xl font-bold text-white mb-6">About us:</h3>
        <p className="text-pretty text-xl text-white antialiased mb-4">
          Create unique clothes with us and stand out from the crowd!
        </p>
        <p className="text-white mb-4">
          What is screen printing - it is a printing technique in which an image
          is transferred to a surface using a special mesh stencil.
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
            Exposure - A special film with an image is placed on the stencil and
            this structure is exposed to a light source. The emulsion hardens in
            those places where light hits, and those parts where light does not
            hit the film remain soft.
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
            The image is more resistant to washing and much more pleasant to the
            touch compared to other types of printing.
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
      </div>
    </div>
  </div>
);

export default AboutPage;
