import { motion } from 'framer-motion'
import Image from './Image'
import SocialIcon from './social-icons'
import ProjectCover from './ProjectCover'

const Card = ({
  title,
  description,
  imgSrc,
  href,
  github,
  tech1,
  tech2,
  tech3,
  tech4,
  tech5,
  tech6,
  index = 0,
  featured = false,
}) => {
  const techs = [tech1, tech2, tech3, tech4, tech5, tech6].filter(Boolean)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`h-full ${featured ? 'lg:col-span-2' : ''}`}
    >
      <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-500/40 hover:shadow-xl hover:shadow-primary-500/10 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-primary-500/40">
        <div className="overflow-hidden">
          <div className="transition-transform duration-500 group-hover:scale-105">
            {imgSrc ? (
              <Image
                src={imgSrc}
                alt={title}
                width={800}
                height={450}
                className="aspect-[16/9] w-full object-cover"
              />
            ) : (
              <ProjectCover title={title} index={index} />
            )}
          </div>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="mb-3 flex items-start justify-between gap-3">
            <h3 className="text-xl font-bold leading-7 tracking-tight text-gray-900 dark:text-gray-100">
              {title}
            </h3>
            <div className="flex shrink-0 items-center gap-3 pt-1">
              {href && <SocialIcon kind="external" href={href} size="5" />}
              {github && <SocialIcon kind="github" href={github} size="5" />}
            </div>
          </div>
          <p className="mb-5 flex-1 text-sm leading-6 text-gray-500 dark:text-gray-400">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {techs.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-primary-500/10 px-2.5 py-1 text-xs font-medium text-primary-600 dark:text-primary-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Card
