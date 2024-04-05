import { siteInspirations, siteTechs } from "@/constants"
import { ArrowUpRight, ChevronRight } from "lucide-react"
import Link from "next/link"

const WebsitePage = () => {
  return (
    <section>
      <h1 className="text-center text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 md:text-5xl">
        About this website
      </h1>

      <h2 className="mb-4 mt-4 text-3xl font-semibold tracking-tight">
        <span className="text-primary">Technologies</span>
      </h2>

      <div className="ml-0 space-y-2 text-base sm:ml-6 sm:text-lg">
        {siteTechs.map((tech) => (
          <Link
            key={tech.description}
            href={tech.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-end space-x-4"
          >
            <ChevronRight className="transition group-hover:translate-x-2" />

            <span className="text-muted-foreground">{tech.name}: </span>
            <div className="flex items-end font-medium decoration-primary decoration-2 underline-offset-2 group-hover:underline">
              {tech.description}
              <ArrowUpRight
                className="ml-1 transition group-hover:-translate-y-1 group-hover:translate-x-2"
                size={20}
              />
            </div>
          </Link>
        ))}
      </div>

      <h2 className="my-4 text-3xl font-semibold tracking-tight">
        <span className="text-primary">Inspirations</span>
      </h2>

      <div className="ml-0 space-y-2 text-base sm:ml-6 sm:text-lg">
        {siteInspirations.map((website) => (
          <Link
            key={website.name}
            href={website.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-end space-x-4"
          >
            <ChevronRight className="transition group-hover:translate-x-2" />

            <div className="flex items-end decoration-primary decoration-2 underline-offset-2 transition group-hover:underline">
              <span className="font-medium">{website.name}</span>
              <ArrowUpRight
                className="ml-1 transition group-hover:-translate-y-1 group-hover:translate-x-2"
                size={20}
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default WebsitePage
