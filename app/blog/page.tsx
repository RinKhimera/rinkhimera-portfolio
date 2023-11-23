import ArticleCard from "@/components/ArticleCard"
import Skeletoncard from "@/components/SkeletonCard"
import prisma from "@/prisma/db"
import moment from "moment"
import { Suspense } from "react"

const Blog = async () => {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
  })

  return (
    <div className="mt-10 min-h-full sm:mt-16 lg:mt-20">
      <div className="max-w-2xl">
        <p className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Let&apos;s <span className="text-primary">connect</span> and discuss
          your project ideas.
        </p>
        <p className="mt-6 text-base leading-loose text-zinc-600 dark:text-zinc-400">
          Ready to bring your ideas to life with my full-stack skills.
        </p>
      </div>

      <div className="mt-8 md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {posts.map((post, index) => {
            const date = moment(post.createdAt).format("MMMM D, YYYY")
            return (
              <Suspense key={index} fallback={<Skeletoncard />}>
                <ArticleCard
                  title={post.title}
                  content={post.content}
                  date={date}
                />
              </Suspense>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Blog
