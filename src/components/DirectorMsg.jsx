import React, { useState, useEffect } from "react";
import jalahalli from "../assets/NPS-logo.jpg";
import Marquee from "react-fast-marquee";
import FormAdmission from "./Form/Form";
import school from "../assets/jalahalli-school.avif";
import Tagline from "./Tagline";
import { Link } from "react-router-dom";
import { HiOutlineBars3 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import Footer from "./Footer";
import director from "../assets/nps-director.jpg";

function MobileView() {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(${school})`,
      }}
      className=" bg-cover bg-center bg-no-repeat xl:h-screen"
    >
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
          <div className=" w-full h-screen bg-[rgba(255,255,255,0.4)] backdrop-blur-lg">
            <nav className=" h-[600px] text-blue font-semibold text-sm lg:text-base xl:text-lg px-4 py-2 flex items-center justify-center">
              <ul className=" h-full flex flex-col justify-evenly gap-1 items-center">
                <li className=" cursor-pointer ">
                  <Link to={"/grade-11"}>Grade-11 & 12</Link>
                </li>
                <li className=" cursor-pointer group">
                  <Link>About Us</Link>
                  <div className=" hidden group-hover:block">
                    <ul className=" bg-[rgba(255,255,255,0.2)] backdrop-blur-lg absolute top-52 p-1 rounded-lg">
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
                <li className=" cursor-pointer group">
                  <Link>Achievement</Link>
                  <div className=" hidden group-hover:block">
                    <ul className=" bg-[rgba(255,255,255,0.4)] backdrop-blur-lg absolute top-[515px] p-1 rounded-lg">
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

      <div className=" md:absolute lg:top-[170px] xl:top-[240px] 2xl:top-[250px] md:left-[120px] lg:left-[190px] xl:left-[170px] 2xl:left-[330px]">
        <h1 className=" text-2xl md:text-3xl lg:text-4xl text-white font-bold text-center">
          Academic { " " }
          <span className=" text-blue"> Director's </span> Message
        </h1>
      </div>
      <div className=" container mx-auto p-8 my-6 flex flex-col lg:flex-row justify-center items-center gap-8 lg:justify-end">
        <div className="  bg-white/10 order-1">
          <FormAdmission />
        </div>
      </div>
    </div>
  );
}

function LargeView() {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(${school})`,
      }}
      className=" bg-cover bg-center bg-no-repeat xl:h-screen"
    >
      <div className=" w-full bg-blue-500 rounded-sm py-4 px-2">
        <Marquee className=" text-white font-semibold text-xl">
          <Tagline />
          <Tagline />
        </Marquee>
      </div>
      <div className=" bg-[rgba(255,255,255,0.4)] backdrop-blur-lg px-4 py-1 flex flex-col lg:flex-row lg:justify-evenly items-center gap-4">
        <Link to={"/"}>
          <img
            src={jalahalli}
            alt="logo-school"
            className="h-[75px] lg:w-[300px] 2xl:w-[330px] rounded"
          />
        </Link>
        <div className="">
          <nav className=" text-blue font-semibold text-sm lg:text-base xl:text-lg px-4 py-2">
            <ul className=" flex gap-8 lg:justify-between xl:justify-evenly items-center">
              <li className=" cursor-pointer ">
                <Link to={"/grade-11"}>Grade-11 & 12</Link>
              </li>
              <li className=" cursor-pointer group">
                <Link>About Us</Link>
                <div className=" hidden group-hover:block">
                  <ul className=" bg-[rgba(255,255,255,0.4)] backdrop-blur-lg absolute top-14 p-2 rounded-lg">
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
              <li className=" cursor-pointer group">
                <Link>Achievement</Link>
                <div className=" hidden group-hover:block">
                  <ul className=" bg-[rgba(255,255,255,0.4)] backdrop-blur-lg absolute top-14 p-1 rounded-lg">
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

      <div className=" md:absolute lg:top-[215px] xl:top-[240px] 2xl:top-[250px] md:left-[120px] lg:left-[140px] xl:left-[170px] 2xl:left-[330px]">
        <h1 className=" text-2xl md:text-3xl xl:text-4xl text-white font-bold text-center">
          Academic {" "}
          <span className=" text-blue">Director's </span> Message
        </h1>
      </div>
      <div className=" container mx-auto p-8 my-6 flex flex-col lg:flex-row justify-center items-center gap-8 lg:justify-end">
        <div className="  bg-white/10 order-1">
          <FormAdmission />
        </div>
      </div>
    </div>
  );
}

function DirectorMsg() {
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
    <>
      <div>{windowWidth < 720 ? <MobileView /> : <LargeView />}</div>
      <div className=" container mx-auto lg:p-8 my-6 flex flex-col lg:flex-row justify-center items-center gap-16 lg:gap-8 bg-[#f4f5ff]">
        <div className=" w-full lg:w-1/3 xl:mx-8">
          <img
            src={director}
            alt="chairman-image"
            className=" rounded-2xl mx-auto mt-8 lg:mt-0"
          />
        </div>
        <div className=" w-full lg:w-2/3 px-4">
          <h3 className=" text-2xl xl:text-4xl font-bold text-blue mb-4 text-center xl:mb-8">
            DIRECTOR'S MESSAGE
          </h3>
          <div className=" text-lg text-blue my-4 px-4 md:px-12 lg:px-18 2xl:px-24">
            <h4 className=" text-2xl font-semibold text-black md:text-start md:text-[25px]">
              Ms. Grace. C D,
            </h4>
            <p className=" text-base xl:text-lg ">
              Academic Director,
            </p>
            <p className=" text-base xl:text-lg">
              National Public School Jalahalli
            </p>
          </div>
          <div className=" text-sm xl:text-lg text-black my-2">
            <p>
              "If we want butterflies in the future, we must care for the
              caterpillars today."
              <br />
              For every student, the school is a Chrysalis.
            </p>
            <p className=" my-3">
              Children enter the school as small caterpillars, groping their way
              through the corridors of school life.
            </p>
            <p>
              Here they learn life skills, techniques of learning and art of
              living. It is here, in the school, that children undergo changes.
              In the chrysalis of life, children undergo metamorphosis. The
              change that takes place in the overall personality of the child is
              slow but sure. National Public School, Jalahalli will be the
              architect of this change. We will build a Statesman, a Surgeon, an
              Engineer, an Advocate, another Teacher, a Scientist, etc. We at
              National Public School, Jalahalli know that if we have to have
              butterflies in this world, we must give love and care for the
              caterpillars who come to us and that will be our effort day in and
              day out. The school, the Chrysalis will protect the children and
              the teachers will be the catalysts, the driving force, behind this
              change. And when our little, bejeweled butterflies, take to their
              wings, with the inner strength to face all life’s challenges, we
              know that these jewels are priceless for National Public School,
              Jalahalli.
            </p>
            <p className=" my-6">
              My best wishes to the students of NPS Jalahalli and their parents.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DirectorMsg;
