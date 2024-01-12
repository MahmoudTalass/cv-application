/* eslint-disable react/prop-types */
import EducationInfoForm from "./EducationInfoForm";
import ExperienceInfoForm from "./ExperienceInfoForm";
import PersonalInfoForm from "./PersonalInfoForm";
import EducationList from "./EducationList";
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
      showPersonalForm: false,
      showEducationForm: false,
      showExperienceForm: false,
   });

   const [displayInfo, setDisplayInfo] = useState({
      showPersonalInfo: false,
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
         <div>
            <button
               className="display-current-info-btn"
               onClick={() => handleDisplayInfo("showPersonalInfo")}
            >
               Personal Details:
            </button>
            {displayInfo.showPersonalInfo && (
               <>
                  {!isPersonalInfoFilled && (
                     <PersonalInfoForm
                        handlePersonalInfo={handlePersonalInfo}
                        handleDisplayForms={handleDisplayForms}
                        handleFirstPersonalInfoForm={
                           handleFirstPersonalInfoForm
                        }
                     />
                  )}

                  <div className="personalInfoDisplay">
                     {personalInfo.name} {personalInfo.email}{" "}
                     {personalInfo.phoneNumber} {personalInfo.location}
                     info
                  </div>
               </>
            )}
         </div>
         <div>
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
         <div>
            <button
               className="display-current-info-btn"
               onClick={() => handleDisplayInfo("showExperienceList")}
            >
               Experience:
            </button>
            {displayInfo.showExperienceList && (
               <>
                  <ul className="experiences-list">
                     {experienceInfo.map((info) => {
                        return (
                           <li key={info.id} className="education-info-display">
                              <p>{info.position}</p>
                              <p>{info.company}</p>
                           </li>
                        );
                     })}
                  </ul>
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
