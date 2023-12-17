import { Github, Mail } from "lucide-react"
import Link from "next/link"
import { FaLinkedin } from "react-icons/fa"
import { Button, buttonVariants } from "./ui/button"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card"

const HoveredCard = () => {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <Button
          variant={"link"}
          size={"empty"}
          className="text-base text-primary"
        >
          Samuel Pokam
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-52 rounded-lg border border-zinc-300 bg-card text-card-foreground shadow-sm dark:border-zinc-800">
        <h3 className="text-center">Crafted with love💖🚀</h3>
        <div className="flex justify-center pt-2">
          <Link
            className={buttonVariants({ variant: "ghost", size: "icon" })}
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/RinKhimera"
          >
            <Github />
          </Link>

          <Link
            className={buttonVariants({ variant: "ghost", size: "icon" })}
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/samuel-pokam/"
          >
            <FaLinkedin size={24} />
          </Link>

          <Link
            className={buttonVariants({ variant: "ghost", size: "icon" })}
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:dixiades@gmail.com"
          >
            <Mail />
          </Link>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export default HoveredCard
