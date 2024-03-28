import Cta from "@/components/home/Cta"
import Feed from "@/components/home/Feed"
import Hero from "@/components/home/Hero"
import { Metadata } from "next"

// export const metadata: Metadata = {
//   title: "Authentication",
//   description: "Authentication forms built using the components.",
// }

export default function Home() {
  return (
    <div className="mt-10 min-h-full sm:mt-16 lg:mt-20">
      <Hero />
      <Feed />
      {/* <Cta /> */}
    </div>
  )
}
