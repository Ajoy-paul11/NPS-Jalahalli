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

      <div className=" md:absolute lg:top-[170px] xl:top-[240px] 2xl:top-[250px] md:left-[220px] lg:left-[190px] xl:left-[170px] 2xl:left-[330px]">
        <h1 className=" text-2xl md:text-3xl xl:text-4xl text-white font-bold text-center">
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
          <div className=" text-lg text-blue my-4 px-4 md:px-12 lg:px-18 2xl:px-24">
            <h4 className=" text-2xl font-semibold text-black md:text-start md:text-[25px]">
            Mrs. Renu Elizabeth Benny,
            </h4>
            <p className=" text-base xl:text-lg">
            MSc. LLb. BEd. Principal,
            </p>
            <p className=" text-base xl:text-lg">
              National Public School Jalahalli
            </p>
          </div>
          <div className=" text-sm xl:text-lg text-black my-2">
            <p>
            “The foundation of education is to teach one to think intensively and to think critically. Intelligence plus character, that is the Goal of true education.”
            </p>
            <p className=" my-3 font-semibold">
            - Martin Luther King
            </p>
            <p className=" my-3 font-semibold">
            Dear Parents,
            </p>
            <p className=" mb-3">
            Greetings from NPS Jalahalli! We are an institution that encourages children to bring out the best in themselves and which supports their all-round development through discovering the joy of learning, awakening their intellect in multi- dimensional ways and instilling values. We strongly believe that every child has a hidden potential and innate ability which can be unleased by providing a conducive learning environment. Our primary goal is to help students achieve their dreams and find success in pursuing life goals through integrating academics with sports, art and music to create a vibrant and dynamic learning environment.
            </p>
            <p className=" mb-3">
            At NPS we follow a child centric curriculum which emphasise on conceptual understanding, collaborative learning and innovative activities to ensure creative and critical thinking, thus enabling the learners to think beyond the boundaries of the books. We believe in empowering our children in such a manner that they act as responsible representatives of a meaningful and value-based society by promoting tolerance, mutual respect and international mindedness. We mould our children to be open to thinking globally and be prepared for life anywhere in the world.
            </p>
            <p className=" mb-3">
            Our well qualified and trained teaching and non-teaching staff are our strength. They provide a warm and nurturing environment and ensures a home away from home atmosphere that helps in bringing out the child’s best potential.al respect and international mindedness. We mould our children to be open to thinking globally and be prepared for life anywhere in the world.
            </p>
            <p className=" mb-3">
            Remember parents, education is a shared commitment between dedicated teachers, motivated students and enthusiastic parents. We believe that the partnership between the school and the home is the foundation of a student’s fulfilment and success in their later life. We therefore seek the enduring and the binding support of all the parents in this phase of your child’s life.
            </p>
            <p>
            With a firm belief in laying a strong foundation where each student can begin their flight of excellence and soar to reach the zenith of success, we look forward to welcoming you to be a part of our vibrant learning community.
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
