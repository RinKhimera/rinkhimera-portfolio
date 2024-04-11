import icons from "@/public/assets/icons"
import logos from "@/public/assets/logos"
import projectsImage from "@/public/assets/projects"
import {
  BookMarked,
  Folders,
  Home,
  Library,
  Rss,
  SquareUser,
} from "lucide-react"
import Image from "next/image"

export const navigationLinks = [
  { href: "/about", text: "About" },
  { href: "/projects", text: "Projects" },
  { href: "/blog", text: "Blog" },
  { href: "/miscellaneous", text: "Misc" },
  { href: "/guestbook", text: "Guestbook" },
]

export const mobileLinks = [
  {
    href: "/",
    text: "Home",
    icon: <Home size={20} />,
  },
  {
    href: "/about",
    text: "About",
    icon: <SquareUser size={20} />,
  },
  {
    href: "/projects",
    text: "Projects",
    icon: <Folders size={20} />,
  },
  {
    href: "/blog",
    text: "Blog",
    icon: <Rss size={20} />,
  },
  {
    href: "/miscellaneous",
    text: "Misc",
    icon: <Library size={20} />,
  },
  {
    href: "/guestbook",
    text: "Guestbook",
    icon: <BookMarked size={20} />,
  },
]

export const footerLinks = [
  {
    name: "Resources",
    links: [
      { name: "Home", url: "/" },
      { name: "About", url: "/about" },
      { name: "Projects", url: "/projects" },
      { name: "Blog", url: "/blog" },
    ],
  },
  {
    name: "More",
    links: [
      { name: "Guestbook", url: "/guestbook" },
      { name: "Uses", url: "/miscellaneous/uses" },
      { name: "FAQs", url: "/miscellaneous/faq" },
      { name: "About this website", url: "/miscellaneous/website" },
    ],
  },
  {
    name: "Socials",
    links: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/samuel-pokam/" },
      { name: "GitHub", url: "https://github.com/RinKhimera" },
      { name: "X", url: "https://twitter.com/rin_khimera" },
    ],
  },
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
    description:
      "Quanta Hive: Your digital innovation hub. Elevate your brand with cutting-edge design, development, and marketing solutions tailored to your business goals.",
    demoLink: "https://quanta-hive.vercel.app/",
    githubLink: "https://github.com/RinKhimera/Quanta-Hive",
    stacks: ["SASS", "JavaScript", "Next.js", "CSS", "Bootstrap", "EmailJS"],
  },
  {
    name: "Rinbnb",
    imageSrc: projectsImage.rinbnb,
    imageAlt: "Rinbnb",
    description:
      "Peer-to-peer rental platform mimicking Airbnb's model, offering unique accommodations for travelers and hosts worldwide.",
    demoLink: "https://rin-airbnb.vercel.app/",
    githubLink: "https://github.com/RinKhimera/airbnb-clone",
    stacks: [
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Kinde-Auth",
      "Leaflet",
      "Edgestore",
      "Prisma",
      "PostgreSQL",
      "Shadcn/ui",
    ],
  },
  {
    name: "Threads #237",
    imageSrc: projectsImage.threads237,
    imageAlt: "Threads #237",
    description:
      "Microblogging platform facilitating social interaction, user engagement, and content sharing.",
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
    description:
      "A sleek landing page offering premium athletic footwear and apparel, inspired by Nike's iconic style and performance-driven ethos.",
    demoLink: "https://nike-rin.vercel.app/",
    githubLink: "https://github.com/RinKhimera/nike",
    stacks: ["Next.js", "TypeScript", "Tailwind CSS", "E-Commerce"],
  },
  {
    name: "Anime Vault",
    imageSrc: projectsImage.animevault,
    imageAlt: "Anime Vault",
    description:
      "Discover trending anime and ratings on a dynamic platform, keeping you updated with the latest in the anime world.",
    demoLink: "https://anime-vault237.vercel.app/",
    githubLink: "https://github.com/RinKhimera/Anime-Vault",
    stacks: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Framer-Motion",
      "API Fetching",
    ],
  },

  // {
  //   name: "Random Quote Machine",
  //   imageSrc: projectsImage.quote,
  //   imageAlt: "Project Image",
  //   description:
  //     "A web-based application that generates and displays random quotes to the user.",
  //   demoLink: "https://rinkhimera.github.io/quotes-generator/",
  //   githubLink: "https://github.com/RinKhimera/quotes-generator",
  //   stacks: ["Next.js", "React", "Axios", "TypeScript", "API fetching"],
  // },
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

export const desktopUses = [
  {
    name: "Processor",
    description: "Intel(R) Core(TM) i7-6700 CPU @ 3.40GHz x 8",
  },
  {
    name: "Memory",
    description: "16 GB",
  },
  {
    name: "Graphics",
    description: "AMD Radeon RX 6600 XT 8 GB",
  },
  {
    name: "Storage",
    description: "512 GB SSD NVMe + 2 TB HDD",
  },
  {
    name: "Main monitor",
    description: "Dell P2414H",
  },
  {
    name: "Second monitor",
    url: "https://honghong.me/",
    description: "Dell U2311H",
  },
]

export const laptopUses = [
  {
    name: "Device",
    description: "HP ProBook 440 G6",
  },
  {
    name: "Processor",
    description: "Intel(R) Core(TM) i5-8265U CPU @ 1.60GHz x 8",
  },
  {
    name: "Memory",
    description: "16 GB",
  },
  {
    name: "Graphics",
    description: "Intel(R) UHD Graphics 620",
  },
  {
    name: "Storage",
    description: "256 GB SSD M2 + 1 TB HDD",
  },
]

export const softwareUses = [
  {
    name: "Operating System",
    description: "Windows 11 Pro 22H2",
    url: "https://www.microsoft.com/en-us/windows/windows-11?r=1",
  },
  {
    name: "Terminal",
    description: "PowerShell",
    url: "https://learn.microsoft.com/en-us/powershell/scripting/overview?view=powershell-7.4",
  },
  {
    name: "Code Editor",
    description: "Visual Studio Code",
    url: "https://code.visualstudio.com/",
  },
  {
    name: "Browser",
    description: "Google Chrome",
    url: "https://www.google.com/intl/en/chrome/",
  },
  {
    name: "API Platform",
    description: "Postman",
    url: "https://www.postman.com/",
  },
]

export const testimonials = [
  {
    image: "/assets/images/kouakam.jpg",
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
