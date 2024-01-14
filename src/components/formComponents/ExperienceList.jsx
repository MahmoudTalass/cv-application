/* eslint-disable react/prop-types */
export default function ExperienceList({
   experienceInfo,
   handleRemoveExperience,
   handleEditingStatus,
   handleDataBeingEdited,
}) {
   return (
      <ul className="experiences-list">
         {experienceInfo.map((data) => {
            return (
               <li key={data.id} className="education-info-display">
                  <p>{data.position}</p>
                  <p>{data.company}</p>
                  <button onClick={() => handleRemoveExperience(data.id)}>
                     X
                  </button>
                  <button
                     onClick={() => {
                        handleEditingStatus();
                        handleDataBeingEdited(data);
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
