/* eslint-disable react/prop-types */
import EducationInfoForm from "./EducationInfoForm";
import ExperienceInfoForm from "./ExperienceInfoForm";
import PersonalInfoForm from "./PersonalInfoForm";
import { useState } from "react";

export default function ResumeForms({
   handlePersonalInfo,
   handleEducationInfo,
   handleExperienceInfo,
}) {
   return (
      <section className="forms-container">
         <div>
            <button>Personal Details</button>
            <PersonalInfoForm handlePersonalInfo={handlePersonalInfo} />
         </div>
         <div>
            <button>Education:</button>
            <EducationInfoForm handleEducationInfo={handleEducationInfo} />
            <div className="current-education-info"></div>
         </div>
         <div>
            <h2>Experience:</h2>
            <ExperienceInfoForm handleExperienceInfo={handleExperienceInfo} />
            <div className="current-experience-info"></div>
         </div>
      </section>
   );
}
