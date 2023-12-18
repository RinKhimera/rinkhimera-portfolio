"use client"

import { experienceData } from "@/constants"
import { motion } from "framer-motion"
import { Briefcase, Download } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import { Card, CardHeader, CardTitle } from "./ui/card"

const ExperienceCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ margin: "-100px", once: true }}
      transition={{ duration: 0.25 }}
    >
      <Card className="max-w-2xl bg-zinc-50 p-6 transition hover:bg-zinc-100 dark:bg-zinc-800/50 dark:hover:bg-zinc-700/50">
        <CardHeader className="p-1">
          <CardTitle className="flex items-center font-semibold text-zinc-900 dark:text-zinc-100 max-sm:text-lg">
            <Briefcase />
            <span className="ml-3">Work</span>
          </CardTitle>
        </CardHeader>

        <ol className="mt-4 space-y-3">
          {experienceData.map((item, index) => (
            <li className="flex gap-4" key={index}>
              <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image src={item.logo} alt={item.company} />
              </div>

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

        <Button
          className="mt-7 h-9 w-full bg-primary/90 text-base hover:bg-primary"
          asChild
        >
          <Link
            href="/docs/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
            <Download className="ml-2" size={20} />
          </Link>
        </Button>
      </Card>
    </motion.div>
  )
}

export default ExperienceCard
