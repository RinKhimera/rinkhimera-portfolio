import { Card, CardContent } from "@/components/ui/card"
import pochita from "@/public/assets/images/pochita.jpg"
import { Github, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"

export const SocialCard = () => {
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
      <CardContent className="relative z-20 flex h-full flex-col justify-between p-4 px-0 text-zinc-100">
        <div className="flex flex-col items-center justify-center text-xl font-semibold">
          <div className="text-center leading-5 text-zinc-200">
            Last week&apos;s coding hours
          </div>
          <span className="text-4xl underline decoration-primary decoration-8 underline-offset-8">
            65h
          </span>
        </div>

        <div className="mt-8 flex h-full justify-between gap-1 px-2">
          <Link
            href={"/"}
            rel="noopener noreferrer"
            target="_blank"
            className="flex w-full items-center justify-center rounded-md border border-primary/30 bg-zinc-900/50 hover:bg-zinc-900/70"
          >
            <Github />
          </Link>
          <Link
            href={"/"}
            rel="noopener noreferrer"
            target="_blank"
            className="flex w-full items-center justify-center rounded-md border border-primary/30 bg-zinc-900/50 hover:bg-zinc-900/70"
          >
            <Linkedin />
          </Link>
          <Link
            href={"/"}
            rel="noopener noreferrer"
            target="_blank"
            className="flex w-full items-center justify-center rounded-md border border-primary/30 bg-zinc-900/50 hover:bg-zinc-900/70"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"
              ></path>
            </svg>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
