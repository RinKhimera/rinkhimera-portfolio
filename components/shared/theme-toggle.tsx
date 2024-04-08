"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Toggle } from "@/components/ui/toggle"
import { Moon, MoonIcon, Sun, SunIcon, Tv2 } from "lucide-react"
import { useTheme } from "next-themes"
import * as React from "react"

export const HeaderToggle = () => {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <SunIcon className="h-[1.4rem] w-[1.4rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.4rem] w-[1.4rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export const FooterToggle = () => {
  const { setTheme, theme } = useTheme()
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    // When the theme is available, set isLoading to false
    if (theme !== undefined) {
      setIsLoading(false)
    }
  }, [theme]) // Run this effect whenever the theme changes

  // Render loading state until the theme is available
  if (isLoading) {
    return null
  }

  console.log(theme)

  return (
    <div className="w-fit rounded-full border border-zinc-200 px-1 py-1 dark:border-zinc-600/40">
      <Toggle
        className="text-muted-foreground hover:text-inherit"
        aria-label="Toggle light mode"
        pressed={theme === "light"}
        onPressedChange={(pressed) => {
          if (pressed) {
            setTheme("light")
          }
        }}
      >
        <Sun className="h-4 w-4" />
      </Toggle>
      <Toggle
        className="text-muted-foreground hover:text-inherit"
        aria-label="Toggle system mode"
        pressed={theme === "system"}
        onPressedChange={(pressed) => {
          if (pressed) {
            setTheme("system")
          }
        }}
      >
        <Tv2 className="h-4 w-4" />
      </Toggle>
      <Toggle
        className="text-muted-foreground hover:text-inherit"
        aria-label="Toggle dark mode"
        pressed={theme === "dark"}
        onPressedChange={(pressed) => {
          if (pressed) {
            setTheme("dark")
          }
        }}
      >
        <Moon className="h-4 w-4" />
      </Toggle>
    </div>
  )
}
