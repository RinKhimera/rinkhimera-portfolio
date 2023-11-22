import ArticleCard from "@/components/ArticleCard"
import { Articles } from "@/constants"
import prisma from "@/prisma/db"
import moment from "moment"

const Blog = async () => {
  const posts = await prisma.post.findMany()
  console.log(posts)

  return (
    <div className="mt-10 min-h-full sm:mt-16 lg:mt-20">
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {/* {Articles.map((article, index) => (
            <ArticleCard
              key={index}
              title={article.title}
              content={article.content}
              date={article.date}
            />
          ))} */}

          {posts.map((post, index) => {
            const date = moment(post.createdAt).format(
              "dddd, MMMM Do YYYY, h:mm:ss a",
            )
            return (
              <ArticleCard
                key={index}
                title={post.title}
                content={post.content}
                date={date}
              />
            )
          })}

          {/* <article className="md:grid md:grid-cols-4 md:items-baseline">
            <div className="group relative flex flex-col items-start md:col-span-3">
              <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
                <a href="/articles/introducing-animaginary">
                  <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                  <span className="relative z-10">
                    Introducing Animaginary: High performance web animations
                  </span>
                </a>
              </h2>
              <time
                className="relative z-10 order-first mb-3 flex items-center pl-3.5 text-sm text-zinc-400 dark:text-zinc-500 md:hidden"
                datetime="2022-09-02"
              >
                <span
                  className="absolute inset-y-0 left-0 flex items-center"
                  aria-hidden="true"
                >
                  <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                </span>
                September 2, 2022
              </time>
              <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                When you’re building a website for a company as ambitious as
                Planetaria, you need to make an impression. I wanted people to
                visit our website and see animations that looked more realistic
                than reality itself.
              </p>
              <div
                aria-hidden="true"
                className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
              >
                Read article
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  className="ml-1 h-4 w-4 stroke-current"
                >
                  <path
                    d="M6.75 5.75 9.25 8l-2.5 2.25"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
            <time
              className="relative z-10 order-first mb-3 mt-1 flex hidden items-center text-sm text-zinc-400 dark:text-zinc-500 md:block"
              dateTime="2022-09-02"
            >
              September 2, 2022
            </time>
          </article> */}

          {/* <article className="md:grid md:grid-cols-4 md:items-baseline">
            <div className="group relative flex flex-col items-start md:col-span-3">
              <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
                <a href="/articles/rewriting-the-cosmos-kernel-in-rust">
                  <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                  <span className="relative z-10">
                    Rewriting the cosmOS kernel in Rust
                  </span>
                </a>
              </h2>
              <time
                className="relative z-10 order-first mb-3 flex items-center pl-3.5 text-sm text-zinc-400 dark:text-zinc-500 md:hidden"
                dateTime="2022-07-14"
              >
                <span
                  className="absolute inset-y-0 left-0 flex items-center"
                  aria-hidden="true"
                >
                  <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                </span>
                July 14, 2022
              </time>
              <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                When we released the first version of cosmOS last year, it was
                written in Go. Go is a wonderful programming language, but it’s
                been a while since I’ve seen an article on the front page of
                Hacker News about rewriting some important tool in Go and I see
                articles on there about rewriting things in Rust every single
                week.
              </p>
              <div
                aria-hidden="true"
                className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
              >
                Read article
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  className="ml-1 h-4 w-4 stroke-current"
                >
                  <path
                    d="M6.75 5.75 9.25 8l-2.5 2.25"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
            <time
              className="relative z-10 order-first mb-3 mt-1 flex hidden items-center text-sm text-zinc-400 dark:text-zinc-500 md:block"
              dateTime="2022-07-14"
            >
              July 14, 2022
            </time>
          </article> */}
        </div>
      </div>
    </div>
  )
}

export default Blog
