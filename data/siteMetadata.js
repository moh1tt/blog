const siteMetadata = {
  title: 'Blog | Mohit Appari',
  author: 'Mohit Appari',
  headerTitle: 'The Journey',
  description:
    "My personal blog, where I embark on captivating journeys and share my travel experiences from around the globe. But that's not all – here, I delve deeper into the fascinating world of data science, machine learning, and data engineering to uncover hidden insights and unleash the power of data.",
  snippets: 'Reuseable code snippets collected by Mohit',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://moh1tt.vercel.app',
  siteRepo: 'https://github.com/moh1tt/blog',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.jpg',
  socialBanner: '/static/images/twitter-card.png',
  email: 'mohitt.appari@gmail.com',
  github: 'https://github.com/moh1tt',
  twitter: 'https://twitter.com/moh1tt',
  linkedin: 'https://www.linkedin.com/in/moh1tt/',
  website: 'https://moh1tt.vercel.app',
  locale: 'en-US',
  analytics: {
    plausibleDataDomain: false, // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: true, // true or false
    umamiWebsiteId: false, // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: false, // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    provider: false,
  },
  comment: {
    provider: false,
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      inputPosition: 'bottom',
      lang: 'en',
      darkTheme: 'dark',
      themeURL: '',
    },
  },
  socialAccount: {
    twitter: 'moh1tt',
  },
}
module.exports = siteMetadata
