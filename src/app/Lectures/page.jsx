import React from "react";
import { FaFileDownload, FaPaperPlane } from "react-icons/fa";
import { GiArchiveResearch } from "react-icons/gi";

const Page = () => {
  const cardDetails = [
    {
      Title: "Conference Paper",
      Description: "A genetic algorithm for automatic dashboard generation: first results",
      Video: "https://www.youtube.com/embed/hvFBsEa2HU4?si=Twk7_PVOvGb7rJi5",
      Download: "https://www.youtube.com/embed/imBPrY9-VoI?si=ln9jxCqtZFpntjFJ",
      Paper: "https://www.youtube.com/embed/imBPrY9-VoI?si=ln9jxCqtZFpntjFJ",
    },
    {
      Title: "Conference Paper",
      Description: "Challenges for automatic dashboard generation systems in the context of novice users",
      Video: "https://www.youtube.com/embed/BysPmtwPKGw?si=Mp6qdr1SpkkjMhNK",
      Download: "https://www.youtube.com/embed/imBPrY9-VoI?si=ln9jxCqtZFpntjFJ",
      Paper: "https://www.youtube.com/embed/imBPrY9-VoI?si=ln9jxCqtZFpntjFJ",
    },
    {
      Title: "Research Tutorial",
      Description: "Introduction to Research for students",
      Video: "https://www.youtube.com/embed/imBPrY9-VoI?si=GYPtYC2BjRDn5LRE",
      Download: "https://www.youtube.com/embed/imBPrY9-VoI?si=ln9jxCqtZFpntjFJ",
      Paper: "https://www.youtube.com/embed/imBPrY9-VoI?si=ln9jxCqtZFpntjFJ",
    },
  ];
  return (
    <div className="pt-24 text-secondary h-full pb-5 min-h-screen">
      <h1 className="text-3xl text-center font-bold mb-10 mt-5">Lectures and Presentations</h1>
      <div className=" flex justify-center items-center flex-grow flex-1 gap-5 w-screen flex-wrap">
        {cardDetails.map((cardDetail, index) => (
          <TutorialCard {...{ cardDetails: cardDetail }} key={index} />
        ))}
      </div>
    </div>
  );
};

const TutorialCard = ({ cardDetails }) => {
  return (
    <div className="card border-2 shadow-xl shadow-slate-500 py-3 hover:shadow-slate-700 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105
    ">
      <div className="card-body p-0 flex flex-col gap-5 items-center text-center w-min">
        <h2 className="card-title text-2xl font-bold underline-offset-2 ">{cardDetails.Title}</h2>
        <p className=" font-medium text-sm w-80">{cardDetails.Description}</p>
        <figure className="px-5 rounded-lg overflow-hidden">
          <iframe
            src={cardDetails.Video}
            allowFullScreen
            className="rounded-lg overflow-hidden shadow-md shadow-slate-400"
          ></iframe>
        </figure>
        <div className="flex justify-center items-center gap-4">
          <a href="" className="flex justify-center items-center flex-col gap-2">
            <button className="btn btn-secondary rounded-full"><FaFileDownload className=" w-4 h-4 aspect-square" /> </button>
            <p className=" text-sm font-medium">Download File</p>
          </a>
          <a href="" className="flex justify-center items-center flex-col gap-2">
            <button className="btn btn-secondary rounded-full"><FaPaperPlane className=" w-4 h-4 aspect-square" /> </button>
            <p className=" text-sm font-medium">Research Paper</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page;