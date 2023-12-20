"use client"

import { ChevronLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "./ui/button"

const ArticleButton = () => {
  const router = useRouter()

  return (
    <Button
      className="mb-6 flex h-12 w-12 rounded-full transition"
      onClick={() => router.back()}
      variant={"secondary"}
      size={"icon"}
    >
      <ChevronLeft />
    </Button>
  )
}

export default ArticleButton
