import { Wishlist } from "@/components/wishlist";

interface WishlistItem {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  category: string;
  inStock: boolean;
  priceDrop: boolean;
}

const DEFAULT_ITEMS: WishlistItem[] = [
  {
    id: "1",
    name: "Wireless Noise-Canceling Headphones",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/electronics/Modern-White-Headphones-1.png",
    category: "Electronics",
    price: 249.99,
    originalPrice: 299.99,
    inStock: true,
    priceDrop: true,
  },
  {
    id: "2",
    name: "Premium Leather Crossbody Bag",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/maroon-leather-handbag.png",
    category: "Clothing",
    price: 189.0,
    inStock: true,
    priceDrop: false,
  },
  {
    id: "3",
    name: "Classic Wool Blend Coat",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/Young-Man-in-White-Hoodie-1.png",
    category: "Clothing",
    price: 329.0,
    inStock: false,
    priceDrop: false,
  },
  {
    id: "4",
    name: "Gold Hoop Earrings",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/accessories/Elegant-Gold-Earrings-1.png",
    category: "Accessories",
    price: 79.0,
    originalPrice: 99.0,
    inStock: true,
    priceDrop: true,
  },
  {
    id: "5",
    name: "Oversized Cotton Hoodie",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/black-hoodie-against-light-background.png",
    category: "Clothing",
    price: 65.0,
    inStock: true,
    priceDrop: false,
  },
  {
    id: "6",
    name: "Minimalist Watch",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/accessories/Elegant-Watch-on-Womans-Wrist-1.png",
    category: "Accessories",
    price: 195.0,
    inStock: true,
    priceDrop: false,
  },
];

export default function WishlistPage() {
  return (
    <section className="py-16 md:py-24">
      <Wishlist items={DEFAULT_ITEMS} />
    </section>
  );
}
