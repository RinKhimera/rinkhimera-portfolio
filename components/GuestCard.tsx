import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type GuestCardProps = {
  name: string
  image: string | null | undefined
  message: string
  date: Date
}

const GuestCard = ({ name, image, message, date }: GuestCardProps) => {
  return (
    <div className="mt-8">
      <div>
        <Avatar>
          <AvatarImage
            src={image as string | undefined}
            alt="Profile picture"
          />
          <AvatarFallback>SP</AvatarFallback>
        </Avatar>
      </div>
      <div>
        <h3></h3>
      </div>
    </div>
  )
}

export default GuestCard
