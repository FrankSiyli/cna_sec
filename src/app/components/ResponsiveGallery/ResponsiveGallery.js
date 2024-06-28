"use client";

import Image from "next/image";

const ResponsiveGallery = ({ images }) => {
  return (
    <div className="container mx-auto p-1 mt-40 mb-40">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <div
            key={index}
            className="w-full h-64 flex items-center justify-center relative shadow-md z-10"
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              fill
              sizes="(min-width: 640px) 33.3vw, (min-width: 1024px) 33.3vw, 100vw"
              style={{ objectFit: "cover", borderRadius: "5px" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResponsiveGallery;
