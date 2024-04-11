"use client"

import { MobileMenu } from "@/components/shared/MobileMenu"
import { MotionDiv } from "@/components/shared/MotionFragment"
import { HeaderToggle } from "@/components/shared/theme-toggle"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { buttonVariants } from "@/components/ui/button"
import { navigationLinks } from "@/constants"
import { cn } from "@/lib/utils"
import { Github, Mail } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { FaLinkedin } from "react-icons/fa"

export const SiteHeader = () => {
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
            aria-label="GitHub"
          >
            <Github />
          </Link>

          <Link
            className={buttonVariants({ variant: "ghost", size: "icon" })}
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/samuel-pokam/"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </Link>

          <Link
            className={buttonVariants({ variant: "ghost", size: "icon" })}
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/rin_khimera"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0,0,256,256"
              className="hidden dark:block"
            >
              <g fill="#ffffff">
                <g transform="scale(8,8)">
                  <path d="M4.01758,4l9.07422,13.60938l-8.75586,10.39063h2.61523l7.29492,-8.65625l5.77148,8.65625h0.53516h7.46289l-9.30273,-13.95703l8.46289,-10.04297h-2.61523l-7.00195,8.31055l-5.54102,-8.31055zM7.75586,6h3.19141l13.33203,20h-3.19141z"></path>
                </g>
              </g>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 50 50"
              className="dark:hidden"
            >
              <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
            </svg>
          </Link>

          <Link
            className={buttonVariants({ variant: "ghost", size: "icon" })}
            href="mailto:dixiades@gmail.com"
            aria-label="Email to me"
          >
            <Mail />
          </Link>

          <HeaderToggle />

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
