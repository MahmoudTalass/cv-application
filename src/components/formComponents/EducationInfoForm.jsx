/* eslint-disable react/prop-types */
import { useState } from "react";
export default function EducationInfoForm({ handleEducationInfo }) {
   const [currentInfo, setCurrentInfo] = useState({});

   return (
      <form
         className="personalInfoForm form"
         onSubmit={(e) => {
            e.preventDefault();
            currentInfo.id = crypto.randomUUID();
            handleEducationInfo(currentInfo);
         }}
      >
         <h2>Education:</h2>
         <div className="input-container">
            <label htmlFor="degree">Degree:</label>
            <input
               type="text"
               name="degree"
               id="degree"
               required
               onChange={(e) => {
                  setCurrentInfo({ ...currentInfo, degree: e.target.value });
               }}
            />
         </div>
         <div className="input-container">
            <label htmlFor="school">School:</label>
            <input
               type="text"
               name="school"
               id="school"
               required
               onChange={(e) => {
                  setCurrentInfo({ ...currentInfo, school: e.target.value });
               }}
            />
         </div>
         <div className="input-container">
            <label htmlFor="city">City:</label>
            <input
               type="text"
               name="city"
               id="city"
               required
               onChange={(e) => {
                  setCurrentInfo({ ...currentInfo, city: e.target.value });
               }}
            />
         </div>
         <div className="input-container">
            <label htmlFor="state">State:</label>
            <input
               type="text"
               name="state"
               id="state"
               required
               onChange={(e) => {
                  setCurrentInfo({ ...currentInfo, state: e.target.value });
               }}
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
               onChange={(e) => {
                  setCurrentInfo({
                     ...currentInfo,
                     graduationDate: e.target.value,
                  });
               }}
            />
         </div>
         <button type="submit">Submit</button>
      </form>
   );
}
