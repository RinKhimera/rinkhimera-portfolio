"use client"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { mobileLinks } from "@/constants"
import { useMediaQuery } from "@/hooks/use-media-query"
import { MoreHorizontal } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const MobileMenu = () => {
  const pathname = usePathname()

  const isDesktop = useMediaQuery("(min-width: 1024px)")

  if (isDesktop) {
    return null
  }

  return (
    <div className="lg:hidden">
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="ghost" size="icon">
            <MoreHorizontal size={28} />
          </Button>
        </DrawerTrigger>

        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Navigation Menu</DrawerTitle>
          </DrawerHeader>

          <div className="space-y-6 p-4 text-center">
            {mobileLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (pathname !== "/" && pathname.startsWith(link.href + "/"))

              return (
                <DrawerClose key={link.text} asChild>
                  <Link
                    href={link.href}
                    className={`flex items-center justify-center gap-x-2 text-lg font-semibold text-muted-foreground ${
                      isActive &&
                      "text-current underline decoration-primary decoration-4 underline-offset-4"
                    }`}
                  >
                    {link.icon}
                    {link.text}
                  </Link>
                </DrawerClose>
              )
            })}
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
