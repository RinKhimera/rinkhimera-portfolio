"use server"

import ArticleCardHero from "@/components/ArticleCardHero"
import prisma from "@/prisma/db"
import moment from "moment"

export const FetchHeroArticles = async () => {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 3,
  })

  return posts

  // return (
  //   <div className="flex flex-col gap-16">
  //     {posts.map((post, index) => {
  //       const date = moment(post.createdAt).format("MMMM D, YYYY")
  //       return (
  //         <ArticleCardHero
  //           key={index}
  //           title={post.title}
  //           content={post.content}
  //           date={date}
  //         />
  //       )
  //     })}
  //   </div>
  // )
}
