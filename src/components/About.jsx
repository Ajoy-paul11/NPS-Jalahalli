import React from "react";
import chairman from "../assets/jalahalli-chairman.jpeg";

function About() {
  return (
    <div className=" container mx-auto lg:p-8 my-6 flex flex-col lg:flex-row justify-center items-center gap-8 bg-[#f4f5ff]">
      <div className=" w-[300px] md:w-[400px] mx-auto lg:w-[1800px] lg:mx-16">
        <img src={chairman} alt="chairman-image" className=" rounded-2xl" />
      </div>
      <div className=" px-4">
        <h3 className=" text-3xl font-bold text-blue mb-4 lg:mb-8">
          Message From Chairman:{" "}
        </h3>
        <p className=" text-lg text-black my-2 indent-8">
          Education and schooling have undergone a profound change and have
          become more focused in the 21st century. The best schools across the
          world today look to deliver education that is designed to help bring
          out the best in children by enabling them to discover their strengths
          and make the most of their talents within and beyond the school.
          </p>
        <p className=" text-lg text-black my-2 indent-8">
          National Public School believes in providing a well-rounded, liberal
          arts education program for our young students to prepare them for the
          future. In order to develop an independent thought, a spirit of
          enquiry, self-confidence, and leadership in our children, the school
          keeps raising its standards of educational excellence. Our teachers
          are vital in implementing our academic programmers that promote a
          habit of learning in the pursuit of excellence amongst the students.
        </p>
      </div>
    </div>
  );
}

export default About;
