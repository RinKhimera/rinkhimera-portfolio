import icons from "@/public/assets/icons"
import logos from "@/public/assets/logos"
import projectsImage from "@/public/assets/projects"
import Image from "next/image"

export const navigationLinks = [
  { href: "/about", text: "About" },
  { href: "/projects", text: "Projects" },
  // { href: "/contact", text: "Contact" },
  { href: "/blog", text: "Blog" },
  { href: "/miscellaneous", text: "Misc" },
  { href: "/guestbook", text: "Guestbook" },
]

export const miscLinks = [
  { href: "/miscellaneous/uses", text: "Uses" },
  { href: "/miscellaneous/faq", text: "Faqs" },
  { href: "/miscellaneous/website", text: "Website" },
]

export const projects = [
  {
    name: "Quanta Hive",
    imageSrc: projectsImage.quanta,
    imageAlt: "Quanta Hive",
    description: "Quanta Hive Digital Agency Website.",
    demoLink: "https://quanta-hive.vercel.app/",
    githubLink: "https://github.com/RinKhimera/Quanta-Hive",
    stacks: ["SASS", "JavaScript", "Next.js", "CSS"],
  },
  {
    name: "Threads #237",
    imageSrc: projectsImage.threads237,
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
    imageSrc: projectsImage.nclc,
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
    imageSrc: projectsImage.nike,
    imageAlt: "Nike",
    description: "Nike landing page website built with Next.js 13.4",
    demoLink: "https://nike-rin.vercel.app/",
    githubLink: "https://github.com/RinKhimera/nike",
    stacks: ["Next.js", "TypeScript", "Tailwind CSS", "E-Commerce"],
  },
  {
    name: "Modern UI/UX Webpage",
    imageSrc: projectsImage.manage,
    imageAlt: "Project Image",
    description:
      "A modern landing page for a startup company with hero section, CTA button, testimonials and navigation links.",
    demoLink: "https://rinkhimera.github.io/manage-landing-page/",
    githubLink: "https://github.com/RinKhimera/manage-landing-page",
    stacks: ["React", "Tailwind CSS", "TypeScript"],
  },

  {
    name: "Random Quote Machine",
    imageSrc: projectsImage.quote,
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
    logo: logos.quanta,
  },
  {
    company: "Beyond Technologies LLC",
    role: "Frontend Developer",
    date: "2019 - 2020",
    logo: logos.beyond,
  },
  {
    company: "Soldeur SARL",
    role: "Technical Support Supervisor",
    date: "2018 - 2019",
    logo: logos.soldeur,
  },
]

export const stacks = [
  {
    name: "TypeScript",
    href: "https://www.typescriptlang.org/",
    icon: (
      <Image
        src={icons.typescript}
        alt={"TypeScript logo"}
        className="h-12 w-12"
      />
    ),
  },
  {
    name: "JavaScript",
    href: "https://www.javascript.com/",
    icon: (
      <Image
        src={icons.javascript}
        alt={"JavaScript logo"}
        className="h-12 w-12"
      />
    ),
  },
  {
    name: "React",
    href: "https://react.dev/",
    icon: <Image src={icons.react} alt={"React logo"} className="h-9 w-9" />,
  },
  {
    name: "Next.js",
    href: "https://nextjs.org/",
    icon: (
      <icons.SiNextdotjs
        className="text-zinc-600 dark:text-zinc-400"
        size={40}
      />
    ),
  },
  {
    name: "Tailwind",
    href: "https://tailwindcss.com/",
    icon: (
      <Image src={icons.tailwind} alt={"Tailwind logo"} className="h-8 w-8" />
    ),
  },
  {
    name: "Sass",
    href: "https://sass-lang.com/",
    icon: <Image src={icons.sass} alt={"Sass logo"} className="h-9 w-9" />,
  },
  {
    name: "Node.js",
    href: "https://nodejs.org/en",
    icon: <Image src={icons.node} alt={"Node.js logo"} className="h-10 w-10" />,
  },
  {
    name: "MongoDB",
    href: "https://www.mongodb.com/",
    icon: (
      <Image src={icons.mongodb} alt={"MongoDB logo"} className="h-12 w-12" />
    ),
  },
  {
    name: "PostgreSQL",
    href: "https://www.postgresql.org/",
    icon: (
      <Image
        src={icons.postgresql}
        alt={"PostgreSQL logo"}
        className="h-9 w-9"
      />
    ),
  },
  {
    name: "Prisma",
    href: "https://www.prisma.io/",
    icon: (
      <icons.SiPrisma size={36} className="text-zinc-600 dark:text-zinc-400" />
    ),
  },
  {
    name: "Firebase",
    href: "https://firebase.google.com/",
    icon: (
      <Image src={icons.firebase} alt={"Firebase logo"} className="h-12 w-12" />
    ),
  },
  {
    name: "Git",
    href: "https://git-scm.com/",
    icon: <Image src={icons.git} alt={"Git logo"} className="h-12 w-12" />,
  },
  {
    name: "GitHub",
    href: "https://github.com/",
    icon: (
      <icons.AiFillGithub
        className="text-zinc-600 dark:text-zinc-400"
        size={40}
      />
    ),
  },
  {
    name: "GitLab",
    href: "https://about.gitlab.com/",
    icon: (
      <Image src={icons.gitlab} alt={"GitLab logo"} className="h-10 w-10" />
    ),
  },
  {
    name: "Docker",
    href: "https://www.docker.com/",
    icon: (
      <Image src={icons.docker} alt={"Docker logo"} className="h-12 w-12" />
    ),
  },
  {
    name: "Figma",
    href: "https://www.figma.com/",
    icon: <Image src={icons.figma} alt={"Figma logo"} className="h-8 w-8" />,
  },
]

