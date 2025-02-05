import React,{useState, useEffect} from "react";
import jalahalli from "../../assets/NPS-logo.jpg";
import Marquee from "react-fast-marquee";
import FormGradeSecondary from "../Form/FormGradeSecondary";
import school from "../../assets/jalahalli-school.avif";
// import Tagline from "../Tagline";
import TaglineSecondary from "./TaglineSecondary";
import { Link } from "react-router-dom";
import { HiOutlineBars3 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";


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
        <div>
          <img
            src={jalahalli}
            alt="logo-school"
            className="h-[75px] lg:w-[300px] 2xl:w-[330px] rounded"
          />
        </div>
        <div className=" max-w-[95%] bg-blue-500 rounded-sm py-2 ml-[-45px]">
          <Marquee className=" text-white font-semibold text-xl">
            <TaglineSecondary />
            <TaglineSecondary />
          </Marquee>
        </div>
        <div className=" p-1 cursor-pointer text-blue absolute top-[110px] right-[5px]">
            { open ? <RxCross1 className=" w-8 h-8" onClick={() => setOpen(!open)}/> : <HiOutlineBars3 className=" w-8 h-8" onClick={() => setOpen(!open)}/>}
        </div>
        {open && ( 
          <div className=" w-full h-screen bg-[rgba(255,255,255,0.4)] backdrop-blur-lg">
          <nav className=" h-[600px] text-blue font-semibold text-sm lg:text-base xl:text-lg px-4 py-2 flex items-center justify-center">
            <ul className=" h-full flex flex-col justify-evenly gap-1 items-center">
              <li className=" cursor-pointer ">
                <Link to={"/"}>Home</Link>
              </li>
              <li className=" cursor-pointer group">
                <Link>About Us</Link>
                <div className=" hidden group-hover:block">
                  <ul className=" bg-[rgba(255,255,255,0.2)] backdrop-blur-lg absolute top-52 p-1 rounded-lg">
                    <li className=" cursor-pointer p-1 text-base"><Link to={"/director-message"}>Director Message</Link></li>
                    <li className=" cursor-pointer p-1 text-base"><Link to={"/principal-message"}>Principal Message</Link></li>
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
                    <li className=" cursor-pointer p-1 text-base"><Link to={"/student-achievement"}>Student</Link></li>
                    <li className=" cursor-pointer p-1 text-base"><Link to={"/teacher-achievement"}>Teacher</Link></li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        </div>
        ) }

      </div>
      
      <div className=" md:absolute lg:top-[170px] xl:top-[240px] 2xl:top-[250px] md:left-[120px] lg:left-[190px] xl:left-[170px] 2xl:left-[330px]">
        <h1 className=" text-2xl md:text-3xl lg:text-4xl text-white font-bold text-center">
          Welcome to <br className=" hidden lg:block xl:hidden" />{" "}
          <span className=" text-blue">NPS Jalahalli </span> Institute
        </h1>
      </div>
      <div className=" container mx-auto p-8 my-6 flex flex-col lg:flex-row justify-center items-center gap-8 lg:justify-end">
        <div className="  bg-white/10 order-1">
          <FormGradeSecondary />
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
          <TaglineSecondary />
          <TaglineSecondary />
        </Marquee>
      </div>
      <div className=" bg-[rgba(255,255,255,0.4)] backdrop-blur-lg px-4 py-1 flex flex-col lg:flex-row lg:justify-evenly items-center gap-4">
        <div>
          <img
            src={jalahalli}
            alt="logo-school"
            className="h-[75px] lg:w-[300px] 2xl:w-[330px] rounded"
          />
        </div>
        <div className="">
          <nav className=" text-blue font-semibold text-sm lg:text-base xl:text-lg px-4 py-2">
            <ul className=" flex gap-10 lg:justify-between xl:justify-evenly items-center">
              <li className=" cursor-pointer ">
                <Link to={"/"}>Home</Link>
              </li>
              <li className=" cursor-pointer group">
                <Link>About Us</Link>
                <div className=" hidden group-hover:block">
                  <ul className=" bg-[rgba(255,255,255,0.4)] backdrop-blur-lg absolute top-14 p-2 rounded-lg">
                    <li className=" cursor-pointer p-1 text-base"><Link to={"/director-message"}>Director Message</Link></li>
                    <li className=" cursor-pointer p-1 text-base"><Link to={"/principal-message"}>Principal Message</Link></li>
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
                    <li className=" cursor-pointer p-1 text-base"><Link to={"/student-achievement"}>Student</Link></li>
                    <li className=" cursor-pointer p-1 text-base"><Link to={"/teacher-achievement"}>Teacher</Link></li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className=" md:absolute lg:top-[170px] xl:top-[240px] 2xl:top-[250px] md:left-[120px] lg:left-[190px] xl:left-[170px] 2xl:left-[330px]">
        <h1 className=" text-2xl md:text-3xl lg:text-4xl text-white font-bold text-center">
          Welcome to <br className=" hidden lg:block xl:hidden" />{" "}
          <span className=" text-blue">NPS Jalahalli </span> Institute
        </h1>
      </div>
      <div className=" container mx-auto p-8 my-6 flex flex-col lg:flex-row justify-center items-center gap-8 lg:justify-end">
        <div className="  bg-white/10 order-1">
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
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, []);

  return <div>{windowWidth < 720 ? <MobileView /> : <LargeView />}</div>;
}

export default HeroGradeSection