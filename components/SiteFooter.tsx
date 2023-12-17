import { navigationLinks } from "@/constants"
import Link from "next/link"
import HoveredCard from "./HoveredCard"
import { Button } from "./ui/button"

const SiteFooter = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear()
  }
  const currentYear = getCurrentYear()

  return (
    <footer className="mt-20">
      <div className="border-t border-zinc-100 py-10 dark:border-zinc-700/40">
        <div className="flex flex-col items-center justify-between gap-3">
          <div>
            {navigationLinks.map((link, index) => (
              <Button
                variant="link"
                key={index}
                className="text-lg transition hover:text-primary"
                asChild
              >
                <Link href={link.href}>{link.text}</Link>
              </Button>
            ))}
          </div>
          <p className="text-muted-foreground">
            © {currentYear} <HoveredCard />{" "}
            <span className="text-primary">|</span> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
