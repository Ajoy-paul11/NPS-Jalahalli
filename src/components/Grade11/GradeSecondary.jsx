import React, { useState, useEffect } from "react";
import HeroGradeSection from "./HeroGradeSection";
import About from "../About";
import Footer from "../Footer";
import School from "../School";
import Facilities from "../Facilities";
import PreUniversity from "./PreUniversity";
import { RxCross2 } from "react-icons/rx";
import FormGradeSecondary from "../Form/FormGradeSecondary";

function ModalForm({ setOpen }) {
  return (
    <div className=" fixed inset-0 flex items-center justify-center overflow-hidden z-10 bg-[#5f9ce0]">
      <div className=" relative  mx-auto">
        <div className=" relative rounded-lg shadow-xl">
          <div className=" absolute right-1 top-3 z-10 hover:cursor-pointer hover:bg-gray-300 hover:rounded-full">
            <RxCross2
              className=" text-white h-6 w-6 hover:text-black duration-200"
              onClick={() => setOpen(false)}
            />
          </div>
          <FormGradeSecondary />
        </div>
      </div>
    </div>
  );
}

function GradeSecondary() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {open ? <ModalForm setOpen={setOpen} /> : ""}
      <div className=" bg-[#f4f5ff] min-h-screen overflow-hidden font-poppins">
        <HeroGradeSection />
        <PreUniversity />
        {/* <About /> */}
        <hr className=" border-blue-100" />
        <Facilities />
        <Footer />
      </div>
    </>
  );
}

export default GradeSecondary;
