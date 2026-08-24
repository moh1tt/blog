import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mt-1.5 mr-2 rounded-md border border-gray-300 py-0.5 px-2 text-xs font-medium uppercase tracking-wide text-gray-500 transition-colors duration-200 hover:border-primary-500 hover:text-primary-500 dark:border-gray-700 dark:text-gray-400 dark:hover:border-primary-500 dark:hover:text-primary-400">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
