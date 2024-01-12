/* eslint-disable react/prop-types */
export default function EducationInfo({ educationInfo }) {
   return (
      <div className="education-info-section resume-section">
         <p className="section-heading">EDUCATION</p>
         <div className="line-break"></div>
         {educationInfo.map((info) => {
            <div className="education-info-container" key={info.id}>
               <div className="line-1-education">
                  <p className="school-name">{info.school}</p>
                  <p className="location">
                     {info.city}, {info.state}
                  </p>
               </div>
               <div className="line-2-eduation">
                  <p className="degree">{info.degree}</p>
                  <p className="graduation-date">{info.graduationDate}</p>
               </div>
            </div>;
         })}
      </div>
   );
}
