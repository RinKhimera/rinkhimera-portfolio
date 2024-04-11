import { FooterToggle } from "@/components/shared/theme-toggle"
import { footerLinks } from "@/constants"
import Link from "next/link"

export const SiteFooter = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear()
  }
  const currentYear = getCurrentYear()

  const resourceLinks = footerLinks.find((type) => type.name === "Resources")
  const moreLinks = footerLinks.find((type) => type.name === "More")
  const socialLinks = footerLinks.find((type) => type.name === "Socials")

  return (
    <footer className="mt-20 flex flex-col gap-10 border-t border-zinc-100 py-10 dark:border-zinc-700/40 lg:flex-row lg:justify-between">
      <div className="flex flex-wrap gap-x-6 gap-y-8">
        <div className="w-[150px] space-y-5">
          <h2 className="text-xl font-semibold">Resources</h2>
          <div className="flex flex-col space-y-3 text-muted-foreground">
            {resourceLinks?.links.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                className="transition hover:text-zinc-800 hover:dark:text-zinc-100"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="w-[150px] space-y-5">
          <h2 className="text-xl font-semibold">More</h2>
          <div className="flex flex-col space-y-3 text-muted-foreground">
            {moreLinks?.links.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                className="transition hover:text-zinc-800 hover:dark:text-zinc-100"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="w-[150px] space-y-5">
          <h2 className="text-xl font-semibold">Socials</h2>
          <div className="flex flex-col space-y-3 text-muted-foreground">
            {socialLinks?.links.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-zinc-800 hover:dark:text-zinc-100"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 lg:items-end lg:text-right">
        <p className="text-muted-foreground">
          © {currentYear} Samuel Pokam | All rights reserved.
        </p>

        <FooterToggle />
      </div>
    </footer>
  )
}
