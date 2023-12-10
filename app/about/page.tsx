import { portrait } from "@/public/assets/images"
import Image from "next/image"
import Link from "next/link"
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai"
import { HiOutlineExternalLink } from "react-icons/hi"

const About = () => {
  return (
    <>
      <div className="mt-10 min-h-full sm:mt-16 lg:mt-20">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portrait}
                alt="portrait"
                placeholder="blur"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>

          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Navigating the digital realm as a{" "}
              <span className="text-primary">full-stack developer,</span> I
              specialize in the art of simplifying the complex and automating
              the routine for a{" "}
              <span className="text-primary">seamless digital experience.</span>
            </h1>
            <div className="mt-6 space-y-7 text-base leading-loose text-zinc-600 dark:text-zinc-400">
              <p>
                I started playing with computers when I was 10 years old. Since
                then I have been tinkering with all sorts of technologies that
                in some way or another led me to work on photo and video
                editing, design, and ultimately to web development.
              </p>
              <p>
                As a web developer, I enjoy bridging the gap between engineering
                and design — combining my technical knowledge with my keen eye
                for design to create a beautiful product. My goal is to always
                build applications that are scalable and efficient under the
                hood while providing engaging, pixel-perfect user experiences.
              </p>
              <p>
                <b>When I&apos;m not in front of my coding screen, </b>
                I&apos;m probably watching an anime, learning new stuff, or
                playing video games.
              </p>
            </div>
            <div>
              <Link
                className="text-md group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-zinc-50 px-3 py-2 font-medium text-zinc-900 outline-offset-2 transition hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 active:transition-none dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70"
                href="/docs/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                View my resume
                <HiOutlineExternalLink />
              </Link>
            </div>
          </div>

          <div className="lg:pl-20">
            <ul role="list">
              <li className="mt-4 flex">
                <Link
                  className="group flex text-sm font-medium text-zinc-800 transition hover:text-primary dark:text-zinc-200 dark:hover:text-primary"
                  href="https://github.com/RinKhimera"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub className="-mt-0.5 h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-primary" />
                  <span className="ml-4">Follow on GitHub</span>
                </Link>
              </li>
              <li className="mt-4 flex">
                <Link
                  className="group flex text-sm font-medium text-zinc-800 transition hover:text-primary dark:text-zinc-200 dark:hover:text-primary"
                  href="https://www.linkedin.com/in/samuel-pokam/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillLinkedin className="-mt-0.5 h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-primary" />
                  <span className="ml-4">Follow on LinkedIn</span>
                </Link>
              </li>
              <li className="mt-8 flex border-t border-zinc-100 pt-8 dark:border-zinc-700/40">
                <Link
                  className="group flex text-sm font-medium text-zinc-800 transition hover:text-primary dark:text-zinc-200 dark:hover:text-primary"
                  href="mailto:dixiades@gmail.com"
                >
                  <AiFillMail className="-mt-0.5 h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-primary" />
                  <span className="ml-4">dixiades@gmail.com</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
