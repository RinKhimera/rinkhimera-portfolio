import { ArticleCardHero } from "@/components/home/ArticleCardHero"
import { CodeActivityCard } from "@/components/home/CodeActivityCard"
import { ContactCard } from "@/components/home/ContactCard"
import { DateCard } from "@/components/home/DateCard"
import { ExploreCard } from "@/components/home/ExploreCard"
import { GithubStats } from "@/components/home/GithubStats"
import { SocialCard } from "@/components/home/SocialCard"
import { fetchHeroArticles } from "@/lib/actions/action"
import moment from "moment"

export const Feed = async () => {
  const posts = await fetchHeroArticles()

  return (
    <div className="mx-auto mt-24 w-full md:mt-28">
      <div className="flex max-xl:flex-col xl:space-x-10">
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

        <div className="h-[1300px] max-xl:mt-10 sm:h-[720px] xl:flex-1">
          <div className="grid h-full grid-cols-7 grid-rows-7 gap-1.5 max-sm:grid-cols-2 max-sm:grid-rows-9">
            <div className="col-span-3 row-span-4 max-sm:col-span-2 max-sm:row-span-2">
              <CodeActivityCard />
            </div>

            <div className="col-span-4 row-span-2 max-sm:col-span-2 max-sm:row-span-1">
              <DateCard />
            </div>

            <div className="col-span-2 row-span-2 max-sm:col-span-1 max-sm:row-span-2">
              <GithubStats />
            </div>

            <div className="col-span-2 row-span-2 max-sm:col-span-1 max-sm:row-span-2">
              <SocialCard />
            </div>

            <div className="col-span-4 row-span-3 max-sm:col-span-2 max-sm:row-span-2">
              <ContactCard />
            </div>

            <div className="col-span-3 row-span-3 max-sm:col-span-2 max-sm:row-span-2">
              <ExploreCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
