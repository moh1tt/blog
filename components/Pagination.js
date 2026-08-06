import Link from '@/components/Link'

const pageButton =
  'inline-flex items-center rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-900 transition-colors duration-200 hover:border-primary-500 hover:text-primary-600 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-gray-300 disabled:hover:text-gray-900 dark:border-gray-700 dark:text-gray-100 dark:hover:border-primary-500 dark:hover:text-primary-400 dark:disabled:hover:border-gray-700 dark:disabled:hover:text-gray-100'

export default function Pagination({ totalPages, currentPage, basePath = 'blog' }) {
  const prevPage = parseInt(currentPage) - 1 > 0
  const nextPage = parseInt(currentPage) + 1 <= parseInt(totalPages)

  return (
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <nav className="flex items-center justify-between">
        {!prevPage && (
          <button rel="previous" className={pageButton} disabled={!prevPage}>
            Previous
          </button>
        )}
        {prevPage && (
          <Link
            href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
          >
            <button rel="previous" className={pageButton}>
              Previous
            </button>
          </Link>
        )}
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button rel="next" className={pageButton} disabled={!nextPage}>
            Next
          </button>
        )}
        {nextPage && (
          <Link href={`/${basePath}/page/${currentPage + 1}`}>
            <button rel="next" className={pageButton}>
              Next
            </button>
          </Link>
        )}
      </nav>
    </div>
  )
}
