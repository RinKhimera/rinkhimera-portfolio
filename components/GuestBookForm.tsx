import { auth } from "@/auth"
import GuestForm from "./GuestForm"

const GuestBookForm = async () => {
  const session = await auth()

  if (!session) return null

  return (
    <div>
      <GuestForm />
    </div>
  )
}

export default GuestBookForm
