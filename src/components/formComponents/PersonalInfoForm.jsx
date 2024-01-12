/* eslint-disable react/prop-types */
import { useState } from "react";

export default function PersonalInfoForm({ handlePersonalInfo }) {
   const [currentInfo, setCurrentInfo] = useState({});

   return (
      <form
         className="personalInfoForm form"
         onSubmit={(e) => {
            e.preventDefault();
            handlePersonalInfo(currentInfo);
         }}
      >
         <h2>Personal Details</h2>
         <div className="input-container">
            <label htmlFor="">Name:</label>
            <input
               type="text"
               name="name"
               id="name"
               required
               value={currentInfo.name || ""}
               onChange={(e) => {
                  setCurrentInfo({ ...currentInfo, name: e.target.value });
               }}
            />
         </div>
         <div className="input-container">
            <label htmlFor="email">Email:</label>
            <input
               type="email"
               name="email"
               id="email"
               required
               value={currentInfo.email || ""}
               onChange={(e) => {
                  setCurrentInfo({ ...currentInfo, email: e.target.value });
               }}
            />
         </div>
         <div className="input-container">
            <label htmlFor="phone-number">Phone Number:</label>
            <input
               type="tel"
               name="phone-number"
               id="phone-number"
               required
               value={currentInfo.phoneNumber || ""}
               onChange={(e) => {
                  setCurrentInfo({
                     ...currentInfo,
                     phoneNumber: e.target.value,
                  });
               }}
            />
         </div>
         <div className="input-container">
            <label htmlFor="location">Location:</label>
            <input
               type="text"
               name="location"
               id="location"
               placeholder="city, state"
               required
               value={currentInfo.location || ""}
               onChange={(e) => {
                  setCurrentInfo({ ...currentInfo, location: e.target.value });
               }}
            />
         </div>
         <button type="submit">Submit</button>
      </form>
   );
}
