import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { projects } from "@/constants"
import { Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Projects = () => {
  return (
    <div className="mt-10 min-h-full sm:mt-16 lg:mt-20">
      <div className="max-w-2xl">
        <p className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl md:leading-tight">
          Things I&apos;ve made trying to put my dent in the universe.
        </p>
        <p className="mt-6 text-base leading-loose text-zinc-600 dark:text-zinc-400">
          I&apos;ve worked on tons of little projects over the years but these
          are the ones that I&apos;m most proud of. Many of them are
          open-source, so if you see something that piques your interest, check
          out the code and contribute if you have ideas for how it can be
          improved.
        </p>
      </div>

      <div className="mt-8 sm:mt-10">
        <ul className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Sheet key={index}>
              <SheetTrigger>
                <Card className="bg-zinc-50 text-center transition hover:bg-zinc-100 dark:bg-zinc-800/50 dark:hover:bg-zinc-700/50">
                  <CardHeader>
                    <Image
                      className="w-full rounded-lg object-contain"
                      src={project.imageSrc}
                      alt={project.imageAlt}
                      width={1920}
                      height={1080}
                    />
                  </CardHeader>

                  <CardContent>
                    <CardTitle>{project.name}</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                  </CardContent>
                </Card>
              </SheetTrigger>

              <SheetContent>
                <SheetHeader>
                  <SheetTitle>{project.name}</SheetTitle>
                  <SheetDescription>{project.description}</SheetDescription>
                </SheetHeader>

                <Image
                  className="my-5 w-full rounded-lg border object-contain"
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  width={1920}
                  height={1080}
                />

                <div className="">
                  <h3 className="text-lg font-semibold text-foreground">
                    Stacks
                  </h3>
                  <div className="flex flex-wrap justify-start gap-2 py-3">
                    {project.stacks.map((stack) => (
                      <div
                        key={stack}
                        className="rounded-lg bg-white px-2 py-1 text-sm font-semibold text-zinc-800 shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:text-zinc-100 dark:ring-0"
                      >
                        {stack}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile */}
                <div className="md:hidden">
                  <div className="my-5">
                    <h3 className="pb-2 text-lg font-semibold text-foreground">
                      Live Project
                    </h3>
                    <Link
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonVariants({
                        variant: "outline",
                        size: "icon",
                      })}
                    >
                      <Github />
                    </Link>
                  </div>

                  <div className="my-5">
                    <h3 className="pb-2 text-lg font-semibold text-foreground">
                      GitHub Repo
                    </h3>
                    <Link
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonVariants({
                        variant: "secondary",
                        size: "icon",
                      })}
                    >
                      <Github />
                    </Link>
                  </div>
                </div>

                {/* Desktop */}
                <div className="max-md:hidden">
                  <div className="my-5">
                    <h3 className="pb-2 text-lg font-semibold text-foreground">
                      Live Project
                    </h3>
                    <Link
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonVariants({
                        variant: "secondary",
                        size: "lg",
                      })}
                    >
                      {project.demoLink}
                    </Link>
                  </div>

                  <div className="my-5">
                    <h3 className="pb-2 text-lg font-semibold text-foreground">
                      GitHub Repo
                    </h3>
                    <Link
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={` max-md:w-44 ${buttonVariants({
                        variant: "secondary",
                        size: "lg",
                      })}`}
                    >
                      {project.githubLink}
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Projects