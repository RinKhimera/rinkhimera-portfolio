import { Card, CardContent } from "@/components/ui/card"
import view from "@/public/assets/images/view.jpg"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const ExploreCard = () => {
  const exploreLinks = [
    { name: "FAQs", link: "/faq" },
    { name: "Uses", link: "Uses" },
    { name: "Blog", link: "/blog" },
    { name: "Projects", link: "/projects" },
  ]

  return (
    <>
      <Card className="relative h-full">
        {/* Background image */}
        <Image
          src={view}
          alt="View"
          priority={true}
          placeholder="blur"
          className="absolute inset-0 z-10 h-full rounded-lg object-cover brightness-[0.6]"
        />

        {/* Card content */}
        <CardContent className="relative z-20 h-full px-4 py-2 text-zinc-200">
          <div className="mb-1 truncate text-3xl font-medium tracking-tight">
            Explore <span className="text-primary">More...</span>
          </div>

          <div className="flex flex-col space-y-2 text-xl font-medium tracking-tight">
            {exploreLinks.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="group flex items-end rounded-md bg-zinc-900/40 px-4 py-3 hover:bg-zinc-900/60 hover:text-primary/90"
              >
                <span className="transition">{item.name}</span>
                <ArrowUpRight
                  className="ml-1 transition group-hover:-translate-y-1 group-hover:translate-x-2"
                  size={20}
                />
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  )
}
