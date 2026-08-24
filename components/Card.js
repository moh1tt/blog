import { motion } from 'framer-motion'
import SocialIcon from './social-icons'

const Card = ({
  title,
  description,
  href,
  github,
  tech1,
  tech2,
  tech3,
  tech4,
  tech5,
  tech6,
  featured = false,
}) => {
  const techs = [tech1, tech2, tech3, tech4, tech5, tech6].filter(Boolean)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`h-full ${featured ? 'lg:col-span-2' : ''}`}
    >
      <div className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 transition-colors duration-200 hover:border-primary-500/40 dark:border-gray-800 dark:bg-gray-900">
        <div className="mb-2 flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold leading-6 tracking-tight text-gray-900 dark:text-gray-100">
            {title}
          </h3>
          <div className="flex shrink-0 items-center gap-3 pt-0.5">
            {href && <SocialIcon kind="external" href={href} size="4" />}
            {github && <SocialIcon kind="github" href={github} size="4" />}
          </div>
        </div>
        <p className="mb-5 flex-1 text-sm leading-6 text-gray-500 dark:text-gray-400">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {techs.map((tech) => (
            <span
              key={tech}
              className="rounded border border-gray-200 px-2 py-0.5 font-mono text-[11px] text-gray-500 dark:border-gray-700 dark:text-gray-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Card
