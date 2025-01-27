import React,{ useEffect } from "react";
import { useNavigate } from "react-router-dom";
import verified from "../assets/verified.gif"

function ThankYou() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'page_view',          
      'page_path': '/thankyou', 
      'page_location': window.location.href,     
      'conversion_success': true 
    })
  }, [])
  const navigate = useNavigate();

  return (
    <div className=" flex flex-col justify-center gap-4 items-center h-screen text-blue-500 bg-[#f4f5ff]">
      <p className=" flex text-blue-500 justify-center items-center">
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
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
        <span onClick={() => navigate("/")} className=" cursor-pointer text-xl text-purple-500">
          Back
        </span>
      </p>
      <div className=" flex justify-center items-center gap-x-4 ">
        <h1 className=" text-center text-5xl ">Thank You </h1>
        <img src={verified} alt="thank-you" className=" w-12 h-12 lg:w-20 lg:h-20 mix-blend-darken" />
      </div>
      <p className=" text-2xl lg:text-4xl">We appreciate your submission.</p>
    </div>
  );
}

export default ThankYou;