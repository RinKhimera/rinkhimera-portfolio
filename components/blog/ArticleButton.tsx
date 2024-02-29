"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import { useRouter } from "next/navigation"

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
