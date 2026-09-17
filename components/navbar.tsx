import { Logo } from "@/components/logo";
import { Cart } from "@/components/cart";
import { Search } from "@/components/search";
import { Favorites } from "@/components/favorites";
import { Navigation } from "@/components/navigation";
import { MobileMenu } from "@/components/mobile-menu";

export function Navbar() {
  return (
    <header className="sticky top-0 z-60 py-2 bg-card/80 backdrop-blur-3xl">
      <nav className="px-4 xl:px-0 max-w-300 mx-auto flex items-center justify-between">
        <Logo />
        <Navigation className="hidden lg:flex" />
        <div className="flex items-baseline-last gap-8">
          <Search />
          <Favorites />
          <Cart />
          <div className="lg:hidden">
            <MobileMenu />
          </div>
        </div>
      </nav>
    </header>
  );
}
