import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
// import { Inter } from "next/font/google"
import SiteHeader from "@/components/SiteHeader";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Samuel Pokam | Web Dev & TypeScript Enthusiast",
  description: "Software engineer, web developer, and TypeScript enthusiast.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-50 dark:bg-black">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="mx-auto min-h-screen w-full max-w-2xl bg-white px-4 ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20 sm:px-12 lg:max-w-4xl xl:max-w-7xl xl:px-24">
            <SiteHeader />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
