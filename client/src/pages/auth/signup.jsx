import React from "react";
import { Image } from "./components";
import Signupform from "./components/signupform.";

export const Signup = () => {
  return (
    <div className="lg:flex gap-10 h-full block items-center">

      <div className="lg:block  hidden">
        <Image />
      </div>
      
      <div className=" mx-auto">
        <Signupform />
      </div>

    </div>
  );
};
