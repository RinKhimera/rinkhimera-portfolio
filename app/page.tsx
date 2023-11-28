import ArticleCardHero from "@/components/ArticleCardHero"
import Feed from "@/components/Feed"
import Hero from "@/components/Hero"
import { experienceData } from "@/constants"
import FetchArticle from "@/lib/actions/fetchHeroArticle"
import prisma from "@/prisma/db"
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
    </div>
  )
}
