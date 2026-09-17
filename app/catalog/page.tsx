import { Gallery } from "@/components/3d-gallery";
import { ImageGallery } from "@/components/image-gallery";
import { ProductList } from "@/components/product/product-list";
import { ProductGallery } from "@/components/product/product-gallery";

export default function CatalogPage() {
  return (
    <div className="w-full pb-10 max-w-300 mx-auto space-y-10">
      <Gallery />
      <ProductGallery />
      <ProductList />
      <ImageGallery />
    </div>
  );
}
