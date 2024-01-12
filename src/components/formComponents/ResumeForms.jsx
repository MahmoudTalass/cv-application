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
               <div className="personal-info-content-card">
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
               <>
                  <EducationList educationInfo={educationInfo} />
                  {!displayForms.showEducationForm && (
                     <button
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
               </>
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
               <>
                  <ExperienceList experienceInfo={experienceInfo} />
                  <button
                     onClick={() => handleDisplayForms("showExperienceForm")}
                  >
                     Add
                  </button>
               </>
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
