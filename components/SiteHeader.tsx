"use client"

import { MotionDiv } from "@/components/MotionFragment"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { buttonVariants } from "@/components/ui/button"
import { navigationLinks } from "@/constants"
import { cn } from "@/lib/utils"
import { Github, Mail } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { FaLinkedin } from "react-icons/fa"
import MobileMenu from "./MobileMenu"
import { ModeToggle } from "./theme-toggle"

const SiteHeader = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const pathname = usePathname()

  return (
    <header>
      <div className="flex items-center justify-between py-5">
        <Link
          href="/"
          className={buttonVariants({ variant: "ghost", size: "empty" })}
        >
          <Avatar>
            <AvatarImage src="/assets/images/avatar.jpg" alt="Samuel logo" />
            <AvatarFallback>SP</AvatarFallback>
          </Avatar>
        </Link>

        {/* Desktop Menu */}
        <nav className="space-x-1 rounded-3xl border border-muted px-3 py-1.5 font-medium max-lg:hidden">
          {navigationLinks.map((link) => {
            const isActive = pathname.startsWith(link.href)
            return (
              <Link
                className={cn(
                  "relative transform-gpu px-2 py-1 transition-all",
                  {
                    "blur-sm":
                      hoveredLink !== null && hoveredLink !== link.href,
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
                    layoutId="active"
                    className="absolute inset-0 rounded-3xl bg-primary/40 backdrop-blur-sm dark:bg-primary/60"
                    transition={{ type: "spring", duration: "0.6" }}
                  />
                )}
                <span className="relative z-10">{link.text}</span>
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center">
          <Link
            className={buttonVariants({ variant: "ghost", size: "icon" })}
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/RinKhimera"
          >
            <Github />
          </Link>

          <Link
            className={buttonVariants({ variant: "ghost", size: "icon" })}
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/samuel-pokam/"
          >
            <FaLinkedin size={24} />
          </Link>

          <Link
            className={buttonVariants({ variant: "ghost", size: "icon" })}
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:dixiades@gmail.com"
          >
            <Mail />
          </Link>

          <ModeToggle />

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}

export default SiteHeader
