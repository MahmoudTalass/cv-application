/* eslint-disable react/prop-types */
export default function EducationData({ educationData }) {
   return (
      <div className="education-data-section resume-section">
         <p className="section-heading">EDUCATION</p>
         <div className="line-break"></div>
         {educationData.map((data) => {
            return (
               <div className="education-data-container" key={data.id}>
                  <div className="line-1-education">
                     <p className="school-name">{data.school}</p>
                     <p className="location">
                        {data.city}, {data.state}
                     </p>
                  </div>
                  <div className="line-2-eduation">
                     <p className="degree">{data.degree}</p>
                     <p className="graduation-date">{data.graduationDate}</p>
                  </div>
               </div>
            );
         })}
      </div>
   );
}
