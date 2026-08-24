import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import { RoughNotation } from 'react-rough-notation'
import NewsletterForm from '@/components/NewsletterForm'
import ViewCounter from '@/components/ViewCounter'

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
        <div className="mb-12 flex flex-col items-center gap-x-12 xl:flex-row xl:items-start xl:justify-between">
          <div className="max-w-2xl pt-6">
            <h1 className="pb-4 font-mono text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
              Mohit{' '}
              <span className="text-primary-color-500 dark:text-primary-color-dark-500">
                Appari
              </span>
            </h1>
            <h2 className="pt-5 text-lg text-gray-600 dark:text-gray-300">
              Welcome to my corner of the internet, where I dig into deep learning, quantitative
              finance, and the data behind markets.
            </h2>
            <p className="pt-5 text-lg leading-7 text-slate-600 dark:text-slate-300">
              I love working with deep neural networks and machine learning algorithms, especially
              when they're pointed at large financial datasets. Some of my favorite areas to dig
              into are time series analysis and forecasting.
            </p>
            <p className="pt-5 text-lg leading-7 text-slate-600 dark:text-slate-300">
              <RoughNotation
                animate="true"
                type="highlight"
                show={true}
                color="#DE1D8D"
                animationDelay={1000}
                animationDuration={2500}
                strokeWidth={1}
              >
                This site is a collection of my thoughts, blogs, projects, and everything else I'm
                into — the things I explore, build, and can't stop chasing.
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
                      <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 font-mono leading-none dark:bg-black">
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
        <h2 className="flex pb-6 font-mono text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl">
          Latest
        </h2>
        <hr className="border-gray-200 dark:border-gray-700" />
        <ul>
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <Link
                href={`/blog/${slug}`}
                key={slug}
                className="group flex bg-transparent bg-opacity-20 px-2 transition duration-100 hover:scale-105 hover:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <li className="py-3">
                  <article>
                    <div className="space-y-2 bg-transparent bg-opacity-20 p-2 transition duration-200 hover:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-sm font-normal leading-6 text-gray-500 dark:text-gray-400">
                          {date ? (
                            <time dateTime={date}>{formatDate(date)}</time>
                          ) : (
                            <span>Ongoing</span>
                          )}
                        </dd>
                      </dl>
                      <div className="space-y-2 xl:col-span-4">
                        <div className="space-y-1">
                          <div>
                            <h2 className="font-mono text-2xl font-semibold leading-8 tracking-tight">
                              <Link
                                href={`/blog/${slug}`}
                                className="text-gray-900 transition duration-500 ease-in-out hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-500"
                              >
                                {title}
                              </Link>
                            </h2>
                          </div>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                          <div className="prose max-w-none pt-2 leading-6 text-gray-500 dark:text-gray-400">
                            {summary}
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              </Link>
            )
          })}
        </ul>
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
