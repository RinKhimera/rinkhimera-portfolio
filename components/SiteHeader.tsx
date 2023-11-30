"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button, buttonVariants } from "@/components/ui/button"
import { navigationLinks } from "@/constants"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { Github, Mail } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { FaLinkedin } from "react-icons/fa"
import MobileMenu from "./MobileMenu"
import { ModeToggle } from "./theme-toggle"

const SiteHeader = () => {
  const pathname = usePathname()
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  const handleLinkHover = (index: string | null) => {
    setHoveredLink(index)
  }

  return (
    <header>
      <div className="flex items-center justify-between py-5">
        <Link
          href="/"
          className={buttonVariants({ variant: "ghost", size: "icon" })}
        >
          <Avatar>
            <AvatarImage src="/assets/images/avatar.webp" alt="@shadcn" />
            <AvatarFallback>SP</AvatarFallback>
          </Avatar>
        </Link>

        {/* Desktop Menu */}
        <nav className="rounded-full bg-white/90 px-3 font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 max-lg:hidden ">
          {navigationLinks.map((link) => (
            <Button variant="link" size="navLinks" key={link.href} asChild>
              <Link
                href={link.href}
                onMouseEnter={() => handleLinkHover(link.href)}
                onMouseLeave={() => setHoveredLink(null)}
                className={cn("transition", {
                  "text-primary": pathname === link.href,
                  "blur-[0.7px]":
                    hoveredLink !== null && hoveredLink !== link.href,
                  "text-gray-400":
                    hoveredLink !== null &&
                    hoveredLink !== link.href &&
                    link.href !== pathname,
                })}
              >
                {link.text}
              </Link>
            </Button>
          ))}
        </nav>

        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
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
            href="https://www.linkedin.com/in/samuel-pokam/"
          >
            <Mail />
          </Link>

          <ModeToggle />

          {/* Mobile Menu */}
          <MobileMenu />
        </motion.div>
      </div>
    </header>
  )
}

export default SiteHeader
