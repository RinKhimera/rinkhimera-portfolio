import ArticleCardHero from "@/components/home/ArticleCardHero"
import { CodeActivityCard } from "@/components/home/CodeActivityCard"
import { DateCard } from "@/components/home/DateCard"
import { GithubStats } from "@/components/home/GithubStats"
import { fetchHeroArticles } from "@/lib/actions/action"
import moment from "moment"
import { ContactCard } from "./ContactCard"
import ExperienceCard from "./ExperienceCard"
import NewsletterCard from "./NewsletterCard"
import { SocialCard } from "./SocialCard"

const Feed = async () => {
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

        <div className="h-[720px] max-xl:mt-10  xl:flex-1">
          <div className="grid-rows-7 grid h-full grid-cols-7 gap-2">
            <div className="col-span-3 row-span-4">
              <CodeActivityCard />
            </div>

            <div className="col-span-4 row-span-2">
              <DateCard />
            </div>

            <div className="col-span-2 row-span-2">
              <GithubStats />
            </div>
            <div className="col-span-2 row-span-2">
              <SocialCard />
            </div>

            <div className="col-span-4 row-span-3">
              <ContactCard />
            </div>
            <div className="col-span-3 row-span-3 bg-orange-50 text-black">
              <div className="size-4 bg-red-500"></div>
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
