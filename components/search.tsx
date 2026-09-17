import { SearchIcon } from "lucide-react";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function Search() {
  return (
    <Drawer direction="top">
      <DrawerTrigger className="cursor-pointer">
        <SearchIcon size={20} className="opacity-60" />
      </DrawerTrigger>
      <DrawerContent className="pt-20">
        <div className="w-full max-w-304 mx-auto pb-20">
          <DrawerHeader>
            <DrawerTitle className="sr-only" />
            <DrawerDescription className="sr-only" />
          </DrawerHeader>
          Content
        </div>
      </DrawerContent>
    </Drawer>
  );
}
