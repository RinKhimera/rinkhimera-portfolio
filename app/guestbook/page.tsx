import { auth, signIn, signOut } from "@/auth"
import { Button } from "@/components/ui/button"

const GuestBook = async () => {
  const session = await auth()

  return (
    <div>
      {/* <Button onClick={() => signIn("github")}>Sign In Github</Button> */}

      <form
        action={async () => {
          "use server"
          await signIn("google", {
            redirectTo: "/guestbook",
          })
        }}
      >
        <Button type="submit">Sign In Github</Button>
      </form>

      <form
        action={async () => {
          "use server"
          await signOut()
        }}
      >
        <Button type="submit">Sign Out</Button>
      </form>

      <div>{JSON.stringify(session)}</div>
    </div>
  )
}

export default GuestBook
