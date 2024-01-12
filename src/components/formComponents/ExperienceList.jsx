/* eslint-disable react/prop-types */
export default function ExperienceList({ experienceInfo }) {
   return (
      <ul className="experiences-list">
         {experienceInfo.map((info) => {
            return (
               <li key={info.id} className="education-info-display">
                  <p>{info.position}</p>
                  <p>{info.company}</p>
               </li>
            );
         })}
      </ul>
   );
}
