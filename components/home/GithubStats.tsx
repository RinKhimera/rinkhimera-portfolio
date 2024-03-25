import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import cat from "@/public/assets/images/cat.jpg"
import { BookMarked, Star, UserCheck, UserPlus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const GithubStats = () => {
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
            src={cat}
            alt="cat img"
            priority={true}
            className="absolute inset-0 z-10 h-full rounded-lg object-cover brightness-[0.3]"
          />

          {/* Card content */}
          <CardContent className="relative z-20 h-full p-4 text-white">
            <ul className="flex h-full flex-col items-center justify-evenly">
              <li className="flex items-center gap-1">
                <Star className="text-primary" />
                <div className="text-lg font-semibold">Stars</div>
              </li>
              <li className="flex items-center gap-1">
                <BookMarked className="text-primary" />
                <div className="text-lg font-semibold">Public Repos</div>
              </li>
              <li className="flex items-center gap-1">
                <UserPlus className="text-primary" />
                <div className="text-lg font-semibold">Followers</div>
              </li>
              <li className="flex items-center gap-1">
                <UserCheck className="text-primary" />
                <div className="text-lg font-semibold">Following</div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </Link>
    </>
  )
}
