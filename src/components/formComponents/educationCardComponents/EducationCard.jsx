/* eslint-disable react/prop-types */
import EditEducationForm from "./EditEducationForm";
import EducationList from "./EducationList";
import EducationDataForm from "./EducationDataForm";
import { useState } from "react";

export default function EducationCard({
   handleEditEducation,
   educationData,
   handleRemoveEducation,
   handleEducationData,
   displayCard,
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
      <div
         className={`${
            displayCard && "visible"
         } education-content-card content-card`}
      >
         {isEditing && (
            <EditEducationForm
               handleEditEducation={handleEditEducation}
               handleEditingStatus={handleEditingStatus}
               dataBeingEdited={dataBeingEdited}
            />
         )}
         {educationData.length > 0 && !isEditing && !displayAddForm && (
            <EducationList
               educationData={educationData}
               handleRemoveEducation={handleRemoveEducation}
               handleEditingStatus={handleEditingStatus}
               handleDataBeingEdited={handleDataBeingEdited}
            />
         )}

         {displayAddForm && (
            <EducationDataForm
               handleEducationData={handleEducationData}
               handleDisplayAddForm={handleDisplayAddForm}
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
   );
}
