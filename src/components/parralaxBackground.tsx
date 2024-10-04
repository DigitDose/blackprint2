"use client";
import React, { useEffect, useState } from "react";

const ParallaxBackground = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed inset-0 opacity-35  bg-hero-pattern bg-cover bg-center filter blur-sm brightness-50 z-[-1]"
      style={{ transform: `translateY(${offsetY * 0.02}px)` }}
    ></div>
  );
};

export default ParallaxBackground;
