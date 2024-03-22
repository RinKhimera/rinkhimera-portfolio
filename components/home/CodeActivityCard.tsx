import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ApiResponseProps } from "@/types/wakatimeApi"

async function getData() {
  const res = await fetch("https://wakatime.com/api/v1/users/arnvgh/stats")
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data")
  }
  // console.log(res.json())
  return res.json()
}

export const CodeActivityCard = async () => {
  const apiResponse: ApiResponseProps = await getData()

  // console.log(apiResponse.data.languages)

  const codingLanguages = apiResponse.data.languages

  return (
    <>
      <Card className="h-full bg-zinc-700/40">
        <CardHeader className="p-3">
          <CardTitle className="flex justify-between text-base">
            <div>Code Activities</div>
            <Badge variant="secondary">Last 30 days</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="px-3">
          <div className="flex flex-col">
            {codingLanguages.map((language) => (
              <div key={language.name}>
                <div className="flex justify-between">
                  <div>{language.name}</div>
                  <div>{language.percent}%</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="px-3">
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </>
  )
}
