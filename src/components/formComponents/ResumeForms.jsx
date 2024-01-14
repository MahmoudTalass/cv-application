/* eslint-disable react/prop-types */
import { useState } from "react";
import EducationCard from "./EducationCard";
import ExperienceCard from "./ExperienceCard";
import PersonalDataCard from "./PersonalDataCard";

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
   // This state controls if the information included in a resume section show up and are opened
   const [displayCard, setDisplayCard] = useState({
      showPersonalCard: true,
      showEducationCard: false,
      showExperienceCard: false,
   });

   // This function controls which of the cards (personal details, education, and experience) is opened/displayed
   function handleDisplayCard(cardSection) {
      setDisplayCard({
         ...displayCard,
         [cardSection]: !displayCard[cardSection],
      });
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
               <PersonalDataCard
                  personalInfo={personalInfo}
                  handlePersonalInfo={handlePersonalInfo}
               />
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
                  handleEditEducation={handleEditEducation}
                  educationInfo={educationInfo}
                  handleRemoveEducation={handleRemoveEducation}
                  handleEducationInfo={handleEducationInfo}
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
               <ExperienceCard
                  handleEditExperience={handleEditExperience}
                  experienceInfo={experienceInfo}
                  handleRemoveExperience={handleRemoveExperience}
                  handleExperienceInfo={handleExperienceInfo}
               />
            )}
         </div>
      </section>
   );
}
