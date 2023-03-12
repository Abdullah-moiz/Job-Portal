import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Find Your Dream Job | Job Portal Name</title>
        <meta name="description" content="Search and apply for the latest jobs in your field. Explore opportunities from top companies and make your career dreams come true." />
        <meta name="keywords" content="job portal, job search, career opportunities, employment, job listings, job openings, job vacancies, job postings, hiring, recruitment" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://job-portal-teal.vercel.app/" />
        <meta name="author" content="Abdullah Moiz" />
        <meta property="og:title" content="Find Your Dream Job | Job Portal Name" />
        <meta name="twitter:title" content="Find Your Dream Job | Job Portal Name" />
        <meta name="language" content="en-US" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
