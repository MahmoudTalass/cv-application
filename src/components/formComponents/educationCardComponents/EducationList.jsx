/* eslint-disable react/prop-types */
export default function EducationList({
   educationData,
   handleRemoveEducation,
   handleEditingStatus,
   handleDataBeingEdited,
}) {
   return (
      <ul className="data-in-card-list">
         {educationData.map((data) => {
            return (
               <li key={data.id} className="data-in-card">
                  <div className="card-data-text">
                     <p>{data.degree}</p>
                     <p>{data.school}</p>
                  </div>
                  <div className="card-data-control-btns">
                     <button
                        className="remove-data-btn card-data-control-btn"
                        onClick={() => handleRemoveEducation(data.id)}
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
