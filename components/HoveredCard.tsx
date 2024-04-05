import { Button } from "@/components/ui/button"
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
        <h3 className="text-center">Crafted with love 💖🚀</h3>
      </HoverCardContent>
    </HoverCard>
  )
}

export default HoveredCard
