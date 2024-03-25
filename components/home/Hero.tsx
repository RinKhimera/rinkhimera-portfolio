import { MotionDiv, MotionH1, MotionSpan } from "@/components/MotionFragment"
import images from "@/public/assets/images"
import Image from "next/image"

const imageSources = [
  images.image1,
  images.image2,
  images.image3,
  images.image4,
  images.image5,
]

const Hero = () => {
  return (
    <div className="mb-[450px] max-w-4xl max-sm:mb-[370px]">
      <MotionDiv
        className="max-w-3xl"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="mb-2 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Hey! I&apos;m <span className="text-primary">Samuel Pokam.</span>
        </h1>

        <span className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
          &gt; Software engineer, web developer, and{" "}
          <span className="text-blue-600">TypeScript </span>
          enthusiast.
        </span>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          Welcome to my world, where pixel-perfect craftsmanship meets seamless
          functionality. Specializing in scalable real-time systems and
          networking innovation, I bring your vision to life with precision and
          flair!
        </p>
      </MotionDiv>

      <div className="absolute left-0 right-0 mt-16 sm:mt-10">
        <MotionDiv
          className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {imageSources.map((src, index) => (
            <div
              key={index}
              className={`relative aspect-[9/10] w-44 flex-none ${
                index % 2 === 0 ? "rotate-2" : "-rotate-2"
              } overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl`}
            >
              <Image
                src={src}
                alt={`Image-${index + 1}`}
                className="absolute inset-0 h-full w-full object-cover"
                placeholder="blur"
                priority={true}
              />
            </div>
          ))}
        </MotionDiv>
      </div>
    </div>
  )
}

export default Hero
