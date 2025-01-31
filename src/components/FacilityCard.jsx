import React from "react";

function FacilityCard({icon, title, description}) {
  return (
    <div className=" p-8 flex flex-col gap-4 items-center justify-center rounded-lg bg-[#f4f5ff] shadow-[0_0_10px_rgba(0,0,0,0.25)] hover:bg-[#446ca8] hover:text-white duration-200">
      <div>
        <img src={icon} alt="sport-icon" />
      </div>
      <div className=" text-2xl font-semibold">{title}</div>
      <div className=" text-center w-full text-base">
        { description }
      </div>
    </div>
  );
}

export default FacilityCard;
