import { auth } from "@/auth"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { fetchAllSignatures } from "@/lib/actions/action"
import { format } from "date-fns"

const GuestCard = async () => {
  const session = await auth()
  const allSignatures = await fetchAllSignatures()

  return (
    <div className="flex flex-col space-y-3">
      {allSignatures.map((signature) => (
        <div key={signature.id} className="flex items-start space-x-3">
          <div className="pt-[5px] ">
            <Avatar>
              <AvatarImage
                src={signature.image as string | undefined}
                alt="Profile picture"
              />
              <AvatarFallback>XO</AvatarFallback>
            </Avatar>
          </div>
          <div className="w-full">
            <div className="flex justify-between text-muted-foreground">
              <h3 className="">{signature.name}</h3>
              <time className="italic">
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

export default GuestCard
