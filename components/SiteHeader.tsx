"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { buttonVariants } from "@/components/ui/button"
import AvatarLogo from "@/public/assets/images/avatar.webp"
import { Github, Linkedin } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ModeToggle } from "./theme-toggle"

const navigationLinks = [
  { href: "/about", text: "About" },
  { href: "/skills", text: "Skills" },
  { href: "/projects", text: "Projects" },
  { href: "/contact", text: "Contact" },
  { href: "/blog", text: "Blog" },
]

const SiteHeader = () => {
  const pathname = usePathname()

  return (
    <header>
      <div className="flex items-center justify-between py-5">
        <Link href="/">
          <Avatar>
            <AvatarImage src="/assets/images/avatar.webp" alt="@shadcn" />
            <AvatarFallback>SP</AvatarFallback>
          </Avatar>
        </Link>

        <nav className="hidden space-x-6 rounded-full bg-white/90 px-6 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 md:flex">
          {navigationLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`transition hover:text-primary ${
                pathname === link.href && "text-primary"
              }`}
            >
              {link.text}
            </Link>
          ))}
        </nav>

        <div className="flex items-center">
          <Link
            className={buttonVariants({ variant: "ghost", size: "icon" })}
            href={"/"}
          >
            <Github />
          </Link>
          <Link
            className={buttonVariants({ variant: "ghost", size: "icon" })}
            href={"/"}
          >
            <Linkedin />
          </Link>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

export default SiteHeader
