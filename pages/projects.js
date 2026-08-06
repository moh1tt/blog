import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import Reveal from '@/components/Reveal'
import { PageSEO } from '@/components/SEO'

const FEATURED_COUNT = 2

export default function Projects() {
  return (
    <>
      <PageSEO
        title={`Projects - ${siteMetadata.author}`}
        description="A list of projects I have built"
      />
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="space-y-2 pt-6 pb-10 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Projects
            </h1>
            <p className="text-md leading-7 text-gray-500 dark:text-gray-400">
              A list of projects that I have been working on or built but not limited to.
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 gap-6 pb-12 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((d, i) => (
            <Card
              key={d.title}
              title={d.title}
              description={d.description}
              imgSrc={d.imgSrc}
              href={d.href}
              github={d.github}
              tech1={d.tech1}
              tech2={d.tech2}
              tech3={d.tech3}
              tech4={d.tech4}
              tech5={d.tech5}
              tech6={d.tech6}
              index={i}
              featured={i < FEATURED_COUNT}
            />
          ))}
        </div>
      </div>
    </>
  )
}
