import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useAuth } from "../../../contexts";
import { Label } from "./inputs";
import { MidSpinner } from "../../../components";

export default function Validation() {
  const { resetPassword } = useAuth();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);
      await resetPassword(email);
      toast.success("Check your inbox for further instructions");
    } catch {
      toast.error("Failed to reset password");
    }

    setLoading(false);
  }

  return (
    <div className=" lg:w-auto md:w-[80%] w-[95%] mx-auto lg:my-0 my-[5em] ">
      <div className="text-center lg:mt-auto mt-[2em] mb-[81px]">
        <p className="font-mulish font-[600] md:text-[22px] text-[18px] text-[#333333]">
          Please Enter your <span className="text-[#1BA9B5]">Email</span>{" "}
          Address
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="md:mt-[25px] mt-[10px] w-[90%]  md:mx-0 mx-auto ">
          <Label name="Email address" />
          <div>
            <input
              className="lg:w-[600px] w-[100%] sm:h-[51.11px] h-[45px] outline-0 border-[#C4C4C4] border-[1px] rounded-[5px] pl-[20px] "
              type={"email"}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
        </div>

        {loading ? (
          <MidSpinner />
        ) : (
          <div className="md:mt-[72.9px] mt-[0px] md:mb-auto mb-[20px] ">
            <button
              className="font-mulish text-[13px] text-[#fff] font-[400] lg:w-[600px] w-[90%] h-[51.11px] bg-[#1BA9B5] rounded-[5px] mt-[30px] flex items-center justify-center   md:mx-0 mx-auto "
              type="Submit"
            >
              Send Recovery Link
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
