import { Heart, ShoppingBag, X } from "lucide-react";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { formatPrice } from "@/lib/format-price";
import { formatCreatedAt } from "@/lib/format-created-at";
import Image from "next/image";

interface WishlistItem {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice: number;
  category: string;
  inStock: boolean;
  priceDrop: boolean;
  createdAt: Date;
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
    createdAt: new Date(),
  },
  {
    id: "2",
    name: "Premium Leather Crossbody Bag",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/maroon-leather-handbag.png",
    category: "Clothing",
    price: 189.0,
    originalPrice: 189.0,
    inStock: true,
    priceDrop: false,
    createdAt: new Date(),
  },
  {
    id: "3",
    name: "Classic Wool Blend Coat",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/Young-Man-in-White-Hoodie-1.png",
    category: "Clothing",
    price: 329.0,
    originalPrice: 329.0,
    inStock: false,
    priceDrop: false,
    createdAt: new Date(),
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
    createdAt: new Date(),
  },
  {
    id: "5",
    name: "Oversized Cotton Hoodie",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/clothes/black-hoodie-against-light-background.png",
    category: "Clothing",
    price: 65.0,
    originalPrice: 65.0,
    inStock: true,
    priceDrop: false,
    createdAt: new Date(),
  },
  {
    id: "6",
    name: "Minimalist Watch",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/accessories/Elegant-Watch-on-Womans-Wrist-1.png",
    category: "Accessories",
    price: 195.0,
    originalPrice: 195.0,
    inStock: true,
    priceDrop: false,
    createdAt: new Date(),
  },
];

export function Favorites() {
  return (
    <Drawer direction="top">
      <DrawerTrigger className="cursor-pointer">
        <Heart size={20} className="opacity-60" />
      </DrawerTrigger>
      <DrawerContent className="pt-20">
        <div className="w-full max-w-300 mx-auto pb-20">
          <div className="flex items-baseline-last justify-between">
            <DrawerHeader className="px-0">
              <DrawerTitle className="text-left text-2xl font-bold">
                Saved Items
              </DrawerTitle>
              <DrawerDescription className="text-left">
                5 items in your wishlist
              </DrawerDescription>
            </DrawerHeader>
          </div>
          <ul>
            {DEFAULT_ITEMS.length > 0 ? (
              <ScrollArea className="h-90 pr-4">
                {DEFAULT_ITEMS.map((item) => (
                  <li key={item.id}>
                    <Card className="py-4 flex flex-row gap-1">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={75}
                        height={75}
                        className="w-30 h-auto rounded aspect-square object-cover"
                      />
                      <div className="w-full space-y-4">
                        <CardHeader className="gap-0.5">
                          <CardTitle className="flex gap-x-1">
                            <h2 className="text-lg">{item.name}</h2>&nbsp;
                            {item.inStock && (
                              <Badge
                                variant="secondary"
                                className="rounded-none"
                              >
                                Out of Stock
                              </Badge>
                            )}
                          </CardTitle>
                          <CardDescription className="text-base">
                            {item.category}
                          </CardDescription>
                          <CardAction>
                            <Button size="icon-xs" variant="ghost">
                              <X />
                            </Button>
                          </CardAction>
                        </CardHeader>
                        <CardContent className="text-xl">
                          <span className="font-bold">
                            {formatPrice(item.price)}
                          </span>
                          &nbsp;
                          <span className="text-muted-foreground line-through">
                            {formatPrice(item.originalPrice)}
                          </span>
                        </CardContent>
                        <CardFooter className="justify-between">
                          <span className="text-xs text-muted-foreground">
                            {formatCreatedAt(item.createdAt)}
                          </span>
                          <Button size="sm">
                            <ShoppingBag />
                            Add to Cart
                          </Button>
                        </CardFooter>
                      </div>
                    </Card>
                  </li>
                ))}
              </ScrollArea>
            ) : (
              <Card className="p-0">
                <CardContent className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-muted">
                    <Heart className="size-8 text-muted-foreground" />
                  </div>
                  <h2 className="text-xl font-semibold">
                    Your wishlist is empty
                  </h2>
                  <p className="mt-2 max-w-sm text-muted-foreground">
                    Save items you love by clicking the heart icon on any
                    product
                  </p>
                  <Button className="mt-6">Continue Shopping</Button>
                </CardContent>
              </Card>
            )}
          </ul>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
