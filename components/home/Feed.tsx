import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { fetchHeroArticles } from "@/lib/actions/action"
import moment from "moment"
import ArticleCardHero from "./ArticleCardHero"
import ExperienceCard from "./ExperienceCard"
import NewsletterCard from "./NewsletterCard"

const Feed = async () => {
  const posts = await fetchHeroArticles()

  return (
    <div className="mx-auto mt-24 w-full md:mt-28">
      <div className="flex max-lg:flex-col lg:space-x-10">
        <div className="flex flex-col space-y-12 lg:w-2/5 ">
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

        <div className="max-lg:mt-10 max-lg:h-[600px] lg:flex-1">
          <div className="grid h-full grid-cols-6 grid-rows-6 gap-3">
            <div className="col-span-3 row-span-4">
              <Card className="h-full bg-zinc-700">
                <CardHeader className="p-3">
                  <CardTitle className="flex justify-between text-base">
                    <div>Code Activities</div>
                    <Badge variant="secondary">Last 30 days</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-3">
                  <p>Card Content</p>
                </CardContent>
                <CardFooter className="px-3">
                  <p>Card Footer</p>
                </CardFooter>
              </Card>
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
