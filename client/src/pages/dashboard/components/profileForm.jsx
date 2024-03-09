import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  updateProfile,
  updateEmail,
  updatePhoneNumber,
} from "firebase/auth";
import { useAuth } from "../../../contexts";
import { Label } from "../../auth/components/inputs";
import { MidSpinner } from "../../../components";

export const ProfileForm = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate()
  const auth = getAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: currentUser.displayName,
    email: currentUser.email,
    photoURL: "",
  });

  function handleAll(event) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  }

  async function update() {
    try {
      setLoading(true);
      await updateEmail(auth.currentUser, formData.email);
      await updateProfile(auth.currentUser, {
        displayName: formData.name,
      });

      toast.success("Profile updated successfully");
      setLoading(false);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      toast.error("An error has occurred");
    }
  }

  return (
    <div className="lg:ml-[302px] md:ml-[70px] ml-[20px] mr-[20px] pb-[50px] relative">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          update();
        }}
      >
        {/* =====email===== */}
        <div className="mt-[10px]">
          <Label name="Name" />
          <div>
            <input
              className="lg:w-[600px] md:w-[70%] w-[95%] sm:h-[51.11px] h-[45px] outline-0 border-[#C4C4C4] border-[1px] rounded-[5px] pl-[20px] "
              type={"text"}
              onChange={handleAll}
              value={formData.name}
              required
              name="name"
            />
          </div>
        </div>

        <div className="mt-[10px]">
          <Label name="Email" />
          <div>
            <input
              className="lg:w-[600px] md:w-[70%] w-[95%] sm:h-[51.11px] h-[45px] outline-0 border-[#C4C4C4] border-[1px] rounded-[5px] pl-[20px] "
              type={"email"}
              onChange={handleAll}
              value={formData.email}
              required
              name="email"
            />
          </div>
        </div>

        {/* =====file===== */}
        <div className="mt-[20px]">
          <Label name="Picture (Optional)" />
          <input type={"file"} />
        </div>

        {loading ? (
          <MidSpinner />
        ) : (
          <div className="md:mt-[72.9px] mt-[0px] md:mb-auto mb-[20px] ">
            <button
              className="font-mulish text-[13px] text-[#fff] font-[400] lg:w-[600px] h-[51.11px] bg-[#1BA9B5] rounded-[5px] mt-[30px] flex items-center justify-center w-[90%]  md:mx-0 mx-auto "
              type="Submit"
            >
              Submit
            </button>
          </div>
        )}
      </form>
    </div>
  );
};
