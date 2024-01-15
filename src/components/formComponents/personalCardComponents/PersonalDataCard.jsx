/* eslint-disable react/prop-types */
import EditPersonalDataForm from "./EditPersonalDataForm";
import PersonalDataForm from "./PersonalDataForm";
import { useState } from "react";

export default function PersonalDataCard({
   personalData,
   handlePersonalData,
   displayCard,
}) {
   const [isEditing, setIsEditing] = useState(false);
   const [displayInitialForm, setDisplayInitialForm] = useState(false);

   function handleEditingStatus() {
      setIsEditing(!isEditing);
   }

   function handleDisplayInitialForm() {
      setDisplayInitialForm(!displayInitialForm);
   }
   return (
      <div
         className={`${
            displayCard && "visible"
         } personal-content-card content-card`}
      >
         {isEditing && (
            <EditPersonalDataForm
               handlePersonalData={handlePersonalData}
               handleEditingStatus={handleEditingStatus}
               dataBeingEdited={personalData}
            />
         )}
         {!displayInitialForm && (
            <PersonalDataForm
               handlePersonalData={handlePersonalData}
               handleDisplayInitialForm={handleDisplayInitialForm}
            />
         )}

         {displayInitialForm && (
            <div className="personal-data-display">
               <p>{personalData.name}</p>
               <button
                  className="card-data-control-btn"
                  onClick={() => {
                     handleEditingStatus();
                  }}
               >
                  Edit
               </button>
            </div>
         )}
      </div>
   );
}
