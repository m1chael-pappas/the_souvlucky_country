import React from "react";

const StoryComponent = () => {
  return (
    <div
      className="flex flex-col items-center justify-center h-[680px] w-full p-10 gap-10 bg-cover"
      style={{
        backgroundImage: "url(../../../souvlucky3.png)",
        backgroundPosition: "50%",
        backgroundSize: "cover",
        backgroundColor: "lightgray",
        width: "auto",
      }}
    >
      <div className="flex flex-col items-center justify-center p-[80px] rounded-3xl gap-30 bg-[#F2FDFF]">
        <div className="flex flex-col items-center  gap-30">
          <h1
            className="text-center text-[#0D71C9] text-4xl pb-8"
            style={{
              fontFamily: "Sedgwick Ave",
              fontSize: "42px",
              fontWeight: 400,
              fontStyle: "normal",
              lineHeight: "normal",
            }}
          >
            Our Story
          </h1>

          <p
            className="w-[385px] text-center text-black text-base font-light pb-4 leading-6 "
            style={{
              fontFamily: "Roboto",
              fontSize: "16px",
              lineHeight: "22px",
            }}
          >
            We are a Family friendly restaurant in the Eastern suburbs of
            Sydney. Our philosophy is to cook with passion and serve authentic
            dishes to our customers in a warm and friendly atmosphere.
          </p>

          <button className="mt-4 px-8 py-2 bg-blue-500 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300">
            Discover More
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoryComponent;
