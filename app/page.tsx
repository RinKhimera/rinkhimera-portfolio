import Cta from "@/components/Cta"
import Feed from "@/components/Feed"
import Hero from "@/components/Hero"

export default function Home() {
  return (
    <div className="mt-10 min-h-full sm:mt-16 lg:mt-20">
      <Hero />
      <Feed />
      <Cta />
    </div>
  )
}
