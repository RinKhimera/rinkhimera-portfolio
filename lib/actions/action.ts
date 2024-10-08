"use server"

import { auth } from "@/auth"
import prisma from "@/prisma/db"
import { revalidatePath } from "next/cache"
import { z } from "zod"
import { guestbookValidation } from "../validation/formSchema"

export const fetchHeroArticles = async () => {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 3,
  })

  return posts
}

export const fetchBlogArticles = async () => {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
  })

  return posts
}

export const addSignature = async (
  values: z.infer<typeof guestbookValidation>,
) => {
  const session = await auth()

  try {
    await prisma.guest.create({
      data: {
        name: session?.user?.name as string,
        email: session?.user?.email as string,
        image: session?.user?.image,
        message: values.message,
      },
    })
    revalidatePath("/guestbook")
  } catch (error) {
    console.error("Error creating guest signature:", error)
  }
}

export const fetchAllSignatures = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 8000))

  try {
    const allSignatures = await prisma.guest.findMany({
      orderBy: { createdAt: "desc" },
      take: 80,
    })

    return allSignatures
  } catch (error) {
    console.error("Error while fetching guestbook data:", error)
    throw error
  }
}
