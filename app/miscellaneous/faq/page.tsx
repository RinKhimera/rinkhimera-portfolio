import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Samuel Pokam | Faqs",
  description: "Software engineer, web developer, and TypeScript enthusiast.",
}

const FaqPage = () => {
  return (
    <section>
      <h1 className="text-center text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 md:text-5xl">
        Frequently asked question
      </h1>

      <Accordion
        type="single"
        collapsible
        className="my-4 w-full leading-relaxed md:px-5"
      >
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
          <AccordionTrigger>
            What setup are you employing for coding?
          </AccordionTrigger>
          <AccordionContent>
            I&apos;ve provided detailed information about my setup on the{" "}
            <Link
              href="/miscellaneous/uses"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-800 hover:underline dark:text-zinc-100"
            >
              Uses
            </Link>{" "}
            page of this site.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>
            How did you learn to code? Can you share some resources?
          </AccordionTrigger>
          <AccordionContent>
            Having a clear roadmap from the start is key to staying focused and
            not getting lost in your learning journey.{" "}
            <Link
              href="https://www.freecodecamp.org/learn/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="FreeCodeCamp Learn website"
              className="text-zinc-800 hover:underline dark:text-zinc-100"
            >
              FreeCodeCamp
            </Link>{" "}
            is a fantastic beginner-friendly resource that has helped me learn
            the basics of web development for free. After that, it&apos;s all
            about hands-on practice with mini-projects, trying out different
            things, and don&apos;t forget to read the documentation.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>
            What is your favorite web framework?
          </AccordionTrigger>
          <AccordionContent>
            I prefer{" "}
            <Link
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Next.js - The React Framework for the Web"
              className="text-zinc-800 hover:underline dark:text-zinc-100"
            >
              Next.js
            </Link>{" "}
            as my go-to framework due to its server-side rendering, smooth
            routing, and seamless integration with React. It enables the
            creation of robust and scalable full-stack web applications.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
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

        <AccordionItem value="item-6">
          <AccordionTrigger>
            What are some of your favorite YouTube channels?
          </AccordionTrigger>
          <AccordionContent>
            Regarding techs channels, there are plenty of them, but{" "}
            <Link
              href="https://www.youtube.com/@Fireship"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-800 hover:underline dark:text-zinc-100"
            >
              Fireship
            </Link>
            ,{" "}
            <Link
              href="https://www.youtube.com/@WebDevSimplified"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-800 hover:underline dark:text-zinc-100"
            >
              Web Dev Simplified
            </Link>
            ,{" "}
            <Link
              href="https://www.youtube.com/@ByteGrad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-800 hover:underline dark:text-zinc-100"
            >
              ByteGrad
            </Link>
            , and{" "}
            <Link
              href="https://www.youtube.com/@t3dotgg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-800 hover:underline dark:text-zinc-100"
            >
              Theo - t3.gg
            </Link>{" "}
            are among my favorites.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7">
          <AccordionTrigger>
            Could I take a look at the source code of your website?
          </AccordionTrigger>
          <AccordionContent>
            Apologies, the source code is currently unavailable for public
            viewing as the{" "}
            <Link
              href="https://github.com/RinKhimera/rinkhimera-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile Samuel Pokam"
              className="text-zinc-800 hover:underline dark:text-zinc-100"
            >
              repository
            </Link>{" "}
            remains private. If you&apos;re a recruiter, please feel free to
            reach out via{" "}
            <Link
              href="mailto:dixiades@gmail.com"
              aria-label="Email to me"
              className="text-zinc-800 hover:underline dark:text-zinc-100"
            >
              email
            </Link>{" "}
            or{" "}
            <Link
              href="https://www.linkedin.com/in/samuel-pokam/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile Samuel Pokam"
              className="text-zinc-800 hover:underline dark:text-zinc-100"
            >
              LinkedIn
            </Link>{" "}
            for further information.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default FaqPage
