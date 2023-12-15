import { beyondLogo, quantaLogo, soldeurLogo } from "@/public/assets/logos"
import {
  manageProject,
  nclcProject,
  nikeProject,
  quantaProject,
  quoteProject,
  threads237Project,
} from "@/public/assets/projects"
import Image from "next/image"

import icons from "@/public/assets/icons"

export const navigationLinks = [
  { href: "/about", text: "About" },
  { href: "/projects", text: "Projects" },
  { href: "/contact", text: "Contact" },
  { href: "/blog", text: "Blog" },
]

export const projects = [
  {
    name: "Quanta Hive",
    imageSrc: quantaProject,
    imageAlt: "Quanta Hive",
    description: "Quanta Hive Digital Agency Website.",
    demoLink: "https://quanta-hive.vercel.app/",
    githubLink: "https://github.com/RinKhimera/Quanta-Hive",
    stacks: ["SASS", "JavaScript", "Next.js", "CSS"],
  },
  {
    name: "Threads #237",
    imageSrc: threads237Project,
    imageAlt: "Threads #237",
    description:
      "A Threads Meta application clone where you create and engage in threads and ongoing conversations.",
    demoLink: "https://threads237.vercel.app/",
    githubLink: "https://github.com/RinKhimera/threads-clone",
    stacks: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "Webhooks",
      "Node.js",
      "Clerk-Auth",
      "Zod-Validation",
    ],
  },
  {
    name: "NCLC / CLB Calculator",
    imageSrc: nclcProject,
    imageAlt: "NCLC / CLB Calculator",
    description:
      "Calculation tool for Canadian Language Benchmarks / Outil de calcul des Niveaux de compétence linguistique canadiens.",
    demoLink: "https://nclc-clb-calculator.vercel.app/",
    githubLink: "https://github.com/RinKhimera/nclc-clb-calculator",
    stacks: [
      "Next.js",
      "TypeScript",
      "Jest-tests",
      "Tailwind CSS",
      "Shadcn-ui",
      "Zod-Validation",
      "Framer-Motion",
    ],
  },
  {
    name: "Nike",
    imageSrc: nikeProject,
    imageAlt: "Nike",
    description: "Nike landing page website built with Next.js 13.4",
    demoLink: "https://nike-rin.vercel.app/",
    githubLink: "https://github.com/RinKhimera/nike",
    stacks: ["Next.js", "TypeScript", "Tailwind CSS", "E-Commerce"],
  },
  {
    name: "Modern UI/UX Webpage",
    imageSrc: manageProject,
    imageAlt: "Project Image",
    description:
      "A modern landing page for a startup company with hero section, CTA button, testimonials and navigation links.",
    demoLink: "https://rinkhimera.github.io/manage-landing-page/",
    githubLink: "https://github.com/RinKhimera/manage-landing-page",
    stacks: ["React", "Tailwind CSS", "TypeScript"],
  },

  {
    name: "Random Quote Machine",
    imageSrc: quoteProject,
    imageAlt: "Project Image",
    description:
      "A web-based application that generates and displays random quotes to the user.",
    demoLink: "https://rinkhimera.github.io/quotes-generator/",
    githubLink: "https://github.com/RinKhimera/quotes-generator",
    stacks: ["Next.js", "React", "Axios", "TypeScript", "API fetching"],
  },
  // {
  //   name: "Todo List App",
  //   imageSrc: "/assets/projects/project5.png",
  //   imageAlt: "Project Image",
  //   description:
  //     "An application that displays a list of tasks and provides the ability to add, delete, and update tasks.",
  //   demoLink: "https://rinkhimera.github.io/todo-list-app/",
  //   githubLink: "https://github.com/RinKhimera/todo-list-app",
  //   stacks: ["React", "JavaScript", "Express", "GitLab"],
  // },

  // add more projects here
]

export const experienceData = [
  {
    company: "Quanta Hive",
    role: "Fullstack Developer",
    date: "2020 - Present",
    logo: quantaLogo,
  },
  {
    company: "Beyond Technologies LLC",
    role: "Frontend Developer",
    date: "2019 - 2020",
    logo: beyondLogo,
  },
  {
    company: "Soldeur SARL",
    role: "Technical Support Supervisor",
    date: "2018 - 2019",
    logo: soldeurLogo,
  },
]

export const stacks = [
  {
    name: "TypeScript",
    href: "https://www.typescriptlang.org/",
    icon: (
      <Image src={icons.typescript} alt={"TypeScript"} className="h-7 w-7" />
    ),
  },
  {
    name: "JavaScript",
    href: "https://www.javascript.com/",
    icon: (
      <Image src={icons.javascript} alt={"JavaScript"} className="h-7 w-7" />
    ),
  },
  {
    name: "React",
    href: "https://react.dev/",
    icon: <Image src={icons.react} alt={"React"} className="h-8 w-8" />,
  },
  {
    name: "Next.js",
    href: "https://nextjs.org/",
    icon: (
      <icons.SiNextdotjs className="h-9 w-9 text-zinc-600 dark:text-zinc-400" />
    ),
  },
  {
    name: "Tailwind",
    href: "https://tailwindcss.com/",
    icon: (
      <Image src={icons.tailwind} alt={"Tailwind CSS"} className="h-8 w-8" />
    ),
  },
  {
    name: "Sass",
    href: "https://sass-lang.com/",
    icon: <Image src={icons.sass} alt={"Sass"} className="h-9 w-9" />,
  },
  {
    name: "Node.js",
    href: "https://nodejs.org/en",
    icon: <Image src={icons.node} alt={"Node.js"} className="h-8 w-8" />,
  },
  {
    name: "MongoDB",
    href: "https://www.mongodb.com/",
    icon: <Image src={icons.mongodb} alt={"MongoDB"} className="h-10 w-10" />,
  },
  {
    name: "PostgreSQL",
    href: "https://www.postgresql.org/",
    icon: (
      <Image src={icons.postgresql} alt={"PostgreSQL"} className="h-8 w-8" />
    ),
  },
  {
    name: "Prisma",
    href: "https://nodejs.org/en",
    icon: (
      <icons.SiPrisma className="h-8 w-8 text-zinc-600 dark:text-zinc-400" />
    ),
  },
  {
    name: "Git",
    href: "https://git-scm.com/",
    icon: <Image src={icons.git} alt={"GitLab"} className="h-8 w-8" />,
  },
  {
    name: "GitHub",
    href: "https://github.com/",
    icon: (
      <icons.AiFillGithub className="h-8 w-8 text-zinc-600 dark:text-zinc-400" />
    ),
  },
  {
    name: "GitLab",
    href: "https://about.gitlab.com/",
    icon: <Image src={icons.gitlab} alt={"GitLab"} className="h-8 w-8" />,
  },
  {
    name: "Figma",
    href: "https://www.figma.com/",
    icon: <Image src={icons.figma} alt={"Figma"} className="h-8 w-8" />,
  },
]
