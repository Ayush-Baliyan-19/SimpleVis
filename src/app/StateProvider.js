"use client";

import React from "react";
export const StateContext = React.createContext(null);

const StateProvider = ({ children }) => {
  const [metadata, setMetadata] = React.useState([]);
  const [fileData, setFileData] = React.useState([]);
  const [final_DBO, setFinal_DBO] = React.useState([]);
  const [final_DBo_all, setFinal_DBo_all] = React.useState([]);
  const [final_eval_all, setFinal_eval_all] = React.useState([]);
  const [best_DBos, setBest_DBos] = React.useState([]);
  const [isRunGA, setIsRunGA] = React.useState(false);
  const [DBo_POP, setDBo_POP] = React.useState([]);
  const [dbo_evaluation, setdbo_evaluation] = React.useState([]);
  const [userType, setUserType] = React.useState("Novice");
  const [range,setRange]= React.useState({
    min:2,
    max:9
  })
  const [fileName,setFileName] = React.useState("")
  const [Only_1_2,setOnly_1_2] = React.useState(Math.floor(Math.random() * 10) + 1);
  const [only_2a_2b,setonly_2a_2b] = React.useState(Math.floor(Math.random() * 2) + 1);
  const [isCrossOver,setIsCrossOver] = React.useState(true);
  const [selectedVis, setSelectedVis] = React.useState([]);
  const [isLeftLocked,setIsLeftLocked] =React.useState(false);
  return (
    <StateContext.Provider value={{ metadata, setMetadata,fileData,setFileData,final_DBO,setFinal_DBO,final_DBo_all,setFinal_DBo_all,final_eval_all,setFinal_eval_all,best_DBos, setBest_DBos, isRunGA, setIsRunGA,DBo_POP, setDBo_POP,dbo_evaluation, setdbo_evaluation,userType, setUserType,range,setRange, Only_1_2, setOnly_1_2, only_2a_2b,setonly_2a_2b,isCrossOver,setIsCrossOver,selectedVis, setSelectedVis,isLeftLocked,setIsLeftLocked,fileName,setFileName}}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
