"use client"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { navigationLinks } from "@/constants"
import { MoreHorizontal } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "../ui/button"
import { Separator } from "../ui/separator"

export const MobileMenu = () => {
  const pathname = usePathname()

  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <MoreHorizontal size={28} />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Navigation Menu</SheetTitle>
          </SheetHeader>

          <Separator className="my-10" />

          <div className="space-y-6">
            {navigationLinks.map((link) => {
              const isActive = pathname === link.href

              return (
                <SheetClose key={link.text} asChild>
                  <Link
                    href={link.href}
                    className={`block text-lg font-semibold ${
                      isActive &&
                      "underline decoration-primary decoration-4 underline-offset-4"
                    }`}
                  >
                    {link.text}
                  </Link>
                </SheetClose>
              )
            })}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
