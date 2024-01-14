/* eslint-disable react/prop-types */
import EditPersonalInfoForm from "./EditPersonalInfoForm";
import PersonalInfoForm from "./PersonalInfoForm";
import { useState } from "react";

export default function PersonalDataCard({ personalInfo, handlePersonalInfo }) {
   const [isEditing, setIsEditing] = useState(false);
   const [displayInitialForm, setDisplayInitialForm] = useState(false);

   function handleEditingStatus() {
      setIsEditing(!isEditing);
   }

   function handleDisplayInitialForm() {
      setDisplayInitialForm(!displayInitialForm);
   }
   return (
      <div className="personal-content-card content-card">
         {isEditing && (
            <EditPersonalInfoForm
               handlePersonalInfo={handlePersonalInfo}
               handleEditingStatus={handleEditingStatus}
               dataBeingEdited={personalInfo}
            />
         )}
         {!displayInitialForm && (
            <PersonalInfoForm
               handlePersonalInfo={handlePersonalInfo}
               handleDisplayInitialForm={handleDisplayInitialForm}
            />
         )}

         {personalInfo.name !== undefined && (
            <div className="personal-info-display">
               <p>{personalInfo.name}</p>
               <button
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
