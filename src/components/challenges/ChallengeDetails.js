import React, { useState } from "react"
import useFirestore from "../../hooks/useFirestore"
import DownloadButton from "../smallComponents/DownloadButton"
import DropDown from "../smallComponents/DropDown"
import ChallengeHeader from "./ChallengeHeader"
import LottieAnimation from "../smallComponents/LottieAnimation/"
import rocketLoader from "../../assets/animated_illustrations/loader.json"

const ChallengeDetails = (props) => {
  const id = props.match.params.id
  const { docs } = useFirestore("challenges", id)
  const [figmaURL, setFigmaURL] = useState(0)
  const solutionDetails = docs.map(({ id, ...r }) => r)

  if (docs.length === 0)
    return (
      <div className="sm:ml-0 pr-5 py-52 row-start-2 row-end-3 col-start-1 md:col-start-2 col-end-3">
        <LottieAnimation animationDataFile={rocketLoader} height={100} width={100} />
      </div>
    )

  return (
    <div className="sm:ml-0 px-5 row-start-2 row-end-3 col-start-2 col-end-3">
      <ChallengeHeader docs={docs} />
      <div className="overflow-hidden relative">
        <iframe
          className="iframe-embed border-gray-50 w-full -mb-12"
          src={`https://www.figma.com/embed?embed_host=share&url=${
            figmaURL === 0
              ? docs[0].figmaURLs.desktop || docs[0].figmaURLs.mobile
              : docs[0].figmaURLs.mobile
          }`}
          title={`screen-${figmaURL}`}
          allowFullScreen
        ></iframe>
        {docs[0].figmaURLs.desktop && (
          <DropDown setFigmaURL={(index) => setFigmaURL(index)} />
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-6">
        <div className="text-white">
          <h2 className="text-2xl font-semibold pb-1 text-purple-500">
            About the challenge
          </h2>
          <p className="text-gray-300">{docs[0].description}</p>
          <h3 className="text-2xl font-semibold pt-4 pb-2 text-purple-500">
            Requirements:
          </h3>
          <ul className="text-gray-300 list-disc pl-5">
            {docs[0].requirements.map((requirement, index) => (
              <li key={index}>{requirement}</li>
            ))}
          </ul>
        </div>
        <div className="text-white xs:mt-4 sm:mt-0 sm:pl-6">
          <h2 className="text-2xl font-semibold pb-1 text-purple-500">
            What you&apos;ll learn?
          </h2>
          <p className="text-gray-300 pb-2">{`${docs[0].learning} So what are you waiting for?`}</p>
          <p className="mb-3">
            Click on the download button to get started.{" "}
            <span role="img" aria-label="hand emoji">
              👇
            </span>
          </p>
          <DownloadButton
            color="bg-gradient-to-br from-purple-500 to-indigo-500"
            challengeDetails={solutionDetails}
          />
          <h2 className="text-2xl font-semibold pb-1 text-purple-500 mt-5">
            Contributed By:
          </h2>
          <div className="flex flex-row items-center mt-3 ">
            <div className="w-14 mr-4">
              <img
                src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-1-800x800.jpg"
                alt="..."
                className="shadow rounded-full max-w-full h-auto border-none"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-lg text-white">Corey Siphron</p>
              <p className="text-sm text-gray-300">UI/UX Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChallengeDetails
