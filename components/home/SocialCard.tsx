import { Card, CardContent } from "@/components/ui/card"
import pochita from "@/public/assets/images/pochita.jpg"
import { Github, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Suspense } from "react"

const getCodingHours = async (): Promise<number> => {
  const apiResponse = await fetch(
    "https://wakatime.com/api/v1/users/rinkhimera/stats/last_7_days?per_page=100",
    {
      headers: {
        Authorization: `Basic ${process.env.WAKATIME_API_KEY}`,
      },
    },
  )

  const data = await apiResponse.json()

  // Convert seconds to hours and round down to the nearest whole number
  const hours = Math.floor(
    data.data.total_seconds_including_other_language / 3600,
  )

  return hours
}

const SocialLink = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) => (
  <Link
    href={href}
    rel="noopener noreferrer"
    target="_blank"
    className="flex w-full items-center justify-center rounded-md border border-zinc-800 bg-zinc-900/40 transition hover:bg-zinc-900/60"
  >
    {children}
  </Link>
)

export const SocialCard = async () => {
  const codingHours = await getCodingHours()

  return (
    <Card className="relative h-full">
      {/* Background image */}
      <Image
        src={pochita}
        alt="Pochita"
        priority={true}
        placeholder="blur"
        className="absolute inset-0 z-10 h-full rounded-lg object-cover brightness-[0.6]"
      />

      {/* Card content */}
      <CardContent className="relative z-20 flex h-full flex-col justify-between px-0 py-2 text-zinc-200">
        <div className="flex h-full flex-col justify-around text-xl font-semibold max-sm:justify-around">
          <div className=" text-center leading-5 text-zinc-200">
            Last week&apos;s coding hours
          </div>

          <span className=" text-center text-4xl text-zinc-100 underline decoration-primary decoration-8 underline-offset-8">
            <Suspense fallback={<p>Loading feed...</p>}>
              <div>{codingHours}h</div>
            </Suspense>
          </span>

          <div className="mt-0 flex basis-1/3 justify-between gap-1 px-1.5 py-2">
            <SocialLink href={"https://github.com/RinKhimera"}>
              <Github />
            </SocialLink>
            <SocialLink href={"https://www.linkedin.com/in/samuel-pokam/"}>
              <Linkedin />
            </SocialLink>
            <SocialLink href={"https://twitter.com/rin_khimera"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.3em"
                height="1.3em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"
                ></path>
              </svg>
            </SocialLink>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
