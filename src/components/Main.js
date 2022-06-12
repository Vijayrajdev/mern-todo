import React from "react";
import makeAnimated from "react-select/animated";
import "animate.css";
import mainImg from "../source/main_img.svg";

// Select component
const animatedComponents = makeAnimated();

const Main = () => {
  return (
    <div class="min-h-screen md:min-h-[80vh] p-8 md:p-12 md:max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row items-center justify-center md:justify-between">
        <div className="text-center md:text-justify gap-6 flex flex-col">
          <h1 className="text-3xl md:text-5xl animate__animated animate__jackInTheBox">
            Welcome to To.
          </h1>
          <p className="text-sm md:text-lg text-gray-500">
            This application is developed and maintained by a unknown guy.
          </p>
          <a href="https://vijayraj.netlify.app/" target="__blank">
            <button
              type="button"
              className=" w-40 border rounded border-green-500 bg-white text-sm md:text-md px-4 py-2 text-green-500  hover:bg-green-300 hover:text-black cursor-pointer"
            >
              Contact
            </button>
          </a>
        </div>
        <div class="h-[60vh] animate__animated animate__zoomIn">
          <img src={mainImg} alt="" className="h-full w-full" />
        </div>
      </div>
    </div>
  );
};

export default Main;
