import React, { useState, useRef, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import FormBackground from "./Form/FormBackground";

function School() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasPassed, setHasPassed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting && entry.boundingClientRect.top <= 0) {
          setHasPassed(true);
        } else if (entry.isIntersecting && entry.boundingClientRect.top > 0) {
          setHasPassed(false);
        } else if (!entry.isIntersecting && entry.boundingClientRect.top <= 0) {
          setHasPassed(true);
        } else if (!entry.isIntersecting && entry.boundingClientRect.top > 0) {
          setHasPassed(false);
        }

        setIsVisible(hasPassed);
      },
      {
        threshold: [0, 0.5, 1],
        rootMargin: "-1px",
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
      observer.disconnect();
    };
  }, [hasPassed]);

  useEffect(() => {
    setIsVisible(hasPassed);
  }, [hasPassed]);

  const buttonText = "ADMISSION";

  return (
    <>
      {isVisible && (
        <button
          className={`fixed right-0 top-[40%] bg-blue-500 text-white z-50 p-1.5 lg:p-2.5 rounded-l-md shadow-lg transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-0 -translate-x-full" : "opacity-100 translate-x-0"
          }`}
          onClick={() => setIsOpen(true)}
          
        >
          <div className="flex flex-col items-center">
            {buttonText.split("\n").map((word, wordIndex) => (
              <React.Fragment key={wordIndex}>
                {word.split("").map((char, charIndex) => (
                  <span
                    key={`${wordIndex}-${charIndex}`}
                    className="text-xs lg:text-sm font-semibold"
                  >
                    {char}
                  </span>
                ))}
                {wordIndex === 0 && <div className="h-1 lg:h-2" />}{" "}
                {/* Add space between words */}
              </React.Fragment>
            ))}
          </div>
        </button>
      )}

      {isOpen && (
        <div className=" fixed inset-0 flex items-center justify-center overflow-hidden z-10 bg-white/50">
          <div className=" relative  mx-auto">
            <div className=" relative rounded-lg shadow-xl bg-slate-500">
              <div className=" absolute right-1 top-3 z-10 hover:cursor-pointer hover:bg-gray-300 hover:rounded-full">
                <RxCross2
                  className=" text-white h-6 w-6 hover:text-black duration-200"
                  onClick={() => setIsOpen(false)}
                />
              </div>
              <FormBackground />
            </div>
          </div>
        </div>
      )}

      <div
        className=" container mx-auto p-8 my-6 flex bg-primary"
        
      >
        {/* order-2 lg:order-1 */}
        <div className=" px-4 ">
          <h1 className=" text-3xl lg:text-4xl text-blue mb-6 font-bold text-center" ref={containerRef}>
            National Public School Jalahalli -Best CBSE School in North
            Bangalore
          </h1>
          <p className=" text-lg text-black my-2 indent-8">
            <strong>NPS Jalahalli</strong> has a sprawling 8 acres campus with
            state-of-the-art infrastructure comprising of facilities like fully
            equipped Labs, Audio Visual Room, art centre, Music room, Conference
            Room, Multipurpose Hall, Health centre, Counselling Centre, Athletic
            and Sports facilities like Indoor Badminton court, Basketball Court,
            Cricket and Football field and various indoor sports.
          </p>
          <p className=" text-lg text-black my-4 indent-8">
            <strong> National Public School Jalahalli </strong> is a progressive
            child-centric School, driven by its core values, set in a warm and
            nurturing Environment, emphasizing personalized attention, upholding
            academic excellence and the holistic development of each child. We
            attribute it to our visionary Dr. K.P. Gopalkrishna, Founding
            Chairman of NPS Education Institutions, who has formulated and
            guided us to make NPS Jalahalli from every step of its
            implementation.
          </p>
        </div>
      </div>
    </>
  );
}

export default School;
