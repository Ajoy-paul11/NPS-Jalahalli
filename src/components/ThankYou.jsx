import React from "react";
import { useNavigate } from "react-router-dom";

function ThankYou() {
    const navigate = useNavigate();

  return (
    <div className=" flex flex-col justify-center gap-4 items-center h-screen text-green-500 bg-[#f4f5ff]">
      <div className=" flex justify-center items-center gap-y-8 ">
        <h1 className=" text-center text-5xl ">Thank You </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-circle-check-big"
        >
          <path d="M21.801 10A10 10 0 1 1 17 3.335" />
          <path d="m9 11 3 3L22 4" />
        </svg>
      </div>
      <p className=" text-4xl">We appreciate your submission.</p>

      <p className=" flex gap-2 text-blue-500 justify-center items-center">
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-chevron-left"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>{" "}
        <span onClick={() => navigate("/")}>Back</span>
      </p>
    </div>
  );
}

export default ThankYou;
