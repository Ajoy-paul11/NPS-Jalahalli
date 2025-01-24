import React from "react";

function Footer() {
  return (
    <footer className=" p-8 mt-6 flex flex-col lg:flex-row justify-evenly items-center lg:items-end  gap-8 bg-blue-100">
      <div className=" max-w-lg text-lg">
       <span className=" text-blue">&copy; Copyrights </span> {new Date().getFullYear()}{" "}
        <span>National Public School, Jalahalli. <br className=" hidden lg:block"/> All Rights Reserved.</span>
      </div>
      <div className=" max-w-lg">
        <h4 className=" text-2xl font-semibold text-center text-blue mb-4">Contact Us</h4>
        <p className=" flex items-center gap-6 text-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-map-pinned text-blue"
          >
            <path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0" />
            <circle cx="12" cy="8" r="2" />
            <path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712" />
          </svg>
          Gangamma Gudi Police Station road, Behind Shriram Sameeksha
          apartments, Shriniket Layout, Singapura, Jalahalli East, Bangalore -
          560015.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
