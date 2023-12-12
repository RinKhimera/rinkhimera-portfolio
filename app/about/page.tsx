import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { portrait } from "@/public/assets/images"
import Image from "next/image"
import Link from "next/link"

const About = () => {
  return (
    <>
      <div className="mt-10 min-h-full sm:mt-16 lg:mt-20">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portrait}
                alt="portrait"
                placeholder="blur"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>

          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Navigating the digital realm as a{" "}
              <span className="text-primary">full-stack developer,</span> I
              specialize in the art of simplifying the complex and automating
              the routine for a{" "}
              <span className="text-primary">seamless digital experience.</span>
            </h1>
            <div className="mt-6 space-y-7 text-base leading-loose text-zinc-600 dark:text-zinc-400">
              <p>
                I started playing with computers when I was 10 years old. Since
                then I have been tinkering with all sorts of technologies that
                in some way or another led me to work on photo and video
                editing, design, and ultimately to web development.
              </p>
              <p>
                As a software engineer, I enjoy bridging the gap between
                engineering and design — combining my technical knowledge with
                my keen eye for design to create a beautiful product.
              </p>
              <p>
                When I&apos;m not in front of my coding screen, I&apos;m
                probably watching an anime, hanging out with my family, or
                carrying my team in the <b>Summoner&apos;s Rift</b> .
              </p>
            </div>
          </div>

          <div className="lg:pl-20">
            <Card className="bg-zinc-50 transition hover:bg-zinc-100 dark:bg-zinc-800/50 dark:hover:bg-zinc-700/50">
              <CardHeader>
                <CardTitle>
                  My main <span className="text-primary">stacks</span> and{" "}
                  <span className="text-primary">frameworks.</span>
                </CardTitle>
                <CardDescription>
                  Your message is the first step to a great collaboration.
                </CardDescription>
              </CardHeader>

              <CardContent></CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
