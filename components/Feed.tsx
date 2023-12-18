import { FetchHeroArticles } from "@/lib/actions/action"
import moment from "moment"
import ArticleCardHero from "./ArticleCardHero"
import ExperienceCard from "./ExperienceCard"
import NewsletterCard from "./NewsletterCard"

const Feed = async () => {
  const posts = await FetchHeroArticles()

  return (
    <div className="mt-24 md:mt-28">
      <div className="mx-auto w-full max-w-7xl">
        <div className="relative">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
              <div className="flex flex-col gap-12">
                {posts.map((post, index) => {
                  const date = moment(post.createdAt).format("MMMM D, YYYY")
                  return (
                    <ArticleCardHero
                      key={index}
                      title={post.title}
                      content={post.content}
                      date={date}
                    />
                  )
                })}
              </div>

              <div className="-mt-[24px] space-y-8 lg:pl-12 xl:pl-20">
                <NewsletterCard />
                <ExperienceCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feed
