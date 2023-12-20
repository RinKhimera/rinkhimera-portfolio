import { Mdx } from "@/components/mdx-components"
import { allPosts } from "contentlayer/generated"
import { format, parseISO } from "date-fns"
import { useMDXComponent } from "next-contentlayer/hooks"
import { notFound } from "next/navigation"

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
    <article className="prose mx-auto max-w-2xl py-8 dark:prose-invert lg:prose-lg">
      <div className="mb-8">
        <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
        <h1>{post.title}</h1>
        {/* <Mdx code={post.body.code} /> */}
        <div className="">
          <MDXContent />
        </div>
      </div>
    </article>
  )
}

export default Article
