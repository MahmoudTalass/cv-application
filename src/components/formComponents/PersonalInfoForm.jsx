/* eslint-disable react/prop-types */
import { useState } from "react";

export default function PersonalInfoForm({
   handlePersonalInfo,
   handleDisplayInitialForm,
}) {
   const [currentInfo, setCurrentInfo] = useState({});

   function handleChange(e, key) {
      setCurrentInfo({ ...currentInfo, [key]: e.target.value });
   }

   return (
      <form
         className="personalInfoForm form"
         onSubmit={(e) => {
            e.preventDefault();
            handlePersonalInfo(currentInfo);
            handleDisplayInitialForm();
         }}
      >
         <div className="input-container">
            <label htmlFor="">Name:</label>
            <input
               type="text"
               name="name"
               id="name"
               required
               value={currentInfo.name || ""}
               onChange={(e) => handleChange(e, ["name"])}
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
               onChange={(e) => handleChange(e, ["email"])}
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
               onChange={(e) => handleChange(e, ["phoneNumber"])}
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
               onChange={(e) => handleChange(e, ["location"])}
            />
         </div>
         <button type="submit">Submit</button>
      </form>
   );
}
