import Image from "next/image";
import Link from "next/link";

const data = [
  {
    id: "1",
    name: "Посівний матеріал",
    slug: "seed",
    imgSrc: "/category-seed.jpg",
    href: "/",
  },
  {
    id: "2",
    name: "Добрива",
    slug: "fertilizer",
    imgSrc: "/category-fertilizer.jpg",
  },
  {
    id: "3",
    name: "Засоби захисту рослин",
    slug: "protector",
    imgSrc: "/category-herbicide.jpg",
  },
];

export function Categories() {
  return (
    <section className="py-10 max-w-300 mx-auto space-y-10">
      <h2 className="text-4xl font-semibold text-center">
        Продукція представлена в категоріях
      </h2>
      <ul className="grid md:grid-cols-3 gap-4">
        {data.map(({ id, name, slug, imgSrc }) => (
          <li key={id} className="relative group overflow-hidden">
            <Link href={`/catalog?category=${slug}`}>
              <Image
                src={imgSrc}
                width={300}
                height={300}
                alt={name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
              />
              <div className="absolute top-0 left-0 inset-0 bg-black/30" />
              <h3 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 w-full text-center text-5xl text-white font-bold">
                {name}
              </h3>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
