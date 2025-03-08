import React, { useState, useEffect } from "react";
import jalahalli from "../../assets/NPS-logo.jpg";
import Marquee from "react-fast-marquee";
import FormGradeSecondary from "../Form/FormGradeSecondary";
import school from "../../assets/jalahalli-school.avif";
import TaglineSecondary from "./TaglineSecondary";
import { Link } from "react-router-dom";
import { HiOutlineBars3 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import Aos from "aos";
import "aos/dist/aos.css";

function MobileView() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  })
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(${school})`,
      }}
      className=" bg-cover bg-center bg-no-repeat xl:h-screen"
    >
      <div className="  p-4 flex flex-col lg:flex-row lg:justify-evenly items-center gap-4">
        <div>
          <img
            src={jalahalli}
            alt="logo-school"
            className="h-[75px] lg:w-[300px] 2xl:w-[330px] rounded"
          />
        </div>
        <div className=" max-w-[95%] bg-blue-500 rounded-sm py-2 ml-[-45px]">
          <Marquee className=" text-white text-sm">
            <TaglineSecondary />
            <TaglineSecondary />
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
          <div className=" w-full h-fit bg-[rgba(255,255,255,0.7)] backdrop-blur-lg">
            <nav className=" text-black text-sm px-4 py-2 flex w-full">
              <ul className=" h-full flex flex-col gap-0.5 w-full">
                <li className=" cursor-pointer px-2">
                  <Link to={"/"}>Home</Link>
                </li>
                <hr className=" border-black"/>
                <li className=" cursor-pointer group py-1 rounded px-2">
                  <Link>
                    About Us <IoIosArrowDown className=" inline-block" />
                  </Link>
                  <div className=" hidden group-hover:block">
                    <ul className=" top-[33px] p-1 rounded-lg">
                      <li className="  cursor-pointer p-1 text-sm hover:text-blue-600 px-2">
                        <Link to={"/director-message"}>Director Message</Link>
                      </li>
                      <li className=" cursor-pointer p-1 text-sm hover:text-blue-600 px-2">
                        <Link to={"/principal-message"}>Principal Message</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <hr className=" border-black"/>
                <li className=" cursor-pointer hover:text-blue-600  py-1 rounded px-2 ">
                  <Link to={"/library"}>Library</Link>
                </li>
                <hr className=" border-black"/>
                <li className=" cursor-pointer hover:text-blue-600  py-1 rounded px-2 ">
                  <Link to={"/student-activity"}>Student Activity</Link>
                </li>
                <hr className=" border-black"/>
                <li className=" cursor-pointer group py-1 rounded px-2">
                  <Link>
                    Achievement <IoIosArrowDown className=" inline-block" />
                  </Link>
                  <div className=" hidden group-hover:block">
                    <ul className=" top-[321px] p-1 rounded-lg">
                      <li className=" cursor-pointer p-1 text-sm hover:text-blue-600 px-2">
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

      <div className=" md:absolute lg:top-[170px] xl:top-[240px] 2xl:top-[250px] md:left-[120px] lg:left-[190px] xl:left-[170px] 2xl:left-[330px]">
        <h1 data-aos="slide-right" className=" text-2xl md:text-3xl lg:text-4xl text-white font-bold text-center">
          Grade 11: <br className=" hidden lg:block xl:hidden" />{" "}
          <span className=" text-blue">NPS Jalahalli </span>
        </h1>
      </div>
      <div className=" container mx-auto p-8 my-6 flex flex-col lg:flex-row justify-center items-center gap-8 lg:justify-end">
        <div data-aos="slide-up" className="  bg-white/10 order-1">
          <FormGradeSecondary />
        </div>
      </div>
    </div>
  );
}

function LargeView() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  })
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(${school})`,
      }}
      className=" bg-cover bg-center bg-no-repeat xl:h-screen"
    >
      <div className=" w-full bg-blue-500 rounded-sm py-2 px-2">
        <Marquee className=" text-white lg:text-sm xl:text-base">
          <TaglineSecondary />
          <TaglineSecondary />
        </Marquee>
      </div>
      <div className=" bg-[#f4f5ff] backdrop-blur-lg px-4 py-1 flex flex-col lg:flex-row lg:justify-evenly items-center gap-4  shadow-xl shadow-black/70">
        <div>
          <img
            src={jalahalli}
            alt="logo-school"
            className="h-[75px] lg:w-[300px] 2xl:w-[330px] rounded"
          />
        </div>
        <div className="">
          <nav className="text-black text-sm lg:text-base px-4 py-2">
            <ul className=" flex gap-10 lg:justify-between xl:justify-evenly items-center">
              <li className=" cursor-pointer text-base hover:text-blue-600">
                <Link to={"/"}>Home</Link>
              </li>
              <li className=" cursor-pointer group">
                <Link>
                  About Us <IoIosArrowDown className=" inline-block" />
                </Link>
                <div className=" hidden group-hover:block">
                  <ul className=" shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)] bg-[#f4f5ff] backdrop-blur-lg absolute top-[54px] p-1 rounded-lg">
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
              <li className=" cursor-pointer group">
                <Link>
                  Achievement <IoIosArrowDown className=" inline-block" />
                </Link>
                <div className=" hidden group-hover:block">
                  <ul className=" shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)] bg-[#f4f5ff] backdrop-blur-lg absolute top-[54px] p-1 rounded-lg">
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

      <div className=" md:absolute lg:top-[170px] 2xl:top-[250px] md:left-[120px] lg:left-[190px] xl:left-[170px] 2xl:left-[330px]">
        <h1 data-aos="slide-right" className=" text-2xl md:text-3xl lg:text-4xl text-white font-bold text-center">
          Grade 11: <br className=" hidden lg:block xl:hidden" />{" "}
          <span className=" text-blue">NPS Jalahalli </span>
        </h1>
      </div>
      <div className=" container mx-auto p-8 my-6 flex flex-col lg:flex-row justify-center items-center gap-8 lg:justify-end">
        <div data-aos="slide-up" className="  bg-white/10 order-1">
          <FormGradeSecondary />
        </div>
      </div>
    </div>
  );
}

function HeroGradeSection() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div>{windowWidth < 720 ? <MobileView /> : <LargeView />}</div>;
}

export default HeroGradeSection;
