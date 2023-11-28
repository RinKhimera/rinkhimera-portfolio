"use client"

import { experienceData } from "@/constants"
import { motion } from "framer-motion"
import {
  ArrowDownToLine,
  Briefcase,
  Download,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"

const ExperienceCard = () => {
  return (
    <motion.div
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ margin: "-200px 0px -100px 0px", once: true }}
      transition={{ duration: 0.25, delay: 0 }}
    >
      <h2 className="flex font-semibold text-zinc-900 dark:text-zinc-100">
        <Briefcase />
        <span className="ml-3">Work</span>
      </h2>

      <ol className="mt-6 space-y-4">
        {experienceData.map((item, index) => (
          <li className="flex gap-4" key={index}>
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"></div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-base font-medium text-zinc-900 dark:text-zinc-100">
                {item.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-sm text-zinc-500 dark:text-zinc-400">
                {item.role}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-sm text-zinc-400 dark:text-zinc-500"
                aria-label={item.date}
              >
                {item.date}
              </dd>
            </dl>
          </li>
        ))}
      </ol>

      <Button className="mt-10 w-full text-base" variant="default" asChild>
        <Link href="/docs/resume.pdf" target="_blank" rel="noopener noreferrer">
          Download CV
          <Download className="ml-2" />
        </Link>
      </Button>
    </motion.div>
  )
}

export default ExperienceCard
