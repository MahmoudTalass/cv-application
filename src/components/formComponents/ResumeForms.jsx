/* eslint-disable react/prop-types */
import EducationInfoForm from "./EducationInfoForm";
import ExperienceInfoForm from "./ExperienceInfoForm";
import PersonalInfoForm from "./PersonalInfoForm";
import EducationList from "./EducationList";
import ExperienceList from "./ExperienceList";
import { useState } from "react";
import EditEducationForm from "./EditEducationForm";
import EditPersonalInfoForm from "./EditPersonalInfoForm";
import EditExperienceForm from "./EditExperienceForm";

export default function ResumeForms({
   handlePersonalInfo,
   handleEducationInfo,
   handleExperienceInfo,
   personalInfo,
   educationInfo,
   experienceInfo,
   handleRemoveEducation,
   handleRemoveExperience,
   handleEditEducation,
   handleEditExperience,
}) {
   // This state controls which forms show up
   const [displayForms, setDisplayForms] = useState({
      showPersonalForm: true,
      showEducationForm: false,
      showExperienceForm: false,
   });

   // This state controls if the information included in a resume section show up and are opened
   const [displayInfo, setDisplayInfo] = useState({
      showPersonalInfo: true,
      showEducationList: false,
      showExperienceList: false,
   });

   // This state controls if a resume section is currently being edited
   const [isEditing, setIsEditing] = useState({
      personalInfoSection: false,
      educationSection: false,
      experienceSection: false,
   });

   // This states holds the object/resume section information that is currenlty being edited so it is
   // passed to editing forms
   const [editedInfo, setEditedInfo] = useState({
      educationInfo: {},
      experienceInfo: {},
   });

   // This state tells the program if the personal info form as be filled out so it only gets edited after
   const [isPersonalInfoFilled, setIsPersonalInfoFilled] = useState(false);

   // This function tells the program that the personal info form section has been filled once
   function handleFirstPersonalInfoForm() {
      setIsPersonalInfoFilled(true);
   }

   // This function controls which forms should be displayed
   function handleDisplayForms(formName) {
      setDisplayForms({
         ...displayForms,
         [formName]: !displayForms[formName],
      });
   }

   // This function controls which of the cards (personal details, education, and experience) is opened/displayed
   function handleDisplayInfo(infoSection) {
      setDisplayInfo({
         ...displayInfo,
         [infoSection]: !displayInfo[infoSection],
      });
   }

   // This function controls if the form of the section being edited is displayed
   function handleDisplayEditForm(formName) {
      setIsEditing({ ...isEditing, [formName]: !isEditing[formName] });
   }

   // This function sets the given object to be the current education information being edited
   function setInfoBeingEdited(info, infoType) {
      setEditedInfo({ ...editedInfo, [infoType]: info });
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
                  {isEditing.personalInfoSection && isPersonalInfoFilled && (
                     <EditPersonalInfoForm
                        editedPersonalInfo={personalInfo}
                        handleDisplayEditForm={handleDisplayEditForm}
                        handlePersonalInfo={handlePersonalInfo}
                     />
                  )}
                  {!isPersonalInfoFilled && (
                     <PersonalInfoForm
                        handlePersonalInfo={handlePersonalInfo}
                        handleDisplayForms={handleDisplayForms}
                        handleFirstPersonalInfoForm={
                           handleFirstPersonalInfoForm
                        }
                     />
                  )}

                  {isPersonalInfoFilled && (
                     <div className="personal-info-display">
                        <p>{personalInfo.name}</p>
                        <button
                           onClick={() => {
                              handleDisplayEditForm("personalInfoSection");
                           }}
                        >
                           Edit
                        </button>
                     </div>
                  )}
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
                  {isEditing.educationSection && (
                     <EditEducationForm
                        handleEditEducation={handleEditEducation}
                        handleDisplayEditForm={handleDisplayEditForm}
                        editedEducation={editedInfo.educationInfo}
                     />
                  )}
                  {educationInfo.length > 0 && !isEditing.educationSection && (
                     <EducationList
                        educationInfo={educationInfo}
                        handleRemoveEducation={handleRemoveEducation}
                        handleDisplayEditForm={handleDisplayEditForm}
                        setInfoBeingEdited={setInfoBeingEdited}
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
                  {isEditing.experienceSection && (
                     <EditExperienceForm
                        handleEditExperience={handleEditExperience}
                        handleDisplayEditForm={handleDisplayEditForm}
                        editedExperience={editedInfo.experienceInfo}
                     />
                  )}
                  {experienceInfo.length > 0 &&
                     !isEditing.experienceSection && (
                        <ExperienceList
                           experienceInfo={experienceInfo}
                           handleRemoveExperience={handleRemoveExperience}
                           handleDisplayEditForm={handleDisplayEditForm}
                           setInfoBeingEdited={setInfoBeingEdited}
                        />
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
