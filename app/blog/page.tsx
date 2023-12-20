import ArticleCard from "@/components/ArticleCard"
import BlogHeader from "@/components/BlogHeader"
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
      <BlogHeader />

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
