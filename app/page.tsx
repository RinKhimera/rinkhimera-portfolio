import { Feed } from "@/components/home/Feed"
import { Hero } from "@/components/home/Hero"

export default function Home() {
  return (
    <div className="mt-10 min-h-full sm:mt-16 lg:mt-20">
      <Hero />
      <Feed />
    </div>
  )
}
