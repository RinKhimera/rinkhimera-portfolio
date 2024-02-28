import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { ExternalLink, Github } from "lucide-react"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"

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
    <Dialog>
      <DialogTrigger className="h-full w-full rounded-lg ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
        <Card className="group min-h-full border bg-zinc-50 text-center transition-shadow duration-500 hover:shadow-2xl hover:shadow-secondary dark:bg-zinc-800/50">
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

            <div className="absolute z-30 flex h-full w-full bg-background/50 backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-0"></div>
          </div>

          <CardContent className="mt-5">
            <CardTitle className="text-primary">{name}</CardTitle>
            <CardDescription className="mx-auto mt-1 max-w-xs text-base">
              {description}
            </CardDescription>
          </CardContent>
        </Card>
      </DialogTrigger>

      <DialogContent className="max-w-2xl border-muted shadow-2xl shadow-secondary">
        <DialogHeader>
          <DialogTitle className="text-2xl text-primary">{name}</DialogTitle>
          <DialogDescription>
            <AspectRatio ratio={16 / 9} className="mt-3 rounded-lg bg-muted">
              <Image
                className="rounded-md object-cover"
                src={imageSrc}
                alt={imageAlt}
                placeholder="blur"
                quality={50}
                fill
              />
            </AspectRatio>
          </DialogDescription>
        </DialogHeader>

        <p className="text-muted-foreground">{description}</p>

        <ul className="flex items-center gap-x-2 border-y border-muted py-3">
          <li className="text-lg font-semibold">Stacks:</li>
          <div className="flex flex-wrap justify-start gap-2">
            {stacks.map((stack) => (
              <div
                key={stack}
                className="rounded-lg bg-white px-2 py-1 text-sm font-semibold text-zinc-800 shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:text-zinc-100 dark:ring-0"
              >
                {stack}
              </div>
            ))}
          </div>
        </ul>

        <div className="flex justify-center space-x-3">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({
                    variant: "ghost",
                    size: "icon",
                  })}
                >
                  <ExternalLink />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>GitHub Repository</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({
                    variant: "ghost",
                    size: "icon",
                  })}
                >
                  <Github />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Live Project</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default ProjectCard
