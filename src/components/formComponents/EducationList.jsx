/* eslint-disable react/prop-types */
export default function EducationList({
   educationInfo,
   handleRemoveEducation,
}) {
   return (
      <ul className="education-list">
         {educationInfo.map((info) => {
            return (
               <li key={info.id} className="education-info-display">
                  <p>{info.degree}</p>
                  <p>{info.school}</p>
                  <button onClick={() => handleRemoveEducation(info.id)}>
                     X
                  </button>
               </li>
            );
         })}
      </ul>
   );
}
