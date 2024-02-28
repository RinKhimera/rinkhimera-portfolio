import { MotionDiv } from "@/components/MotionDiv"
import ProjectCard from "@/components/projects/ProjectCard"
import { projects } from "@/constants"

const Projects = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0.3,
        delayChildren: 0.4,
        staggerChildren: 0.15,
      },
    },
  }

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  }

  return (
    <div className="mt-10 min-h-full sm:mt-16 lg:mt-20">
      <MotionDiv
        className="max-w-2xl"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          A <span className="text-primary">collection</span> of my projects
          designed to make <span className="text-primary">waves</span> in the
          vast digital ocean.
        </h1>

        <p className="mt-6 text-base leading-loose text-zinc-600 dark:text-zinc-400">
          I&apos;ve worked on tons of little projects over the years but these
          are the ones that I&apos;m most proud of. Many of them are
          open-source, so if you see something that piques your interest, check
          out the code and contribute if you have ideas for how it can be
          improved.
        </p>
      </MotionDiv>

      <MotionDiv
        variants={container}
        initial="hidden"
        animate="show"
        className="mt-8 grid max-w-5xl gap-5 rounded-lg border border-zinc-300 p-5 text-card-foreground shadow-sm dark:border-zinc-800 md:grid-cols-2 xl:grid-cols-3"
      >
        {projects.map((project) => (
          <MotionDiv key={project.name} variants={item}>
            <ProjectCard
              name={project.name}
              imageSrc={project.imageSrc}
              imageAlt={project.imageAlt}
              description={project.description}
              demoLink={project.demoLink}
              githubLink={project.githubLink}
              stacks={project.stacks}
            />
          </MotionDiv>
        ))}
      </MotionDiv>
    </div>
  )
}

export default Projects
