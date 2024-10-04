import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => (
  <div className=" relative z-10 mb-5 shadow-lg text-white">
    <ul className="flex gap-4 justify-center" style={{ listStyleType: "none" }}>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/faq">FAQ</Link>
      </li>
      <li>
        <Link href="/pricing">Pricing</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
      <li>
        <Link href="/gallery">Gallery</Link>
      </li>
    </ul>
  </div>
);

export default Navbar;
