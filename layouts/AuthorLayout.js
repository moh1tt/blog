import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import Link from '@/components/Link'
import SocialIcon from '@/components/social-icons'
import Experience from '@/components/Experience'
import experienceData from '@/data/experienceData'
import Education from '@/components/Education'
import educationData from '@/data/educationData'

const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="ml-0.5 inline-block h-4 w-4 fill-current"
  >
    <g data-name="Layer 2">
      <g data-name="external-link">
        <rect width="24" height="24" opacity="0" />
        <path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z" />
        <path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z" />
      </g>
    </g>
  </svg>
)

export default function AuthorLayout({ frontMatter }) {
  const { name, avatar, occupation, company, email, linkedin, github, text1, text2 } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8">
            <Image
              src={avatar}
              alt="avatar"
              width="192px"
              height="192px"
              className="h-48 w-48 rounded-full"
              placeholder="blur"
              blurDataURL="/static/images/SVG-placeholder.png"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="flex space-x-3 pt-6">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
            </div>
          </div>
          <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
            <p>{text1}</p>
            <p>{text2}</p>
            <p>
              Check out some of my photography work on{' '}
              <Link href="https://vsco.co/moh1tttt/gallery">VSCO</Link>.
            </p>
            <h1>About this site</h1>
            <p>
              Welcome to my home on the internet. This site functions as a blog/portfolio, a place
              to share code and thoughts. Opinions of my own.
            </p>
            <p>
              I learnt how to build this site from the most awesome people in the community:
              <ul>
                <li>
                  <Link
                    href={'https://github.com/timlrx/tailwind-nextjs-starter-blog'}
                    className="special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
                  >
                    Timothy's Next.js and Tailwind CSS template
                    <ExternalLinkIcon />
                  </Link>
                  : Template starter where I bootstrapped the project.
                </li>
                <li>
                  <Link
                    href={'https://www.einargudni.com/'}
                    className="special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
                  >
                    Einar Guðjónsson
                    <ExternalLinkIcon />
                  </Link>
                  : Now page, navigation style, animations and much more.
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="mt-10">
          <div className="space-y-2 pt-6 pb-8 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Experience
            </h1>
          </div>
          <div className="max-w-none pt-8 pb-8 xl:col-span-2">
            {experienceData.map((d) => (
              <Experience
                key={d.company}
                title={d.title}
                company={d.company}
                range={d.range}
                url={d.url}
                text1={d.text1}
                text2={d.text2}
                text3={d.text3}
              />
            ))}
          </div>
        </div>
        <div className="mt-10">
          <div className="space-y-2 pt-6 pb-8 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Education
            </h1>
          </div>
          <div className="max-w-none pt-8 pb-8 xl:col-span-2">
            {educationData.map((d) => (
              <Education
                key={d.school}
                degree={d.degree}
                school={d.school}
                range={d.range}
                text1={d.text1}
                text2={d.text2}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
