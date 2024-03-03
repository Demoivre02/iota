import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useAuth } from "../../../contexts";


export function Close() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      navigate("/login");
      toast.success("User logged out")
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="lg:ml-[240px] md:ml-[70px] ml-[20px] mr-[20px]  flex items-center justify-center">
      <div className="sm:w-[400px] w-[90%] h-[207px] border-[2px] rounded-[10px] border-[#1BA9B5] my-[10em] text-center shadow-lg">
        <p className=" font-mulish font-[700] text-[20px] text-[#1BA9B5] mb-[15px] mt-[20px]">
          Logout?
        </p>
        <div className="items-center justify-center ">
          <button
            onClick={handleLogout}
            className="font-mulish text-[13px] text-[#fff] font-[400] py-[8px] bg-[#1BA9B5] rounded-[5px] mt-[50px] flex items-center justify-center w-[90%]  mx-auto "
          >
            Confirm
          </button>

          <Link to='/dashboard' className="font-mulish text-[13px] text-[#fff] font-[400]  w-[90%] py-[8px] bg-[#ff0000cc] rounded-[5px] mt-[10px] flex items-center justify-center mx-auto ">
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
}
