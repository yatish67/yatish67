import React, { useEffect } from "react"
import { Helmet } from "react-helmet"

import mainImg from "../assets/animated_illustrations/solution_animation.json"
import Hero from "../components/homepage/Hero"
import Tabs from "../components/reusable/Tabs"
import { analytics, logEvent } from "../firebase/config"
import { useAuthContext } from "../hooks/useAuthContext"

const MySolutions = () => {
  const { user } = useAuthContext()

  useEffect(() => {
    logEvent(analytics, "my_solutions_page_visited")
  }, [])
  return (
    <div className="sm:ml-0 px-5 row-start-2 row-end-3 col-start-2 col-end-3 text-purple-50 min-h-screen">
      <Helmet>
        <title>My Solutions - Learn by Building Web and Mobile Apps</title>
      </Helmet>
      <Hero
        title="Here you can find all the solutions and ongoing challenges details."
        subTitle="Welcome To Coding Space 😊"
        mainImg={mainImg}
        btnTitle="Explore Challenges"
        logoTitle="fas fa-arrow-right ml-2"
        route="/challenges"
      />
      {user ? <Tabs userID={user.uid} /> : null}
    </div>
  )
}

export default MySolutions