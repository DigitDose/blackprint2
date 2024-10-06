"use client";
import { useCallback, useRef, useEffect, MouseEventHandler } from "react";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  onClose: () => void;
}

export default function Modal({ children, size = "md", onClose }: ModalProps) {
  const router = useRouter();
  const sizeClasses = {
    sm: "max-w-md",
    md: "max-w-2xl",
    lg: "max-w-4xl",
    xl: "max-w-6xl",
    full: "max-w-full",
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleMobileBottomClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose();
    console.log("Mobile bottom area clicked");
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={handleBackdropClick}
    >
      <div
        className={`bg-transparent p-6 rounded-lg ${sizeClasses[size]} w-full mx-auto max-w-4xl`}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-2xl hidden sm:block"
        >
          ×
        </button>
        <div className="flex flex-col items-center">{children}</div>
        <div
          className="mt-4 sm:hidden h-16 bg-gray-800 bg-opacity-50 cursor-pointer"
          onClick={handleMobileBottomClick}
        >
          <span className="flex justify-center items-center h-full text-white">
            Tap to close
          </span>
        </div>
      </div>
    </div>
  );
}
