import { NextPage } from "next";
import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const HomePage: NextPage = () => (
  <div className="relative h-[100vh] w-full flex justify-center items-top shadow-">
    {/* Background with blur and dark overlay */}
    <div className="relative p-4 max-w-2xl m-4 mx-auto rounded-lg justify-center items-center text-white shadow-lg z-10 space-y-4">
      <p className="antialiased text-lg text-pretty">
        Welcome to our world of unique style and creativity! We are a creative
        community of independent artists who transform clothes into works of art
        using screen printing. If you want to stand out from the crowd with a
        unique print on clothes, want to express your individuality or make your
        brand memorable? We will be happy to help you!
      </p>
      <h3 className="text-2xl text-center font-bold mt-4 mb-4">
        Our services:
      </h3>
      <p className="text-2xl text-center mb-4">What we offer:</p>
      <div className="flex flex-row justify-center items-center mb-4">
        <Image src="/images/3.jpg" alt="logo" width={250} height={100} />
        <Image src="/images/5.jpg" alt="logo" width={250} height={100} />
        <Image src="/images/16.jpg" alt="logo" width={250} height={100} />
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
        Buildyourbrand, Malfini, Stedmann, B&E и многие другие.
      </p>
      <div className="border border-white"> </div>
      <h3 className="text-2xl">Why choose us:</h3>
      <ol>
        <li>
          Hand-printed: Each product is created by hand, with special attention
          to detail.
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
        Join us and become part of a community where art lives on your clothes!
      </p>
    </div>
  </div>
);

export default HomePage;
