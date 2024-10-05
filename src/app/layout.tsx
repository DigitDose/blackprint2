import React from "react";
import Navbar from "../components/Navbar";
import "./globals.css";
import Image from "next/image";
import dynamic from "next/dynamic";
import Footer from "components/Footer";
import ParallaxBackground from "../components/parralaxBackground";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen">
          {/* Content */}

          <div className="relative z-10 flex flex-col items-center">
            {/* Header content */}
            <Image
              src="/images/image_no_bg.png"
              alt="logo"
              width={500}
              height={200}
              className="relative z-10"
            />
            <Navbar />
            <div className=" inset-0 h-full bg-transparent opacity-90" />
            {/* Main content */}
            <main className="flex flex-col items-center w-full pt-20">
              {children}
            </main>
            {/* Footer content */}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
