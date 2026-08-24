import siteMetadata from '@/data/siteMetadata'
import ContactLink from '@/components/ContactLink'
import { PageSEO } from '@/components/SEO'

const Contact = () => {
  return (
    <>
      <PageSEO title={`Contact - ${siteMetadata.author}`} description="All my contacts" />
      <div className="mx-auto max-w-3xl overflow-hidden">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          Contact
        </h1>
        <div className="pt-10 pb-8">
          <ul className="font-semi-bold flex flex-col space-y-4">
            <ContactLink href="mailto:mohitt.appari@gmail.com" title="gmail" icon="mohitt.appari" />
            <ContactLink href="https://github.com/moh1tt" title="github" icon="moh1tt" />
            <ContactLink href="https://twitter.com/moh1tt" title="twitter" icon="moh1tt" />
            <ContactLink
              href="https://www.linkedin.com/in/moh1tt/"
              title="linkedin"
              icon="moh1tt"
            />
          </ul>
        </div>
      </div>
    </>
  )
}

export default Contact
