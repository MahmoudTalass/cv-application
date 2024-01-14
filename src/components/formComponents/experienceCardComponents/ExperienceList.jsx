/* eslint-disable react/prop-types */
export default function ExperienceList({
   experienceData,
   handleRemoveExperience,
   handleEditingStatus,
   handleDataBeingEdited,
}) {
   return (
      <ul className="data-in-card-list">
         {experienceData.map((data) => {
            return (
               <li key={data.id} className="data-in-card">
                  <div className="card-data-text">
                     <p>{data.position}</p>
                     <p>{data.company}</p>
                  </div>

                  <div className="card-data-control-btns">
                     <button
                        className="remove-data-btn card-data-control-btn"
                        onClick={() => handleRemoveExperience(data.id)}
                     >
                        Remove
                     </button>
                     <button
                        className="edit-data-btn card-data-control-btn"
                        onClick={() => {
                           handleEditingStatus();
                           handleDataBeingEdited(data);
                        }}
                     >
                        Edit
                     </button>
                  </div>
               </li>
            );
         })}
      </ul>
   );
}
