/* eslint-disable react/prop-types */
import EditExperienceForm from "./EditExperienceForm";
import ExperienceList from "./ExperienceList";
import ExperienceDataForm from "./ExperienceDataForm";
import { useState } from "react";

export default function ExperienceCard({
   handleEditExperience,
   experienceData,
   handleRemoveExperience,
   handleExperienceData,
}) {
   const [isEditing, setIsEditing] = useState(false);
   const [dataBeingEdited, setDataBeingEdited] = useState();
   const [displayAddForm, setDisplayAddForm] = useState(false);

   function handleEditingStatus() {
      setIsEditing(!isEditing);
   }

   function handleDataBeingEdited(data) {
      setDataBeingEdited(data);
   }

   function handleDisplayAddForm() {
      setDisplayAddForm(!displayAddForm);
   }

   return (
      <div className="experience-card content-card">
         {isEditing && (
            <EditExperienceForm
               handleEditExperience={handleEditExperience}
               handleEditingStatus={handleEditingStatus}
               dataBeingEdited={dataBeingEdited}
            />
         )}
         {experienceData.length > 0 && !isEditing && (
            <ExperienceList
               experienceData={experienceData}
               handleRemoveExperience={handleRemoveExperience}
               handleEditingStatus={handleEditingStatus}
               handleDataBeingEdited={handleDataBeingEdited}
            />
         )}
         {displayAddForm && (
            <ExperienceDataForm
               handleExperienceData={handleExperienceData}
               handleDisplayAddForm={handleDisplayAddForm}
            />
         )}
         {!displayAddForm && !isEditing && (
            <button
               className="add-experience-btn add-btn"
               onClick={() => handleDisplayAddForm()}
            >
               Add
            </button>
         )}
      </div>
   );
}
