/* eslint-disable react/prop-types */
import ExperienceInfoForm from "./ExperienceInfoForm";
import PersonalInfoForm from "./PersonalInfoForm";
import ExperienceList from "./ExperienceList";
import { useState } from "react";
import EditPersonalInfoForm from "./EditPersonalInfoForm";
import EditExperienceForm from "./EditExperienceForm";
import EducationCard from "./EducationCard";

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
   const [displayCard, setDisplayCard] = useState({
      showPersonalCard: true,
      showEducationCard: false,
      showExperienceCard: false,
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
   function handleDisplayCard(cardSection) {
      setDisplayCard({
         ...displayCard,
         [cardSection]: !displayCard[cardSection],
      });
   }

   // This function controls if the form of the section being edited is displayed
   function handleDisplayEditForm(formName) {
      setIsEditing({ ...isEditing, [formName]: !isEditing[formName] });
   }

   // This function sets the given object to be the current education information being edited
   function handleInfoBeingEdited(info, infoType) {
      setEditedInfo({ ...editedInfo, [infoType]: info });
   }

   return (
      <section className="forms-container">
         <div className="form-section-container">
            <button
               className="display-current-info-btn"
               onClick={() => handleDisplayCard("showPersonalCard")}
            >
               Personal Details:
            </button>

            {displayCard.showPersonalCard && (
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
               onClick={() => handleDisplayCard("showEducationCard")}
            >
               Education:
            </button>

            {displayCard.showEducationCard && (
               <EducationCard
                  isEducationBeingEdited={isEditing.educationSection}
                  handleEditEducation={handleEditEducation}
                  handleDisplayEditForm={handleDisplayEditForm}
                  editedInfo={editedInfo.educationInfo}
                  educationInfo={educationInfo}
                  handleRemoveEducation={handleRemoveEducation}
                  handleInfoBeingEdited={handleInfoBeingEdited}
                  showEducationForm={displayForms.showEducationForm}
                  handleEducationInfo={handleEducationInfo}
                  handleDisplayForms={handleDisplayForms}
               />
            )}
         </div>
         <div className="form-section-container">
            <button
               className="display-current-info-btn"
               onClick={() => handleDisplayCard("showExperienceCard")}
            >
               Experience:
            </button>
            {displayCard.showExperienceCard && (
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
                           handleInfoBeingEdited={handleInfoBeingEdited}
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
