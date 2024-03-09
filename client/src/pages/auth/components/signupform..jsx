import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import Input from "react-phone-number-input/input";
import { isPossiblePhoneNumber } from "react-phone-number-input";
import { Label, HalfInputs, LoginInput } from "./inputs";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts";
import { getAuth, updateProfile } from "firebase/auth";
import { MidSpinner } from "../../../components/loader";

export default function Signupform() {
  const navigate = useNavigate();
  const [emailvalue, setEmailValue] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [password1, setpassword1] = useState("");
  const [password2, setpassword2] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [PasswordError, setPasswordError] = useState(false);
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const { signup } = useAuth();
  const auth = getAuth();

  function handleEmaillValue(event) {
    const nextValue = event.target.value;
    setEmailValue(nextValue);
  }
  function handlePassowrd1Value(event) {
    const nextValue = event.target.value;
    setpassword1(nextValue);
  }

  function handlePassowrd2Value(event) {
    const nextValue = event.target.value;
    setpassword2(nextValue);
  }

  function validatePasswords() {
    if (password1 != password2) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
      handleSubmit();
    }
  }

  function submit(e) {
    e.preventDefault();
    if (emailvalue.match(mailFormat)) {
      setError(false);
      handleSubmit();
    } else {
      setError(true);
    }
    validatePasswords();
  }

  async function handleSubmit() {
    if (isPossiblePhoneNumber(phone) === false) {
      toast.error("Please enter a valid phone number");
      return;
    }
    try {
      setLoading(true);
      await signup(emailvalue, password1);
      await updateProfile(auth.currentUser, {
        displayName: firstName + "  " + lastName,
      })
      toast.success("Account created successfully");
      navigate('/dashboard')
    } catch (e) {
      toast.error(
        "An error has occured, the email might have been registered before"
      );
      console
      .error(e)
    }
    setLoading(false);
  }

  return (
    <div className=" lg:w-auto md:w-[80%] w-[95%] pb-10 mx-auto ">
      <div className="text-center mb-[25px] md:mt-auto mt-[1em]">
        <p className="font-mulish font-[600] text-[22px] text-[#333333]">
          Create your Account
        </p>
      </div>

      <form onSubmit={submit}>
        <div className="lg:flex block lg:w-[622px] w-[90%] md:gap-[15px] gap-0 md:mx-0 mx-auto">
          <div>
            <Label name="First name" />
            <HalfInputs 
            value={firstName} 
            setValue={setFirstName} 
            type="text" 
            placeholder={"John"}
          />
        </div>

          <div className="lg:mt-0 md:mt-[25px] mt-[10px]">
            <Label name="Last name" />
            <HalfInputs 
            value={lastName} 
            setValue={setLastName} 
            type="text" 
            placeholder={"Doe"}
          />
        </div>

        </div>

        {/* =======EMAIL====== */}

        <div className="md:mt-[25px] mt-[10px] w-[90%]  md:mx-0 mx-auto ">
          <Label name="Email address" />
          <div>
            <input
              className="lg:w-[600px] w-[100%] sm:h-[51.11px] h-[45px] outline-0 border-[#C4C4C4] border-[1px] rounded-[5px] pl-[20px] "
              type={"email"}
              onChange={handleEmaillValue}
              value={emailvalue}
              placeholder="example@text.com"
              required
            />
          </div>
          <p
            className="text-[10px] font-mulish text-[#FF0000] mt-[5px]"
            style={{ display: error ? "block" : "none" }}
          >
            Invalid email format!!!
          </p>
        </div>

        <div className="md:mt-[25px] mt-[10px] w-[90%]  md:mx-0 mx-auto ">
          <Label name="Phone number" />
          <div className=" flex w-full flex-col p-0 gap-1 ">
            <Input
              country="NG"
              id="number"
              international
              placeholder="e.g. 8012345678"
              withCountryCallingCode
              value={phone}
              onChange={setPhone}
              className="h-[3.125rem] lg:rounded rounded-lg text-base lg:text-sm lg:leading-6 leading-7 border border-[#E6E7E9] px-7 outline-none"
            />
          </div>
        </div>

        {/* ======PASSWORDS====== */}

        <div className="md:mt-[25px] mt-[10px] w-[90%]  md:mx-0 mx-auto ">
          <Label name="Enter Password" />
          <div>
            <input
              className="lg:w-[600px] w-[100%] sm:h-[51.11px] h-[45px] outline-0 border-[#C4C4C4] border-[1px] rounded-[5px] pl-[20px] "
              type={"password"}
              onChange={handlePassowrd1Value}
              value={password1}
              placeholder="********"
              required
            />
          </div>
        </div>

        <div className="md:mt-[25px] mt-[10px] w-[90%]  md:mx-0 mx-auto ">
          <Label name="Confirm Password" />
          <div>
            <input
              className=" lg:w-[600px] w-[100%] sm:h-[51.11px] h-[45px] outline-0 border-[#C4C4C4] border-[1px] rounded-[5px] pl-[20px] "
              type={"password"}
              placeholder="********"
              onChange={handlePassowrd2Value}
              value={password2}
              required
            />
          </div>
          <p
            className="text-[10px] font-mulish text-[#FF0000] mt-[5px]"
            style={{ display: PasswordError ? "block" : "none" }}
          >
            passwords must be consistent and must be at least 6 characters
            long!!!
          </p>
        </div>

        {loading ? (
          <MidSpinner />
        ) : (
          <>
            {" "}
            <div className="md:mt-[72.9px] mt-[0px] md:mb-auto mb-[20px] ">
              <button
                className="font-mulish text-[13px] text-[#fff] font-[400] lg:w-[600px] w-[90%] h-[51.11px] bg-[#1BA9B5] rounded-[5px] mt-[30px] flex items-center justify-center   md:mx-0 mx-auto "
                type="Submit"
              >
                Save and continue
              </button>
            </div>
            <div className="mt-[20px] text-center">
              <p className="font-mulish font-[400] text-[13px] text-[#999]">
                Already have an account?{" "}
                <Link to="/login">
                  <span className="text-[#1BA9B5]">Sign in</span>
                </Link>
              </p>
            </div>
          </>
        )}
      </form>
    </div>
  );
}
