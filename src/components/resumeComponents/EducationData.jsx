/* eslint-disable react/prop-types */
export default function EducationData({ educationData }) {
   return (
      <div className="education-data-section resume-section">
         <p className="section-heading">EDUCATION</p>
         <div className="line-break"></div>
         <div className="education-data-list resume-data-list">
            {educationData.map((data) => {
               return (
                  <div
                     className="education-data-container resume-data-container"
                     key={data.id}
                  >
                     <div className="line-1-container">
                        <p className="school-name">{data.school}</p>
                        <p className="location">
                           {data.city}, {data.state}
                        </p>
                     </div>
                     <div className="line-2-container">
                        <p className="degree">{data.degree}</p>
                        <p className="graduation-date">{data.graduationDate}</p>
                     </div>
                  </div>
               );
            })}
         </div>
      </div>
   );
}
