/* eslint-disable react/prop-types */
export default function EducationList({
   educationData,
   handleRemoveEducation,
   handleEditingStatus,
   handleDataBeingEdited,
}) {
   return (
      <ul className="education-list">
         {educationData.map((data) => {
            return (
               <li key={data.id} className="education-data-display">
                  <p>{data.degree}</p>
                  <p>{data.school}</p>
                  <button onClick={() => handleRemoveEducation(data.id)}>
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
