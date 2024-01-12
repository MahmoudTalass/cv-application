/* eslint-disable react/prop-types */
export default function ExperienceInfo({ experienceInfo }) {
   return (
      <div className="experience-info-section resume-section">
         <p className="section-heading">EXPERIENCE</p>
         <div className="line-break"></div>
         {experienceInfo.map((info) => {
            return (
               <div className="experience-info-container" key={info.id}>
                  <div className="line-1-container">
                     <p className="company">{info.company}</p>
                     <p className="location">{info.location}</p>
                  </div>
                  <div className="line-2-container">
                     <p className="position">{info.position}</p>
                     <p className="start-end-dates">
                        {info.startDate} - {info.endDate}
                     </p>
                  </div>
                  <div className="line-2-container">
                     <p className="position">{info.position}</p>
                     <p className="start-end-dates">
                        {info.startDate} - {info.endDate}
                     </p>
                  </div>
                  <p className="job-description">{info.description}</p>
               </div>
            );
         })}
      </div>
   );
}
