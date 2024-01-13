/* eslint-disable react/prop-types */
export default function ExperienceList({
   experienceInfo,
   handleRemoveExperience,
   handleDisplayEditForm,
   setInfoBeingEdited,
}) {
   return (
      <ul className="experiences-list">
         {experienceInfo.map((info) => {
            return (
               <li key={info.id} className="education-info-display">
                  <p>{info.position}</p>
                  <p>{info.company}</p>
                  <button onClick={() => handleRemoveExperience(info.id)}>
                     X
                  </button>
                  <button
                     onClick={() => {
                        handleDisplayEditForm("experienceSection");
                        setInfoBeingEdited(info, "experienceInfo");
                     }}
                  >
                     Edit
                  </button>
               </li>
            );
         })}
      </ul>
   );
}
