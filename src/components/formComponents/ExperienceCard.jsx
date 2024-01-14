/* eslint-disable react/prop-types */
import EditExperienceForm from "./EditExperienceForm";
import ExperienceList from "./ExperienceList";
import ExperienceInfoForm from "./ExperienceInfoForm";
import { useState } from "react";

export default function ExperienceCard({
   handleEditExperience,
   experienceInfo,
   handleRemoveExperience,
   handleExperienceInfo,
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
         {experienceInfo.length > 0 && !isEditing && (
            <ExperienceList
               experienceInfo={experienceInfo}
               handleRemoveExperience={handleRemoveExperience}
               handleEditingStatus={handleEditingStatus}
               handleDataBeingEdited={handleDataBeingEdited}
            />
         )}
         {displayAddForm && (
            <ExperienceInfoForm
               handleExperienceInfo={handleExperienceInfo}
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
