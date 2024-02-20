import { auth } from "@/auth"
import GuestBookForm from "@/components/GuestBookForm"
import GuestCard from "@/components/GuestCard"
import { MotionDiv } from "@/components/MotionDiv"
import { SocialLogin } from "@/components/SocialLogin"
import { Button } from "@/components/ui/button"
import { fetchAllSignatures } from "@/lib/actions/action"

const GuestBook = async () => {
  const session = await auth()
  const allSignatures = await fetchAllSignatures()

  return (
    <div className="mt-10 min-h-full sm:mt-16 lg:mt-20">
      <MotionDiv
        className="max-w-2xl"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <p className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Make your visit <span className="text-primary">memorable!</span>
        </p>
        <p className="mt-6 text-base leading-loose text-zinc-600 dark:text-zinc-400">
          Leave a lasting impression! Sign my guestbook and let me know you were
          here.
        </p>
        {/* <div>{JSON.stringify(session)}</div> */}
      </MotionDiv>

      <MotionDiv
        className="mt-8 sm:mt-10"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <SocialLogin />
        {session && <GuestBookForm />}
        <div className="flex flex-col space-y-2">
          {allSignatures.map((signature) => (
            <GuestCard
              key={signature.id}
              name={signature.name}
              image={signature.image}
              message={""}
              date={signature.createdAt}
            />
          ))}
        </div>
      </MotionDiv>
    </div>
  )
}

export default GuestBook
