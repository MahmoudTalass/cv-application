/* eslint-disable react/prop-types */
import { useState } from "react";

export default function ExperienceInfoForm({
   handleEditExperience,
   editedExperience,
   handleDisplayEditForm,
}) {
   const [currentInfo, setCurrentInfo] = useState(editedExperience);

   function handleChange(e, key) {
      setCurrentInfo({ ...currentInfo, [key]: e.target.value });
   }

   return (
      <form
         className="experienceInfoForm form"
         onSubmit={(e) => {
            e.preventDefault();
            handleDisplayEditForm("experienceSection");
            handleEditExperience(currentInfo);
         }}
      >
         <div className="input-container">
            <label htmlFor="company">Company:</label>
            <input
               type="text"
               name="company"
               id="company"
               value={currentInfo.company || ""}
               onChange={(e) => handleChange(e, "company")}
            />
         </div>
         <div className="input-container">
            <label htmlFor="position-title">Position Title:</label>
            <input
               type="text"
               name="position-title"
               id="position-title"
               value={currentInfo.position || ""}
               onChange={(e) => handleChange(e, "position")}
            />
         </div>
         <div className="start-end-date-container">
            <div className="input-container">
               <label htmlFor="start-date">Start Date</label>
               <input
                  type="text"
                  name="start-date"
                  id="start-date"
                  maxLength={7}
                  placeholder="MM/YYYY"
                  value={currentInfo.startDate || ""}
                  onChange={(e) => handleChange(e, "startDate")}
               />
            </div>
            <div className="input-container">
               <label htmlFor="end-date">End Date</label>
               <input
                  type="text"
                  name="end-date"
                  id="end-date"
                  maxLength={7}
                  placeholder="MM/YYYY"
                  value={currentInfo.endDate || ""}
                  onChange={(e) => handleChange(e, "endDate")}
               />
            </div>
         </div>
         <div className="input-container">
            <label htmlFor="description">Description</label>
            <textarea
               name="description"
               id="description"
               cols="30"
               rows="10"
               value={currentInfo.description || ""}
               onChange={(e) => handleChange(e, "description")}
            ></textarea>
         </div>

         <button type="submit">Edit</button>
      </form>
   );
}
