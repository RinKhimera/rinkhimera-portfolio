import { auth } from "@/auth"
import { MotionDiv } from "@/components/MotionFragment"
import { GuestBookForm } from "@/components/guestbook/GuestBookForm"
import GuestCard from "@/components/guestbook/GuestCard"
import { SocialLogin } from "@/components/guestbook/SocialLogin"
import { Skeleton } from "@/components/ui/skeleton"
import { Suspense } from "react"

const SkeletonItem = () => (
  <div className="flex items-center space-x-3">
    <Skeleton className="h-12 w-12 rounded-full" />
    <div className="w-full space-y-3">
      <div className="flex justify-between">
        <Skeleton className="h-4 w-[140px] md:w-[200px]" />
        <Skeleton className="h-4 w-[160px] max-sm:hidden" />
      </div>
      <Skeleton className="h-4 w-[240px] md:w-[300px]" />
    </div>
  </div>
)

const Loading = () => (
  <div className="flex flex-col space-y-3">
    {[...Array(4)].map((_, index) => (
      <SkeletonItem key={index} />
    ))}
  </div>
)

const GuestBook = async () => {
  const session = await auth()

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
        {session && <GuestBookForm />}
        <Suspense fallback={<Loading />}>
          <GuestCard />
        </Suspense>
      </MotionDiv>
    </div>
  )
}

export default GuestBook
