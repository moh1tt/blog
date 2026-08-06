import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import { RoughNotation } from 'react-rough-notation'
import { motion } from 'framer-motion'
import NewsletterForm from '@/components/NewsletterForm'
import ViewCounter from '@/components/ViewCounter'
import Reveal from '@/components/Reveal'
import ProjectCover from '@/components/ProjectCover'

const heroButtonPrimary =
  'inline-flex items-center gap-2 rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/30'

const heroButtonSecondary =
  'inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary-500 hover:text-primary-600 dark:border-gray-700 dark:bg-transparent dark:text-gray-100 dark:hover:border-primary-500 dark:hover:text-primary-400'

const heroStats = [
  { value: '3+', label: 'years in data science & engineering' },
  { value: '200K+', label: 'records processed monthly at APD' },
  { value: '83%', label: 'faster reporting (60 min → <10 min)' },
  { value: '10K+', label: 'docs/day pipeline built at S&P Global' },
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
        <div className="mb-16 pt-6 xl:flex xl:items-start xl:justify-between xl:gap-12">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"
            >
              Heyyy, I'm{' '}
              <span className="text-primary-color-500 dark:text-primary-color-dark-500">Mohit</span>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
              className="prose pt-5 text-lg text-gray-600 dark:text-gray-300"
            >
              {`${siteMetadata.description}`}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
              className="hidden pt-5 text-lg leading-7 text-slate-600 dark:text-slate-300 md:block"
            >
              Data Scientist applying statistical modeling, machine learning, and data engineering
              to problems in finance and analytics. At APD State of Florida, I process 200K+ records
              across Medicaid, vendor, and client systems serving 60,000+ individuals, and lead
              Power BI reporting that cut execution time by 83%. Before that, I built ML pipelines
              processing 10,000+ financial filings a day at S&P Global. I like problems where
              rigorous modeling and solid engineering connect to real decisions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
              className="hidden pt-5 text-lg leading-7 text-slate-600 dark:text-slate-300 md:block"
            >
              <RoughNotation
                animate="true"
                type="highlight"
                show={true}
                color="#DE1D8D"
                animationDelay={1000}
                animationDuration={2500}
                className="text-slate-200"
                strokeWidth={1}
              >
                This blog is a collection of everything I am — the code I write, the models I build,
                and the ideas I can't stop chasing.{' '}
              </RoughNotation>{' '}
              <br />
              <br />
              Thanks for stopping by—I appreciate you checking out my work. If you ever want to
              connect, collaborate, or just say hi, feel free to reach out. Enjoy the read!
              <div className="mt-8 text-slate-600 dark:text-slate-400">
                <span className="text-sm">Press</span>{' '}
                <span className="rounded-md bg-gray-300 p-1 text-sm text-gray-900 dark:bg-gray-400">
                  ⌘
                </span>{' '}
                <span className="text-sm">+ </span>
                <span className="rounded-md bg-gray-300 p-1 text-sm text-gray-900 dark:bg-gray-400">
                  K
                </span>{' '}
                <span className="text-sm">to start</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-10"
            >
              <Link href="/projects" className={heroButtonPrimary}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
                What I built
              </Link>
              <Link href="https://medium.com/@moh1tt" className={heroButtonSecondary}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                Read my story
              </Link>
              <Link href="/static/resume/Mohit_Appari.pdf" className={heroButtonSecondary}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
                Hire me — Resume
              </Link>
            </motion.div>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 xl:mt-0 xl:w-72 xl:shrink-0">
            {heroStats.map((stat, i) => (
              <motion.div
                key={stat.value + stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 + i * 0.08 }}
                className="rounded-2xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="text-2xl font-extrabold text-primary-500">{stat.value}</div>
                <div className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <Reveal>
          <h2 className="flex pb-6 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl md:text-5xl">
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
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-500/40 hover:shadow-xl hover:shadow-primary-500/10 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-primary-500/40"
                >
                  <div className="overflow-hidden">
                    <div className="transition-transform duration-500 group-hover:scale-105">
                      <ProjectCover title={title} index={i} />
                    </div>
                  </div>
                  <article className="flex flex-1 flex-col p-5">
                    <time dateTime={date} className="text-sm text-gray-400 dark:text-gray-500">
                      {formatDate(date)}
                    </time>
                    <h2 className="mt-2 text-lg font-bold leading-6 tracking-tight text-gray-900 dark:text-gray-100">
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
