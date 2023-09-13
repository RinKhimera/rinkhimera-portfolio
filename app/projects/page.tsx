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
import Image from "next/image"

const Projects = () => {
  const projects = [
    {
      name: "Modern UI/UX Webpage",
      imageSrc: "/assets/projects/project1.png",
      imageAlt: "Project Image",
      description:
        "A modern landing page for a startup company with hero section, CTA button, testimonials and navigation links.",
      demoLink: "https://rinkhimera.github.io/manage-landing-page/",
      githubLink: "https://github.com/RinKhimera/manage-landing-page",
      stacks: ["React", "Tailwind CSS", "JavaScript"],
    },
    {
      name: "Bolo Job Search",
      imageSrc: "/assets/projects/bolo.png",
      imageAlt: "Project Image",
      description:
        "A job search website allowing to apply and post different offers, as well as to offer services.",
      demoLink: "https://bolo-one.vercel.app/",
      githubLink: "https://github.com/RinKhimera/bolo",
      stacks: ["Figma", "Git", "Node.js", "TypeScript", "Next.js", "Three.js"],
    },
    {
      name: "Promptopia",
      imageSrc: "/assets/projects/promptopia.png",
      imageAlt: "Project Image",
      description:
        "An open-source AI prompting tool for modern world to discover, create and share creative prompts.",
      demoLink: "https://promptopia-rinkhimera.vercel.app/",
      githubLink: "https://github.com/RinKhimera/promptopia",
      stacks: ["Next.js", "TypeScript", "MongoDB", "Prisma", "NextAuth.js"],
    },
    {
      name: "Portfolio Website",
      imageSrc: "/assets/projects/portfolio.png",
      imageAlt: "Project Image",
      description:
        "My personal portfolio website, to share my projects and my skills in the field of web development.",
      demoLink: "#",
      githubLink: "https://github.com/RinKhimera/project-eva-4.0",
      stacks: ["Next.js", "TypeScript", "Tailwind CSS", "Redux", "Nodemailer"],
    },
    {
      name: "Random Quote Machine",
      imageSrc: "/assets/projects/project3.png",
      imageAlt: "Project Image",
      description:
        "A web-based application that generates and displays random quotes to the user.",
      demoLink: "https://rinkhimera.github.io/quotes-generator/",
      githubLink: "https://github.com/RinKhimera/quotes-generator",
      stacks: ["React", "Axios", "JavaScript", "API fetching"],
    },
    {
      name: "Todo List App",
      imageSrc: "/assets/projects/project5.png",
      imageAlt: "Project Image",
      description:
        "An application that displays a list of tasks and provides the ability to add, delete, and update tasks.",
      demoLink: "https://rinkhimera.github.io/todo-list-app/",
      githubLink: "https://github.com/RinKhimera/todo-list-app",
      stacks: ["React", "JavaScript", "Express", "GitLab"],
    },
    // add more projects here
  ]

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

                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Techs
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
              </SheetContent>
            </Sheet>
          ))}
        </ul>
      </div>

      {/* <div className="mt-8 sm:mt-10">
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <li
              key={project.name}
              className="group relative flex flex-col rounded-2xl bg-zinc-50 p-5 text-center transition hover:bg-zinc-100 dark:bg-zinc-800/50 dark:hover:bg-zinc-700/50"
            >
              <div>
                <Image
                  className="mb-4 mt-2 rounded-lg"
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  width={1920}
                  height={1080}
                />
              </div>
              <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                {project.name}
              </h2>
              <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>
              <div className="flex flex-wrap justify-center  gap-2 py-3">
                {project.stacks.map((stack) => (
                  <div
                    key={stack}
                    className="rounded-lg bg-white px-2 py-1 text-sm font-semibold text-zinc-800 shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:text-zinc-100 dark:ring-0"
                  >
                    {stack}
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  )
}

export default Projects
