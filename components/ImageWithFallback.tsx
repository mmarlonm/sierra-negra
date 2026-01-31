"use client";

import React, { useState, useEffect } from "react";
import Image, { ImageProps } from "next/image";

interface ImageWithFallbackProps extends ImageProps {
  fallbackSrc?: string;
  fallbackText?: string;
}

export default function ImageWithFallback({
  src,
  alt,
  fallbackSrc,
  fallbackText,
  ...props
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
    setError(false);
  }, [src]);

  if (error || !imgSrc) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full bg-gray-100 text-gray-400">
        <svg className="w-12 h-12 mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="text-xs font-medium uppercase tracking-wider opacity-60 text-center px-4">
          {fallbackText || alt || "Imagen no disponible"}
        </span>
      </div>
    );
  }

  return (
    <Image
      {...props}
      alt={alt}
      src={imgSrc}
      onError={() => setError(true)}
    />
  );
}
