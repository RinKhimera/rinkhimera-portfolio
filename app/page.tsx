import ArticleCardHero from "@/components/ArticleCardHero"
import CtaButton from "@/components/CtaButton"
import Feed from "@/components/Feed"
import Hero from "@/components/Hero"
import { Button } from "@/components/ui/button"
import { experienceData } from "@/constants"
import prisma from "@/prisma/db"
import { motion } from "framer-motion"
import { Briefcase, Github, Linkedin, LinkedinIcon, Mail } from "lucide-react"
import moment from "moment"
import Image from "next/image"
import Link from "next/link"

import { MdOutlineWorkOutline } from "react-icons/md"

export default function Home() {
  return (
    <div className="mt-10 min-h-full sm:mt-16 lg:mt-20">
      <Hero />
      <Feed />
      <CtaButton />
    </div>
  )
}
