import GuestBookForm from "@/components/GuestBookForm"
import GuestCard from "@/components/GuestCard"
import { MotionDiv } from "@/components/MotionDiv"
import { SocialLogin } from "@/components/SocialLogin"
import { Suspense } from "react"
import Loading from "./loading"

const GuestBook = () => {
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
      </MotionDiv>

      <MotionDiv
        className="mt-8 max-w-3xl sm:mt-10"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <SocialLogin />
        <GuestBookForm />
        <Suspense fallback={<Loading />}>
          <GuestCard />
        </Suspense>
      </MotionDiv>
    </div>
  )
}

export default GuestBook
