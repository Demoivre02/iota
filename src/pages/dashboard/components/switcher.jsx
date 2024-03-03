import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UpComingValues } from "./tableValues";
import { array } from "./medicalArray";
import { Past, Upcoming } from "./historyHeader";

export const Switcher = () => {
  const [view, setView] = useState("upcoming");

  const handleUpcomingClick = () => {
    setView("upcoming");
  };

  // const handlePastClick = () => {
  //   setView("past");
  // };

  const upcomingElements = (
    <div className="text-center">
      {array.length > 0 ? <UpComingValues /> : <Upcoming />}
    </div>
  );

  const pastElements = (
    <div className="text-center">{array.length == 0 ? <Past /> : null}</div>
  );

  return (
    <div>
      <div className="flex sm:mt-[27px] mt-[15px]">
        <button
          className="md:w-[104px]  font-[400] ml-[20px] font-mulish text-[13.5px] rounded-[11.5px] active:bg-[#02B15A26] active:opacity-[.3] active:text-[#02B15A] "
          onClick={handleUpcomingClick}
        >
          Upcoming
        </button>
        {/* <button
          className="ml-[49.73px] md:w-[30px] font-[400] font-mulish text-[13.5px] rounded-[11.5px] active:bg-[#02B15A26] active:opacity-[.3] active:text-[#02B15A]"
          onClick={handlePastClick}
        >
          Past
        </button> */}
      </div>

      {view === "upcoming" ? upcomingElements : pastElements}
    </div>
  );
};
