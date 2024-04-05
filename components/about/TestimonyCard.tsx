import { Quote } from "lucide-react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"
import { Card } from "../ui/card"

type TestimonyCardProps = {
  image: string
  fallbackImage: string
  name: string
  title: string
  testimony: string
  link: string
}

const TestimonyCard = ({
  image,
  fallbackImage,
  name,
  title,
  testimony,
  link,
}: TestimonyCardProps) => {
  return (
    <Card className="flex max-w-[600px] flex-1 flex-col justify-between space-y-3 bg-zinc-50 px-4 py-3 transition hover:bg-zinc-100 dark:bg-zinc-800/50 dark:hover:bg-zinc-700/50">
      <Quote className="text-primary" size={30} />

      <p className="text-center leading-relaxed">{testimony}</p>

      <Button
        variant={"ghost"}
        size={"testimony"}
        className="flex flex-col hover:bg-zinc-200 dark:hover:bg-accent"
        asChild
      >
        <Link href={link} target="_blank" rel="noopener noreferrer">
          <Avatar className="mx-auto">
            <AvatarImage src={image} alt={name} />
            <AvatarFallback>{fallbackImage}</AvatarFallback>
          </Avatar>

          <div className="text-center">
            <h3 className="text-xl font-semibold text-primary">{name}</h3>

            <h4 className="text-sm text-zinc-600 dark:text-zinc-400">
              {title}
            </h4>
          </div>
        </Link>
      </Button>
    </Card>
  )
}

export default TestimonyCard
