/* eslint-disable react/prop-types */
import EditEducationForm from "./EditEducationForm";
import EducationList from "./EducationList";
import EducationInfoForm from "./EducationInfoForm";

export default function EducationCard({
   isEducationBeingEdited,
   handleEditEducation,
   handleDisplayEditForm,
   editedInfo,
   educationInfo,
   handleRemoveEducation,
   handleInfoBeingEdited,
   showEducationForm,
   handleEducationInfo,
   handleDisplayForms,
}) {
   return (
      <>
         <div className="education-content-card content-card">
            {isEducationBeingEdited && (
               <EditEducationForm
                  handleEditEducation={handleEditEducation}
                  editedEducation={editedInfo}
                  handleDisplayEditForm={handleDisplayEditForm}
               />
            )}
            {educationInfo.length > 0 && !isEducationBeingEdited && (
               <EducationList
                  educationInfo={educationInfo}
                  handleRemoveEducation={handleRemoveEducation}
                  handleDisplayEditForm={handleDisplayEditForm}
                  handleInfoBeingEdited={handleInfoBeingEdited}
               />
            )}
            {showEducationForm && (
               <EducationInfoForm
                  handleEducationInfo={handleEducationInfo}
                  handleDisplayForms={handleDisplayForms}
               />
            )}
            {!showEducationForm && (
               <button
                  className="add-education-btn add-btn"
                  onClick={() => handleDisplayForms("showEducationForm")}
               >
                  Add
               </button>
            )}
         </div>
      </>
   );
}
