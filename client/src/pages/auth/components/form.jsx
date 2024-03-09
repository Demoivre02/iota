import React, { useState } from "react";
import { Label } from "./inputs";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts";
import { useToast, ChakraProvider, Box } from "@chakra-ui/react";
import { toast } from "react-hot-toast";
import { MidSpinner } from "../../../components";

export function Form() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [emailvalue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  function handleEmaillValue(event) {
    const nextValue = event.target.value;
    setEmailValue(nextValue);
  }

  // function successToast(){
  //   toast({
  //     title: 'Hello.',
  //     description: "Welcome, we're happy to have you back ",
  //     status: 'success',
  //     duration: 9000,
  //     isClosable: true,
  //   })
  // }

  //   function failuerToasts(){
  //   toast({
  //     position: 'bottom-center',
  //     render: () => (
  //       <Box color='white' p={3} textAlign={'center'} rounded={10} bg='#FF0000CC'>
  //         Invalid credentials
  //       </Box>
  //     ),
  //   })
  // }

  //   function errorToast(){
  //   toast({
  //     title: 'Error.',
  //     description: "An error has occured, please check your inputs ",
  //     status: 'error',
  //     duration: 9000,
  //     isClosable: true,
  //   })
  // }

  function handlePassowrdValue(event) {
    const nextValue = event.target.value;
    setPasswordValue(nextValue);
  }

  function submit() {
    if (emailvalue.match(mailFormat)) {
      setError(false);
      handleSubmit();
    } else {
      setError(true);
      failuerToasts();
    }
  }

  async function handleSubmit() {
    setLoading(true);
    try {
      await login(emailvalue, passwordValue);
      toast.success("Welcome, we're happy to have you back ");
      navigate("/dashboard");
    } catch (e) {
      toast.error("Invalid credentials");
      console.log(e);
    }
    setLoading(false);
  }

  return (
    <div className=" lg:w-auto md:w-[80%] w-[95%] mx-auto md:my-0 my-auto ">
      <div className="text-center md:mt-auto mt-[2em]">
        <p className="font-mulish font-[600] text-[22px] text-[#333333]">
          Sign in to your <span className="text-[#1BA9B5]">Account</span>
        </p>
      </div>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mt-[68px] w-[90%]  md:mx-0 mx-auto">
          <Label name="Email" />
          <div>
            <label htmlFor="email"></label>
            <input
              className="lg:w-[600px] w-[100%] sm:h-[51.11px] h-[45px] outline-0 border-[#C4C4C4] border-[1px] rounded-[5px] pl-[20px] "
              type={"email"}
              onChange={handleEmaillValue}
              value={emailvalue}
              required
              placeholder="example@text.com"
            />
          </div>
          <p
            className="text-[10px] font-mulish text-[#FF0000] mt-[5px]"
            style={{ display: error ? "block" : "none" }}
          >
            Invalid email format!!!
          </p>
        </div>

        <div className="mt-[26px] w-[90%]  md:mx-0 mx-auto">
          <Label name="Password" />
          <div>
            <label htmlFor="password"></label>
            <input
              className="lg:w-[600px] w-[100%] sm:h-[51.11px] h-[45px] outline-0 border-[#C4C4C4] border-[1px] rounded-[5px] pl-[20px] "
              type={"password"}
              onChange={handlePassowrdValue}
              value={passwordValue}
              placeholder="********"
              required
            />
          </div>
          <Link to="/validate">
            <p className="text-[#1BA9B5] text-[13px] font-mulish font-[400] float-right mt-[24px]">
              Forgot Password
            </p>
          </Link>
        </div>

        <ChakraProvider>
          <div className="md:mt-[72.9px] mt-[30px] md:mb-[72px] mb-[30px] ">
            <button
              className="font-mulish text-[13px] text-[#fff] font-[400] lg:w-[600px] h-[51.11px] bg-[#1BA9B5] rounded-[5px] mt-[50px] flex items-center justify-center w-[90%]  md:mx-0 mx-auto "
              type="Submit"
              onClick={submit}
            >
              Sign in
            </button>
          </div>
        </ChakraProvider>

        {loading ? (
          <MidSpinner />
        ) : (
          <div className="mt-[20px] text-center">
            <p className="font-mulish font-[400] text-[13px] text-[#999]">
              Don’t have an account?{" "}
              <Link to="/signup">
                <span className="text-[#1BA9B5]">Register</span>
              </Link>
            </p>
          </div>
        )}
      </form>
    </div>
  );
}
