import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ApiResponseProps } from "@/types/wakatimeApiTypes"
import { ExternalLink } from "lucide-react"

async function getData() {
  const apiKey = "waka_5d0c089c-4cfc-4d7b-9758-435a71677fc9"
  const res = await fetch(
    "https://wakatime.com/api/v1/users/rinkhimera/stats/last_30_days",
    {
      headers: {
        Authorization: `Basic ${apiKey}`,
      },
    },
  )

  return res.json()
}

export const CodeActivityCard = async () => {
  const apiResponse: ApiResponseProps = await getData()

  const codingLanguages = apiResponse.data.languages

  return (
    <>
      <Card className="scrollbar-hide relative h-full overflow-auto bg-zinc-50 dark:bg-zinc-800">
        <CardHeader className="sticky left-0 right-0 top-0 z-10 bg-gradient-to-t from-transparent to-zinc-50 to-10% p-3 pb-4 dark:to-zinc-800">
          <CardTitle className="flex justify-between text-xl font-semibold text-zinc-800 dark:text-zinc-100">
            <div>Code Activities</div>
            <Badge variant="outline">Last 30 days</Badge>
          </CardTitle>
        </CardHeader>

        <CardContent className="px-3">
          <div className="flex flex-col space-y-3">
            {codingLanguages.map((language) => (
              <div key={language.name} className="flex flex-col space-y-1">
                <div className="flex justify-between">
                  <div className="flex space-x-2">
                    <div className="font-semibold tracking-tight">
                      {language.name}
                    </div>
                    <div className="font-medium text-muted-foreground">
                      {language.hours}h{language.minutes}m
                    </div>
                  </div>

                  <div className="font-medium text-muted-foreground">
                    {language.percent}%
                  </div>
                </div>

                <Progress className="h-1.5 bg-white" value={language.percent} />
              </div>
            ))}
          </div>
        </CardContent>

        <CardFooter className="sticky bottom-0 left-0 right-0 z-10 bg-zinc-50 p-3 dark:bg-zinc-800">
          <Button className="w-full" variant={"outline"}>
            See more on WakaTime
            <ExternalLink size={14} className="ml-2" />
          </Button>
        </CardFooter>
      </Card>
    </>
  )
}
