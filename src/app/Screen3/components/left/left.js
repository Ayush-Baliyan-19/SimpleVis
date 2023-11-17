"use client"

import React, { useEffect, useState } from "react"

import { BsBarChartFill, BsFillTriangleFill, BsTriangleFill } from "react-icons/bs"
import { PiUserSwitchBold } from "react-icons/pi"
import { StateContext } from "../../../StateProvider"
import { useContext } from "react"

import "./left.css"
import MultiRangeSlider from "./MultiRangeSlider"
import { TbChartHistogram } from "react-icons/tb"
import {
  AiFillPieChart,
  AiOutlineInfoCircle,
  AiOutlineLineChart
} from "react-icons/ai"
import { BiScatterChart } from "react-icons/bi"

const LeftComponent = ({ clicked, dbo, setClicked }) => {
  const [csvData, setCSVData] = useState([])
  const {
    metadata,
    setMetadata,
    range,
    setRange,
    Only_1_2,
    setOnly_1_2,
    only_2a_2b,
    setonly_2a_2b,
    isCrossOver,
    setIsCrossOver,
    selectedVis,
    setSelectedVis,
    isLeftLocked,
    userType, setUserType,
    setIsLeftLocked
  } = useContext(StateContext)

  useEffect(() => {
    clicked.forEach(data => {
      const elem = document.getElementById(data)
      if (elem) {
        elem.click()
      }
    })
  }, [clicked])

  const parseCSVData = csvText => {
    // Extract the headers
    const parsedData = []

    for (let i = 0; i < metadata.length; i++) {
      const line = metadata[i]
      for (let j = 0; j < line.length; j++) {
        if (line[0] === "DA_name") {
          let newObject = {
            DA_name: line[j],
            DA_type: "",
            unique_value: "",
            user_imp: ""
          }
          // dataArray.push(newObject);
          parsedData.push(newObject)
        } else if (line[0] === "DA_type") {
          parsedData[j].DA_type = line[j]
        } else if (line[0] === "unique_value") {
          parsedData[j].unique_value = line[j]
        } else if (line[0] === "user_imp") {
          parsedData[j].user_imp = line[j]
        }
      }
    }
    return parsedData.slice(1, parsedData.length - 1)
  }
  // Handle option change

  const visualtizations = [
    {
      name: "Histogram",
      icon: <TbChartHistogram />
    },
    {
      name: "Bar Chart",
      icon: <BsBarChartFill />
    },
    {
      name: "Pie Chart",
      icon: <AiFillPieChart />
    },
    {
      name: "LineChart",
      icon: <AiOutlineLineChart />
    },
    {
      name: "Scatterplot",
      icon: <BiScatterChart />
    }
  ]

  const [isAllOpen, setIsAllOpen] = useState(false)

  useEffect(() => {
    if (userType === "Novice") {
      setSelectedVis(["Histogram", "Bar Chart", "Pie Chart"]);
    }
    if (userType === "Beginner") {
      setSelectedVis(["Histogram", "Bar Chart", "Pie Chart", "LineChart"]);
    }
    if (userType === "Expert") {
      setSelectedVis([
        "Histogram",
        "Bar Chart",
        "Pie Chart",
        "LineChart",
        "Scatterplot",
      ]);
    }
  }, [userType]);

  return (
    <div className="flex flex-col justify-between items-center gap-1 relative h-screen">
      <h1 className="text-2xl font-bold text-center text-white flex gap-3 tooltip">
        Parameters Setting
        {/* <span
          onClick={(e) => {
            setIsLeftLocked(!isLeftLocked);
          }}
        >
          {isLeftLocked ? <BsLockFill /> : <BsFillUnlockFill />}
        </span> */}
      </h1>
      <div className="">
        <div className="flex justify-center items-center gap-2">
          <div onClick={(e) => {
            setIsAllOpen(prev => !prev)
            setClicked([])
            setTimeout(() => {
              setClicked(metadata[0].slice(1, metadata[0].length - 1))
            }, 100)
          }}>
            <BsTriangleFill className={`text-white ${isAllOpen ? "rotate-180" : "rotate-90"}`} />
          </div>
          <h1
            className="text-lg font-bold text-center text-white tooltip flex justify-center items-center gap-2 tooltip-right"
            data-tip="You can set here the importance of data attributes (
              100 = Mandatory,
              51 to 99 = Important, 
              50 = Average,
              1 to 49 = Less important, 
              0 = Exclude)"
          >
            DA Importance
            <AiOutlineInfoCircle className="self-center" />
          </h1>
        </div>
        <div className="w-max main-left flex flex-col items-start gap-1 px-2 h-[40vh] overflow-y-auto scroll-smooth">
          {metadata[0].length > 0 && (
            <>
              {metadata[0].slice(1,metadata[0].length).map((data, index) => {
                return (
                  <EachDA
                    item={data}
                    key={index}
                    setMetadata={setMetadata}
                    index={index}
                  />
                )
              })}
            </>
          )}
        </div>
      </div>
      <div className="filters w-max">
        <h1
          className="font-bold text-center text-white flex justify-center items-center gap-2 tooltip tooltip-right"
          data-tip="You can select the desired visualization to be present in the recommended dashboard"
        >
          Selected Visualizations
          <AiOutlineInfoCircle className="self-center" />
        </h1>
        <div className="h-[15vh]">
          <div className="flex flex-wrap w-80">
            {visualtizations.map((data, index) => {
              return (
                <label
                  className="label cursor-pointer flex justify-between gap-2 w-40"
                  key={index}
                >
                  <p className="font-medium flex justify-center items-center gap-2">
                    {data.icon}
                    {data.name}
                  </p>
                  <input
                    type="checkbox"
                    checked={selectedVis?.includes(data.name)}
                    className="checkbox border border-white checkbox-secondary"
                    onChange={e => {
                      if (data.name === "Scatterplot") {
                        if (selectedVis.includes("Scatterplot")) {
                          setSelectedVis((prev) => prev.filter((item) => item !== "Scatterplot"));
                        } else {
                          setUserType("Expert");
                          setSelectedVis((prev) => [...prev, "Scatterplot"]);
                        }
                      } else if (selectedVis.includes(data.name)) {
                        setSelectedVis((prev) =>
                          prev.filter((item) => item !== data.name)
                        );
                      } else {
                        setSelectedVis((prev) => [
                          ...prev,
                          data.name,
                        ]);
                      }
                    }}
                  />
                </label>
              )
            })}
          </div>
        </div>
      </div>
      <p
        className="text-white font-bold text-center w-max tooltip flex justify-center items-center gap-2 tooltip-right"
        data-tip="You can adjust the number of visualizations in the recommended dashboards"
      >
        Number of Visualizations
        <AiOutlineInfoCircle className="self-center" />
      </p>
      <MultiRangeSlider min={2} max={9} Range={range} setRange={setRange} />
      <div className="filters-2 flex justify-center items-center gap-3">
        <div className="flex flex-col">
          <h3
            className="text-center font-semibold tooltip flex justify-center items-center gap-2 w-max tooltip-right"
            data-tip="It represent the operations that are performed to optimize dashboard recommendation"
          >
            {" "}
            GA Parameters
            <AiOutlineInfoCircle className="self-center" />
          </h3>
          <div className="flex flex-col gap-2 justify-center items-start w-full">
            <div className="dropdown dropdown-bottom w-full">
              <label
                id="Mutation-menu"
                tabIndex={0}
                className="btn my-1 px-1 py-0 stroke-white border-white text-white btn-outline btn-sm w-full mtnandcross"
              >
                Mutation
                <input
                  type="checkbox"
                  className="checkbox outline-white opacity-100 border-white"
                  checked={Only_1_2 == 1 || only_2a_2b == 1 || only_2a_2b == 2}
                />
              </label>
              <ul
                tabIndex={0}
                className={`dropdown-content z-10 menu p-2 shadow h-max -translate-y-44 bg-secondary rounded-box w-52 bottom-full top-0`}
              >
                <div className="">
                  <label
                    className="label cursor-pointer"
                    onClick={e => {
                      setOnly_1_2(prev => {
                        if (prev === 1) {
                          return 2
                        } else {
                          return 1
                        }
                      })
                    }}
                  >
                    <span className="label-text">Mapping DA - VA</span>
                    <input
                      type="checkbox"
                      className="checkbox"
                      checked={Only_1_2 == 1}
                    />
                  </label>
                  <label
                    className="label cursor-pointer"
                    onClick={e => {
                      setonly_2a_2b(prev => (prev === 1 ? null : 1))
                    }}
                  >
                    <span className="label-text">Add Visualization</span>
                    <input
                      type="checkbox"
                      className="checkbox"
                      checked={only_2a_2b == 1}
                    />
                  </label>
                  <label
                    className="label cursor-pointer"
                    onClick={e => {
                      setonly_2a_2b(prev => (prev === 2 ? null : 2))
                    }}
                  >
                    <span className="label-text">Remove Visualization</span>
                    <input
                      type="checkbox"
                      className="checkbox"
                      checked={only_2a_2b == 2}
                    />
                  </label>
                </div>
              </ul>
            </div>
            <div className="form-control">
              <label
                className="label cursor-pointer px-3 py-1 border border-primary rounded-lg flex gap-2 w-full"
                onClick={e => {
                  setIsCrossOver(prev => !prev)
                }}
              >
                <span className="label-text font-semibold text-white">
                  Crossover
                </span>
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={isCrossOver}
                />
              </label>
            </div>
          </div>
        </div>
        <div className="h-full w-[2px] bg-primary rounded-lg" />
        <div className="flex gap-3">
          <div className="filter3 w-20 h-20 flex justify-center items-center flex-col px-3 text-white border-2 border-white rounded-[50%]">
            <div
              className="w-14 h-14 flex flex-col justify-center items-center tooltip"
              onClick={e => {
                setUserType(prev => {
                  if (prev === "Novice") {
                    setSelectedVis([
                      "Histogram",
                      "Bar Chart",
                      "Pie Chart",
                      "LineChart"
                    ])
                    return "Beginner"
                  } else if (prev === "Beginner") {
                    setSelectedVis([
                      "Histogram",
                      "Bar Chart",
                      "Pie Chart",
                      "LineChart",
                      "Scatterplot"
                    ])
                    return "Expert"
                  } else {
                    setSelectedVis(["Histogram", "Bar Chart", "Pie Chart"])
                    return "Novice"
                  }
                })
              }}
              data-tip={"User Type"}
            >
              <PiUserSwitchBold className="w-10 h-10" />
              <p className="font-medium w-max text-center text-xs">
                {userType}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const EachDA = ({ item, setMetadata, index }) => {
  const {metadata} = React.useContext(StateContext)
  const [isOpen, setIsOpen] = useState(false)
  const handleClickAnimation = () => {
    setIsOpen(prev => !prev)
  }
  return (
    <div
      className={`flex flex-col items-start gap-1 w-min  ${isOpen ? "open" : "closed"
        }`}
    >
      <div className=" flex justify-around gap-2 items-center">
        <div
          className="arrow-clickable"
          onClick={handleClickAnimation}
          id={item.DA_name}
        >
          <BsFillTriangleFill
            color="white"
            className={`transition-all ${isOpen ? "rotate-180" : "rotate-90"
              } self-center`}
          />
        </div>
        <div className="DA_Name w-[15vw] overflow-hidden">{metadata[0][index+1]}</div>
        <div className="DA_Name  overflow-hidden">{metadata[3][index+1]}</div>
      </div>
      <div className="content w-full">
        <div className="flex justify-between w-full items-center gap-2">
          {/* <p className="">{item.user_imp}</p> */}
          <div className="w-full">
            <input type="range" min={0} max="100" value={metadata[3][index+1]} className="range range-xs range-primary w-full" onChange={(e) => {
              setMetadata(prev => {
                let newArray = [...prev]
                newArray[3][index+1] = e.target.value
                return newArray
              })
            }} />
            <div className="w-full flex justify-between text-xs px-2 font-bold">
              <span>.</span>
              <span>.</span>
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftComponent
