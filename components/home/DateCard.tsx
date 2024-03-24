"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import cat from "@/public/assets/images/cat.jpg"
import { format } from "date-fns"
import { Clock, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const DateCard = () => {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    // Update the current time every second
    const intervalId = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId)
  }, []) // Empty dependency array ensures the effect runs only once

  return (
    <>
      <Link
        className="relative h-full "
        href="http://github.com/arnvgh"
        target="_blank"
      >
        <Card className="relative h-full">
          {/* Background image */}
          <Image
            src={cat}
            alt="cat img"
            className="absolute inset-0 z-10 h-full rounded-lg object-cover brightness-[0.3]"
          />

          {/* Card content */}
          <div className="relative z-20 flex h-full flex-col justify-between text-white">
            <CardHeader className="p-4">
              <CardTitle className="space-y-1.5">
                <div className="flex items-center gap-1">
                  Douala, CMR{" "}
                  <MapPin
                    size={20}
                    className="mt-[2px] text-muted-foreground"
                  />
                </div>
                <div className="">{format(currentTime, "EEE, LLL do")}</div>
              </CardTitle>
            </CardHeader>
            <CardFooter className="max-xl:p-4">
              <div className="flex w-full items-center justify-end text-right text-3xl font-medium">
                <Clock
                  className="mr-1.5 mt-1 text-muted-foreground"
                  size={20}
                />
                {format(currentTime, "HH:mm:ss")}
              </div>
            </CardFooter>
          </div>
        </Card>
      </Link>
    </>
  )
}

export default DateCard
