"use client"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { miscLinks } from "@/constants"
import { usePathname, useRouter } from "next/navigation"

export const MiscNav = () => {
  const router = useRouter()
  const pathname = usePathname()

  // Set default value based on pathname match
  const defaultTab = miscLinks.find((link) => pathname === link.href)?.text

  return (
    <nav className="mt-8 w-full">
      <Tabs
        defaultValue={defaultTab}
        activationMode="manual"
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-3">
          {miscLinks.map((link) => (
            <TabsTrigger
              key={link.text}
              value={link.text}
              className="text-lg data-[state=active]:bg-primary/50 dark:data-[state=active]:bg-primary/60 max-md:text-base"
              onClick={() => router.push(link.href)}
            >
              {link.text}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </nav>
  )
}
