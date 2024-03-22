import { CodeActivityCard } from "@/components/home/CodeActivityCard"
import { fetchHeroArticles } from "@/lib/actions/action"
import moment from "moment"
import ArticleCardHero from "./ArticleCardHero"
import ExperienceCard from "./ExperienceCard"
import NewsletterCard from "./NewsletterCard"

const Feed = async () => {
  const posts = await fetchHeroArticles()

  return (
    <div className="mx-auto mt-24 w-full md:mt-28">
      <div className="flex max-xl:flex-col xl:space-x-20">
        <div className="flex flex-col space-y-12 xl:w-2/5">
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

        <div className="max-xl:mt-10 max-xl:h-[600px] xl:flex-1">
          <div className="grid h-full grid-cols-6 grid-rows-6 gap-3">
            <div className="col-span-3 row-span-4">
              <CodeActivityCard />
            </div>

            <div className="col-span-3 row-span-2 bg-blue-50 text-black">2</div>

            <div className="col-span-3 row-span-2 bg-yellow-50 text-black">
              3
            </div>

            <div className="col-span-6 row-span-2 bg-orange-50 text-black">
              4
            </div>
          </div>
          {/* <NewsletterCard />
          <ExperienceCard /> */}
        </div>
      </div>
    </div>
  )
}

export default Feed
