"use client";

import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const pathName = usePathname();
  console.log(pathName);
  const router = useRouter();
  const handleItemClick = (itemName) => {
    if (pathName != "/")
      router.push("/");

    setActiveItem(itemName);
    if (itemName === "Home") return window.scrollTo({ top: 0, behavior: "smooth" }
    );
    const sectionId = `${itemName.toLowerCase()}-Section`;
    const section = document.getElementById(sectionId);
    console.log(section);
    if (section) {
      const navbarHeight = document.querySelector(".navbar")?.clientHeight || 0;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;;
      window.scrollTo({
        top: sectionTop - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="navbar w-full fixed z-10 p-4 border-b border-[--main-purple] border-opacity-40 flex justify-between bg-[--light-purple]">
      <div className="flex-1">
        <a className="btn btn-ghost text-[--main-purple] normal-case text-xl font-mono italic" href="/">
          PhD Thesis
        </a>
      </div>
      <div className="flex">
        <ul className="px-1 text-[--main-purple] font-semibold flex gap-4">
          <li
            className={`${activeItem === "Home"
                ? "bg-[--main-purple] text-[--light-purple]"
                : ""
              } px-3 py-1 rounded-3xl cursor-pointer`}
          >
            <a onClick={() => handleItemClick("Home")}>Home</a>
          </li>
          <li
            className={`${activeItem === "Features"
                ? "bg-[--main-purple] text-[--light-purple]"
                : ""
              } px-3 py-1 rounded-3xl cursor-pointer`}
          >
            <a onClick={() => handleItemClick("Features")}>Features</a>
          </li>
          <li
            className={`px-3 py-1 rounded-3xl ${activeItem === "Publications"
                ? "bg-[--main-purple] text-[--light-purple]"
                : ""
              } cursor-pointer`}
          >
            <a onClick={() => handleItemClick("Publications")}>Publications</a>
          </li>
          <li
            className={`px-3 py-1 rounded-3xl ${activeItem === "Authors"
                ? "bg-[--main-purple] text-[--light-purple]"
                : ""
              } cursor-pointer`}
          >
            <a onClick={() => handleItemClick("Authors")}>Authors</a>
          </li>
          <li
            className={`px-3 py-1 rounded-3xl cursor-pointer
            ${activeItem === "Lectures"
                ? "bg-[--main-purple] text-[--light-purple]"
                : ""
              }
            `}
          >
            <a onClick={(e) => {
              e.preventDefault();
              router.push("/Lectures");
              setActiveItem("Lectures");
            }}>Lectures</a>
          </li>
          <li
            className={`px-3 py-1 rounded-3xl cursor-pointer
            ${activeItem === "Tutorial"
                ? "bg-[--main-purple] text-[--light-purple]"
                : ""
              }
            `}
          >
            <a onClick={(e) => {
              e.preventDefault();
              router.push("/Tutorial");
              setActiveItem("Tutorial");
            }}>Tutorial</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
