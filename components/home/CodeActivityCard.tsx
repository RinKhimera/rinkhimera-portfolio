import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import luffy from "@/public/assets/images/luffy.jpg"
import { ApiResponseProps } from "@/types/wakatimeApiTypes"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const getData = async () => {
  const res = await fetch(
    "https://wakatime.com/api/v1/users/rinkhimera/stats/last_30_days",
    {
      headers: {
        Authorization: `Basic ${process.env.WAKATIME_API_KEY}`,
      },
      next: { revalidate: 3600 },
    },
  )

  return res.json()
}

export const CodeActivityCard = async () => {
  const apiResponse: ApiResponseProps = await getData()

  const codingLanguages = apiResponse.data.languages

  return (
    <>
      <Card className="relative flex h-full flex-col justify-between">
        {/* Background image */}
        <Image
          src={luffy}
          alt="Monkey D. Luffy"
          priority={true}
          placeholder="blur"
          className="absolute inset-0 z-10 h-full rounded-lg object-cover brightness-[0.7] dark:brightness-[0.5]"
        />

        {/* Card content */}
        <CardHeader className="z-20 p-3 text-zinc-100">
          <CardTitle className="flex justify-between text-xl font-semibold">
            <div className="truncate">Code Activities</div>
            <Badge className="truncate" variant="secondary">
              Last 30 days
            </Badge>
          </CardTitle>
        </CardHeader>

        <CardContent className="scrollbar-hide z-20 overflow-auto px-3">
          <div className="flex flex-col space-y-3 text-zinc-200">
            {codingLanguages.map((language) => (
              <div key={language.name} className="flex flex-col space-y-1">
                <div className="flex justify-between">
                  <div className="flex space-x-2">
                    <div className="font-semibold tracking-tight">
                      {language.name}
                    </div>
                    <div className="font-medium text-zinc-300/90">
                      {language.hours}h{language.minutes}m
                    </div>
                  </div>

                  <div className="font-medium text-zinc-200">
                    {language.percent}%
                  </div>
                </div>

                <Progress
                  className="h-1.5 bg-neutral-400"
                  value={language.percent}
                />
              </div>
            ))}
          </div>
        </CardContent>

        <CardFooter className="z-20 p-3">
          <Link
            href="https://wakatime.com/@rinkhimera"
            rel="noopener noreferrer"
            target="_blank"
            className={`${buttonVariants({ variant: "outline" })} w-full`}
          >
            <span className="truncate">See more on WakaTime</span>{" "}
            <ExternalLink size={14} className="ml-2" />
          </Link>
        </CardFooter>
      </Card>
    </>
  )
}
