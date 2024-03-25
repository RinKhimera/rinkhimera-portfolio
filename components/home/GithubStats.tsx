import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import cat from "@/public/assets/images/cat.jpg"
import githubLens from "@/public/assets/images/github-lens.jpg"
import luffy from "@/public/assets/images/luffy.jpg"
import { GithubUser } from "@/types/githubApitypes"
import { BookMarked, Star, UserCheck, UserPlus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const getData = async () => {
  const res = await fetch("https://api.github.com/users/rinkhimera", {
    headers: {
      Authorization: `Basic ${process.env.WAKATIME_API_KEY}`,
    },
  })

  return res.json()
}

export const GithubStats = async () => {
  const apiResponse: GithubUser = await getData()

  return (
    <>
      <Link
        className="relative h-full "
        href="https://github.com/RinKhimera"
        target="_blank"
      >
        <Card className="relative h-full">
          {/* Background image */}
          <Image
            src={luffy}
            alt="Github lens"
            priority={true}
            className="absolute inset-0 z-10 h-full rounded-lg object-cover brightness-[0.7]"
          />

          {/* Card content */}
          <CardContent className="relative z-20 h-full p-4 text-white">
            <ul className="flex h-full flex-col items-center justify-evenly">
              <li className="flex items-center gap-1">
                <Star className="text-primary" />
                <div className="font-semibold lg:text-lg">
                  Stars: <span>20</span>
                </div>
              </li>
              <li className="flex items-center gap-1">
                <BookMarked className="text-primary" />
                <div className="font-semibold lg:text-lg">
                  Public Repos: <span>{apiResponse.public_repos}</span>
                </div>
              </li>
              <li className="flex items-center gap-1">
                <UserPlus className="text-primary" />
                <div className="font-semibold lg:text-lg">
                  Followers: <span>{apiResponse.followers}</span>
                </div>
              </li>
              <li className="flex items-center gap-1">
                <UserCheck className="text-primary" />
                <div className="font-semibold lg:text-lg">
                  Following: <span>{apiResponse.following}</span>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </Link>
    </>
  )
}
