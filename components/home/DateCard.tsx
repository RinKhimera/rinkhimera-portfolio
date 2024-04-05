"use client"

import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import cat from "@/public/assets/images/cat.jpg"
import { format } from "date-fns"
import { Clock, MapPin } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export const DateCard = () => {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000) // Update every second

    return () => clearInterval(intervalId) // Cleanup on component unmount
  }, []) // Empty dependency array ensures this effect runs only once on mount

  return (
    <Card className="relative h-full">
      {/* Background image */}
      <Image
        src={cat}
        alt="Neko"
        priority={true}
        placeholder="blur"
        className="absolute inset-0 z-10 h-full rounded-lg object-cover brightness-[0.3]"
      />

      {/* Card content */}
      <div className="relative z-20 flex h-full flex-col justify-between py-1.5 text-zinc-100">
        <CardHeader className="px-4 py-0">
          <CardTitle className="space-y-1.5">
            <div className="flex items-center gap-1">
              Douala, CMR
              <MapPin size={20} className="mt-[2px] text-primary" />
            </div>
            <div>{format(currentTime, "EEE, LLL do")}</div>
          </CardTitle>
        </CardHeader>

        <CardFooter className="px-4 py-0">
          <div
            className="flex w-full items-center justify-end text-right text-3xl font-medium tracking-tight"
            suppressHydrationWarning
          >
            <Clock className="mr-1.5 mt-1 text-primary" size={20} />
            {format(currentTime, "HH:mm:ss")}
          </div>
        </CardFooter>
      </div>
    </Card>
  )
}
