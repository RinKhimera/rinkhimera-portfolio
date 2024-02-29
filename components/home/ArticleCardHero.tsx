import { MotionArticle } from "@/components/MotionFragment"
import { buttonVariants } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

type ArticleCardHeroProps = {
  title: string
  content: string | null
  date: string
}

const ArticleCardHero = ({ title, content, date }: ArticleCardHeroProps) => {
  const formattedTitle = title
    // Remove non-alphanumeric characters and convert to lowercase
    .replace(/[^a-zA-Z0-9\s]/g, "")
    .toLowerCase()
    // Replace spaces with hyphens
    .replace(/\s+/g, "-")

  return (
    <MotionArticle
      className="group relative flex flex-col items-start"
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ margin: "-100px", once: true }}
      transition={{ duration: 0.25 }}
    >
      <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
        <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
        <Link
          href={`/blog/${formattedTitle}`}
          className={buttonVariants({ variant: "ghostLink", size: "empty" })}
        >
          <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
          <span className="relative z-10">{title}</span>
        </Link>
      </h2>

      <time className="relative z-10 order-first mb-3 flex items-center pl-3.5 text-sm text-zinc-400 dark:text-zinc-500 md:text-base">
        <span
          className="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
        </span>
        {date}
      </time>

      <p className="relative z-10 mt-2 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
        {content}
      </p>

      <div
        aria-hidden="true"
        className="relative z-10 mt-4 flex items-center text-sm font-medium text-primary"
      >
        Read article
        <ChevronRight size={15} className="ml-1" />
      </div>
    </MotionArticle>
  )
}

export default ArticleCardHero
