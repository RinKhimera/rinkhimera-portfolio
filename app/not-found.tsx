import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="mt-10 h-[55vh] min-h-full max-w-2xl sm:mt-16 lg:mt-20">
      <h1 className="text-9xl font-bold tracking-tight text-primary">404</h1>

      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
        Page <span className="text-primary">not found</span>, but the home page
        is always a welcoming destination.{" "}
        <span className="text-primary">Redirect</span> and{" "}
        <span className="text-primary">regroup!</span>
      </h1>

      <Button
        className="mx-auto mt-10 w-full max-w-xs text-2xl "
        variant={"outline"}
        size={"lg"}
        asChild
      >
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  )
}
