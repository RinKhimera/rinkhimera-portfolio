import { siteInspirations, siteTechs } from "@/constants"
import {
  ArrowUpRight,
  Blocks,
  CaseSensitive,
  ChevronRight,
  Lightbulb,
  Sparkles,
} from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Samuel Pokam | Website",
  description: "Software engineer, web developer, and TypeScript enthusiast.",
}

const WebsitePage = () => {
  return (
    <section>
      <h1 className="text-center text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 md:text-5xl">
        About this website
      </h1>

      <div className="mt-8">
        <h2 className="mb-3 flex items-center text-3xl font-semibold tracking-tight">
          <span className="text-primary">Technologies</span>
          <Blocks className="ml-3 shrink-0" size={28} />
        </h2>

        <div className="ml-0 space-y-2 text-base sm:ml-6 sm:text-lg">
          {siteTechs.map((tech) => (
            <Link
              key={tech.description}
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex space-x-4"
            >
              <ChevronRight className="shrink-0 transition group-hover:translate-x-2 sm:mt-[2px]" />

              <span className="text-muted-foreground">{tech.name}: </span>
              <div className="flex items-end font-medium decoration-primary decoration-2 underline-offset-2 group-hover:underline">
                {tech.description}
                <ArrowUpRight
                  className="ml-1 shrink-0 transition  group-hover:-translate-y-1 group-hover:translate-x-2"
                  size={20}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="my-8">
        <h2 className="mb-3 flex items-center text-3xl font-semibold tracking-tight">
          <span className="text-primary">Inspirations</span>
          <Lightbulb className="ml-3 shrink-0" size={28} />
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
              <ChevronRight className="shrink-0 transition group-hover:translate-x-2" />

              <div className="flex items-end decoration-primary decoration-2 underline-offset-2 transition group-hover:underline">
                <span className="font-medium">{website.name}</span>
                <ArrowUpRight
                  className="ml-1 shrink-0 transition group-hover:-translate-y-1 group-hover:translate-x-2"
                  size={20}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="my-1 flex items-end text-3xl font-semibold tracking-tight">
          <span className="text-primary">Typography</span>
          <CaseSensitive className="ml-3 shrink-0" size={32} />
        </h2>

        <div className="px-[1px] leading-loose text-muted-foreground md:px-8">
          For the typography of the entire website, I&apos;m using{" "}
          <div className="group mr-[2px] inline-flex">
            <Link
              href={"https://fonts.google.com/specimen/Open+Sans"}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-end space-x-4"
            >
              <div className="flex text-zinc-800 decoration-primary decoration-2 underline-offset-2 transition group-hover:underline dark:text-zinc-100">
                <span className="font-medium">Open Sans</span>
                <ArrowUpRight
                  className="ml-[1px] transition group-hover:-translate-y-1 group-hover:translate-x-1"
                  size={20}
                />
              </div>
            </Link>
          </div>
          . The font weight for titles is{" "}
          <span className="font-bold text-zinc-800 dark:text-zinc-100">
            Bold 700
          </span>
          , subtitles are{" "}
          <span className="font-medium text-zinc-800 dark:text-zinc-100">
            Medium 500
          </span>
          , and the remaining content is{" "}
          <span className="text-zinc-800 dark:text-zinc-100">Regular 400</span>.
        </div>
      </div>

      <div>
        <h2 className="my-1 flex items-center text-3xl font-semibold tracking-tight">
          <span className="text-primary">Icons</span>
          <Sparkles className="ml-3 shrink-0" size={28} />
        </h2>

        <div className="px-[1px] leading-loose text-muted-foreground md:px-8">
          The icons in use are part of the{" "}
          <div className="group mr-[2px] inline-flex">
            <Link
              href={"https://lucide.dev/"}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-end space-x-4"
            >
              <div className="flex text-zinc-800 decoration-primary decoration-2 underline-offset-2 transition group-hover:underline dark:text-zinc-100">
                <span className="font-medium">Lucide</span>
                <ArrowUpRight
                  className="ml-[1px] transition group-hover:-translate-y-1 group-hover:translate-x-1"
                  size={20}
                />
              </div>
            </Link>
          </div>{" "}
          icons collection.
        </div>
      </div>

      <div className="mb-2 mt-8 text-center text-3xl max-sm:text-2xl">
        Crafted with ❤️ by{" "}
        <Link
          href={"https://github.com/RinKhimera"}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-end space-x-4"
        >
          <div className="flex text-zinc-800 decoration-primary decoration-4 underline-offset-4 transition group-hover:underline dark:text-zinc-100">
            <span className="font-semibold">Rin Khimera</span>
            <ArrowUpRight
              className="ml-[1px] transition group-hover:-translate-y-1 group-hover:translate-x-1"
              size={20}
            />
          </div>
        </Link>
      </div>
    </section>
  )
}

export default WebsitePage
