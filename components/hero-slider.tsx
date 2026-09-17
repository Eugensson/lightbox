"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

export type HeroSliderItem = {
  id: string;
  imgSrc: string;
  alt: string;
  href: string;
};

interface HeroSliderProps {
  data: HeroSliderItem[];
}

export function HeroSlider({ data }: HeroSliderProps) {
  return (
    <Swiper
      effect="coverflow"
      centeredSlides
      slidesPerView={2.54}
      spaceBetween={30}
      loop
      grabCursor
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      coverflowEffect={{
        rotate: 0,
        stretch: -20,
        depth: 150,
        modifier: 2,
        slideShadows: false,
      }}
      watchSlidesProgress
      modules={[EffectCoverflow, Autoplay]}
      className="max-w-5xl"
    >
      {data.map(({ id, imgSrc, alt, href }) => (
        <SwiperSlide key={id}>
          <Link href={href} className="overflow-hidden rounded-2xl">
            <Image
              width={400}
              height={500}
              src={imgSrc}
              alt={alt}
              className="h-105 w-full object-cover"
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
