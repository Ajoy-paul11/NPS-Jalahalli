import React, { useState, useRef, useEffect } from "react";
import jalahalli from "../assets/NPS-logo.jpg";
import Marquee from "react-fast-marquee";
import Tagline from "./Tagline";
import { Link } from "react-router-dom";
import { HiOutlineBars3 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import FormBackground from "./Form/FormBackground";
import Footer from "./Footer";

function MobileView({containerRef}) {
  const [open, setOpen] = useState(false);

  return (
    <div className=" min-h-screen flex flex-col">
      <div className="w-full bg-[#a2cefe] backdrop-blur-md shadow-sm">
        <div className="  p-4 flex flex-col lg:flex-row lg:justify-evenly items-center gap-4">
          <Link to={"/"}>
            <img
              src={jalahalli}
              alt="logo-school"
              className="h-[75px] lg:w-[300px] 2xl:w-[330px] rounded"
            />
          </Link>
          <div className=" max-w-[95%] bg-blue-500 rounded-sm py-2 ml-[-45px]">
            <Marquee className=" text-white text-sm">
              <Tagline />
              <Tagline />
            </Marquee>
          </div>
          <div className=" p-1 cursor-pointer text-black absolute top-[105px] right-[5px]">
            {open ? (
              <RxCross1 className=" w-8 h-8" onClick={() => setOpen(!open)} />
            ) : (
              <HiOutlineBars3
                className=" w-8 h-8"
                onClick={() => setOpen(!open)}
              />
            )}
          </div>
          {open && (
            <div className=" w-full h-fit bg-[rgba(255,255,255,0.4)] backdrop-blur-lg">
              <nav className="  text-black text-sm px-4 py-2 flex w-full">
                <ul className=" h-full flex flex-col gap-0.5 w-full">
                  <li className=" cursor-pointer group py-1 rounded px-2">
                    <Link>
                      About Us <IoIosArrowDown className=" inline-block" />
                    </Link>
                    <div className=" hidden group-hover:block">
                      <ul className=" top-[33px] p-1 rounded-lg">
                        <li className="  cursor-pointer p-1 text-sm hover:text-blue-600 px-2">
                          <Link to={"/director-message"}>Director Message</Link>
                        </li>
                        <li className="  cursor-pointer p-1 text-sm hover:text-blue-600 px-2">
                          <Link to={"/principal-message"}>
                            Principal Message
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <hr className=" border-black" />
                  <li className=" cursor-pointer hover:text-blue-600 py-1 rounded px-2">
                    <Link to={"/library"}>Library</Link>
                  </li>
                  <hr className=" border-black" />
                  <li className=" cursor-pointer hover:text-blue-600 py-1 rounded px-2">
                    <Link to={"/student-activity"}>Student Activity</Link>
                  </li>
                  <hr className=" border-black" />
                  <li className=" cursor-pointer hover:text-blue-600 py-1 rounded px-2">
                    <Link to={"/grade-11"}>Grade-11</Link>
                  </li>
                  <hr className=" border-black" />
                  <li className=" cursor-pointer group py-1 rounded px-2">
                    <Link>
                      Achievement <IoIosArrowDown className=" inline-block" />
                    </Link>
                    <div className=" hidden group-hover:block">
                      <ul className=" top-[321px] p-1 rounded-lg">
                        <li className=" cursor-pointer p-1 text-sm hover:text-blue-600 px-2">
                          {" "}
                          <Link to={"/student-achievement"}>
                            Student Achievement
                          </Link>
                        </li>
                        <li className=" cursor-pointer p-1 text-sm hover:text-blue-600 px-2">
                          <Link to={"/teacher-achievement"}>
                            Teacher Achievement
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
      </div>
      <div className="flex-1 bg-[#f4f5ff] flex relative">
        <div className=" w-full p-4 flex flex-col">
          <div className=" w-full relative top-[80px] h-[calc(100vh-130px)] lg:py-8 place-items-center lg:pl-0 xl:pl-8" ref={containerRef}>
            <FormBackground />
          </div>
          <div className=" px-3 mt-10">
            <h2 className=" text-3xl text-blue font-bold p-4 ">Library</h2>
            <p className=" text-lg p-4">
              Our school library is a treasure trove of knowledge, offering an
              extensive collection of books that inspire, educate, and
              entertain. From timeless classics to modern discoveries, every
              book on our shelves is a gateway to new ideas and adventures. Step
              in, explore, and let the power of reading take you places
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LargeView() {
  return (
    <div className=" min-h-screen flex flex-col">
      <div className=" w-full bg-blue-500 rounded-sm py-2 px-2 ">
        <Marquee className=" text-white lg:text-sm xl:text-base">
          <Tagline />
          <Tagline />
        </Marquee>
      </div>
      <div className="w-full bg-[rgba(255,255,255,0.4)] backdrop-blur-lg px-4 py-1 z-50 shadow-lg shadow-black/60">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:justify-between items-center gap-4">
          <Link to={"/"}>
            <img
              src={jalahalli}
              alt="logo-school"
              className="h-[75px] lg:w-[300px] 2xl:w-[330px] rounded"
            />
          </Link>
          <nav className=" text-black text-base px-4 py-2">
            <ul className=" flex gap-8 lg:justify-between xl:justify-evenly items-center">
              <li className=" cursor-pointer group">
                <Link>
                  About Us <IoIosArrowDown className=" inline-block" />
                </Link>
                <div className=" hidden group-hover:block">
                  <ul className=" absolute top-[54px] z-10 p-1 rounded-lg shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)] bg-[#f4f5ff]">
                    <li className=" cursor-pointer p-1 text-base hover:text-blue-600">
                      <Link to={"/director-message"}>Director Message</Link>
                    </li>
                    <li className=" cursor-pointer p-1 text-base hover:text-blue-600">
                      <Link to={"/principal-message"}>Principal Message</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className=" cursor-pointer hover:text-blue-600">
                <Link to={"/library"}>Library</Link>
              </li>
              <li className=" cursor-pointer hover:text-blue-600">
                <Link to={"/student-activity"}>Student Activity</Link>
              </li>
              <li className=" cursor-pointer hover:text-blue-600">
                <Link to={"/grade-11"}>Grade-11</Link>
              </li>
              <li className=" cursor-pointer group">
                <Link>
                  Achievement <IoIosArrowDown className=" inline-block" />
                </Link>
                <div className=" hidden group-hover:block">
                  <ul className=" absolute top-[54px] z-10 p-1 rounded-lg shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)] bg-[#f4f5ff]">
                    <li className=" cursor-pointer p-1 text-base hover:text-blue-600">
                      <Link to={"/student-achievement"}>
                        Student Achievement
                      </Link>
                    </li>
                    <li className=" cursor-pointer p-1 text-base hover:text-blue-600">
                      <Link to={"/teacher-achievement"}>
                        Teacher Achievement
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="flex-1 bg-[#f4f5ff] flex relative z-0">
        <div className=" w-2/3 p-4 overflow-y-auto">
          <div className=" px-6 mt-16">
            <h2 className=" text-4xl text-blue font-bold p-8">Library</h2>
            <p className="text-2xl p-8">
              Our school library is a treasure trove of knowledge, offering an
              extensive collection of books that inspire, educate, and
              entertain. From timeless classics to modern discoveries, every
              book on our shelves is a gateway to new ideas and adventures. Step
              in, explore, and let the power of reading take you places
            </p>
          </div>
          <div className=" w-1/3 absolute right-0 top-[60px] h-[calc(100vh-130px)] p-8 lg:pl-0 xl:pl-8 xl:pt-0 z-40">
            <FormBackground />
          </div>
        </div>
      </div>
    </div>
  );
}

function ModalForm({ setOpen }) {
  return (
    <div className=" fixed inset-0 flex items-center justify-center overflow-hidden z-10 bg-white/50">
      <div className=" relative  mx-auto">
        <div className=" relative rounded-lg shadow-xl bg-slate-500">
          <div className=" absolute right-1 top-3 z-10 hover:cursor-pointer hover:bg-gray-300 hover:rounded-full">
            <RxCross2
              className=" text-white h-6 w-6 hover:text-black duration-200"
              onClick={() => setOpen(false)}
            />
          </div>
          <FormBackground />
        </div>
      </div>
    </div>
  );
}

function Library() {
  const [open, setOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasPassed, setHasPassed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting && entry.boundingClientRect.top <= 0) {
          setHasPassed(true);
        } else if (entry.isIntersecting && entry.boundingClientRect.top > 0) {
          setHasPassed(false);
        } else if (!entry.isIntersecting && entry.boundingClientRect.top <= 0) {
          setHasPassed(true);
        } else if (!entry.isIntersecting && entry.boundingClientRect.top > 0) {
          setHasPassed(false);
        }

        setIsVisible(hasPassed);
      },
      {
        threshold: [0.3, 0.9],
        rootMargin: "0px",
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
      observer.disconnect();
    };
  }, [hasPassed]);

  useEffect(() => {
    setIsVisible(hasPassed);
  }, [hasPassed]);

  const buttonText = "ADMISSION";

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          className={`fixed right-0 top-[40%] bg-blue-500 text-white z-50 p-1.5 lg:p-2.5 rounded-l-md shadow-lg transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-0 -translate-x-full" : "opacity-100 translate-x-0"
          }`}
          onClick={() => setIsOpen(true)}
        >
          <div className="flex flex-col items-center">
            {buttonText.split("\n").map((word, wordIndex) => (
              <React.Fragment key={wordIndex}>
                {word.split("").map((char, charIndex) => (
                  <span
                    key={`${wordIndex}-${charIndex}`}
                    className="text-xs lg:text-sm font-semibold"
                  >
                    {char}
                  </span>
                ))}
                {wordIndex === 0 && <div className="h-1 lg:h-2" />}{" "}
                {/* Add space between words */}
              </React.Fragment>
            ))}
          </div>
        </button>
      )}

      {isOpen && (
        <div className=" fixed inset-0 flex items-center justify-center overflow-hidden z-10 bg-white/50">
          <div className=" relative  mx-auto">
            <div className=" relative rounded-lg shadow-xl bg-slate-500">
              <div className=" absolute right-1 top-3 z-10 hover:cursor-pointer hover:bg-gray-300 hover:rounded-full">
                <RxCross2
                  className=" text-white h-6 w-6 hover:text-black duration-200"
                  onClick={() => setIsOpen(false)}
                />
              </div>
              <FormBackground />
            </div>
          </div>
        </div>
      )}
      {open ? <ModalForm setOpen={setOpen} /> : ""}
      <div>{windowWidth < 1024 ? <MobileView containerRef={containerRef}/> : <LargeView />}</div>
      <div >
        <Footer />
      </div>
    </div>
  );
}

export default Library;
