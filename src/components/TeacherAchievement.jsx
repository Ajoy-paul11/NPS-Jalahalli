import React, { useState, useEffect } from "react";
import jalahalli from "../assets/NPS-logo.jpg";
import Marquee from "react-fast-marquee";
import Tagline from "./Tagline";
import { Link } from "react-router-dom";
import { HiOutlineBars3 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import achievement1 from "../assets/teacher-achievement/teacher-achievement1.png";
import achievement2 from "../assets/teacher-achievement/teacher-achievement2.png";
import achievement3 from "../assets/teacher-achievement/teacher-achievement3.jpeg";
import achievement4 from "../assets/teacher-achievement/teacher-achievement4.jpeg";
import { RxCross2 } from "react-icons/rx";
import FormBackground from "./Form/FormBackground";
import Aos from "aos";
import "aos/dist/aos.css";

function MobileView() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  });
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
            <Marquee className=" text-white font-semibold text-xl">
              <Tagline />
              <Tagline />
            </Marquee>
          </div>
          <div className=" p-1 cursor-pointer text-blue absolute top-[110px] right-[5px]">
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
            <div className=" w-full h-screen">
              <nav className=" h-[600px] text-blue font-semibold text-sm lg:text-base xl:text-lg px-4 py-2 flex items-center justify-center">
                <ul className=" h-full flex flex-col justify-evenly gap-1 items-center">
                  <li className=" cursor-pointer group">
                    <Link>
                      About Us <IoIosArrowDown className=" inline-block" />
                    </Link>
                    <div className=" hidden group-hover:block">
                      <ul className=" bg-[rgba(255,255,255,0.2)] backdrop-blur-lg absolute top-[275px] p-1 rounded-lg">
                        <li className=" cursor-pointer p-1 text-base">
                          <Link to={"/director-message"}>Director Message</Link>
                        </li>
                        <li className=" cursor-pointer p-1 text-base">
                          <Link to={"/principal-message"}>
                            Principal Message
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className=" cursor-pointer">
                    <Link to={"/library"}>Library</Link>
                  </li>
                  <li className=" cursor-pointer">
                    <Link to={"/student-activity"}>Student Activity</Link>
                  </li>
                  <li className=" cursor-pointer ">
                    <Link to={"/grade-11"}>Grade-11</Link>
                  </li>
                  <li className=" cursor-pointer group">
                    <Link>
                      Achievement <IoIosArrowDown className=" inline-block" />
                    </Link>
                    <div className=" hidden group-hover:block">
                      <ul className=" bg-[rgba(255,255,255,0.4)] backdrop-blur-lg absolute top-[680px] p-1 rounded-lg">
                        <li className=" cursor-pointer p-1 text-base">
                          {" "}
                          <Link to={"/student-achievement"}>
                            Student Achievement
                          </Link>
                        </li>
                        <li className=" cursor-pointer p-1 text-base">
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
          <h2 data-aos="slide-right" className=" text-3xl text-blue font-bold p-4 text-center">
            Teacher Achievement
          </h2>
          <div className=" w-full top-[130px] h-[calc(100vh-130px)]  py-8 place-items-center lg:pl-0 xl:pl-8">
            <FormBackground />
          </div>
          <div className=" grid md:grid-cols-2 gap-8">
            <div className=" ">
              <img
                data-aos="zoom-in"
                src={achievement1}
                alt="activity-img"
                className=" rounded-lg"
              />
            </div>
            <div className="">
              <img
                data-aos="zoom-in"
                src={achievement2}
                alt="activity-img"
                className=" rounded-lg"
              />
            </div>
            <div className=" ">
              <img
                data-aos="zoom-in"
                src={achievement3}
                alt="activity-img"
                className=" rounded-lg"
              />
            </div>
            <div className=" ">
              <img
                data-aos="zoom-in"
                src={achievement4}
                alt="activity-img"
                className=" rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LargeView() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  })
  return (
    <div className=" min-h-screen flex flex-col">
      <div className=" w-full bg-blue-500 rounded-sm py-2 px-2 ">
        <Marquee className=" text-white font-semibold text-xl">
          <Tagline />
          <Tagline />
        </Marquee>
      </div>
      <div className="w-full bg-[rgba(255,255,255,0.4)] backdrop-blur-lg  px-4 py-1 z-50 shadow-lg shadow-black/60">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:justify-between items-center gap-4">
          <Link to={"/"}>
            <img
              src={jalahalli}
              alt="logo-school"
              className="h-[75px] lg:w-[300px] 2xl:w-[330px] rounded"
            />
          </Link>
          <nav className=" text-blue font-semibold text-sm lg:text-base xl:text-lg px-4 py-2">
            <ul className=" flex gap-8 lg:justify-between xl:justify-evenly items-center">
              <li className=" cursor-pointer group">
                <Link>
                  About Us <IoIosArrowDown className=" inline-block" />
                </Link>
                <div className=" hidden group-hover:block ">
                  <ul className=" absolute top-[55px] z-10 p-2 rounded-lg shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)] bg-[#f4f5ff]">
                    <li className=" cursor-pointer p-1 text-base">
                      <Link to={"/director-message"}>Director Message</Link>
                    </li>
                    <li className=" cursor-pointer p-1 text-base">
                      <Link to={"/principal-message"}>Principal Message</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className=" cursor-pointer">
                <Link to={"/library"}>Library</Link>
              </li>
              <li className=" cursor-pointer">
                <Link to={"/student-activity"}>Student Activity</Link>
              </li>
              <li className=" cursor-pointer ">
                <Link to={"/grade-11"}>Grade-11</Link>
              </li>
              <li className=" cursor-pointer group">
                <Link>
                  Achievement <IoIosArrowDown className=" inline-block" />
                </Link>
                <div className=" hidden group-hover:block ">
                  <ul className=" absolute top-[55px] z-10 p-1 rounded-lg shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)] bg-[#f4f5ff]">
                    <li className=" cursor-pointer p-1 text-base">
                      <Link to={"/student-achievement"}>
                        Student Achievement
                      </Link>
                    </li>
                    <li className=" cursor-pointer p-1 text-base">
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
        <h2
            data-aos="slide-right"
            className=" text-4xl text-blue font-bold p-6 text-center"
          >
            Teacher Achievement
          </h2>
          <div className=" grid grid-cols-1 gap-8 place-items-center px-6 mt-16">
            <div className=" 2xl:w-[80%] 2xl:h-[800px]">
              <img
                data-aos="zoom-in"
                src={achievement1}
                alt="activity-img"
                className=" w-full h-full rounded-lg"
              />
            </div>
            <div className=" 2xl:w-[80%] 2xl:h-[800px]">
              <img
                data-aos="zoom-in"
                src={achievement2}
                alt="activity-img"
                className=" w-full h-full rounded-lg"
              />
            </div>
            <div className=" 2xl:w-[80%] 2xl:h-[800px]">
              <img
                data-aos="zoom-in"
                src={achievement3}
                alt="activity-img"
                className=" w-full h-full rounded-lg"
              />
            </div>
            <div className=" 2xl:w-[80%] 2xl:h-[800px]">
              <img
                data-aos="zoom-in"
                src={achievement4}
                alt="activity-img"
                className=" w-full h-full rounded-lg"
              />
            </div>
          </div>
          <div className=" w-1/3 fixed right-0 top-[160px] h-[calc(100vh-130px)] p-8 lg:pl-0 xl:pl-8 z-40">
            <div className=" ">
              <FormBackground />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ModalForm({ setOpen }) {
  return (
    <div className=" fixed inset-0 flex items-center justify-center overflow-hidden z-10 bg-white/40">
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

function TeacherAchievement() {
  const [open, setOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
    <>
      {open ? <ModalForm setOpen={setOpen} /> : ""}
      <div>{windowWidth < 1024 ? <MobileView /> : <LargeView />}</div>;
    </>
  );
}

export default TeacherAchievement;
