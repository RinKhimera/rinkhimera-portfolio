"use client"

import { MotionDiv } from "@/components/MotionFragment"
import { miscLinks } from "@/constants"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { buttonVariants } from "../ui/button"

export const MiscNav = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const pathname = usePathname()

  return (
    <nav className="mt-8 space-x-5 rounded-3xl px-3 py-1.5 font-medium">
      {miscLinks.map((link) => {
        const isActive = pathname.startsWith(link.href)
        return (
          <Link
            className={cn(
              "relative transform-gpu px-2 py-1 transition-all",
              {
                "blur-sm": hoveredLink !== null && hoveredLink !== link.href,
                "text-gray-500":
                  hoveredLink !== null &&
                  hoveredLink !== link.href &&
                  !isActive,
              },
              buttonVariants({
                variant: "ghostLink",
                size: "navLinks",
              }),
            )}
            key={link.href}
            href={link.href}
            onMouseEnter={() => setHoveredLink(link.href)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            {isActive && (
              <MotionDiv
                layoutId="misc"
                className="absolute inset-0 rounded-3xl bg-primary/40 backdrop-blur-sm dark:bg-primary/60"
                transition={{ type: "spring", duration: "0.6" }}
              />
            )}
            <span className="relative z-10">{link.text}</span>
          </Link>
        )
      })}
    </nav>
  )
}
