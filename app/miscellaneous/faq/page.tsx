import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"

const FaqPage = () => {
  return (
    <section>
      <h1 className="text-center text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 md:text-5xl">
        Frequently asked question
      </h1>

      <Accordion type="single" collapsible className="mt-4 w-full md:px-5">
        <AccordionItem value="item-1">
          <AccordionTrigger>When did you start coding?</AccordionTrigger>
          <AccordionContent>
            My initial exhibition occurred during my teenage years when I was
            exploring photo editing and design. However, it wasn&apos;t until I
            reached the end of my university journey, at the age of 24, that I
            committed myself fully to learning coding.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Can I see your resume?</AccordionTrigger>
          <AccordionContent>
            Certainly! If you&apos;re a recruiter, please contact me via email
            at{" "}
            <Link
              href="mailto:dixiades@gmail.com"
              aria-label="Email to me"
              className="text-zinc-800 hover:underline dark:text-zinc-100"
            >
              dixiades@gmail.com.
            </Link>{" "}
            You can also find my{" "}
            <Link
              href="https://www.linkedin.com/in/samuel-pokam/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile Samuel Pokam"
              className="text-zinc-800 hover:underline dark:text-zinc-100"
            >
              LinkedIn
            </Link>{" "}
            profile here.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default FaqPage
