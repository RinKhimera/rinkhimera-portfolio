import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { format } from "date-fns"
import { fr } from "date-fns/locale"

type GuestCardProps = {
  name: string
  image: string | null | undefined
  message: string
  date: Date
}

const GuestCard = ({ name, image, message, date }: GuestCardProps) => {
  return (
    <div className="flex items-start space-x-3">
      <div className="pt-[5px] ">
        <Avatar>
          <AvatarImage
            src={image as string | undefined}
            alt="Profile picture"
          />
          <AvatarFallback>XO</AvatarFallback>
        </Avatar>
      </div>
      <div className="w-full">
        <div className="flex justify-between text-muted-foreground">
          <h3 className="">{name}</h3>
          <time className="italic">{format(date, "PPp")}</time>
        </div>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default GuestCard
