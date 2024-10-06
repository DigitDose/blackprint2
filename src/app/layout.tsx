import React from "react";
import Navbar from "../components/Navbar";
import "./globals.css";
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
            <video
              src="/videos/input.mp4"
              autoPlay
              loop
              muted
              playsInline
              /* zwolnij troche nagranie "slow motion" */
              className="relative z-10 w-full max-w-[500px] h-auto"
            >
              Your browser does not support the video tag.
            </video>
            <Navbar />
            <div className="inset-0 h-full bg-transparent opacity-90" />
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
