import ArticleCardBlog from "@/components/blog/ArticleCardBlog"
import { MotionDiv } from "@/components/MotionFragment"
import Skeletoncard from "@/components/SkeletonCard"
import { fetchBlogArticles } from "@/lib/actions/action"
import moment from "moment"
import { Suspense } from "react"

const Blog = async () => {
  const posts = await fetchBlogArticles()

  return (
    <div className="mt-10 min-h-full sm:mt-16 lg:mt-20">
      <MotionDiv
        className="max-w-2xl"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <p className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Thoughts <span className="text-primary">shared</span>, creativity{" "}
          <span className="text-primary">ignited!</span>
        </p>
        <p className="mt-6 text-base leading-loose text-zinc-600 dark:text-zinc-400">
          Embark on a journey through our blog, where insightful articles and
          creative musings come together.
        </p>
      </MotionDiv>

      <div className="mt-8 md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {posts.map((post, index) => {
            const date = moment(post.createdAt).format("MMMM D, YYYY")

            return (
              <Suspense key={index} fallback={<Skeletoncard />}>
                <ArticleCardBlog
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
