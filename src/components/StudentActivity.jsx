import React, { useState, useEffect } from "react";
import jalahalli from "../assets/NPS-logo.jpg";
import Marquee from "react-fast-marquee";
import Tagline from "./Tagline";
import { Form, Link } from "react-router-dom";
import { HiOutlineBars3 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import activity1 from "../assets/activity/activity1-jalahalli.jpg";
import activity2 from "../assets/activity/activity2-jalahalli.jpg";
import activity3 from "../assets/activity/activity3-jalahalli.jpg";
import activity4 from "../assets/activity/activity4-jalahalli.jpg";
import activity5 from "../assets/activity/activity5-jalahalli.jpg";
import activity6 from "../assets/activity/activity-6.jpg";
import activity7 from "../assets/activity/activity-7.jpg";
import activity8 from "../assets/activity/activity-8.jpg";
import activity9 from "../assets/activity/activity-9.jpg";
import activity10 from "../assets/activity/activity-10.jpg";
import activity11 from "../assets/activity/activity-11.jpg";
import activity12 from "../assets/activity/activity-12.jpg";
import yoga3 from "../assets/activity/yoga3.jpg";
import yoga4 from "../assets/activity/yoga4.jpg";
import yoga5 from "../assets/activity/yoga5.jpg";
import yoga6 from "../assets/activity/yoga6.jpg";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import FormBackground from "./Form/FormBackground";
import Aos from "aos";
import "aos/dist/aos.css";

function MobileView() {
  useEffect(() => {
    Aos.init({
      duration: 1200,
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
            <Marquee className=" text-white text-sm">
              <Tagline />
              <Tagline />
            </Marquee>
          </div>
          <div className=" p-1 cursor-pointer text-black absolute top-[105px] right-[1px]">
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
              <nav className=" text-black text-xs px-4 py-2 flex w-full">
                <ul className=" h-full flex flex-col gap-0.5 w-full">
                  <li className=" cursor-pointer group py-1 rounded px-2">
                    <Link>
                      About Us <IoIosArrowDown className=" inline-block" />
                    </Link>
                    <div className=" hidden group-hover:block">
                      <ul className=" top-[33px] p-0.5 rounded-lg">
                        <li className=" cursor-pointer pb-1.5 text-xs hover:text-blue-600 px-2">
                          <Link to={"/director-message"}>Director Message</Link>
                        </li>
                        <li className=" cursor-pointer pb-1.5 text-xs hover:text-blue-600 px-2">
                          <Link to={"/principal-message"}>
                            Principal Message
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <hr className=" border-black"/>
                  <li className=" cursor-pointer hover:text-blue-600 py-1 rounded px-2">
                    <Link to={"/library"}>Library</Link>
                  </li>
                  <hr className=" border-black"/>
                  <li className=" cursor-pointer hover:text-blue-600 py-1 rounded px-2">
                    <Link to={"/student-activity"}>Student Activity</Link>
                  </li>
                  <hr className=" border-black"/>
                  <li className=" cursor-pointer hover:text-blue-600 py-1 rounded px-2">
                    <Link to={"/grade-11"}>Grade-11</Link>
                  </li>
                  <hr className=" border-black"/>
                  <li className=" cursor-pointer group py-1 rounded px-2">
                    <Link>
                      Achievement <IoIosArrowDown className=" inline-block" />
                    </Link>
                    <div className=" hidden group-hover:block">
                      <ul className=" top-[321px] p-0.5 rounded-lg">
                        <li className=" cursor-pointer pb-1.5 text-xs hover:text-blue-600 px-2">
                          {" "}
                          <Link to={"/student-achievement"}>
                            Student Achievement
                          </Link>
                        </li>
                        <li className=" cursor-pointer pb-1.5 text-xs hover:text-blue-600 px-2">
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
            Student Activity
          </h2>
          <div className=" w-full top-[130px] h-[calc(100vh-130px)]  py-8 place-items-center lg:pl-0 xl:pl-8">
            <FormBackground />
          </div>
          <div className=" grid md:grid-cols-2 gap-8">
            <div className=" ">
              <img data-aos="zoom-in" src={activity1} alt="activity-img" className=" rounded-lg" />
            </div>
            <div className="">
              <img src={activity2} alt="activity-img" className=" rounded-lg" />
            </div>
            <div className=" ">
              <img data-aos="zoom-in" src={activity3} alt="activity-img" className=" rounded-lg" />
            </div>
            <div className=" ">
              <img  src={activity4} alt="activity-img" className=" rounded-lg" />
            </div>
            <div className="">
              <img data-aos="zoom-in" src={activity5} alt="activity-img" className=" rounded-lg" />
            </div>
            <div className="">
              <img src={activity6} alt="activity-img" className=" rounded-lg" />
            </div>
            <div className="">
              <img data-aos="zoom-in" src={activity7} alt="activity-img" className=" rounded-lg" />
            </div>
            <div className="">
              <img src={activity8} alt="activity-img" className=" rounded-lg" />
            </div>
            <div className="">
              <img data-aos="zoom-in" src={activity9} alt="activity-img" className=" rounded-lg" />
            </div>
            <div className="">
              <img
                src={activity10}
                alt="activity-img"
                className=" rounded-lg"
              />
            </div>
            <div className="">
              <img
              data-aos="zoom-in"
                src={activity11}
                alt="activity-img"
                className=" rounded-lg"
              />
            </div>
            <div className="">
              <img
                src={activity12}
                alt="activity-img"
                className=" rounded-lg"
              />
            </div>
            <div className="">
              <img data-aos="zoom-in" src={yoga3} alt="activity-img" className=" rounded-lg" />
            </div>
            <div className="">
              <img src={yoga4} alt="activity-img" className=" rounded-lg" />
            </div>
            <div className="">
              <img data-aos="zoom-in" src={yoga5} alt="activity-img" className=" rounded-lg" />
            </div>
            <div className="">
              <img src={yoga6} alt="activity-img" className=" rounded-lg" />
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
      duration: 1200,
    });
  });
  return (
    <div className=" min-h-screen flex flex-col">
      <div className=" w-full bg-blue-500 rounded-sm py-2 px-2 ">
        <Marquee className=" text-white lg:text-sm xl:text-base">
          <Tagline />
          <Tagline />
        </Marquee>
      </div>
      <div className="w-full bg-[rgba(255,255,255,0.4)] backdrop-blur-lg  px-4 py-1 z-50  shadow-lg shadow-black/60">
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
          <h2 data-aos="slide-right" className=" text-4xl text-blue font-bold p-6 text-center">
            Student Activity
          </h2>
          <div className=" grid grid-cols-2 md:grid-cols-2 gap-8 place-items-center px-6 mt-16">
            <div className=" w-[400px] h-[300px] lg:w-[300px] lg:h-[225px] xl:w-[400px] xl:h-[300px] 2xl:w-[500px] 2xl:h-[375px] ">
              <img
                data-aos="zoom-in"
                src={activity1}
                alt="activity-img"
                className=" w-full h-full rounded-lg"
              />
            </div>
            <div className=" w-[400px] h-[300px] lg:w-[300px] lg:h-[225px] xl:w-[400px] xl:h-[300px] 2xl:w-[500px] 2xl:h-[375px]">
              <img
                src={activity2}
                alt="activity-img"
                className=" w-full h-full rounded-lg"
              />
            </div>
            <div className=" w-[400px] h-[400px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] 2xl:w-[500px] 2xl:h-[500px]">
              <img
                src={activity3}
                alt="activity-img"
                className=" w-full h-full rounded-lg"
              />
            </div>
            <div className=" w-[400px] h-[400px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] 2xl:w-[500px] 2xl:h-[500px]">
              <img
                data-aos="zoom-in"
                src={activity4}
                alt="activity-img"
                className=" w-full h-full rounded-lg"
              />
            </div>
            <div className=" w-[400px] h-[400px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] 2xl:w-[500px] 2xl:h-[500px]">
              <img
                data-aos="zoom-in"
                src={activity5}
                alt="activity-img"
                className=" w-full h-full rounded-lg"
              />
            </div>
            <div className=" w-[400px] h-[400px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] 2xl:w-[500px] 2xl:h-[500px]">
              <img
                src={activity6}
                alt="activity-img"
                className=" w-full h-full rounded-lg"
              />
            </div>
            <div className=" w-[400px] h-[400px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] 2xl:w-[500px] 2xl:h-[500px]">
              <img
                src={activity7}
                alt="activity-img"
                className=" w-full h-full rounded-lg"
              />
            </div>
            <div className=" w-[400px] h-[400px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] 2xl:w-[500px] 2xl:h-[500px]">
              <img
                data-aos="zoom-in"
                src={activity8}
                alt="activity-img"
                className=" w-full h-full rounded-lg"
              />
            </div>
            <div className=" w-[400px] h-[400px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] 2xl:w-[500px] 2xl:h-[500px]">
              <img
                data-aos="zoom-in"
                src={activity9}
                alt="activity-img"
                className=" w-full h-full rounded-lg"
              />
            </div>
            <div className=" w-[400px] h-[400px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] 2xl:w-[500px] 2xl:h-[500px]">
              <img
                src={activity10}
                alt="activity-img"
                className=" w-full h-full rounded-lg"
              />
            </div>
            <div className=" w-[400px] h-[400px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] 2xl:w-[500px] 2xl:h-[500px]">
              <img
                src={activity11}
                alt="activity-img"
                className=" w-full h-full rounded-lg"
              />
            </div>
            <div className=" w-[400px] h-[400px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] 2xl:w-[500px] 2xl:h-[500px]">
              <img
                data-aos="zoom-in"
                src={activity12}
                alt="activity-img"
                className=" w-full h-full rounded-lg"
              />
            </div>
            <div className=" w-[400px] h-[400px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] 2xl:w-[500px] 2xl:h-[500px]">
              <img
                data-aos="zoom-in"
                src={yoga3}
                alt="activity-img"
                className=" w-full h-full rounded-lg"
              />
            </div>
            <div className=" w-[400px] h-[400px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] 2xl:w-[500px] 2xl:h-[500px]">
              <img
                src={yoga4}
                alt="activity-img"
                className=" w-full h-full rounded-lg"
              />
            </div>
            <div className=" w-[400px] h-[400px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] 2xl:w-[500px] 2xl:h-[500px]">
              <img
                src={yoga5}
                alt="activity-img"
                className=" w-full h-full rounded-lg"
              />
            </div>
            <div className=" w-[400px] h-[400px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] 2xl:w-[500px] 2xl:h-[500px]">
              <img
                data-aos="zoom-in"
                src={yoga6}
                alt="activity-img"
                className=" w-full h-full rounded-lg"
              />
            </div>
          </div>
          <div className=" w-1/3 fixed right-0 top-[160px] h-[calc(100vh-130px)] p-8 lg:pl-0 xl:pl-8 z-40">
            <FormBackground />
          </div>
        </div>
      </div>
    </div>
  );
}

function ModalForm({ setOpen }) {
  return (
    <div className=" fixed inset-0 flex items-center justify-center overflow-hidden z-[100] bg-white/40">
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

function StudentActivity() {
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
    <div>
      {open ? <ModalForm setOpen={setOpen} /> : ""}
      <div>{windowWidth < 1024 ? <MobileView /> : <LargeView />}</div>
    </div>
  );
}

export default StudentActivity;
