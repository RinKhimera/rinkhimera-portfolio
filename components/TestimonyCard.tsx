import { Quote } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Card } from "./ui/card"

const TestimonyCard = () => {
  return (
    <Card className="mt-10 w-80 bg-zinc-50 p-5 transition hover:bg-zinc-100 dark:bg-zinc-800/50 dark:hover:bg-zinc-700/50">
      <Quote className="mb-5 text-primary" size={30} />

      <div className="flex flex-col items-center space-y-4">
        <p className="text-center text-sm">
          Working with [Your Name] was a game-changer for my online presence.
          Their expertise in web development transformed my ideas into a
          stunning and functional website. The attention to detail, quick
          turnaround, and seamless communication made the entire process a
          pleasure. I highly recommend [Your Name] for anyone seeking a skilled
          and reliable web developer.
        </p>

        <Avatar>
          <AvatarImage src="/assets/images/avatar.webp" alt="@shadcn" />
          <AvatarFallback>SP</AvatarFallback>
        </Avatar>

        <div className="text-center">
          <h3 className="text-lg font-semibold text-primary">
            Christian Kouakam
          </h3>

          <h4 className="text-sm text-zinc-600 dark:text-zinc-400">
            CEO | Software Engineer MEAN | MERN | Java | AWS | DevOps
          </h4>
        </div>
      </div>
    </Card>
  )
}

export default TestimonyCard
