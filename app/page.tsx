import { image1, image2, image3, image4, image5 } from "@/public/assets/images"
import { Github, Linkedin, LinkedinIcon, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const imageSources = [image1, image2, image3, image4, image5]

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

      <div className="absolute left-0 right-0 mt-16 sm:mt-20">
        <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
          {imageSources.map((src, index) => (
            <div
              key={index}
              className={`relative aspect-[9/10] w-44 flex-none ${
                index % 2 === 0 ? "rotate-2" : "-rotate-2"
              } overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl`}
            >
              <Image
                src={src}
                alt={`Image-${index + 1}`}
                className="absolute inset-0 h-full w-full object-cover"
                placeholder="blur"
              />
            </div>
          ))}
        </div>

        {/* <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
          <div className="relative aspect-[9/10] w-44 flex-none rotate-2 overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl">
            <Image
              src={image1}
              alt={"Image-1"}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div>
            <div className="relative aspect-[9/10] w-44 flex-none -rotate-2 overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl">
              <Image
                src={image2}
                alt={"Image-2"}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
          <div>
            <div className="relative aspect-[9/10] w-44 flex-none rotate-2 overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl">
              <Image
                src={image3}
                alt={"Image-3"}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
          <div>
            <div className="relative aspect-[9/10] w-44 flex-none rotate-2 overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl">
              <Image
                src={image4}
                alt={"Image-4"}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
          <div>
            <div className="relative aspect-[9/10] w-44 flex-none -rotate-2 overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl">
              <Image
                src={image5}
                alt={"Image-5"}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}
