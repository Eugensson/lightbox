"use client";

import Link from "next/link";
import { Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";

import { ProductCard } from "@/components/product/product-card";

export type ProductSliderItem = {
  id: string;
  name: string;
  slug: string;
  value: number;
  price: number;
  category: string;
  imgSrc: string;
};

interface ProductSliderProps {
  title: string;
  description?: string;
  link?: string;
  data: ProductSliderItem[];
}

export function ProductSlider({ title, link, data }: ProductSliderProps) {
  return (
    <section className="mt-24 max-w-300 mx-auto">
      {link ? (
        <Link
          href={link}
          className="link-primary text-accent2 hover:text-primary"
        >
          <h2 className="text-lg lg:text-xl xl:text-4xl w-max">{title}</h2>
        </Link>
      ) : (
        <h2 className="text-lg lg:text-xl xl:text-4xl w-max">{title}</h2>
      )}
      <Swiper
        slidesPerView={1}
        spaceBetween={40}
        scrollbar={{ hide: false }}
        modules={[Scrollbar]}
        className="h-130"
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1440: {
            slidesPerView: 5,
          },
        }}
      >
        {data.map(({ id, name, slug, imgSrc, value, price, category }) => (
          <SwiperSlide key={id} className="select-none w-full">
            <ProductCard
              name={name}
              slug={slug}
              imgSrc={imgSrc}
              value={value}
              price={price}
              category={category}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
