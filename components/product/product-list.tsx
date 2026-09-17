import { ProductCard } from "@/components/product/product-card";

const newestProductsList = [
  {
    id: "1",
    name: "Гліфовіт",
    slug: "glifovit-1",
    value: 20,
    price: 3410,
    category: "Гербіциди",
    imgSrc: "/fetilize.webp",
  },
  {
    id: "2",
    name: "Гліфовіт",
    slug: "glifovit-2",
    value: 20,
    price: 3410,
    category: "Гербіциди",
    imgSrc: "/fetilize.webp",
  },
  {
    id: "3",
    name: "Гліфовіт",
    slug: "glifovit-3",
    value: 20,
    price: 3410,
    category: "Гербіциди",
    imgSrc: "/fetilize.webp",
  },
  {
    id: "4",
    name: "Гліфовіт",
    slug: "glifovit-4",
    value: 20,
    price: 3410,
    category: "Гербіциди",
    imgSrc: "/fetilize.webp",
  },
  {
    id: "5",
    name: "Гліфовіт",
    slug: "glifovit-5",
    value: 20,
    price: 3410,
    category: "Гербіциди",
    imgSrc: "/fetilize.webp",
  },
  {
    id: "6",
    name: "Гліфовіт",
    slug: "glifovit-6",
    value: 20,
    price: 3410,
    category: "Гербіциди",
    imgSrc: "/fetilize.webp",
  },
  {
    id: "7",
    name: "Гліфовіт",
    slug: "glifovit-7",
    value: 20,
    price: 3410,
    category: "Гербіциди",
    imgSrc: "/fetilize.webp",
  },
  {
    id: "8",
    name: "Гліфовіт",
    slug: "glifovit-8",
    value: 20,
    price: 3410,
    category: "Гербіциди",
    imgSrc: "/fetilize.webp",
  },
  {
    id: "9",
    name: "Гліфовіт",
    slug: "glifovit-9",
    value: 20,
    price: 3410,
    category: "Гербіциди",
    imgSrc: "/fetilize.webp",
  },
  {
    id: "10",
    name: "Гліфовіт",
    slug: "glifovit-10",
    value: 20,
    price: 3410,
    category: "Гербіциди",
    imgSrc: "/fetilize.webp",
  },
];

export const ProductList = () => {
  return (
    <section className="space-y-10">
      <h2 className="text-4xl font-bold">Example of product list</h2>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {newestProductsList.map(
          ({ id, name, slug, imgSrc, value, price, category }) => (
            <li key={id}>
              <ProductCard
                name={name}
                slug={slug}
                imgSrc={imgSrc}
                value={value}
                price={price}
                category={category}
              />
            </li>
          ),
        )}
      </ul>
    </section>
  );
};
