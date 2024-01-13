/* eslint-disable react/prop-types */
import { useState } from "react";

export default function EditEducationForm({
   handleDisplayEducationEditForm,
   editedEducation,
   handleEditEducation,
}) {
   const [currentInfo, setCurrentInfo] = useState({ ...editedEducation });

   function handleChange(e, key) {
      setCurrentInfo({ ...currentInfo, [key]: e.target.value });
   }

   return (
      <form
         className="personalInfoForm form"
         onSubmit={(e) => {
            e.preventDefault();
            handleDisplayEducationEditForm();
            handleEditEducation(currentInfo);
         }}
      >
         <div className="input-container">
            <label htmlFor="degree">Degree:</label>
            <input
               type="text"
               name="degree"
               id="degree"
               required
               value={currentInfo.degree}
               onChange={(e) => handleChange(e, ["degree"])}
            />
         </div>
         <div className="input-container">
            <label htmlFor="school">School:</label>
            <input
               type="text"
               name="school"
               id="school"
               required
               value={currentInfo.school}
               onChange={(e) => handleChange(e, ["school"])}
            />
         </div>
         <div className="input-container">
            <label htmlFor="city">City:</label>
            <input
               type="text"
               name="city"
               id="city"
               required
               value={currentInfo.city}
               onChange={(e) => handleChange(e, ["city"])}
            />
         </div>
         <div className="input-container">
            <label htmlFor="state">State:</label>
            <input
               type="text"
               name="state"
               id="state"
               required
               value={currentInfo.state}
               onChange={(e) => handleChange(e, ["state"])}
            />
         </div>
         <div className="input-container">
            <label htmlFor="graduation-date">Graduation Date:</label>
            <input
               type="text"
               name="graduation-date"
               id="graduation-date"
               maxLength={7}
               placeholder="MM/YYYY"
               required
               value={currentInfo.graduationDate}
               onChange={(e) => handleChange(e, ["graduationDate"])}
            />
         </div>
         <button type="submit">Submit</button>
      </form>
   );
}