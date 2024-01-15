/* eslint-disable react/prop-types */
import { useState } from "react";
import EducationCard from "./educationCardComponents/EducationCard";
import ExperienceCard from "./experienceCardComponents/ExperienceCard";
import PersonalDataCard from "./personalCardComponents/PersonalDataCard";

export default function ResumeForms({
   handlePersonalData,
   handleEducationData,
   handleExperienceData,
   personalData,
   educationData,
   experienceData,
   handleRemoveEducation,
   handleRemoveExperience,
   handleEditEducation,
   handleEditExperience,
}) {
   // This state controls if the Datarmation included in a resume section show up and are opened
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

   function print() {
      window.print();
   }

   return (
      <section className="forms-container">
         <button onClick={print} className="print-cv-btn">
            Print your CV
         </button>
         <div className="form-section-container">
            <button
               className="display-current-data-btn"
               onClick={() => handleDisplayCard("showPersonalCard")}
            >
               Personal Details:
            </button>

            {displayCard.showPersonalCard && (
               <PersonalDataCard
                  personalData={personalData}
                  handlePersonalData={handlePersonalData}
                  displayCard={displayCard.showPersonalCard}
               />
            )}
         </div>
         <div className="form-section-container">
            <button
               className="display-current-data-btn"
               onClick={() => handleDisplayCard("showEducationCard")}
            >
               Education:
            </button>

            {displayCard.showEducationCard && (
               <EducationCard
                  handleEditEducation={handleEditEducation}
                  educationData={educationData}
                  handleRemoveEducation={handleRemoveEducation}
                  handleEducationData={handleEducationData}
                  displayCard={displayCard.showEducationCard}
               />
            )}
         </div>
         <div className="form-section-container">
            <button
               className="display-current-data-btn"
               onClick={() => handleDisplayCard("showExperienceCard")}
            >
               Experience:
            </button>
            {displayCard.showExperienceCard && (
               <ExperienceCard
                  handleEditExperience={handleEditExperience}
                  experienceData={experienceData}
                  handleRemoveExperience={handleRemoveExperience}
                  handleExperienceData={handleExperienceData}
                  displayCard={displayCard.showExperienceCard}
               />
            )}
         </div>
      </section>
   );
}
