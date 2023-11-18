"use client"

import React, { useState } from "react"
import Screen from "./components/center/center"
import LeftComponent from "./components/left/left"
import Right from "./components/right/right"
import { BiSolidLeftArrow } from "react-icons/bi"

export default function Page() {
  const [isLeftExpanded, setIsLeftExpanded] = useState(true)
  const [isRightExpanded, setIsRightExpanded] = useState(true)

  const [db, setDB] = React.useState(1)

  const [personalisedDBO, setPersonalisedDBO] = React.useState([])

  const toggleLeft = () => {
    setIsLeftExpanded(!isLeftExpanded)
  }

  const toggleRight = () => {
    setIsRightExpanded(!isRightExpanded)
  }

  const [lockedDBOs, setLockedDBOs] = useState([])

  const [clicked, setClicked] = useState([])

  const [isperosnalisedDBO, setIsPersonalisedDBO] = useState(false)

  const [selectedPersonalisedDBO, setSelectedPersonalisedDBO] = useState([])

  const [userType, setUserType] = useState("Novice")

  const [complexityType, setComplexityType] = useState("Low-High")

  const [unLockedPersonalisedDBo, setUnLockedPersonalisedDBo] = useState(0)

  const [layoutType, setLayoutType] = useState("V-Concat")

  React.useEffect(() => {
    var arr = []
    for (let i = 0; i < personalisedDBO?.length; i++) {
      arr.push(i)
    }
    setLockedDBOs(arr)
  }, [personalisedDBO])

  return (
    <>
      <div className="flex justify-between bg-primary  items-center w-screen overflow-x-hidden">
        {/* Left Component */}
        <div
          className={`leftSection bg-[#9F8EFF] relative z-10 h-screen w-min p-6 flex justify-start items-start flex-col transition-all ${
            isLeftExpanded ? "transition-all" : "-translate-x-full transition-all"
          }`}
        >
          <div
            className="toggleLeft absolute right-[-2.45rem] bg-[#9F8EFF] p-2 mt-[-1.5rem] rounded-r-lg"
            onClick={toggleLeft}
          >
            {isLeftExpanded ? (
              <BiSolidLeftArrow className="text-white text-2xl" />
            ) : (
              <BiSolidLeftArrow className="text-white text-2xl rotate-180" />
            )}
          </div>
          <LeftComponent dbo={db} clicked={clicked} setClicked={setClicked} />
        </div>
        {/* Center Component */}
        <div className="midSection h-screen flex justify-center items-start">
          <Screen
            db={db}
            setClicked={setClicked}
            clicked={clicked}
            userType={userType}
            complexity={complexityType}
            {...{
              personalisedDBO,
              setPersonalisedDBO,
              selectedPersonalisedDBO,
              isperosnalisedDBO,
              unLockedPersonalisedDBo,
              setUnLockedPersonalisedDBo,
              lockedDBOs,
              setLockedDBOs,
              setIsLeftExpanded,
              setIsRightExpanded,
              isLeftExpanded,
              isRightExpanded
            }}
            setUserType={setUserType}
            complexityType={complexityType}
            setComplexityType={setComplexityType}
            layoutType={layoutType}
            setLayoutType={setLayoutType}
          />
        </div>
        {/* Right Component */}
        <div
          className={`rightSection bg-[#9F8EFF] h-screen p-6 flex flex-col justify-start items-start relative ${
            isRightExpanded
              ? " transition-all"
              : "translate-x-full transition-all"
          }`}
        >
          <div
            className="toggleRight absolute left-[-2.45rem] bg-[#9F8EFF] p-2 mt-[-1.5rem] rounded-l-lg"
            onClick={toggleRight}
          >
            {isRightExpanded ? (
              <BiSolidLeftArrow className="text-white text-2xl transform rotate-180" />
            ) : (
              <BiSolidLeftArrow className="text-white text-2xl" />
            )}
          </div>
          {/* <button className="self-start mb-4" onClick={toggleRight}>
          Toggle Right
        </button> */}
          <Right
            setDB={setDB}
            db={db}
            {...{
              selectedPersonalisedDBO,
              isperosnalisedDBO,
              personalisedDBO,
              setPersonalisedDBO,
              setIsPersonalisedDBO,
              setSelectedPersonalisedDBO,
              unLockedPersonalisedDBo,
              setUnLockedPersonalisedDBo,
              lockedDBOs,
              setLockedDBOs
            }}
          />
        </div>
      </div>
    </>
  )
}
