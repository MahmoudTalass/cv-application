/* eslint-disable react/prop-types */
import EditExperienceForm from "./EditExperienceForm";
import ExperienceList from "./ExperienceList";
import ExperienceInfoForm from "./ExperienceInfoForm";

export default function ExperienceCard({
   isExperienceBeingEdited,
   handleEditExperience,
   handleDisplayEditForm,
   editedInfo,
   experienceInfo,
   handleRemoveExperience,
   handleInfoBeingEdited,
   showExperienceForm,
   handleExperienceInfo,
   handleDisplayForms,
}) {
   debugger;
   return (
      <div className="experience-card content-card">
         {isExperienceBeingEdited && (
            <EditExperienceForm
               handleEditExperience={handleEditExperience}
               handleDisplayEditForm={handleDisplayEditForm}
               editedExperience={editedInfo}
            />
         )}
         {experienceInfo.length > 0 && !isExperienceBeingEdited && (
            <ExperienceList
               experienceInfo={experienceInfo}
               handleRemoveExperience={handleRemoveExperience}
               handleDisplayEditForm={handleDisplayEditForm}
               handleInfoBeingEdited={handleInfoBeingEdited}
            />
         )}
         {showExperienceForm && (
            <ExperienceInfoForm
               handleExperienceInfo={handleExperienceInfo}
               handleDisplayForms={handleDisplayForms}
            />
         )}
         <button
            className="add-experience-btn add-btn"
            onClick={() => handleDisplayForms("showExperienceForm")}
         >
            Add
         </button>
      </div>
   );
}
