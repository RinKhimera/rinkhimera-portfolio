import FetchHeroArticle from "@/lib/actions/fetchHeroArticle"
import ExperienceCard from "./ExperienceCard"

const Feed = () => {
  return (
    <div className="mt-24 md:mt-28">
      <div className="mx-auto w-full max-w-7xl">
        <div className="relative">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
              <FetchHeroArticle />

              <div className="space-y-10 lg:pl-16 xl:pl-24">
                <ExperienceCard />
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
