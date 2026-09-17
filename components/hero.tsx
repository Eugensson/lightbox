import Link from "next/link";

import { GripIcon } from "@/components/ui/grip";
import { HeroSlider } from "@/components/hero-slider";
import { buttonVariants } from "@/components/ui/button";

const data = [
  {
    id: "1",
    imgSrc: "https://swiperjs.com/demos/images/nature-1.jpg",
    alt: "Slide 1",
    href: "/",
  },
  {
    id: "2",
    imgSrc: "https://swiperjs.com/demos/images/nature-2.jpg",
    alt: "Slide 2",
    href: "/",
  },
  {
    id: "3",
    imgSrc: "https://swiperjs.com/demos/images/nature-3.jpg",
    alt: "Slide 3",
    href: "/",
  },
  {
    id: "4",
    imgSrc: "https://swiperjs.com/demos/images/nature-4.jpg",
    alt: "Slide 4",
    href: "/",
  },
  {
    id: "5",
    imgSrc: "https://swiperjs.com/demos/images/nature-5.jpg",
    alt: "Slide 5",
    href: "/",
  },
];

export function Hero() {
  return (
    <section className="py-10">
      <div className="mb-10 max-w-200 mx-auto space-y-10 text-center">
        <h1 className="text-6xl font-black capitalize tracking-wider leading-normal">
          Example hero title
        </h1>
        <p className="text-lg text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          nostrum harum. Vitae illo doloribus illum iure fuga, dignissimos fugit
          atque odio! Maxime unde qui delectus quod. Quisquam facilis maxime
          adipisci.
        </p>
        <Link
          href="/catalog"
          className={buttonVariants({
            size: "lg",
            className:
              "[&_svg:not([class*='size-'])]:size-6 py-6 px-10 text-lg!",
          })}
        >
          <GripIcon />
          Каталог
        </Link>
      </div>
      <HeroSlider data={data} />
    </section>
  );
}
