import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mt-1.5 mr-1.5 rounded-md border border-primary-500 py-0.5 px-1.5 text-[10px] font-medium uppercase tracking-wide text-primary-500 transition duration-300 ease-in-out hover:bg-primary-500 hover:text-gray-100 dark:hover:text-gray-900">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
