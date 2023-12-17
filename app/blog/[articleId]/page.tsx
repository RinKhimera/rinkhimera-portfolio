const Article = async ({ params }: { params: { articleId: string } }) => {
  return (
    <section className="py-24">
      <div className="prose dark:prose-invert lg:prose-xl container">
        My post : {params.articleId}
      </div>
    </section>
  )
}

export default Article
