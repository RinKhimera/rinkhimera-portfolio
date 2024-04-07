import { MiscNav } from "@/components/misc/MiscNav"
import { MotionDiv } from "@/components/shared/MotionFragment"

const MiscellaneousLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mt-10 min-h-full sm:mt-16 lg:mt-20">
      <MotionDiv
        className="max-w-2xl"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          <span className="text-primary">Peek beneath</span> the surface.
        </h1>

        <p className="mt-6 text-base leading-loose text-zinc-600 dark:text-zinc-400">
          I&apos;ve worked on tons of little projects over the years but these
          are the ones that I&apos;m most proud of. Many of them are
          open-source, so if you see something that piques your interest, check
          out the code and contribute if you have ideas for how it can be
          improved.
        </p>
      </MotionDiv>

      <MiscNav />

      <div className="mt-5 rounded-md border border-muted p-4 ring   ring-muted">
        {children}
      </div>
    </div>
  )
}

export default MiscellaneousLayout
