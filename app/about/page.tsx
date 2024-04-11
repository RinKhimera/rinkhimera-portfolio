import { TestimonyCard } from "@/components/about/TestimonyCard"
import { MotionDiv, MotionH1 } from "@/components/shared/MotionFragment"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { stacks, testimonials } from "@/constants"
import images from "@/public/assets/images"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Samuel Pokam | About",
  description: "Software engineer, web developer, and TypeScript enthusiast.",
}

const About = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  }

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  }

  return (
    <div className="mt-10 min-h-full sm:mt-16 lg:mt-20">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <MotionDiv
          className="lg:pl-20"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={images.portrait}
              alt="portrait"
              placeholder="blur"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </MotionDiv>

        <div className="lg:order-first lg:row-span-2">
          <MotionH1
            className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            Navigating the digital realm as a{" "}
            <span className="text-primary">full-stack developer,</span> I
            specialize in the art of simplifying the complex and automating the
            routine for a{" "}
            <span className="text-primary">seamless digital experience.</span>
          </MotionH1>

          <MotionDiv
            className="mt-6 space-y-7 text-base leading-loose text-zinc-600 dark:text-zinc-400 max-lg:mt-12"
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <p>
              I started playing with computers when I was 10 years old. Since
              then I have been tinkering with all sorts of technologies that in
              some way or another led me to work on photo and video editing,
              design, and ultimately to web development.
            </p>

            <p>
              As a software engineer, I enjoy bridging the gap between
              engineering and design — combining my technical knowledge with my
              keen eye for design to create a beautiful product.
            </p>

            <p>
              When I&apos;m not in front of my coding screen, I&apos;m probably
              watching an anime, hanging out with my family, or carrying my team
              in the <b>Summoner&apos;s Rift.</b>
            </p>
          </MotionDiv>
        </div>

        <MotionDiv
          className="lg:pl-20"
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
        >
          <Card className="bg-zinc-50 transition hover:bg-zinc-100 dark:bg-zinc-800/50 dark:hover:bg-zinc-700/50">
            <CardHeader>
              <div className="text-2xl font-semibold leading-tight tracking-tight">
                My key <span className="text-primary">languages</span> and{" "}
                <span className="text-primary">frameworks</span> I rely on.
              </div>

              <CardDescription>
                The primary resources I leverage to complete my various
                projects.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div className="flex flex-wrap justify-between gap-1">
                {stacks.map((stack, index) => (
                  <Button
                    key={index}
                    variant={"ghost"}
                    size={"stack"}
                    className="hover:bg-zinc-200 dark:hover:bg-accent"
                    asChild
                  >
                    <Link href={stack.href} target="_blank" rel="noreferrer">
                      <div className="flex flex-col items-center space-y-1">
                        <div className="flex h-12 w-12 items-center justify-center">
                          {stack.icon}
                        </div>
                        <h2 className="text-sm text-zinc-600 dark:text-zinc-400">
                          {stack.name}
                        </h2>
                      </div>
                    </Link>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </MotionDiv>
      </div>

      <div className="mt-14">
        <h1 className="mx-auto max-w-3xl text-center text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          <span className="text-primary">Insights</span> into my web development{" "}
          <span className="text-primary">partnerships.</span>
        </h1>

        <MotionDiv
          className="mt-10 flex gap-5 max-lg:flex-col max-lg:items-center"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ margin: "-100px" }}
        >
          {testimonials.map((testimony, index) => (
            <MotionDiv key={index} variants={item} className="flex">
              <TestimonyCard
                image={testimony.image}
                fallbackImage={testimony.fallbackImage}
                name={testimony.name}
                title={testimony.title}
                testimony={testimony.testimony}
                link={testimony.link}
              />
            </MotionDiv>
          ))}
        </MotionDiv>
      </div>
    </div>
  )
}

export default About
