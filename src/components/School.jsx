import React from "react";

function School() {
  return (
    <div className=" container mx-auto p-8 my-6 flex bg-primary">
      {/* order-2 lg:order-1 */}
      <div className=" px-4 ">
        <h1 className=" text-3xl lg:text-4xl text-blue mb-6 font-bold text-center">
          Best CBSE School in Jalahalli
        </h1>
        <p className=" text-lg text-black my-2 indent-8">
          NPS, Jalahalli has a sprawling 8 acres campus with state-of-the-art
          infrastructure comprising of facilities like fully equipped Labs,
          Audio Visual Room, art centre, Music room, Conference Room,
          Multipurpose Hall, Health centre, Counselling Centre, Athletic and
          Sports facilities like Indoor Badminton court, Basketball Court,
          Cricket and Football field and various indoor sports.
        </p>
        <p className=" text-lg text-black my-4 indent-8">
          National Public School, Jalahalli is a progressive child-centric
          School, driven by its core values, set in a warm and nurturing
          Environment, emphasizing personalized attention, upholding academic
          excellence and the holistic development of each child. We attribute it
          to our visionary Dr. K.P. Gopalkrishna, Founding Chairman of NPS
          Education Institutions, who has formulated and guided us to make NPS
          Jalahalli from every step of its implementation.
        </p>
      </div>
    </div>
  );
}

export default School;
