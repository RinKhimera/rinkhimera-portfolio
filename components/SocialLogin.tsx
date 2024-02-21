import { auth, signIn, signOut } from "@/auth"
import { Button } from "@/components/ui/button"
import { FaGithub } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"

export const SocialLogin = async () => {
  const session = await auth()

  if (session) {
    return (
      <div className="mb-5 space-y-1">
        <h2>
          You are signed in as{" "}
          <span className="font-semibold">{session.user?.name}.</span>
        </h2>
        <form
          action={async () => {
            "use server"
            await signOut()
          }}
        >
          <Button type="submit" variant={"outline"}>
            Sign Out
          </Button>
        </form>
      </div>
    )
  }

  return (
    <div className="mb-5 space-y-1">
      <h2>Sign In to leave a message!</h2>

      <div className="flex gap-2">
        <form
          action={async () => {
            "use server"
            await signIn("github", {
              redirectTo: "/guestbook",
            })
          }}
        >
          <Button type="submit" variant="outline">
            <FaGithub className="mr-3 h-5 w-5" />
            Sign in with GitHub
          </Button>
        </form>

        <form
          action={async () => {
            "use server"
            await signIn("google", {
              redirectTo: "/guestbook",
            })
          }}
        >
          <Button type="submit" variant="outline">
            <FcGoogle className="mr-3 h-5 w-5" />
            Sign in with Google
          </Button>
        </form>
      </div>
    </div>
  )
}
