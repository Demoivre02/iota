import React, { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { toast } from "react-hot-toast";
import { Icon } from "@iconify/react";
import jsPDF from "jspdf";
import { useNavigate } from "react-router-dom";
import Input from "react-phone-number-input/input";
import { isPossiblePhoneNumber } from "react-phone-number-input";

import { Label } from "../../auth/components/inputs";
import { useAuth } from "../../../contexts";
import { medicalDepartments, gender } from "./states";
import data from "../../../../data.json";
import { updateArray, getArray, array } from "./medicalArray";

export function AppointmentForm() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [myarray, setMyarray] = useState(array);
  const [count, setCount] = useState(0);
  const [phone, setPhone] = useState(currentUser.phoneNumber)
  const [formData, setFormData] = useState({
    name: currentUser.displayName,
    email: currentUser.email,
    gender: "",
    address: "",
    phone: phone, 
    state: "",
    filteredLGAs: [],
    LGA: "",
    department: "",
    filteredHospitals: [],
    Hospital: "",
    specialist: "",
    filteredDoctors: [],
    doctor: "",
    Date: "",
  });

  const handleStateChange = (event) => {
    const newState = event.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      state: newState,
      filteredLGAs: [],
      filteredHospitals: [],
      filteredDoctors: [],
      department:"",
      LGA: "",
      Hospital: "",
      doctor: "",
    }));
    if (newState) {
      const lgas = [
        ...new Set(data.filter((h) => h.State === newState).map((h) => h.LGA)),
      ];
      setFormData((prevFormData) => ({
        ...prevFormData,
        filteredLGAs: lgas,
      }));
    }
  };

  const handleLGAChange = (event) => {
    const newLGA = event.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      LGA: newLGA,
      filteredHospitals: [],
      filteredDoctors: [],
      Hospital: "",
      doctor: "",
    }));
    if (newLGA) {
      const hospitals = [
        ...new Set(
          data.filter((h) => h.LGA === newLGA).map((h) => h.Hospital_name)
        ),
      ];
      setFormData((prevFormData) => ({
        ...prevFormData,
        filteredHospitals: hospitals,
      }));
    }
  };

  const handleHospitalChange = (event) => {
    const newHospital = event.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      Hospital: newHospital,
      filteredDoctors: [],
      doctor: "",
    }));
    if (newHospital) {
      const doctors = data
        .filter((h) => h.Hospital_name === newHospital)
        .map((h) => h.doctors);

      setFormData((prevFormData) => ({
        ...prevFormData,
        filteredDoctors: doctors[0],
      }));
    }
  };

  function submit(formData, event) {
    updateArray(formData);
    setMyarray(getArray());
  }

  function onButtonClick() {
    submit(formData);
    toast.success("Appointment booked successfully");
    navigate("/history");
  }

  function restriction() {
    let nextCount = count + 1;
    setCount(nextCount);
    if (count <= 3) {
      onButtonClick();
    } else {
      toast.error(
        "Thank you for Booking, but we only take 4 appointments per hour, please book again in the next hour"
      );
    }
  }

  function handleAll(event) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  }

  const createPdf = (formData) => {
    // Create a new jsPDF instance
    const doc = new jsPDF();

    // Add the form data to the PDF file
    doc.text(`First Name: ${formData.firstname} `, 10, 10);
    doc.text(`Last Name: ${formData.lastname} `, 10, 20);
    doc.text(`Email: ${formData.email} `, 10, 30);
    doc.text(`Gender: ${formData.gender} `, 10, 40);
    doc.text(`Phone number: ${formData.phone} `, 10, 50);
    doc.text(`Address: ${formData.address} `, 10, 60);
    doc.text(`State: ${formData.state} `, 10, 70);
    doc.text(`City: ${formData.city} `, 10, 80);
    doc.text(`LGA: ${formData.LGA} `, 10, 90);
    doc.text(`Medical department: ${formData.department} `, 10, 100);
    doc.text(`Hospital: ${formData.Hospital} `, 10, 120);
    doc.text(`Specialist name: ${formData.specialist} `, 10, 130);
    doc.text(`Date: ${formData.Date} `, 10, 140);

    // Save the PDF file
    doc.save("form.pdf");
  };

  return (
    <div className="lg:ml-[302px] md:ml-[70px] ml-[20px] mr-[20px] pb-[50px] relative">
      <div
        onClick={() => createPdf(formData)}
        className="absolute bottom-0 right-0 text-center md:mb-[40px] mb-[20px] md:mr-[50px] mr-[5px] "
      >
        <Icon icon="ic:round-print" color="#10217d" width="40" />
      </div>

      <div className="my-[20px]">
        <p className="font-mulish font-[600] md:text-[20px] text-[13px] text-[#333]">
          Please fill this form to book an appointment
        </p>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          restriction();
        }}
      >
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

        {/* =====email===== */}
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

        {/* =====file=====
        <div className="mt-[20px]">
          <Label name="Picture (Optional)" />
          <input type={"file"} />
        </div> */}

        {/* =======Gender and phone======== */}
        <div className="lg:flex block lg:w-[622px] w-[95%] md:gap-[15px] gap-0 md:mx-0 md:w-[70%] mt-[20px]">
          <div>
            <Label name="Gender" />
            <select
              className="lg:w-[292px] w-[100%] sm:h-[51.11px] h-[45px] outline-0 border-[#C4C4C4] border-[1px] rounded-[5px] pl-[20px]"
              value={formData.gender}
              onChange={handleAll}
              name="gender"
            >
              {gender.map((gender, index) => {
                return (
                  <option key={index} value={gender}>
                    {" "}
                    {gender}{" "}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="lg:mt-0 md:mt-[25px] mt-[10px]">
            <Label name="Phone" />
            <div>
            <Input
              country="NG"
              required
              id="number"
              international
              placeholder="e.g. 8012345678"
              withCountryCallingCode
              value={phone}
              onChange={setPhone}
              className="lg:w-[292px] w-[100%] sm:h-[51.11px] h-[45px] outline-0 border-[#C4C4C4] border-[1px] rounded-[5px] pl-[20px]"
            />
            </div>
          </div>
        </div>

        {/* =====address===== */}

        <div className="md:mt-[25px] mt-[10px] w-[95%]  md:mx-0 md:w-[70%] ">
          <Label name="Street address" />
          <div>
            <input
              className="lg:w-[600px] w-[100%] sm:h-[51.11px] h-[45px] outline-0 border-[#C4C4C4] border-[1px] rounded-[5px] pl-[20px] "
              type={"text"}
              onChange={handleAll}
              value={formData.address}
              required
              name="address"
            />
          </div>
        </div>

        <div className="lg:flex block lg:w-[622px] w-[95%] md:gap-[15px] gap-0 md:mx-0 md:w-[70%] mt-[20px]">
          {/* =====states====== */}
          <div>
            <Label name="State" />
            <select
              className="lg:w-[292px] w-[100%] sm:h-[51.11px] h-[45px] outline-0 border-[#C4C4C4] border-[1px] rounded-[5px] px-[20px]"
              //   value={formData.state}
              onChange={handleStateChange}
              id="state"
              name="state"
            >
              <option value="">--Please choose a State--</option>
              {[...new Set(data.map((h) => h.State))].map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* ======LGA====== */}

          {formData.filteredLGAs.length > 0 && (
            <div className="">
              <Label name={`Select an LGA in ${formData.state}:`} />
              <select
                className="lg:w-[292px] md:w-[70%] w-[95%] sm:h-[51.11px] h-[45px] outline-0 border-[#C4C4C4] border-[1px] rounded-[5px] px-[20px]"
                value={formData.LGA}
                id="lga"
                onChange={handleLGAChange}
                name="LGA"
              >
                <option value="">--Please choose an LGA--</option>
                {formData.filteredLGAs.map((lga) => (
                  <option key={lga} value={lga}>
                    {lga}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* =====medical department===== */}
        <div className="mt-[20px]">
          <Label name="Medical Department" />
          <select
            className="lg:w-[600px] md:w-[70%] w-[95%] sm:h-[51.11px] h-[45px] outline-0 border-[#C4C4C4] border-[1px] rounded-[5px] pl-[20px] "
            value={formData.department}
            onChange={handleAll}
            name="department"
          >
            {medicalDepartments.sort().map((dept, index) => {
              return (
                <option key={index} value={dept}>
                  {dept}
                </option>
              );
            })}
          </select>
        </div>

        {/* =======Hospital and physician======= */}

        {formData.filteredHospitals.length > 0 && (
          <div className="mt-[10px]">
            <Label name={`Select an hospital in ${formData.LGA}:`} />
            <select
              className="lg:w-[600px] md:w-[70%] w-[95%] sm:h-[51.11px] h-[45px] outline-0 border-[#C4C4C4] border-[1px] rounded-[5px] pl-[20px] "
              value={formData.Hospital}
              id="hospital"
              onChange={handleHospitalChange}
              name="Hospital"
            >
              <option value="">--Please choose an Hospital--</option>
              {formData.filteredHospitals.map((hospital) => (
                <option key={hospital} value={hospital}>
                  {hospital}
                </option>
              ))}
            </select>
          </div>
        )}

        {formData.filteredDoctors.length > 0 && (
          <div className="mt-[10px]">
            <Label name={`Select a Doctor in ${formData.Hospital}:`} />
            <select
              className="lg:w-[600px] md:w-[70%] w-[95%] sm:h-[51.11px] h-[45px] outline-0 border-[#C4C4C4] border-[1px] rounded-[5px] pl-[20px] "
              value={formData.doctor}
              id="doctor"
              onChange={handleAll}
              name="doctor"
            >
              <option value="">--Please choose an Doctor--</option>
              {formData.filteredDoctors.map((doctor) => (
                <option key={doctor.id} value={doctor.name}>
                  {doctor.name}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* =====DATE===== */}

        <div className="mt-[20px]">
          <Label name="Date" />
          <input
            value={formData.Date}
            className="lg:w-[292px] w-[95%] md:w-[70%] sm:h-[51.11px] h-[45px] outline-0 border-[#C4C4C4] border-[1px] rounded-[5px] px-[20px]"
            onChange={handleAll}
            type={"date"}
            required
            name="Date"
          />
        </div>

        <ChakraProvider>
          <div className="md:mt-[72.9px] mt-[0px] md:mb-auto mb-[20px] ">
            <button
              className="font-mulish text-[13px] text-[#fff] font-[400] lg:w-[600px] h-[51.11px] bg-[#1BA9B5] rounded-[5px] mt-[30px] flex items-center justify-center w-[90%]  md:mx-0 mx-auto "
              type="Submit"
            >
              Submit
            </button>
          </div>
        </ChakraProvider>
      </form>
    </div>
  );
}
