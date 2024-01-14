/* eslint-disable react/prop-types */
import EditEducationForm from "./EditEducationForm";
import EducationList from "./EducationList";
import EducationInfoForm from "./EducationInfoForm";
import { useState } from "react";

export default function EducationCard({
   handleEditEducation,
   educationInfo,
   handleRemoveEducation,
   handleEducationInfo,
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
      <>
         <div className="education-content-card content-card">
            {isEditing && (
               <EditEducationForm
                  handleEditEducation={handleEditEducation}
                  handleEditingStatus={handleEditingStatus}
                  dataBeingEdited={dataBeingEdited}
               />
            )}

            {displayAddForm && (
               <EducationInfoForm
                  handleEducationInfo={handleEducationInfo}
                  handleDisplayAddForm={handleDisplayAddForm}
               />
            )}
            {educationInfo.length > 0 && !isEditing && (
               <EducationList
                  educationInfo={educationInfo}
                  handleRemoveEducation={handleRemoveEducation}
                  handleEditingStatus={handleEditingStatus}
                  handleDataBeingEdited={handleDataBeingEdited}
               />
            )}
            {!displayAddForm && !isEditing && (
               <button
                  className="add-education-btn add-btn"
                  onClick={() => handleDisplayAddForm()}
               >
                  Add
               </button>
            )}
         </div>
      </>
   );
}
