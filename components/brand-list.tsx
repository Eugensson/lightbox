import Link from "next/link";

export type Brand = {
  id: string;
  name: string;
  slug: string;
};

interface BrandListProps {
  title?: string;
  brands: Brand[];
}

export function BrandList({ brands, title }: BrandListProps) {
  return (
    <section className="py-10 max-w-300 mx-auto bg-card border-y border-border overflow-hidden flex flex-col gap-10">
      {title && <h2 className="text-4xl font-semibold text-center">{title}</h2>}
      <ul className="flex items-center gap-10 animate-scroll">
        {[...brands, ...brands].map(({ id, name, slug }, index) => (
          <li key={`${id}-${index}`}>
            <Link
              href={`/catalog?brand=${slug}`}
              className="text-2xl font-bold text-muted-foreground whitespace-nowrap tracking-wide"
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
