import { siteTechs } from "@/constants"
import { ArrowUpRight, ChevronRight } from "lucide-react"
import Link from "next/link"

const UsesPage = () => {
  return (
    <section>
      <h1 className="text-center text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 md:text-5xl">
        Regular basis uses
      </h1>

      <div>
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
      </div>

      <div>
        <h2 className="my-4 text-3xl font-semibold tracking-tight">
          <span className="text-primary">Typography</span>
        </h2>
      </div>
    </section>
  )
}

export default UsesPage
