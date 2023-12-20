"use client"

import { motion } from "framer-motion"

const BlogHeader = () => {
  return (
    <motion.div
      className="max-w-2xl"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <p className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
        Thoughts <span className="text-primary">shared</span>, creativity{" "}
        <span className="text-primary">ignited</span>
      </p>
      <p className="mt-6 text-base leading-loose text-zinc-600 dark:text-zinc-400">
        Embark on a journey through our blog, where insightful articles and
        creative musings come together
      </p>
    </motion.div>
  )
}

export default BlogHeader
