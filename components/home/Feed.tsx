import ArticleCardHero from "@/components/home/ArticleCardHero"
import { CodeActivityCard } from "@/components/home/CodeActivityCard"
import { DateCard } from "@/components/home/DateCard"
import { GithubStats } from "@/components/home/GithubStats"
import { fetchHeroArticles } from "@/lib/actions/action"
import moment from "moment"
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

        <div className="h-[650px] max-xl:mt-10 xl:h-[700px] xl:flex-1">
          <div className="grid h-full grid-cols-7 grid-rows-6 gap-3">
            <div className="col-span-3 row-span-4">
              <CodeActivityCard />
            </div>

            <div className="col-span-4 row-span-2">
              <DateCard />
            </div>

            <div className="col-span-2 row-span-2 bg-yellow-50 text-black">
              <GithubStats />
            </div>
            <div className="col-span-2 row-span-2 bg-yellow-50 text-black">
              4
            </div>

            <div className="col-span-7 row-span-2 bg-orange-50 text-black">
              5
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
