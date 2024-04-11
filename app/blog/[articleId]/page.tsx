import { ArticleButton } from "@/components/blog/ArticleButton"
import { allPosts } from "contentlayer/generated"
import { format, parseISO } from "date-fns"
import type { Metadata } from "next"
import { useMDXComponent } from "next-contentlayer/hooks"
import { notFound } from "next/navigation"

export const metadata: Metadata = {
  title: "Samuel Pokam | Article",
  description: "Software engineer, web developer, and TypeScript enthusiast.",
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }))
}

const Article = ({ params }: { params: { articleId: string } }) => {
  // Find the post for the current page.
  const post = allPosts.find(
    (post) => post._raw.flattenedPath === params.articleId,
  )
  // 404 if the post does not exist.
  if (!post) notFound()
  // Parse the MDX file via the useMDXComponent hook.
  const MDXContent = useMDXComponent(post.body.code)

  return (
    <div className="mx-auto max-w-2xl py-8">
      <ArticleButton />
      <article className="prose max-w-2xl dark:prose-invert lg:prose-lg">
        <div className="mb-8">
          <time dateTime={post.date} className="mb-1">
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
          <h1>{post.title}</h1>
          <MDXContent />
        </div>
      </article>
    </div>
  )
}

export default Article
