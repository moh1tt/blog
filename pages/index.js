import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import { RoughNotation } from 'react-rough-notation'
import NewsletterForm from '@/components/NewsletterForm'
import ViewCounter from '@/components/ViewCounter'
import Reveal from '@/components/Reveal'

const heroLinks = [
  {
    href: '/projects',
    caption: 'What I built',
    cta: 'Projects',
    iconColor: 'text-green-600',
    ctaColor: 'text-amber-400',
    glow: 'from-pink-600 to-purple-600',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
      />
    ),
  },
  {
    href: 'https://medium.com/@moh1tt',
    caption: 'Read my story',
    cta: 'Writing',
    iconColor: 'text-pink-600',
    ctaColor: 'text-indigo-400',
    glow: 'from-fuchsia-600 to-emerald-600',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      />
    ),
  },
  {
    href: '/static/resume/Mohit_Appari.pdf',
    caption: 'Hire me!',
    cta: 'Résumé',
    iconColor: 'text-fuchsia-600',
    ctaColor: 'text-primary-400',
    glow: 'from-pink-600 to-purple-600',
    icon: (
      <>
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
        />
      </>
    ),
  },
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
        <div className="mb-12 flex flex-col items-center gap-x-12 xl:flex-row xl:items-start">
          <div className="pt-6">
            <h1 className="pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Mohit{' '}
              <span className="text-primary-color-500 dark:text-primary-color-dark-500">
                Appari
              </span>
            </h1>
            <h2 className="prose pt-5 text-lg text-gray-600 dark:text-gray-300">
              I like training deep neural nets on large datasets 🧠🤖💥 — usually pointed at
              markets.
            </h2>
            <p className="pt-5 text-lg leading-7 text-slate-600 dark:text-slate-300">
              This is where I write about the things I can't stop thinking about — large language
              models, neural nets, and the messier edges of deep learning; quantitative finance and
              market analysis; economics, math, statistics, probability, and time series.
            </p>
            <p className="pt-5 text-lg leading-7 text-slate-600 dark:text-slate-300">
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
                Mostly through projects: how to get started, what breaks when you actually build
                something, and how to dig deeper once the basics click.
              </RoughNotation>
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
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 grid-rows-3 gap-8 py-12">
              {heroLinks.map(({ href, caption, cta, iconColor, ctaColor, glow, icon }) => (
                <div key={cta} className="my-2 grid items-start gap-8">
                  <div className="group relative">
                    <div
                      className={`absolute -inset-0.5 rounded-lg bg-gradient-to-r ${glow} opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200`}
                    ></div>
                    <Link href={href}>
                      <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
                        <span className="flex items-center space-x-5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-6 w-6 -rotate-6 ${iconColor}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            {icon}
                          </svg>
                          <span className="pr-6 text-gray-900 dark:text-gray-100">{caption}</span>
                        </span>
                        <span
                          className={`pl-6 ${ctaColor} transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100`}
                        >
                          {cta}&nbsp;&rarr;
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
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
