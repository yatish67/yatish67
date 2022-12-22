import React, { useState } from "react"
import moment from "moment"
import { Helmet } from "react-helmet"
import { Link, useLocation, useParams } from "react-router-dom"

import rocketLoader from "../assets/animated_illustrations/rocketLoader.json"
import ChallengeHeader from "../components/challenges/ChallengeHeader"
import Avatar from "../components/reusable/Avatar"
import Button from "../components/reusable/Button"
import ButtonLink from "../components/reusable/ButtonLink"
import ConfettiWrapper from "../components/reusable/ConfettiWrapper"
import ConfirmationModal from "../components/reusable/ConfirmationModal"
import LottieAnimation from "../components/reusable/LottieAnimation"
import EmojiSection from "../components/solutions/EmojiSection"
import ShowWebsite from "../components/solutions/ShowWebsite"
import SolutionComments from "../components/solutions/SolutionComments"
import Icons from "../components/SvgIcons/Icons"
// custom hooks
import { useAuthContext } from "../hooks/useAuthContext"
import { useDocument } from "../hooks/useDocument"

const SolutionDetail = () => {
  const { id } = useParams()
  const { state } = useLocation()
  const { document } = useDocument("solutions", id)
  const { user } = useAuthContext()
  const [isOpen, setIsOpen] = useState(false)

  if (!document)
    return (
      <div className="sm:ml-0 pr-5 py-52 row-start-2 row-end-3 col-start-1 md:col-start-2 col-end-3 place-self-center">
        <LottieAnimation animationDataFile={rocketLoader} height={100} width={100} />
      </div>
    )
  return (
    <div className="px-5 row-start-2 row-end-3 col-start-2 col-end-3 mb-4">
      <Helmet>
        <title>{`${document.title} CODINGSPACE challenge solution by ${document.author}`}</title>
      </Helmet>
      {state && <ConfettiWrapper />}
      <ChallengeHeader doc={document} button />
      {isOpen ? <ConfirmationModal setIsOpen={setIsOpen} id={document.id} /> : null}
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Avatar photoURL={document.photoURL} className="ring-gray-700" />
          <div className="flex flex-col ml-3">
            <span className="text-navItem text-sm text-gray-300">{document.author}</span>
            <span className="text-navItem text-xs text-gray-400">
              {moment(document.createdAt.toDate()).fromNow()}
            </span>
          </div>
        </div>
        {user && user.uid === document.userID && (
          <div className="flex">
            <ButtonLink
              to={`/solution/${document.id}/edit`}
              size="square"
              variant="outline"
              className="text-gray-400 hover:text-white mr-2"
            >
              <Icons.Edit size={18} />
            </ButtonLink>
            <Button
              size="square"
              variant="outline"
              className="text-gray-400 hover:text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Icons.Delete size={18} />
            </Button>
          </div>
        )}
      </div>
      <ShowWebsite
        url={document.liveWebsiteUrl}
        github={document.githubUrl}
        title={document.title}
      />
      <div className="grid grid-col-1 md:grid-cols-[1fr_160px] items-start gap-x-5 mt-10">
        <SolutionComments />
        <EmojiSection />
      </div>
    </div>
  )
}

export default SolutionDetail
