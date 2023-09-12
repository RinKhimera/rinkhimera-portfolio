import { Github, Linkedin, LinkedinIcon, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="mt-10 min-h-full sm:mt-16 lg:mt-20">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Software engineer, web developer, and{" "}
          <span className="text-blue-600">TypeScript </span>
          enthusiast.
        </h1>
        <p className="mt-6 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          I&apos;m Samuel, a software engineer passionate about creating
          high-quality and innovative digital solutions.
        </p>
        <div className="mt-6">
          <Link
            href="/about"
            className="flex items-center text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl"
          >
            Let me introduce myself
          </Link>
        </div>
        <div className="mt-6 flex gap-6">
          <Link
            href="https://www.linkedin.com/in/samuel-pokam/"
            target="_blank"
            rel="noopener noreferrer"
            className="group -m-1 p-1"
          >
            <Linkedin className="h-6 w-6 fill-zinc-500 transition group-hover:fill-primary dark:fill-zinc-400 dark:group-hover:fill-primary" />
          </Link>
          <Link
            href="https://github.com/RinKhimera"
            target="_blank"
            rel="noopener noreferrer"
            className="group -m-1 p-1"
          >
            <LinkedinIcon />
          </Link>
          <Link
            href="mailto:dixiades@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group -m-1 p-1"
          >
            <Mail className="h-6 w-6 fill-zinc-500 transition group-hover:fill-primary dark:fill-zinc-400 dark:group-hover:fill-primary" />
          </Link>
        </div>
      </div>
    </div>
  )
}
