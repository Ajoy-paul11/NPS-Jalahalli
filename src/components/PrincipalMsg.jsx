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
import principal from "../assets/nps-principal.jpg";
import { IoIosArrowDown } from "react-icons/io";

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
                <li className=" cursor-pointer group">
                  <Link>About Us{" "}<IoIosArrowDown className=" inline-block"/></Link>
                  <div className=" hidden group-hover:block">
                    <ul className=" bg-[rgba(255,255,255,0.2)] backdrop-blur-lg absolute top-28 p-1 rounded-lg">
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
                  <Link to={"/grade-11"}>Grade-11 & 12</Link>
                </li>
                <li className=" cursor-pointer group">
                  <Link>Achievement{" "}<IoIosArrowDown className=" inline-block"/></Link>
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
          Academic
          <span className=" text-blue">Principal's </span> Message
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
      <div className=" w-full bg-blue-500 rounded-sm py-2 px-2">
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
              <li className=" cursor-pointer group">
                <Link>About Us{" "}<IoIosArrowDown className=" inline-block"/></Link>
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
              <li className=" cursor-pointer ">
                <Link to={"/grade-11"}>Grade-11 & 12</Link>
              </li>
              <li className=" cursor-pointer group">
                <Link>Achievement{" "}<IoIosArrowDown className=" inline-block"/></Link>
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

      <div className=" md:absolute lg:top-[170px] xl:top-[170px] 2xl:top-[250px] md:left-[220px] lg:left-[190px] xl:left-[215px] 2xl:left-[330px]">
        <h1 className=" text-2xl md:text-3xl xl:text-4xl text-white font-bold text-center">
          Academic <span className=" text-blue">Principal's </span> Message
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

function PrincipalMsg() {
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
            src={principal}
            alt="chairman-image"
            className=" rounded-2xl mx-auto mt-8 lg:mt-0"
          />
        </div>
        <div className=" w-full lg:w-2/3 px-4">
          <h3 className=" text-2xl xl:text-4xl font-bold text-blue mb-4 text-center xl:mb-8">
            PRINCIPAL'S MESSAGE
          </h3>
          <div className=" text-lg text-blue my-4 px-4 md:px-4 lg:px-0 ">
            <h4 className=" text-2xl font-semibold text-black md:text-start md:text-[25px]">
              Mrs. Renu Elizabeth Benny,
            </h4>
            <p className=" text-base xl:text-lg">MSc. LLb. BEd. Principal,</p>
            <p className=" text-base xl:text-lg">
              National Public School Jalahalli
            </p>
          </div>
          <div className=" text-sm xl:text-lg text-black my-2 md:px-4 lg:px-0">
            <p>
              “The foundation of education is to teach one to think intensively
              and to think critically. Intelligence plus character, that is the
              Goal of true education.”
            </p>
            <p className=" my-3 font-semibold">- Martin Luther King</p>
            <p className=" my-3 font-semibold">Dear Parents,</p>
            <p className=" mb-3">
              Greetings from NPS Jalahalli! We foster children's potential through joyful learning that combines academics, sports, arts, and music, creating an environment where every student flourishes.
            </p>
            <p className=" mb-3">
            Our innovative curriculum emphasizes critical thinking and creativity beyond textbooks, developing globally-minded students who respect diversity and embrace responsibility.
            </p>
            <p className=" mb-3">
            Our expert teachers create a nurturing, home-like atmosphere where every child's unique talents are discovered and developed to their fullest potential.
            </p>
            <p className=" mb-3">
            We believe in strong partnerships between teachers, students, and parents, working together to guide children toward lasting success.
            </p>
            <p>
            Join our vibrant community at NPS Jalahalli, where we provide the foundation for your child to achieve excellence and reach new heights.
            </p>
            <p className=" my-6 font-semibold">
              “Reach Out, Reach High, Reach Beyond”
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PrincipalMsg;
