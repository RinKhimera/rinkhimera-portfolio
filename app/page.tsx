import { ModeToggle } from "@/components/theme-toggle"
import Image from "next/image"

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-16">
      <div className="lg:order-first lg:row-span-2">
        <h1 className="text-4xl font-bold tracking-tight  dark:text-zinc-100 sm:text-5xl">
          Hi, I&apos;m Samuel Pokam.
          <br /> I am a{" "}
          <span className="text-primary">full-stack developer,</span> with a
          particular interest in making things simple and automating daily
          tasks.
        </h1>
        <div className="mt-6 space-y-7 text-base leading-loose text-primary bg-foreground">
          <p>
            I started playing with computers when I was 10 years old. Since then
            I have been tinkering with all sorts of technologies that in some
            way or another led me to work on photo and video editing, design,
            and ultimately to web development.
          </p>
          <p>
            As a web developer, I enjoy bridging the gap between engineering and
            design — combining my technical knowledge with my keen eye for
            design to create a beautiful product. My goal is to always build
            applications that are scalable and efficient under the hood while
            providing engaging, pixel-perfect user experiences.
          </p>
          <p>
            <b>When I&apos;m not in front of my coding screen, </b>
            I&apos;m probably watching an anime, learning new stuff, or playing
            video games.
          </p>
        </div>
        <div>
          <a
            className="text-md group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-zinc-50 py-2 px-3 font-medium text-zinc-900 outline-offset-2 transition hover:bg-zinc-100  active:transition-none dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50"
            href="/docs/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View my resume
          </a>
        </div>
      </div>
      <ModeToggle />
    </div>
  )
}
