"use client";

import Image from "next/image";

const galleryList = [
  { label: "1", src: "/1.jpg", alt: "Gallery image 1" },
  { label: "2", src: "/2.jpg", alt: "Gallery image 2" },
  { label: "3", src: "/3.jpg", alt: "Gallery image 3" },
  { label: "4", src: "/4.jpg", alt: "Gallery image 4" },
  { label: "5", src: "/5.jpg", alt: "Gallery image 5" },
  { label: "6", src: "/6.jpg", alt: "Gallery image 6" },
  { label: "7", src: "/7.jpg", alt: "Gallery image 7" },
];

export function Gallery() {
  return (
    <section className="max-w-360 mx-auto text-center pt-10 pb-80 space-y-10">
      <h2 className="text-4xl font-bold">Example of 3d gallery effect</h2>
      <ul className="gallery">
        {galleryList.map(({ label, src, alt }) => (
          <li key={label} className="galleryPanel">
            <Image
              width={300}
              height={400}
              src={src}
              alt={alt}
              className="block w-full h-full object-cover rounded"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
