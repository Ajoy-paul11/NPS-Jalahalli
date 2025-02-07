import React, { useState, useEffect } from "react";
import jalahalli from "../assets/NPS-logo.jpg";
import Marquee from "react-fast-marquee";
import FormAdmission from "./Form/Form";
import Tagline from "./Tagline";
import { Link } from "react-router-dom";
import { HiOutlineBars3 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import achievement1 from "../assets/teacher-achievement/teacher-achievement1.png";
import achievement2 from "../assets/teacher-achievement/teacher-achievement2.png";
import achievement3 from "../assets/teacher-achievement/teacher-achievement3.jpeg";
import achievement4 from "../assets/teacher-achievement/teacher-achievement4.jpeg";


function MobileView() {
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
                      <Link>About Us{" "}<IoIosArrowDown className=" inline-block"/></Link>
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
                      <Link>Achievement {" "}<IoIosArrowDown className=" inline-block"/></Link>
                      <div className=" hidden group-hover:block">
                        <ul className=" bg-[rgba(255,255,255,0.4)] backdrop-blur-lg absolute top-[680px] p-1 rounded-lg">
                          <li className=" cursor-pointer p-1 text-base">
                            {" "}
                            <Link to={"/student-achievement"}>Student</Link>
                          </li>
                          <li className=" cursor-pointer p-1 text-base">
                            <Link to={"/teacher-achievement"}>Teacher</Link>
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
        <div className="flex-1 bg-[#5f9ce0] flex relative">
          <div className=" w-full p-4 flex flex-col">
            <div className=" w-full top-[130px] h-[calc(100vh-130px)] bg-[#5f9ce0] py-8 place-items-center lg:pl-0 xl:pl-8">
              <FormAdmission />
            </div>
            <div className=" grid md:grid-cols-2 gap-8">
              <div className=" ">
                <img src={achievement1} alt="activity-img" className=" rounded-lg"/>
              </div>
              <div className="">
                <img src={achievement2} alt="activity-img" className=" rounded-lg"/>
              </div>
              <div className=" ">
                <img src={achievement3} alt="activity-img" className=" rounded-lg"/>
              </div>
              <div className=" ">
                <img src={achievement4} alt="activity-img" className=" rounded-lg"/>
              </div>
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
          <Marquee className=" text-white font-semibold text-xl">
            <Tagline />
            <Tagline />
          </Marquee>
        </div>
        <div className="w-full bg-[#a2cefe]  px-4 py-1">
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
                  <Link>About Us{" "}<IoIosArrowDown className=" inline-block"/></Link>
                  <div className=" hidden group-hover:block">
                    <ul className=" bg-[rgba(255,255,255,0.4)] backdrop-blur-lg absolute top-[100px] z-10 p-2 rounded-lg">
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
                  <Link>Achievement{" "}<IoIosArrowDown className=" inline-block"/></Link>
                  <div className=" hidden group-hover:block">
                    <ul className=" bg-[rgba(255,255,255,0.4)] backdrop-blur-lg absolute top-[100px] z-10 p-1 rounded-lg">
                      <li className=" cursor-pointer p-1 text-base">
                        <Link to={"/student-achievement"}>Student</Link>
                      </li>
                      <li className=" cursor-pointer p-1 text-base">
                        <Link to={"/teacher-achievement"}>Teacher</Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="flex-1 bg-[#5f9ce0] flex relative">
          <div className=" w-2/3 p-4 overflow-y-auto">
            <div className=" grid grid-cols-1 gap-8 place-items-center px-6 mt-16">
              <div className=" 2xl:w-[80%] 2xl:h-[800px]">
                <img
                  src={achievement1}
                  alt="activity-img"
                  className=" w-full h-full rounded-lg"
                />
              </div>
              <div className=" 2xl:w-[80%] 2xl:h-[800px]">
                <img
                  src={achievement2}
                  alt="activity-img"
                  className=" w-full h-full rounded-lg"
                />
              </div>
              <div className=" 2xl:w-[80%] 2xl:h-[800px]">
                <img
                  src={achievement3}
                  alt="activity-img"
                  className=" w-full h-full rounded-lg"
                />
              </div>
              <div className=" 2xl:w-[80%] 2xl:h-[800px]">
                <img
                  src={achievement4}
                  alt="activity-img"
                  className=" w-full h-full rounded-lg"
                />
              </div>
            </div>
            <div className=" w-1/3 fixed right-0 top-[160px] h-[calc(100vh-130px)] bg-[#5f9ce0] p-8 lg:pl-0 xl:pl-8">
              <div className=" ">
                <FormAdmission />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

function TeacherAchievement() {
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
    return (
      <div>
          {windowWidth < 1024 ? <MobileView /> : <LargeView />}
      </div>
    )
}

export default TeacherAchievement