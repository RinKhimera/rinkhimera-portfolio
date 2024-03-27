import "@/app/globals.css"
import SiteFooter from "@/components/SiteFooter"
import SiteHeader from "@/components/SiteHeader"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Samuel Pokam | Web Dev & TypeScript Enthusiast",
  description: "Software engineer, web developer, and TypeScript enthusiast.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex items-center justify-center bg-zinc-50 dark:bg-black">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <main className="min-h-screen w-full max-w-7xl bg-white px-4 ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20 sm:mx-8 sm:px-12 md:px-20 lg:mx-16 xl:px-24">
              <SiteHeader />
              {children}
              <SiteFooter />
            </main>
          </ThemeProvider>
        </div>
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
