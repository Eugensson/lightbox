import {
  Eye,
  Heart,
  LucideIcon,
  Plus,
  Scale,
  ShoppingCart,
} from "lucide-react";
import Image from "next/image";

import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

type ProductAction = {
  icon: LucideIcon;
  title: string;
  translate: string;
  delay: string;
};

const actions: ProductAction[] = [
  {
    icon: Heart,
    title: "В обране",
    translate: "group-hover:-translate-y-[100px]",
    delay: "delay-100",
  },
  {
    icon: Scale,
    title: "Порівняти",
    translate: "group-hover:-translate-y-[150px]",
    delay: "delay-150",
  },
  {
    icon: ShoppingCart,
    title: "Купити",
    translate: "group-hover:-translate-y-[200px]",
    delay: "delay-200",
  },
];

interface ProductCardProps {
  name: string;
  slug: string;
  imgSrc: string;
  value: number;
  price: number;
  category: string;
}

export const ProductCard = ({
  name,
  slug,
  imgSrc,
  value,
  price,
  category,
}: ProductCardProps) => {
  return (
    <article className="group">
      <div className="relative h-90 flex items-center justify-center bg-neutral-50">
        <Image src={imgSrc} alt={name} width={240} height={240} quality={100} />
        <Button
          size="icon"
          className="absolute left-0 bottom-4 z-10 size-10.5 bg-black/50 text-white transition-colors duration-300 group-hover:bg-blue-500 hover:bg-blue-500 group-hover:text-white [&_svg:not([class*='size-'])]:size-6"
        >
          <Plus className="transition-transform duration-300 group-hover:rotate-135" />
        </Button>
        <Link
          href={`/catalog?product=${slug}`}
          className={buttonVariants({
            size: "icon",
            variant: "outline",
            className:
              "absolute left-0 bottom-4 size-10.5 bg-white text-black opacity-0 scale-75 transition-all duration-300 will-change-transform group-hover:-translate-y-12.5 delay-75 group-hover:opacity-100 group-hover:scale-100 hover:bg-blue-500 hover:text-white",
          })}
          title="Детально"
          aria-label="Детально"
        >
          <Eye />
        </Link>
        {actions.map(({ icon: Icon, title, translate, delay }) => (
          <Button
            key={title}
            size="icon"
            title={title}
            className={`absolute left-0 bottom-4 size-10.5 bg-white text-black opacity-0 scale-75 transition-all duration-300 will-change-transform ${translate} ${delay} group-hover:opacity-100 group-hover:scale-100 hover:bg-blue-500 hover:text-white`}
          >
            <Icon />
          </Button>
        ))}
      </div>
      <div className="pt-4 w-full flex flex-col gap-4">
        <div>
          <h3 className="mb-2 text-xl font-semibold">
            {name}&nbsp;
            <span className="text-neutral-600">{value} л</span>
          </h3>
          <p className="text-sm text-neutral-600">{category}</p>
        </div>
        <p className="text-lg font-semibold">{price}&nbsp;₴</p>
      </div>
    </article>
  );
};
