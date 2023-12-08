"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRightCircle } from "lucide-react"
import Link from "next/link"

const CtaButton = () => {
  return (
    <div>
      <motion.div
        className="mx-auto mt-20 max-w-sm"
        whileHover={{
          scale: 1.2,
        }}
      >
        <Button className="w-full text-lg" variant="outline" size="lg" asChild>
          <Link href="/about">
            About Me <ArrowRightCircle className="ml-2" />
          </Link>
        </Button>
      </motion.div>
    </div>
  )
}

export default CtaButton