export const siteTechs = [
  {
    name: "Framework",
    description: "Next.js",
    url: "https://nextjs.org/",
  },
  {
    name: "Styling",
    description: "Tailwindcss",
    url: "https://tailwindcss.com/",
  },
  {
    name: "Database",
    description: "Neon",
    url: "https://neon.tech/",
  },
  {
    name: "ORM",
    description: "Prisma",
    url: "https://www.prisma.io/",
  },
  {
    name: "Authentication",
    description: "Auth.js",
    url: "https://authjs.dev/",
  },
  {
    name: "Deployment",
    description: "Vercel",
    url: "https://vercel.com/",
  },
  {
    name: "Content",
    description: "MDX",
    url: "https://mdxjs.com/",
  },
  {
    name: "Analytics",
    description: "Vercel Analytics",
    url: "https://vercel.com/analytics",
  },
]

export const siteInspirations = [
  {
    name: "spotlight.tailwindui.com",
    url: "https://spotlight.tailwindui.com/",
  },
  {
    name: "arnvgh.me",
    url: "https://www.arnvgh.me/",
  },
  {
    name: "leerob.io",
    url: "https://leerob.io/",
  },
  {
    name: "ui.shadcn.com",
    url: "https://ui.shadcn.com/",
  },
  {
    name: "honghong.me",
    url: "https://honghong.me/",
  },
]

export const testimonials = [
  {
    image: "/assets/images/kouakam.jpeg",
    fallbackImage: "CK",
    name: "Christian Kouakam",
    title: "CEO | Software Engineer MEAN | MERN | Java | AWS | DevOps",
    testimony:
      "Our experience with Samuel was nothing short of fantastic. He demonstrated a deep understanding of our business needs and translated them into a beautifully crafted website. Responsive, collaborative, and always willing to go the extra mile. I highly recommend his services.",
    link: "https://www.linkedin.com/in/ing-chris-kouakam/",
  },
  {
    image: "/assets/images/lombat.jpeg",
    fallbackImage: "HL",
    name: "Hilaire Lombat",
    title: "HR Manager, Employer Brand | SEO & Digital Marketing",
    testimony:
      "Exceptional collaboration! Translated my vision into a scalable and responsive platform. The speed of development, attention to detail, and problem-solving abilities were beyond impressive.",
    link: "https://www.linkedin.com/in/hilaire-lombat/",
  },
  {
    image: "/assets/images/bessala.jpeg",
    fallbackImage: "AB",
    name: "Aristide Bessala",
    title: "C# .NET Developer | Azure | PHP Symfony, Laravel | Docker",
    testimony:
      "Working with him was a breath of fresh air. His professionalism and expertise turned our outdated website into a modern masterpiece. The project was completed on time, and communication was excellent throughout. We're incredibly pleased with the results.",
    link: "https://www.linkedin.com/in/aristide-bessala-akogo-8b8368124/",
  },
]
