import { beyondLogo, quantaLogo, soldeurLogo } from "@/public/assets/logos"

export const projects = [
  {
    name: "Threads #237",
    imageSrc: "/assets/projects/threads237.png",
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
    imageSrc: "/assets/projects/nclc.png",
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
    name: "Bolo Job Search",
    imageSrc: "/assets/projects/bolo.png",
    imageAlt: "Project Image",
    description:
      "A job search website allowing to apply and post different offers, as well as to offer services.",
    demoLink: "https://bolo-one.vercel.app/",
    githubLink: "https://github.com/RinKhimera/bolo",
    stacks: ["Tailwind CSS", "TypeScript", "Next.js", "Three.js"],
  },
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
    name: "Random Quote Machine",
    imageSrc: "/assets/projects/project3.png",
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

export const Articles = [
  {
    title: "Crafting a design system for a multiplanetary future",
    content:
      "Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.",
    date: "September 5, 2022",
  },
  {
    title: "Introducing Animaginary: High performance web animations",
    content:
      "When you’re building a website for a company as ambitious as Planetaria, you need to make an impression. I wanted people to visit our website and see animations that looked more realistic than reality itself.",
    date: "September 2, 2022",
  },
  {
    title: "Rewriting the cosmOS kernel in Rust",
    content:
      "When we released the first version of cosmOS last year, it was written in Go. Go is a wonderful programming language with a lot of benefits, but it’s been a while since I’ve seen an article on the front page of Hacker News about rewriting some important tool in Go and I see articles on there about rewriting things in Rust every single week.",
    date: "July 14, 2022",
  },
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
