"use client";

import Image from "next/image";
import { useState } from "react";
import { ZoomIn } from "lucide-react";

import slides from "@/components/light-box/slides";
import { LightBox } from "@/components/light-box/light-box";

export function ProductGallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section className="space-y-10">
      <h2 className="text-4xl font-bold">
        Example of product gallery with lightbox
      </h2>
      <ul className="grid grid-cols-4 gap-4">
        {slides.map((slide, i) => (
          <li key={i} className="relative">
            <Image
              src={slide.src}
              alt=""
              width={400}
              height={400}
              className="cursor-pointer rounded object-cover aspect-square"
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center size-14 bg-black/40 rounded pointer-events-none">
              <ZoomIn size={40} className="text-white" />
            </div>
          </li>
        ))}
      </ul>

      <LightBox open={open} setOpen={setOpen} index={index} slides={slides} />
    </section>
  );
}
