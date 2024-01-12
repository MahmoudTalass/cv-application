/* eslint-disable react/prop-types */
import EducationInfoForm from "./EducationInfoForm";
import ExperienceInfoForm from "./ExperienceInfoForm";
import PersonalInfoForm from "./PersonalInfoForm";
import EducationList from "./EducationList";
import ExperienceList from "./ExperienceList";
import { useState } from "react";

export default function ResumeForms({
   handlePersonalInfo,
   handleEducationInfo,
   handleExperienceInfo,
   personalInfo,
   educationInfo,
   experienceInfo,
   handleRemoveEducation,
}) {
   const [displayForms, setDisplayForms] = useState({
      showPersonalForm: true,
      showEducationForm: false,
      showExperienceForm: false,
   });

   const [displayInfo, setDisplayInfo] = useState({
      showPersonalInfo: true,
      showEducationList: false,
      showExperienceList: false,
   });

   const [isPersonalInfoFilled, setIsPersonalInfoFilled] = useState(false);

   function handleFirstPersonalInfoForm() {
      setIsPersonalInfoFilled(true);
   }

   function handleDisplayForms(formName) {
      setDisplayForms({
         ...displayForms,
         [formName]: !displayForms[formName],
      });
   }

   function handleDisplayInfo(infoSection) {
      setDisplayInfo({
         ...displayInfo,
         [infoSection]: !displayInfo[infoSection],
      });
   }

   return (
      <section className="forms-container">
         <div className="form-section-container">
            <button
               className="display-current-info-btn"
               onClick={() => handleDisplayInfo("showPersonalInfo")}
            >
               Personal Details:
            </button>

            {displayInfo.showPersonalInfo && (
               <div className="personal-content-card content-card">
                  {!isPersonalInfoFilled && (
                     <PersonalInfoForm
                        handlePersonalInfo={handlePersonalInfo}
                        handleDisplayForms={handleDisplayForms}
                        handleFirstPersonalInfoForm={
                           handleFirstPersonalInfoForm
                        }
                     />
                  )}

                  <div className="personal-info-display">
                     <p>{personalInfo.name} ...</p>
                  </div>
               </div>
            )}
         </div>
         <div className="form-section-container">
            <button
               className="display-current-info-btn"
               onClick={() => handleDisplayInfo("showEducationList")}
            >
               Education:
            </button>

            {displayInfo.showEducationList && (
               <div className="education-content-card content-card">
                  {educationInfo.length > 0 && (
                     <EducationList
                        educationInfo={educationInfo}
                        handleRemoveEducation={handleRemoveEducation}
                     />
                  )}
                  {!displayForms.showEducationForm && (
                     <button
                        className="add-education-btn add-btn"
                        onClick={() => handleDisplayForms("showEducationForm")}
                     >
                        Add
                     </button>
                  )}
                  {displayForms.showEducationForm && (
                     <EducationInfoForm
                        handleEducationInfo={handleEducationInfo}
                        handleDisplayForms={handleDisplayForms}
                     />
                  )}
               </div>
            )}
         </div>
         <div className="form-section-container">
            <button
               className="display-current-info-btn"
               onClick={() => handleDisplayInfo("showExperienceList")}
            >
               Experience:
            </button>
            {displayInfo.showExperienceList && (
               <div className="experience-card content-card">
                  {experienceInfo.length > 0 && (
                     <ExperienceList experienceInfo={experienceInfo} />
                  )}
                  <button
                     className="add-experience-btn add-btn"
                     onClick={() => handleDisplayForms("showExperienceForm")}
                  >
                     Add
                  </button>
               </div>
            )}
            {displayForms.showExperienceForm && (
               <ExperienceInfoForm
                  handleExperienceInfo={handleExperienceInfo}
                  handleDisplayForms={handleDisplayForms}
               />
            )}
         </div>
      </section>
   );
}
