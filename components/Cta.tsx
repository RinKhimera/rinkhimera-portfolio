"use client"

import { motion } from "framer-motion"
import { ArrowDownCircle } from "lucide-react"

const Cta = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  }

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  }

  return (
    <motion.div
      className="mt-14 flex flex-col items-center space-y-8"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ margin: "-200px" }}
    >
      <motion.h1
        className="mx-auto max-w-2xl text-center text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
        variants={item}
      >
        <span className="text-primary">Stay curious! </span>My{" "}
        <span className="text-primary">portfolio</span> awaits, offering a
        curated display of my <span className="text-primary">expertise</span>{" "}
        and <span className="text-primary">creative endeavors.</span>
      </motion.h1>

      <motion.div
        className="p-3 transition-colors hover:text-primary"
        variants={item}
        whileHover={{
          y: 40,
          scale: 1.5,
          transition: { duration: 0.3 },
        }}
      >
        <ArrowDownCircle size={80} />
      </motion.div>
    </motion.div>
  )
}

export default Cta
