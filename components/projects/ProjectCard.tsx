import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"
import Image, { StaticImageData } from "next/image"

type ProjectCardProps = {
  name: string
  imageSrc: StaticImageData
  imageAlt: string
  description: string
  demoLink: string
  githubLink: string
  stacks: string[]
}

const ProjectCard = ({
  name,
  imageSrc,
  imageAlt,
  description,
  demoLink,
  githubLink,
  stacks,
}: ProjectCardProps) => {
  return (
    <Card className="group border bg-zinc-50 text-center transition-shadow duration-500 hover:shadow-2xl hover:shadow-secondary dark:bg-zinc-800/50">
      <div className="relative aspect-video overflow-hidden rounded-t-lg">
        <Image
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          src={imageSrc}
          alt={imageAlt}
          placeholder="blur"
          quality={10}
          priority
          fill
        />

        <div className="absolute z-30 flex h-full w-full items-center justify-center overflow-hidden bg-background/80 backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-0">
          <p className="text-3xl font-semibold uppercase italic">{name}</p>
        </div>
      </div>

      <CardContent className="mt-5">
        <CardTitle className="text-primary">{name}</CardTitle>
        <CardDescription className="mx-auto mt-1 max-w-xs">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  )
}

export default ProjectCard
