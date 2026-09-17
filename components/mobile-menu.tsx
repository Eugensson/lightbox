"use client";

import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu size={20} className="opacity-60" />
      </SheetTrigger>
      <SheetContent side="top" showCloseButton>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>This action cannot be undone.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
