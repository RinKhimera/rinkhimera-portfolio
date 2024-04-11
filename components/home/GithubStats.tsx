import { Card, CardContent } from "@/components/ui/card"
import eyes from "@/public/assets/images/eyes.jpg"
import { GithubUser } from "@/types/githubApitypes"
import { BookMarked, Star, UserCheck, UserPlus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const getData = async () => {
  const res = await fetch("https://api.github.com/users/rinkhimera", {
    next: { revalidate: 60 },
  })

  return res.json()
}

const geStarredRepos = async (): Promise<number> => {
  const response = await fetch(
    "https://api.github.com/users/RinKhimera/starred?per_page=100",
    { cache: "no-store" },
  )

  const data = await response.json()
  const numberOfObjects = data.length

  return numberOfObjects
}

const StatItem = ({
  icon,
  label,
  value,
}: {
  icon: JSX.Element
  label: string
  value: number
}) => (
  <li className="flex items-center gap-1">
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900/60">
      {icon}
    </div>
    <div className="font-semibold">
      {label}:{" "}
      <span className="underline decoration-primary decoration-4 underline-offset-4">
        {value}
      </span>
    </div>
  </li>
)

export const GithubStats = async () => {
  const apiResponse: GithubUser = await getData()
  const starNumber = await geStarredRepos()

  return (
    <>
      <Link
        className="relative h-full"
        href="https://github.com/RinKhimera"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Card className="relative h-full">
          {/* Background image */}
          <Image
            src={eyes}
            alt="Anime girl eyes"
            priority={true}
            placeholder="blur"
            className="absolute inset-0 z-10 h-full rounded-lg object-cover brightness-[0.6]"
          />

          {/* Card content */}
          <CardContent className="relative z-20 h-full px-0 py-2 text-zinc-200">
            <ul className="flex h-full flex-col items-center justify-between max-sm:justify-evenly">
              <li className="flex items-center">
                <span className="text-xl font-semibold underline decoration-primary decoration-4 underline-offset-4">
                  GitHub Stats
                </span>
              </li>
              <StatItem
                icon={<Star className="text-primary" size={20} />}
                label="Stars"
                value={starNumber}
              />
              <StatItem
                icon={<BookMarked className="text-primary" size={20} />}
                label="Repos"
                value={apiResponse.public_repos}
              />
              <StatItem
                icon={<UserPlus className="text-primary" size={20} />}
                label="Followers"
                value={apiResponse.followers}
              />
              <StatItem
                icon={<UserCheck className="text-primary" size={20} />}
                label="Following"
                value={apiResponse.following}
              />
            </ul>
          </CardContent>
        </Card>
      </Link>
    </>
  )
}
