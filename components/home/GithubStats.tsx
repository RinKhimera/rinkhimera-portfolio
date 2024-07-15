import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import eyes from "@/public/assets/images/eyes.jpg"
import { GithubUser } from "@/types/githubApitypes"
import { BookMarked, Star, UserCheck, UserPlus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Suspense } from "react"

const getData = async () => {
  const res = await fetch("https://api.github.com/users/rinkhimera", {
    next: { revalidate: 60 },
  })

  return res.json()
}

const getStarredRepos = async (): Promise<number> => {
  const res = await fetch(
    "https://api.github.com/users/RinKhimera/starred?per_page=100",
    { next: { revalidate: 60 } },
  )

  const data = await res.json()
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
  value: number | JSX.Element
}) => (
  <li className="flex items-center gap-1">
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900/60">
      {icon}
    </div>
    <div className="font-semibold">{label}: </div>
    <div className="underline decoration-primary decoration-4 underline-offset-4">
      {value}
    </div>
  </li>
)

const Stats = async () => {
  const apiResponse: GithubUser = await getData()
  const starNumber = await getStarredRepos()

  return (
    <>
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
    </>
  )
}

const StatsSkeleton = () => {
  const skeleton = <Skeleton className="h-4 w-[25px]" />

  return (
    <>
      <StatItem
        icon={<Star className="text-primary" size={20} />}
        label="Stars"
        value={skeleton}
      />
      <StatItem
        icon={<BookMarked className="text-primary" size={20} />}
        label="Repos"
        value={skeleton}
      />
      <StatItem
        icon={<UserPlus className="text-primary" size={20} />}
        label="Followers"
        value={skeleton}
      />
      <StatItem
        icon={<UserCheck className="text-primary" size={20} />}
        label="Following"
        value={skeleton}
      />
    </>
  )
}

export const GithubStats = () => {
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

              <Suspense fallback={<StatsSkeleton />}>
                <Stats />
              </Suspense>
            </ul>
          </CardContent>
        </Card>
      </Link>
    </>
  )
}
