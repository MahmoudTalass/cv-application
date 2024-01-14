/* eslint-disable react/prop-types */
import { useState } from "react";

export default function EditPersonalDataForm({
   handlePersonalData,
   dataBeingEdited,
   handleEditingStatus,
}) {
   const [currentData, setCurrentData] = useState(dataBeingEdited);

   function handleChange(e, key) {
      setCurrentData({ ...currentData, [key]: e.target.value });
   }

   return (
      <form
         className="personalDataForm form"
         onSubmit={(e) => {
            e.preventDefault();
            handlePersonalData(currentData);
            handleEditingStatus();
         }}
      >
         <div className="input-container">
            <label htmlFor="">Name:</label>
            <input
               type="text"
               name="name"
               id="name"
               required
               value={currentData.name || ""}
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
               value={currentData.email || ""}
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
               value={currentData.phoneNumber || ""}
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
               value={currentData.location || ""}
               onChange={(e) => handleChange(e, ["location"])}
            />
         </div>
         <button type="submit">Submit</button>
      </form>
   );
}
