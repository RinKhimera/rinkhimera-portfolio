"use server"

import prisma from "@/prisma/db"

export const FetchHeroArticles = async () => {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 3,
  })

  return posts
}
