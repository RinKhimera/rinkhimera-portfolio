import Link from "next/link"

const links = [
  { href: "/about", text: "About" },
  { href: "/skills", text: "Skills" },
  { href: "/projects", text: "Projects" },
  { href: "/contact", text: "Contact" },
  { href: "/blog", text: "Blog" },
]

const getCurrentYear = () => {
  return new Date().getFullYear()
}

const SiteFooter = () => {
  const currentYear = getCurrentYear()

  return (
    <>
      <footer className="mt-20">
        <div className="border-t border-zinc-100 py-12 dark:border-zinc-700/40">
          <div className="">
            <div className="">
              <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                  {links.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="transition hover:text-primary"
                    >
                      {link.text}
                    </Link>
                  ))}
                </div>
                <p className="text-sm text-zinc-400 dark:text-zinc-500">
                  © {currentYear} Samuel Pokam. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default SiteFooter
