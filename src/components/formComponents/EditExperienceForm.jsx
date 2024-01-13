/* eslint-disable react/prop-types */
import { useState } from "react";

export default function ExperienceInfoForm() {
   const [currentInfo, setCurrentInfo] = useState({});

   function handleChange(e, key) {
      setCurrentInfo({ ...currentInfo, [key]: e.target.value });
   }

   return (
      <form
         className="experienceInfoForm form"
         onSubmit={(e) => {
            e.preventDefault();
         }}
      >
         <div className="input-container">
            <label htmlFor="company">Company:</label>
            <input
               type="text"
               name="company"
               id="company"
               onChange={(e) => handleChange(e, "company")}
            />
         </div>
         <div className="input-container">
            <label htmlFor="position-title">Position Title:</label>
            <input
               type="text"
               name="position-title"
               id="position-title"
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
               onChange={(e) => handleChange(e, "description")}
            ></textarea>
         </div>

         <button type="submit">Edit</button>
      </form>
   );
}
