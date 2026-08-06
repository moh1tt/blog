import Link from '@/components/Link'

const Experience = ({ title, company, range, url, text1, text2, text3, isLast }) => {
  const bullets = [text1, text2, text3].filter(Boolean)

  return (
    <div className="relative pb-10 pl-8 last:pb-0">
      {!isLast && (
        <span className="absolute left-[5px] top-3 h-full w-px bg-gray-200 dark:bg-gray-800" />
      )}
      <span className="absolute left-0 top-2 h-2.5 w-2.5 rounded-full bg-primary-500 ring-4 ring-primary-500/20" />
      <div className="rounded-xl border border-gray-200 bg-white p-5 transition-colors duration-300 hover:border-primary-500/40 dark:border-gray-800 dark:bg-gray-900">
        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
            {title} <span className="font-normal text-gray-400 dark:text-gray-500">@</span>{' '}
            <Link href={url} className="text-primary-500 hover:text-primary-600">
              {company}
            </Link>
          </h3>
          <span className="font-mono text-xs text-gray-400 dark:text-gray-600">{range}</span>
        </div>
        <ul className="mt-3 space-y-2">
          {bullets.map((text, i) => (
            <li key={i} className="flex gap-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary-500/60" />
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Experience
