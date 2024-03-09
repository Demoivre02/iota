import React, { useState } from 'react';
import SimpleMap from './map';

export function Donation  ()  {
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    contactInfo: {
      phone: '',
      email: '',
    },
    address: '',
    health: {
      feelingWell: false,
      medicalConditions: false,
      medications: false,
      vaccinations: false,
      bloodTransfusion: false,
      bloodborneIllness: false,
    },
    lifestyle: {
      weight: '',
      malariaTravel: false,
      contagiousContact: false,
    },
    donationHistory: {
      donatedBefore: false,
      lastDonation: '',
    },
    bloodType: '',
    contactNeeds: false,
  });

  const handleChange = (event) => {
    const { name, value, type } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? event.target.checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit form data to your backend or process it here
    console.log('Form Submitted:', formData);
    setFormData({
      // Reset form after submission (optional)
      fullName: '',
      // ... reset other fields
    });
  };

  return (
    <div className='flex md:flex-row flex-col justify-center gap-[50px] md:w-[70%] w-[90%] mx-auto'>
    <form onSubmit={handleSubmit}>
   
      <h2 className='md:text-[30px] text-[20px] font-bold'>Blood Donor Information</h2>

      <p>Thank You for choosing to save lives</p>

      <h3 className='sm:text-[20px] text-[14px] font-[500] mt-[1em] '>General Information</h3>

      <div className='flex flex-col my-[1.3em] ' >
        <label className='md:text-[14px] text-[12px]' htmlFor="fullName">Full Name:</label>
        <input
        className='border max-w-[500px] md:w-[400px]  w-[300px] h-[35px] mt-[10px]'
          type="text"
          name="fullName"
          id="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </div>

      <div >
        <label className='md:text-[14px] text-[12px]' htmlFor="dateOfBirth">Date of Birth:</label>
        <input
        className=''
          type="date"
          name="dateOfBirth"
          id="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          required
        />
      </div>

      <div  className='flex flex-col my-[1.3em] '> 
        <label className='md:text-[14px] text-[12px]' htmlFor="phone">Phone Number:</label>
        <input
        className='border max-w-[500px] md:w-[400px]  w-[300px] h-[35px] mt-[10px]'
          type="tel"
          name="contactInfo.phone"
          id="phone"
          value={formData.contactInfo.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div  className='flex flex-col my-[1.3em] ' >
        <label className='md:text-[14px] text-[12px]' htmlFor="email">Email Address:</label>
        <input
        className='border max-w-[500px] md:w-[400px]  w-[300px] h-[35px] mt-[10px]'
          type="email"
          name="contactInfo.email"
          id="email"
          value={formData.contactInfo.email}
          onChange={handleChange}
          required
        />
      </div>

      <div  className='flex flex-col my-[1.3em] ' >
        <label className='md:text-[14px] text-[12px]' htmlFor="address">Address:</label>
        <input
        className='border max-w-[500px] md:w-[400px]  w-[300px] h-[35px] mt-[10px]'
          type="text"
          name="address"
          id="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>

      {/* Health Section */}
      <h3 className='sm:text-[20px] text-[14px] font-[500] mt-[2em] '>Health Information</h3>
      <div className='mt-[.8em]  '  >
        <label className='md:text-[14px] text-[12px]'>
          <input
          className='mx-[10px]'
            type="checkbox"
            name="health.feelingWell"
            id="feelingWell"
            checked={formData.health.feelingWell}
            onChange={handleChange}
          />
          Do you feel well and in good health today?
        </label>
      </div>
      <div className='mt-[.8em]' >
        <label className='md:text-[14px] text-[12px]'>
          <input
            className='mx-[10px]'
            type="checkbox"
            name="health.medicalConditions"
            id="medicalConditions"
            checked={formData.health.medicalConditions}
            onChange={handleChange}
          />
          Have you ever had a serious medical condition?
        </label>
      </div>
      {/* Add similar checkboxes for other health questions */}

      {/* Lifestyle Section */}
      <h3 className='sm:text-[20px] text-[14px] font-[500] mt-[2em] '>Lifestyle Information</h3>
      
      <div className='flex flex-col my-[1.3em]' >
        <label className='md:text-[14px] text-[12px]' htmlFor="weight">Weight (kg):</label>
        <input
        className='border max-w-[500px] md:w-[400px]  w-[300px] h-[35px] mt-[10px]'
          type="number"
          name="lifestyle.weight"
          id="weight"
          value={formData.lifestyle.weight}
          onChange={handleChange}
        />
      </div>

      <div className='mt-[.8em]'>
        <label className='md:text-[14px] text-[12px]'> 
          <input
             className='mx-[10px]'
            type="checkbox"
            name="lifestyle.malariaTravel"
            id="malariaTravel"
            checked={formData.lifestyle.malariaTravel}
            onChange={handleChange}
          />
       Are you currently experiencing symptoms of malaria?</label>
        </div>

        <div  className='mt-[.8em]' >
            <label className='md:text-[14px] text-[12px]'>
            <input
                className='mx-[10px]'
                type="checkbox"
                name="lifestyle.contagiousContact"
                id="contagiousContact"
                checked={formData.lifestyle.contagiousContact}
                onChange={handleChange}
            />
            In the past 3 months, have you had close contact with someone who has been diagnosed with a contagious illness?
            </label>
        </div>

      {/* Donation History Section */}
      <h3 className='sm:text-[20px] text-[14px] font-[500] mt-[2em] '>Donation History</h3>
      <div>
        <label className='md:text-[14px] text-[12px]'>
          <input
            className='mx-[10px]'
            type="checkbox"
            name="donationHistory.donatedBefore"
            id="donatedBefore"
            checked={formData.donationHistory.donatedBefore}
            onChange={handleChange}
          />
          Have you ever donated blood before?
        </label>
      </div>

      <div className='mt-[.8em]'>
        <label className='md:text-[14px] text-[12px]' htmlFor="lastDonation">Last Donation Date (if applicable):</label>
        <input
          type="date"
          name="donationHistory.lastDonation"
          id="lastDonation"
          value={formData.donationHistory.lastDonation}
          onChange={handleChange}
          disabled={!formData.donationHistory.donatedBefore}
        />
      </div>

      {/* Additional Fields */}
      <div className='flex flex-col my-[1.3em] '>
        <label className='md:text-[14px] text-[12px]' htmlFor="bloodType">Blood Type (if you know it):</label>
        <input
            className='border max-w-[500px] md:w-[400px]  w-[300px] h-[35px]'
          type="text"
          name="bloodType"
          id="bloodType"
          value={formData.bloodType}
          onChange={handleChange}
        />
      </div>

      <div className='mt-[.8em]'>
        <label className='md:text-[14px] text-[12px]'>
          <input
            className='mx-[10px]'
            type="checkbox"
            name="contactNeeds"
            id="contactNeeds"
            checked={formData.contactNeeds}
            onChange={handleChange}
          />
          I would like to be contacted about specific blood donation needs (e.g., rare blood types).
        </label>
      </div>

      <button className='bg-[#14A800] md:w-[150px] w-[100px] justify-center h-[40px] mt-[1em] py-[4px] px-[8px] rounded-[8px] text-[#fff] flex items-center ' type="submit">Submit</button>
    </form>

    <div>
        <p className='my-[1em] md:text-[20px] font-[500]'>Here is the location to the nearest hospitals</p>
        <SimpleMap/>
    </div>
  

    </div>
  )
}




