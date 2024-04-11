import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { fetchAllSignatures } from "@/lib/actions/action"
import { format } from "date-fns"

export const GuestCard = async () => {
  const allSignatures = await fetchAllSignatures()

  const createInitials = (name: string): string => {
    const words = name.split(" ")
    const initials = words
      .slice(0, 2)
      .map((word) => word.charAt(0).toUpperCase())
      .join("")
    return initials
  }

  return (
    <div className="flex flex-col space-y-3">
      {allSignatures.map((signature) => (
        <div key={signature.id} className="flex items-start space-x-3">
          <div className="pt-[5px]">
            <Avatar>
              <AvatarImage
                src={signature.image as string | undefined}
                alt="Profile picture"
              />
              <AvatarFallback>{createInitials(signature.name)}</AvatarFallback>
            </Avatar>
          </div>
          <div className="w-full">
            <div className="flex justify-between text-muted-foreground">
              <h3>{signature.name}</h3>
              <time className="italic max-sm:hidden">
                {format(signature.createdAt, "PPp")}
              </time>
            </div>
            <p>{signature.message}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
