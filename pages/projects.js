import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import Reveal from '@/components/Reveal'
import { PageSEO } from '@/components/SEO'

export default function Projects() {
  return (
    <>
      <PageSEO
        title={`Projects - ${siteMetadata.author}`}
        description="A list of projects I have built"
      />
      <div className="mx-auto max-w-7xl divide-y divide-gray-400 dark:divide-gray-700">
        <Reveal>
          <div className="space-y-2 pt-6 pb-8 md:space-y-5">
            <h1 className="font-mono text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl">
              Projects
            </h1>
            <p className="text-md max-w-2xl leading-7 text-gray-500 dark:text-gray-400">
              A selection of things I've built and researched — spanning neural networks, deep
              learning, statistics, finance, and math.
            </p>
          </div>
        </Reveal>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                href={d.href}
                github={d.github}
                tech1={d.tech1}
                tech2={d.tech2}
                tech3={d.tech3}
                tech4={d.tech4}
                tech5={d.tech5}
                tech6={d.tech6}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
