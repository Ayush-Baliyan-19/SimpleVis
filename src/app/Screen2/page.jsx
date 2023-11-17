"use client";

/* eslint-disable */
// Your code here

import React, { useState, useContext, useEffect, Suspense } from "react";
import { StateContext } from "../StateProvider";
import { useRouter } from "next/navigation";
import {
  AiFillEdit,
  AiFillPieChart,
  AiOutlineInfoCircle,
  AiOutlineLineChart,
} from "react-icons/ai";
import MultiRangeSlider from "./MultiRangeSlider";
import "./page.scss";
import { TbChartHistogram } from "react-icons/tb";
import { BsBarChartFill, BsTriangleFill } from "react-icons/bs";
import { BiScatterChart, BiSolidDownArrow } from "react-icons/bi";
import { RxTriangleDown } from "react-icons/rx"
import Sort from "./Sort/Sort";
const Page = () => {
  const router = useRouter();
  const {
    metadata,
    setMetadata,
    setIsRunGA,
    dbo_evaluation,
    setdbo_evaluation,
    DBo_POP,
    setDBo_POP,
    userType,
    setUserType,
    range,
    setRange,
    selectedVis,
    setSelectedVis,
    final_DBo_all,
    setFinal_DBo_all,
    final_eval_all,
    setFinal_eval_all,
    final_DBO,
    setFinal_DBO,
    fileData
  } = useContext(StateContext);
  const [GenerationType, setGenerationType] = useState("Complete");
  const [UserFeedbackIntegration, setUserFeedbackIntegration] = useState(true);

  React.useEffect(() => {
    setIsRunGA(true);
  }, []);
  const visualtizations = [
    {
      name: "Histogram",
      icon: <TbChartHistogram />,
    },
    {
      name: "Bar Chart",
      icon: <BsBarChartFill />,
    },
    {
      name: "Pie Chart",
      icon: <AiFillPieChart />,
    },
    {
      name: "LineChart",
      icon: <AiOutlineLineChart />,
    },
    {
      name: "Scatterplot",
      icon: <BiScatterChart />,
    },
  ];

  const runGeneticAlgorithm = async (DBo_POP, dbo_evaluation) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/algorithm/geneticAlgo`, {
      method: "POST",
      body: JSON.stringify({
        DBo_POP: DBo_POP,
        DBo_POP_EVAL: dbo_evaluation,
        metadata:metadata,
        selectedVis:selectedVis
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (res.status == 200) {
      console.log(data);
      let tempfinalDataDBO = data.last_DBo;
      setFinal_DBO(tempfinalDataDBO);
      let updatedDBO = data.final_DBo_all;
      updatedDBO = updatedDBO.map((item) => item.split(","));
      console.log(updatedDBO);
      setFinal_DBo_all(updatedDBO);
      console.log(final_DBo_all);
      let tempfinalDataEval = data.final_DBo_eval;
      tempfinalDataEval = tempfinalDataEval.map((item) => item.split(","));
      setFinal_eval_all(tempfinalDataEval);
      console.log(final_eval_all);
    }
  };

  const runRandomAlgorithm = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/algorithm/randomGen`, {
      method: "POST",
      body: JSON.stringify({
        min: range.min,
        max: range.max,
        selectedVis: selectedVis,
        metadata:metadata
      }
      ),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data.data);
    if (data.status == "success") {
      setDBo_POP(data.data.Dbo);
      setdbo_evaluation(data.data.DBo_eval);
      runGeneticAlgorithm(data.data.Dbo, data.data.DBo_eval);
    }
  };

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
    <>
      <Modal />
      <div className="flex pt-24 gap-5 px-10 text-[--main-purple] h-screen">
        <div className="flex flex-col gap-5 w-[70%] left">
          <div className="flex flex-col gap-5">
            <p className=" font-semibold text-2xl w-max flex justify-center items-center gap-2 tooltip tooltip-right" data-tip="The statistical information extracted from the data uploaded for dashboard recommendations">Metadata
              <AiOutlineInfoCircle className="self-center" />:
            </p>
            <UserData2 metadata={metadata} setMetadata={setMetadata} />
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex items-center">

              <p className=" font-semibold text-2xl flex w-max justify-center items-center gap-2 tooltip tooltip-right" data-tip="The preprocessed data uploaded by user">User Data
                <AiOutlineInfoCircle className="self-center" />
                : </p><span className="font-regular">&nbsp; {fileData.length} Rows, {fileData[0].length} Columns</span>
            </div>
            <UserData />
          </div>
        </div>
        <div className="line h-screen w-[1px] rounded-lg bg-[--main-purple] -translate-y-24 opacity-60"></div>
        <div className="Right flex flex-col gap-5 items-center w-[30%]">
          <p className="font-semibold text-4xl">User Preferences</p>
          <div className="DashboardGenType flex flex-col justify-center items-center gap-3">
            <p className=" font-medium text-sm flex justify-center items-center gap-2 tooltip" data-tip="Your level of engagement while generating a dashboard">
              Dashboard Generation Type
              <AiOutlineInfoCircle className="self-center" />
            </p>
            <div className="flex justify-center items-center gap-3">
              <button
                className={`btn dbogentype ${GenerationType == "Complete" ? "" : "btn-outline"
                  } btn-secondary flex flex-col justify-center items-center gap-1 w-max`}
                id="Complete"
                onClick={(e) => {
                  setGenerationType(e.currentTarget.id);
                }}
              >
                <p>Completely Automatic</p>
              </button>
              <button
                className={`btn dbogentype ${GenerationType == "Predefined" ? "" : "btn-outline"
                  } btn-secondary flex flex-col justify-center items-center gap-1 w-max`}
                id="Predefined"
                onClick={(e) => {
                  // toast.info(`This feature is not avialable yet`, {
                  //   position: "top-right",
                  //   autoClose: 2000,
                  //   hideProgressBar: false,
                  //   closeOnClick: true,
                  //   pauseOnHover: true,
                  //   draggable: false,
                  //   progress: undefined,
                  // });
                  // alert("This feature is not avialable yet");
                  const modal = document.getElementById("my_modal_2");
                  modal?.showModal();
                  // setGenerationType(e.currentTarget.id);
                }}
              >
                <p>Predefined Template</p>
              </button>
            </div>
            <div className="form-control items-center w-full max-w-xs">
              <label className="label">
                <span className="label-text text-secondary font-medium self-start bg-opacity-0 flex justify-center items-center gap-2 tooltip" data-tip="Based on your previous knowledge and experience in data analysis, you can select the type of dashboard">
                  User Type
                  <AiOutlineInfoCircle className="self-center" />
                </span>
              </label>
              <select
                className="select select-secondary w-[16rem] select-bordered select-ghost focus:bg-primary focus:text-secondary"
                onChange={(e) => {
                  e.preventDefault();
                  setUserType(e.currentTarget.value);
                }}
              >
                <option disabled>Pick one</option>
                <option selected={userType === "Novice"} className="p-3">
                  Novice
                </option>
                <option selected={userType === "Beginner"} className="p-3">
                  Beginner
                </option>
                <option selected={userType === "Expert"} className="p-3">
                  Expert
                </option>
                {/* <option selected={userType === "Expert"}>Expert</option> */}
              </select>
            </div>
          </div>
          {UserFeedbackIntegration && (
            <>
              <div className="form-control w-full max-w-xs flex flex-col gap-4">
                <label className="label">
                  <p className="label-text text-[--main-purple] font-medium w-full text-center flex justify-center items-center gap-2 tooltip" data-tip="You can adjust the number of visualizations in the recommended dashboards.">
                    Number of Visualisations
                    <AiOutlineInfoCircle className="self-center" />
                  </p>
                </label>
                <div className="w-full max-w-xs mb-5">
                  <MultiRangeSlider
                    Range={range}
                    setRange={setRange}
                    min={2}
                    max={9}
                  />
                </div>
                <div className="filters w-max">
                  {/* <h1 className=" text-xl font-bold text-center text-white ">Filters</h1> */}
                  <h1 className="label-text text-center text-secondary flex justify-center items-center gap-2 tooltip" data-tip="You can select the desired visualization to be present in the recommended dashboard">
                    Selected Visualizations
                    <AiOutlineInfoCircle className="self-center" />
                  </h1>
                  <div className="h-[15vh]">
                    <div className="flex flex-wrap w-80">
                      {visualtizations &&
                        visualtizations.map((data, index) => {
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
                                className="checkbox border border-secondary checkbox-secondary"
                                onChange={(e) => {
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
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-secondary font-medium w-full text-center">
                    Objective of the analysis
                  </span>
                </label>
                <select className="select select-bordered select-secondary select-ghost">
                  <option disabled>Pick one</option>
                  <option selected>General Overview</option>
                  <option>Interactive analysis</option>
                  <option>Detailed Explaination</option>
                </select>
              </div> */}
            </>
          )}
          <button
            className="btn btn-secondary btn-outline"
            onClick={(e) => {
              e.preventDefault();
              // router.push("/Screen3");
              runRandomAlgorithm();
            }}
          >
            Next Page
          </button>
        </div>
      </div>
      {
        final_DBo_all.length > 0 && final_eval_all.length > 0 && (
          <Sort />
        )
      }
      {/* <RG_Eval
        {...{ DBo_POP, setDBo_POP, dbo_evaluation, setdbo_evaluation }}
      />
      {DBo_POP.length > 0 && dbo_evaluation.length > 0 && (
        <Analysis_GA {...{ DBo_POP, dbo_evaluation }} />
      )} */}
    </>
  );
};

const UserData = (props) => {
  const { fileData } = useContext(StateContext);
  return (
    <div className="overflow-x-scroll table-scroll overflow-y-scroll h-96 text-[--main-purple] w-full scrollChange">
      <table className="table table-xs border border-black">
        <thead className="text-[--light-purple] bg-[--main-purple] sticky top-0">
          <tr>
            {fileData[0]?.map((item, index) => (
              <th key={index}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {fileData.map(
            (item, index) =>
              index !== 0 && (
                <tr key={index}>
                  {item?.map((item2, index) => (
                    <td key={index}>{item2}</td>
                  ))}
                </tr>
              )
          )}
        </tbody>
      </table>
    </div>
  );
};
const UserData2 = ({
  metadata,
  setMetadata,
}) => {
  let metadata2 = [...metadata];
  let temp = metadata2[1];
  metadata2[1] = metadata2[2];
  metadata2[2] = temp;
  const containerRef = React.useRef(null);
  // const isTouchDevice = "ontouchstart" in window;

  const handleChange = (value, rowIndex, columnIndex) => {
    // Map the rowIndex to the corresponding metadata row
    const metadataRowIndex = rowIndex === 2 ? 1 : rowIndex;

    if (metadataRowIndex === 1) {
      setMetadata((prevMetadata) => {
        const updatedMetadata = [...prevMetadata];
        if (updatedMetadata[metadataRowIndex][columnIndex] == "Nominal") {
          updatedMetadata[metadataRowIndex][columnIndex] = "Ordinal";
        } else if (
          updatedMetadata[metadataRowIndex][columnIndex] == "Ordinal"
        ) {
          updatedMetadata[metadataRowIndex][columnIndex] = "Nominal";
        }
        return updatedMetadata;
      });
    }
  };

  const getLabel = (item) => {
    let label;
    if (item === "DA_name") {
      label = "Data Attribute Name";
    } else if (item === "DA_type") {
      label = "Data Attribute Type";
    } else if (item === "user_imp") {
      label = "User Importance";
    } else if (item === "unique_value") {
      label = "Unique Values";
    }
    return label;
  };
  const getLabel2 = (item) => {
    let label = "";
    if (item === "DA_name") {
      label = "These are data attributes present in the uploaded dataset."
    } else if (item === "DA_type") {
      label = "It represents the type of each data attribute";
    }
    else if (item === "user_imp") {
      label = "The user importance value represents the importance of particular data attributes during dashboard recommendations";
    }
    else if (item === "unique_value") {
      label = "It represents the total number of unique values present in the particular column of each data attribute";
    }
    return label;
  }
  if (Array.isArray(metadata) && Array.isArray(metadata2)) {
    return (
      <div
        className="overflow-x-scroll table-scroll text-[--main-purple] w-full overflow-y-hidden scrollChange"
      // ref={containerRef}
      // onWheel={handleWheelScroll}
      >
        <table className="table table-xs">
          <tbody className="border border-black">
            {metadata2?.map((item, index1) => (
              <tr key={index1}>
                {item?.map((item2, index2) =>
                  index2 === 0 ? (
                    <th
                      key={index2}
                      className="text-[--light-purple] bg-[--main-purple] sticky left-0 z-10 flex items-center gap-2 min-w-max tooltip tooltip-right metadatatip"
                      data-tip={getLabel2(item2)}
                    >
                      <AiOutlineInfoCircle />
                      {getLabel(item2)}
                      {index1 === 3 || index1 === 2 ? <AiFillEdit /> : null}
                    </th>
                  ) : index1 == 2 ? (
                    <td>
                      <select
                        name=""
                        id=""
                        className="bg-primary outline-none w-full"
                        onChange={(e) => {
                          handleChange(e.target.value, index1, index2);
                        }}
                      >
                        <option value="" disabled selected>
                          Pick one
                        </option>
                        <option value="" selected={item2 == "Nominal"}>
                          Nominal
                        </option>
                        <option value="" selected={item2 == "Ordinal"}>
                          Ordinal
                        </option>
                        <option value="" selected={item2 == "Numeric"}>
                          Numeric
                        </option>
                        <option value="" selected={item2 == "Temporal"}>
                          Temporal
                        </option>
                      </select>
                    </td>
                  ) : index1 == 3 ? (
                    <td key={index2} className="">
                      <div className="flex justify-between z-0 relative">
                        <input
                          type="text"
                          value={item2}
                          onChange={(e) => {
                            setMetadata((prev) => {
                              const temp = [...prev];
                              temp[index1][index2] = e.target.value;
                              return temp;
                            });
                          }}
                          className="bg-primary outline-none"
                          max={100}
                        />
                        <MetadataDropdown
                          {...{
                            setMetadata,
                            index1,
                            index2,
                            metadata,
                          }}
                        />
                      </div>
                      {/* <datalist id="datalist">
                      <option value="100">Very important (100)</option>
                      <option value="75">Important (75)</option>
                      <option value="50">Average (50)</option>
                      <option value="25">Less Important (25)</option>
                      <option value="0">Exclude (0)</option>
                      <option
                        value={
                          !["100", "75", "50", "25", "0"].includes(item2)
                            ? item2
                            : "Manual Value"
                        }
                      >
                        Manual Value(0-100)
                      </option>
                    </datalist> */}
                    </td>
                  ) : (
                    <td key={index2}>{item2}</td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else {
    return null;
  }
};

const Modal = () => {
  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box bg-primary">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-secondary">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg mb-5 text-secondary">
          This feature will be integrated soon...
        </h3>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

const MetadataDropdown = ({ index1, index2, setMetadata, metadata }) => {
  const [isManual, setIsManual] = useState(
    ![100, 75, 50, 25, 0].includes(metadata[index1][index2])
  );
  return (
    <>
      <select
        name=""
        id=""
        className="absolute z-0 bg-primary outline-none w-full opacity-0"
        onChange={(e) => {
          if (e.target.value === "Manual Value") {
            setIsManual(true);
          } else {
            setIsManual(false);
            setMetadata((prev) => {
              const temp = [...prev];
              temp[index1][index2] = e.target.value;
              return temp;
            });
          }
        }}
      >
        <option value="100" selected={metadata[index1][index2] == "100"}>
          Very Important (100)
        </option>
        <option value="75" selected={metadata[index1][index2] == "75"}>
          Important (75)
        </option>
        <option value="50" selected={metadata[index1][index2] == "50"}>
          Average (50)
        </option>
        <option value="25" selected={metadata[index1][index2] == "25"}>
          Less Important (25)
        </option>
        <option value="0" selected={metadata[index1][index2] == "0"}>
          Exclude (0)
        </option>
        <option
          value="Manual Value"
          selected={
            !["100", "75", "50", "25", "0"].includes(metadata[index1][index2])
          }
        >
          Manual Value (0-100)
        </option>
      </select>
      <input
        type="text"
        className="bg-primary outline-none absolute top-0 left-0 w-[80%]"
        onChange={(e) => {
          setMetadata((prev) => {
            const temp = [...prev];
            temp[index1][index2] = e.target.value;
            return temp;
          });
        }}
        value={metadata[index1][index2]}
      />
      <RxTriangleDown className="text-secondary" />
    </>
  );
};

export default Page;
