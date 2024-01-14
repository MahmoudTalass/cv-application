/* eslint-disable react/prop-types */
export default function ExperienceData({ experienceData }) {
   return (
      <div className="experience-data-section resume-section">
         <p className="section-heading">EXPERIENCE</p>
         <div className="line-break"></div>
         <div className="experience-data-list resume-data-list">
            {experienceData.map((data) => {
               return (
                  <div
                     className="experience-data-container resume-data-container"
                     key={data.id}
                  >
                     <div className="line-1-container">
                        <p className="company">{data.company}</p>
                        <p className="location">{data.location}</p>
                     </div>
                     <div className="line-2-container">
                        <p className="position">{data.position}</p>
                        <p className="start-end-dates">
                           {data.startDate} - {data.endDate}
                        </p>
                     </div>
                     <p className="job-description">{data.description}</p>
                  </div>
               );
            })}
         </div>
      </div>
   );
}
