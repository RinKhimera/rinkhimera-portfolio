import { desktopUses, laptopUses, softwareUses } from "@/constants"
import {
  ArrowUpRight,
  ChevronRight,
  CodeXml,
  Computer,
  LaptopMinimal,
} from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Samuel Pokam | Uses",
  description: "Software engineer, web developer, and TypeScript enthusiast.",
}

const UsesPage = () => {
  return (
    <section>
      <h1 className="text-center text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 md:text-5xl">
        Regular basis uses
      </h1>

      <div className="my-8">
        <h2 className="mb-3 flex items-center text-3xl font-semibold tracking-tight">
          <span className="text-primary">Desktop</span>
          <Computer className="ml-3 shrink-0" size={28} />
        </h2>

        <div className="ml-0 space-y-2 text-base sm:ml-6 sm:text-lg">
          {desktopUses.map((tech) => (
            <div key={tech.description} className="group flex space-x-4">
              <ChevronRight className="shrink-0 transition group-hover:translate-x-2 sm:mt-1" />

              <span className="text-muted-foreground">{tech.name}: </span>
              <div className="font-medium decoration-primary decoration-2 underline-offset-2 group-hover:underline">
                {tech.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="mb-3 flex items-center text-3xl font-semibold tracking-tight">
          <span className="text-primary">Laptop</span>
          <LaptopMinimal className="ml-3 shrink-0" size={28} />
        </h2>

        <div className="ml-0 space-y-2 text-base sm:ml-6 sm:text-lg">
          {laptopUses.map((tech) => (
            <div key={tech.description} className="group flex space-x-4">
              <ChevronRight className="shrink-0 transition group-hover:translate-x-2 sm:mt-1" />

              <span className="text-muted-foreground">{tech.name}: </span>
              <div className="font-medium decoration-primary decoration-2 underline-offset-2 group-hover:underline">
                {tech.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="mb-3 flex items-center text-3xl font-semibold tracking-tight">
          <span className="text-primary">Software</span>
          <CodeXml className="ml-3 shrink-0" size={28} />
        </h2>

        <div className="ml-0 space-y-2 text-base sm:ml-6 sm:text-lg">
          {softwareUses.map((tech) => (
            <Link
              key={tech.description}
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex space-x-4"
            >
              <ChevronRight className="shrink-0 transition group-hover:translate-x-2 sm:mt-1" />

              <span className="text-muted-foreground">{tech.name}: </span>
              <div className="flex items-end font-medium decoration-primary decoration-2 underline-offset-2 group-hover:underline">
                {tech.description}
                <ArrowUpRight
                  className="ml-1 shrink-0 transition group-hover:-translate-y-1 group-hover:translate-x-2"
                  size={20}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UsesPage
