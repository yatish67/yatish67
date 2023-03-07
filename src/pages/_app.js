import Head from "next/head"

import Layout from "../components/layouts/Layout"
import { AuthContextProvider } from "../context/AuthContext"

import "../styles/globals.css"

export default function MyApp({ Component, pageProps }) {
  const renderWithLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>)
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta property="og:type" content="website" />
        <meta name="twitter:site" content="@FrontendProHQ" />
        <meta
          name="keywords"
          content="FRONTEND CHALLENGES, FRONTEND DEVELOPMENT CHALLENGES, CODING CHALLENGES, FRONTEND PROJECTS, WEB DEVELOPMENT, FRONTEND DEVELOPMENT PROJECTS IDEA, FRONTEND INTERVIEW QUESTIONS, WEB DEVELOPMENT CHALLENGES"
        />
        <meta content="FrontendPro" property="og:site_name" />
        <meta content="image/png" property="og:image:type" />
        <meta content="1200" property="og:image:width" />
        <meta content="628" property="og:image:height" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta
          content="Code your way to your dream job by solving our real-world Frontend Challenges and Join a community of like-minded developers to take your skills to the next level."
          name="description"
        />
        <meta
          content="Code your way to your dream job by solving our real-world Frontend Challenges and Join a community of like-minded developers to take your skills to the next level."
          property="og:description"
        />
        <meta
          content="FrontendPro - Become a Pro in Frontend Dev with our Frontend Challenges"
          property="og:title"
        />
        <meta
          content="https://res.cloudinary.com/di5hmgowi/image/upload/v1675420804/codingspace_assets/frontendpro-og-image.png"
          property="og:image"
        />
        <meta
          content="FrontendPro - Become a Pro in Frontend Dev with our Frontend Challenges"
          property="og:image:alt"
        />
        <meta content="https://www.frontendpro.dev" property="og:url" />
        <meta
          content="FrontendPro - Become a Pro in Frontend Dev with our Frontend Challenges"
          name="twitter:title"
        />
        <meta
          content="Code your way to your dream job by solving our real-world Frontend Challenges and Join a community of like-minded developers to take your skills to the next level."
          name="twitter:description"
        />
        <meta
          content="https://res.cloudinary.com/di5hmgowi/image/upload/v1675420804/codingspace_assets/frontendpro-og-image.png"
          name="twitter:image"
        />
        <meta property="twitter:domain" content="https://www.frontendpro.dev" />
        <meta property="twitter:url" content="https://www.frontendpro.dev" />
        <meta
          name="twitter:image:alt"
          content="FrontendPro - Become a Pro in Frontend Dev with our Frontend Challenges"
        />
        <title>
          FrontendPro - Become a Pro in Frontend Dev with our Frontend Challenges
        </title>
      </Head>
      <AuthContextProvider>
        {renderWithLayout(<Component {...pageProps} />)}
      </AuthContextProvider>
    </>
  )
}