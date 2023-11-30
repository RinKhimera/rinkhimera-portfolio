import Link from "next/link"
import { Button } from "./ui/button"

const links = [
  { href: "/about", text: "About" },
  { href: "/skills", text: "Skills" },
  { href: "/projects", text: "Projects" },
  { href: "/contact", text: "Contact" },
  { href: "/blog", text: "Blog" },
]

const SiteFooter = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear()
  }
  const currentYear = getCurrentYear()

  return (
    <>
      <footer className="mt-20">
        <div className="border-t border-zinc-100 py-12 dark:border-zinc-700/40">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              {links.map((link, index) => (
                <Button variant="link" key={index} asChild>
                  <Link
                    href={link.href}
                    className="transition hover:text-primary"
                  >
                    {link.text}
                  </Link>
                </Button>
              ))}
            </div>
            <p className="text-sm text-zinc-400 dark:text-zinc-500">
              © {currentYear} Samuel Pokam. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default SiteFooter
