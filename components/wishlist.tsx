"use client";

import Image from "next/image";
import { useState } from "react";
import { Heart, ShoppingBag, Trash2, TrendingDown } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

import { cn } from "@/lib/utils";
import { formatPrice } from "@/lib/format-price";

interface WishlistItem {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  inStock: boolean;
  priceDrop?: boolean;
}

interface WishlistProps {
  items?: WishlistItem[];
}

export function Wishlist({ items }: WishlistProps) {
  const [wishlistItems, setWishlistItems] = useState(items ?? []);

  const removeItem = (id: string) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="container max-w-300 mx-auto">
      {/* Header */}
      <div className="mb-8 flex items-baseline-last justify-between">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
            My Wishlist
          </h1>
          <p className="text-muted-foreground">
            {wishlistItems.length} items saved
          </p>
        </div>
        {wishlistItems.length > 0 && (
          <Button variant="outline">
            <ShoppingBag className="mr-2 size-4" />
            Add All to Cart
          </Button>
        )}
      </div>

      {/* Grid */}
      {wishlistItems.length > 0 ? (
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {wishlistItems.map((item) => (
            <li key={item.id}>
              <Card className="group gap-0 overflow-hidden p-0">
                <div className="relative">
                  <AspectRatio ratio={1} className="bg-muted">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className={cn(
                        "size-full object-cover",
                        !item.inStock && "opacity-50",
                      )}
                    />
                  </AspectRatio>

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {item.priceDrop && (
                      <Badge className="bg-emerald-600 hover:bg-emerald-600">
                        <TrendingDown className="mr-1 size-3" />
                        Price Drop
                      </Badge>
                    )}
                    {!item.inStock && (
                      <Badge variant="secondary">Out of Stock</Badge>
                    )}
                  </div>

                  {/* Remove Button */}
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute top-3 right-3 opacity-0 transition-opacity group-hover:opacity-100"
                    onClick={() => removeItem(item.id)}
                  >
                    <Trash2 className="size-4" />
                  </Button>
                </div>
                <CardContent className="p-4">
                  <h3 className="leading-tight font-medium">{item.name}</h3>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-lg font-semibold">
                      {formatPrice(item.price)}
                    </span>
                    {item.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {formatPrice(item.originalPrice)}
                      </span>
                    )}
                  </div>
                  <Button
                    className="mt-4 w-full"
                    disabled={!item.inStock}
                    variant={item.inStock ? "default" : "secondary"}
                  >
                    {item.inStock ? "Add to Cart" : "Notify When Available"}
                  </Button>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      ) : (
        <Card className="p-0">
          <CardContent className="flex flex-col items-center justify-center py-16 text-center">
            <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-muted">
              <Heart className="size-8 text-muted-foreground" />
            </div>
            <h2 className="text-xl font-semibold">Your wishlist is empty</h2>
            <p className="mt-2 max-w-sm text-muted-foreground">
              Save items you love by clicking the heart icon on any product
            </p>
            <Button className="mt-6">Continue Shopping</Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
