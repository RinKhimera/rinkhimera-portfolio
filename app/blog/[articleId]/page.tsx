import ArticleButton from "@/components/ArticleButton"
import { Button } from "@/components/ui/button"
import { allPosts } from "contentlayer/generated"
import { format, parseISO } from "date-fns"
import { ChevronLeft } from "lucide-react"
import { useMDXComponent } from "next-contentlayer/hooks"
import Link from "next/link"
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
    <div className="mx-auto max-w-2xl py-8">
      <ArticleButton />
      {/* <Button
        className="mb-6 flex h-12 w-12 rounded-full transition"
        variant={"secondary"}
        size={"icon"}
        asChild
      >
        <Link href="/blog">
          <ChevronLeft />
        </Link>
      </Button> */}

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
