"use client"

import React, { useContext, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { BiUpload } from "react-icons/bi";
import { AiFillYoutube, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import heroimage from "./assets/Dashboard-Example.png";
import Carousel from "./components/Carousel/carousel";
import { StateContext } from "./StateProvider";
import users from "./assets/users.png";
import auto from "./assets/auto.png";
import pref from "./assets/pref.png";
import fast from "./assets/fast.png";

export default function Home() {
  const router = useRouter();

  const inputFileRef = useRef(null);

  const { metadata, setMetadata, setFileData, fileName, setFileName } = useContext(StateContext);

  const handleUploadClick = () => {
    if (inputFileRef.current) {
      inputFileRef.current.click();
    }
  };

  const [processedData, setProcessedData] = useState ([]);

  const processFile = async (event) => {
    const selectedFile = event.target.files?.[0];
    if (!selectedFile) {
      console.log("No file selected.");
      return;
    }

    const fileContent = await selectedFile.text();
    const fileData = fileContent.split("\n");
    fileData.forEach((row, i) => {
      const eachRow = row.split(",");
      setFileData((prev) => [...prev, eachRow]);
    });
    processData(fileContent);
  };
  const processFile2 = async (fileName) => {
    const selectedFile = await fetch(`/input_file/${fileName}.csv`);
    if (!selectedFile) {
      console.log("No file selected.");
      return;
    }

    const fileContent = await selectedFile.text();
    const fileData = fileContent.split("\n");
    fileData.forEach((row, i) => {
      const eachRow = row.split(",");
      setFileData((prev) => [...prev, eachRow]);
    });
    processData2(fileContent, fileName);
  }
  const fetchStudent = async () => {
    try {
      const response = await fetch("/input_file/student.csv");
      const element = document.createElement("a");
      const file = new Blob([await response.text()], {
        type: "text/plain",
      });
      element.href = URL.createObjectURL(file);
      element.download = "student.csv";
      document.body.appendChild(element); // Required for this to work in FireFox
      element.click();
    } catch (error) {
      console.error("Error fetching student.csv:", error);
    }
  };


  const fetchDaType = async () => {
    try {
      const response = await fetch("/static_file/DA_type_student.csv");
      const daTypeContent = await response.text();
      return daTypeContent;
    } catch (error) {
      console.error("Error fetching DA_type_student.csv:", error);
      return "";
    }
  };
  const fetchDaType2 = async (fileName) => {
    try {
      const response = await fetch(`/static_file/DA_type_${fileName}.csv`);
      const daTypeContent = await response.text();
      return daTypeContent;
    } catch (error) {
      console.error(`Error fetching DA_type_${fileName}.csv`, error);
      return "";
    }
  };

  const processData = async (fileContent) => {
    const daTypeContent = await fetchDaType();
    if (!daTypeContent) {
      console.error("DA_type_student.csv not found.");
      return;
    }

    const DAT = daTypeContent.split("\n").map((row) => row.split(","));
    const DA_type = DAT[1];

    const fileData = fileContent.split("\n");
    const attr_no = fileData[0].split(",").length;
    const row_no = fileData.length;
    const user_imp = ["user_imp"];
    const unique_value = ["unique_value"];
    const DA_name = ["DA_name"];

    function get_random(list) {
      return list[Math.floor(Math.random() * list.length)];
    }

    for (let n = 0; n < attr_no; n++) {
      DA_name.push(fileData[0].split(",")[n]);

      const arrr_imp = [0, 100, -1, -2];
      let imp_value = get_random(arrr_imp);

      if (imp_value === -1) {
        imp_value = Math.floor(Math.random() * 99) + 1;
      } else if (imp_value === -2) {
        imp_value = 50;
      }
      user_imp.push(imp_value.toString());

      const column_data = [];
      for (let j = 1; j < row_no - 1; j++) {
        column_data[j] = fileData[j].split(",")[n];
      }
      const unique = column_data.filter(
        (item, i, ar) => ar.indexOf(item) === i
      );
      unique_value.push(unique.length.toString());
    }

    const fileData2 = [
      DA_name.join(","),
      DA_type.join(","),
      unique_value.join(","),
      user_imp.join(","),
    ].join("\n");

    setProcessedData(fileData2.split("\n"));
    const splittedData = fileData2.split("\n");
    splittedData.forEach((row, i) => {
      const eachRow = row.split(",");
      setMetadata((prev) => [...prev, eachRow]);
    });
  };
  const processData2 = async (fileContent, fileName) => {
    const daTypeContent = await fetchDaType2(fileName);
    if (!daTypeContent) {
      console.error("DA_type_student.csv not found.");
      return;
    }

    const DAT = daTypeContent.split("\n").map((row) => row.split(","));
    const DA_type = DAT[1];

    const fileData = fileContent.split("\n");
    const attr_no = fileData[0].split(",").length;
    const row_no = fileData.length;
    const user_imp = ["user_imp"];
    const unique_value = ["unique_value"];
    const DA_name = ["DA_name"];

    function get_random(list) {
      return list[Math.floor(Math.random() * list.length)];
    }

    for (let n = 0; n < attr_no; n++) {
      DA_name.push(fileData[0].split(",")[n]);

      const arrr_imp = [0, 100, -1, -2];
      let imp_value = get_random(arrr_imp);

      if (imp_value === -1) {
        imp_value = Math.floor(Math.random() * 99) + 1;
      } else if (imp_value === -2) {
        imp_value = 50;
      }
      user_imp.push(imp_value.toString());

      const column_data = [];
      for (let j = 1; j < row_no - 1; j++) {
        column_data[j] = fileData[j].split(",")[n];
      }
      const unique = column_data.filter(
        (item, i, ar) => ar.indexOf(item) === i
      );
      unique_value.push(unique.length.toString());
    }

    const fileData2 = [
      DA_name.join(","),
      DA_type.join(","),
      unique_value.join(","),
      user_imp.join(","),
    ].join("\n");

    setProcessedData(fileData2.split("\n"));
    const splittedData = fileData2.split("\n");
    splittedData.forEach((row, i) => {
      const eachRow = row.split(",");
      setMetadata((prev) => [...prev, eachRow]);
    });
  };

  useEffect(() => {
    if (metadata != null && metadata.length > 0) {
      router.push("/Screen2");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [metadata]);
  return (
    <main className="">
      <div className="w-full px-12 pt-24">
        <section className=" hero-Section h-max flex justify-between items-center w-full">
          <div className="flex flex-col justify-center items-start gap-5 w-[60%] h-full text-[--main-purple]">
            <h1 className=" text-5xl text-[--main-purple] font-extrabold">
              Automatic Dashboard
              Recommendation
              System
            </h1>
            <p className="text-2xl text-[--main-purple] font-medium">
              Analyse your data in 3 steps:
              <br />
              Upload data -&gt; Set your preferences -&gt; Visulization and Analysis
            </p>
            <div className="inputFile flex flex-col gap-5">
              <p className="text-2xl font-medium">
                To get started, upload your file or{" "}
                <span
                  className=" underline italic font-medium cursor-pointer"
                  onClick={() => {
                    const item = document.getElementById("my_modal_2");
                    item.showModal();
                  }}
                >
                  Choose an existing data set
                </span>
              </p>
              <dialog id="my_modal_2" className="modal">
                <form method="dialog" className="modal-box bg-primary">
                  <h3 className="font-bold text-lg mb-5">
                    Choose from existing data set
                  </h3>
                  <div className="flex justify-center items-center gap-5">
                    <button className="btn btn-outline btn-secondary w-32" onClick={(e) => {
                      e.preventDefault()
                      processFile2("student")
                      setFileName("student")
                    }}>
                      Student
                    </button>
                    <button className="btn btn-outline btn-secondary w-32" onClick={(e) => {
                      e.preventDefault()
                      processFile2("adult")
                      setFileName("adult")
                    }}>
                      Adult
                    </button>
                    <button className="btn btn-outline btn-secondary w-32" onClick={(e) => {
                      e.preventDefault()
                      processFile2("iris")
                      setFileName("iris")
                    }}>
                      Iris
                    </button>
                  </div>
                </form>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
              <div
                className=" rounded-xl px-3 py-3 bg-[--main-purple] flex justify-center items-center text-white font-semibold w-64"
                onClick={handleUploadClick}
              >
                Upload
                <BiUpload className=" self-center" />
                <input
                  type="file"
                  name=""
                  id="inputFile"
                  className="hidden"
                  ref={inputFileRef}
                  onChange={processFile}
                  accept=".csv"
                />
              </div>
              <p className="italic">*Our tool only support .CSV files with preprocessed data, <span className=" cursor-pointer underline" onClick={(e) => {
                e.preventDefault()
                fetchStudent()
              }}>GET AN EXAMPLE</span>*</p>
            </div>
          </div>
          <div className="HeroImage h-max w-[40%] aspect-auto shadow-sm rounded-md overflow-hidden">
            <Image
              src={heroimage}
              alt=""
              className="w-full h-auto aspect-auto object-cover"
            />
          </div>
        </section>
        <section
          id="features-Section"
          className="features-Section h-max flex flex-col gap-20 items-start w-full my-6"
        >
          <h3 className="text-2xl font-bold text-secondary">Features of Our System</h3>
          <div className="container">
            <div className="flex gap-10">
              <div className="Card flex flex-col items-center gap-3 users w-full text-secondary">
                <Image
                  src={users}
                  alt=""
                  className="w-[70%] h-auto aspect-square"
                />
                <div>
                  <h4 className="text-xl font-bold">Users</h4>
                  <p className="text-md font-semibold">
                    Supports 4 types of users i.e Novice, Beginner, Intermediate
                    and Expert
                  </p>
                </div>
              </div>
              <div className="Card flex flex-col items-center gap-3 auto w-full text-secondary">
                <Image
                  src={auto}
                  alt=""
                  className="w-[70%] h-auto aspect-square"
                />
                <div>
                  <h4 className="text-xl font-bold">Completely Automatic</h4>
                  <p className="text-md font-semibold">
                    Our System is Completely automatic
                  </p>
                </div>
              </div>
              <div className="Card flex flex-col items-center gap-3 interactive w-full text-secondary">
                <Image
                  src={require("./assets/heroimage.png")}
                  alt=""
                  className="w-[70%] h-auto aspect-square"
                />
                <div>
                  <h4 className="text-xl font-bold">
                    Interactive user interface
                  </h4>
                  <p className="text-md font-semibold">
                    Our System is interactive and easy to use
                  </p>
                </div>
              </div>
              <div className="Card flex flex-col items-center gap-3 pref w-full text-secondary">
                <Image
                  src={pref}
                  alt=""
                  className="w-[70%] h-auto aspect-square"
                />
                <div>
                  <h4 className="text-xl font-bold">User preferences</h4>
                  <p className="text-md font-semibold">
                    In our system, user can set their preferences
                  </p>
                </div>
              </div>
              <div className="Card flex flex-col items-center gap-3 sandf w-full text-secondary">
                <Image
                  src={fast}
                  alt=""
                  className="w-[70%] h-auto aspect-square"
                />
                <div>
                  <h4 className="text-xl font-bold">Simple and Fast</h4>
                  <p className="text-md font-semibold">
                    Our System is simple and fast
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="publications-Section"
          className="publications-Section h-max flex flex-col gap-6 items-start w-full my-6 text-secondary"
        >
          <h3 className="text-2xl font-bold">Publications</h3>
          <Carousel />
        </section>
        <section
          id="authors-Section"
          className="authors-Section h-max flex flex-col gap-6 items-start w-full mb-6"
        >
          <h3 className="text-2xl font-bold text-secondary">Authors</h3>
          <div className="container">
            <div className="flex gap-10 justify-center items-center">
              {/* <div className="Card flex flex-col items-center gap-3 users w-[15%] bg-[--main-purple] rounded-xl py-5 px-4 text-[--light-purple]">
                <Image
                  src={users}
                  alt=""
                  className="w-[90%] h-auto aspect-square border-2 border-[--light-purple] rounded-xl"
                />
                <div className="py-5">
                  <h4 className="text-xl font-bold">Praveen Soni</h4>
                  <p className="text-md font-semibold text-center w-full">
                    PhD Scholar
                  </p>
                </div>
              </div>
              <div className="Card flex flex-col items-center gap-3 users w-[15%] bg-[--main-purple] rounded-xl py-5 px-4 text-[--light-purple]">
                <Image
                  src={users}
                  alt=""
                  className="w-[90%] h-auto aspect-square border-2 border-[--light-purple] rounded-xl"
                />
                <div className="py-5">
                  <h4 className="text-xl font-bold">Praveen Soni</h4>
                  <p className="text-md font-semibold text-center w-full">
                    PhD Scholar
                  </p>
                </div>
              </div>
              <div className="Card flex flex-col items-center gap-3 users w-[15%] bg-[--main-purple] rounded-xl py-5 px-4 text-[--light-purple]">
                <Image
                  src={users}
                  alt=""
                  className="w-[90%] h-auto aspect-square border-2 border-[--light-purple] rounded-xl"
                />
                <div className="py-5">
                  <h4 className="text-xl font-bold">Praveen Soni</h4>
                  <p className="text-md font-semibold text-center w-full">
                    PhD Scholar
                  </p>
                </div>
              </div>
              <div className="Card flex flex-col items-center gap-3 users w-[15%] bg-[--main-purple] rounded-xl py-5 px-4 text-[--light-purple]">
                <Image
                  src={users}
                  alt=""
                  className="w-[90%] h-auto aspect-square border-2 border-[--light-purple] rounded-xl"
                />
                <div className="py-5">
                  <h4 className="text-xl font-bold">Praveen Soni</h4>
                  <p className="text-md font-semibold text-center w-full">
                    PhD Scholar
                  </p>
                </div>
              </div> */}
              <div className="card w-72 bg-secondary shadow-xl">
                <figure className="px-10 py-4">
                  <Image
                    src={require("./assets/Praveen.png")}
                    alt="Praveen Soni"
                    className="rounded-xl w-40 h-40 object-cover"
                  />
                </figure>
                <div className="card-body items-center text-center text-primary flex flex-col gap-4 h-40 pt-3">
                  <h2 className="card-title">Praveen Soni</h2>
                  <p>PhD student</p>
                  <p>University of Tours</p>
                </div>
              </div>
              <div className="card w-72 bg-secondary shadow-md shadow-gray-500">
                <figure className="px-10 py-4">
                  <Image
                    src={require("./assets/Cyril.jpg")}
                    alt="Cyril De Runz"
                    className="rounded-xl w-40 h-40 object-cover"
                  />
                </figure>
                <div className="items-center text-center text-primary flex flex-col gap-4 h-40 pt-3">
                  <h2 className="card-title">Cyril De Runz</h2>
                  <p>Associate Professor (HDR)</p>
                  <p>Thesis Co-director</p>
                </div>
              </div>
              <div className="card w-72 bg-secondary shadow-md shadow-gray-500">
                <figure className="px-10 py-4">
                  <Image
                    src={require("./assets/Fatma.jpg")}
                    alt="Fatma Bouali"
                    className="rounded-xl w-40 h-40 object-cover"
                  />
                </figure>
                <div className=" items-center text-center text-primary flex flex-col gap-4 h-40 pt-3">
                  <h2 className="card-title">Fatma Bouali</h2>
                  <p>Full Professor (HDR)</p>
                  <p>Thesis Co-director</p>
                </div>
              </div>
              <div className="card w-72 bg-secondary shadow-md shadow-gray-500">
                <figure className="px-10 py-4">
                  <Image
                    src={require("./assets/Gilles.jpg")}
                    alt="Gilles Venturini"
                    className="rounded-xl w-40 h-40 object-cover"
                  />
                </figure>
                <div className="items-center text-center text-primary flex flex-col gap-4 h-40 pt-3">
                  <h2 className="card-title">Gilles Venturini</h2>
                  <p>Full Professor (HDR)</p>
                  <p>Thesis Director</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer className="footer items-center p-4 bg-secondary text-neutral-content mt-20">
        <div className="items-center grid-flow-col">
          <p>Copyright © 2023 - All right reserved</p>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a
            href="https://www.youtube.com/channel/UCBK7sdA6BfjVdCbPanVrwRA/featured"
            target="_blank"
          >
            <AiFillYoutube className=" w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/praveen-soni-0abb10161" target="_blank">
            <AiFillLinkedin className=" w-6 h-6" />
          </a>
          <a
            href="
          https://www.facebook.com/praveen.soni.353/"
            target="_blank"
          >
            <AiFillFacebook className=" w-6 h-6" />
          </a>
        </div>
      </footer>
    </main>
  );
}
