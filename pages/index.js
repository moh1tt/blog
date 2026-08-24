import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import { motion } from 'framer-motion'
import NewsletterForm from '@/components/NewsletterForm'
import ViewCounter from '@/components/ViewCounter'
import Reveal from '@/components/Reveal'

const heroLink =
  'inline-flex items-center gap-1.5 text-sm font-semibold text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300'

const heroFacts = [
  '3+ years in data science & engineering',
  '200K+ records processed monthly at APD',
  '83% faster reporting (60 min → <10 min)',
  '10K+ docs/day pipeline built at S&P Global',
]

const MAX_DISPLAY = 3

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div>
        <div className="mb-16 max-w-2xl border-b border-gray-200 pt-6 pb-12 dark:border-gray-800">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl"
          >
            Mohit Appari
          </motion.h1>
          <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
          <p className="prose mt-6 max-w-none text-base leading-7 text-gray-600 dark:text-gray-300">
            Data Scientist applying statistical modeling, machine learning, and data engineering to
            problems in finance and analytics. At APD State of Florida, I process 200K+ records
            across Medicaid, vendor, and client systems serving 60,000+ individuals, and lead Power
            BI reporting that cut execution time by 83%. Before that, I built ML pipelines
            processing 10,000+ financial filings a day at S&P Global. I like problems where rigorous
            modeling and solid engineering connect to real decisions.
          </p>
          <ul className="mt-5 space-y-1 text-sm text-gray-500 dark:text-gray-400">
            {heroFacts.map((fact) => (
              <li key={fact} className="flex items-baseline gap-2">
                <span className="text-primary-500">·</span>
                {fact}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="/projects" className={heroLink}>
              Projects <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link href="https://medium.com/@moh1tt" className={heroLink}>
              Writing <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link href="/static/resume/Mohit_Appari.pdf" className={heroLink}>
              Résumé <span aria-hidden="true">&rarr;</span>
            </Link>
            <span className="text-sm text-gray-400 dark:text-gray-500">
              Press{' '}
              <kbd className="rounded border border-gray-300 px-1.5 py-0.5 font-mono text-xs dark:border-gray-700">
                ⌘K
              </kbd>{' '}
              to search
            </span>
          </div>
        </div>
        <Reveal>
          <h2 className="flex pb-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl">
            Latest
          </h2>
        </Reveal>
        <hr className="border-gray-200 dark:border-gray-700" />
        <div className="grid grid-cols-1 gap-6 py-12 md:grid-cols-3">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter, i) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <Reveal key={slug} delay={i * 0.08} className="h-full">
                <Link
                  href={`/blog/${slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-500/40 hover:shadow-xl hover:shadow-primary-500/10 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-primary-500/40"
                >
                  <article className="flex h-full flex-col">
                    <time dateTime={date} className="text-sm text-gray-400 dark:text-gray-500">
                      {formatDate(date)}
                    </time>
                    <h2 className="mt-2 text-xl font-bold leading-7 tracking-tight text-gray-900 dark:text-gray-100">
                      {title}
                    </h2>
                    <div className="prose mt-2 max-w-none flex-1 text-sm leading-6 text-gray-500 dark:text-gray-400">
                      {summary}
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {tags.slice(0, 4).map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </article>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end pt-5 text-lg font-normal leading-6">
          <Link
            href="/blog"
            className=" special-underline-new text-primary-500 hover:text-gray-100 hover:no-underline dark:text-primary-500 hover:dark:text-gray-100"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">{/* <NewsletterForm /> */}</div>
      )}
    </>
  )
}
