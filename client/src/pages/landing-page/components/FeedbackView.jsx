import React from "react";
import feedbackImage from "../../../assets/images/Group 5.png";

export const FeedbackView = () => {
  return (
    <div className="flex flex-col items-center mx-6 my-10 text-center md:text-start md:my-20 md:mx-12">
      <h2 className="font-bold md:text-3xl text-[24px] text-[#10217D] mb-10">
        Our Users feedback about us
      </h2>
      <div className="bg-[#ECEEF9] py-5 md:py-5 lg:py-5 flex gap-4 flex-col items-center md:grid md:grid-cols-2 lg:px-20 md:px-8">
        <img
          className="lg:translate-y-20 lg:translate-x-20 w-[90%] lg:w-fit md:w-fit"
          src={feedbackImage}
          alt=""
          width={"500"}
          height={"500"}
        />
        <div className="text-lg md:text-xl lg:text-2xl px-[1rem] md:py-12 md:px-1 md:leading-8 lg:py-24 lg:px-[6.5rem] lg:leading-10">
          <p className="md:text-auto text-[16px]">“DavsHealth is an website tailored for you to get medical help.</p>
          <p className="md:text-auto text-[16px]">
            They offer you a 24/7 doctor service with Medicine Purchasing
            Facility”
          </p>
        </div>
      </div>
    </div>
  );
};
