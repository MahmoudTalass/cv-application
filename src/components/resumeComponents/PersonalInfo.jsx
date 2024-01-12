export default function PersonalInfo({ personalInfo }) {
   return (
      <div className="personal-info-section resume-section">
         <p>{personalInfo.name}</p>
         <div className="contact-info-container">
            <p>{personalInfo.location}</p>
            <p>{personalInfo.email}</p>
            <p>{personalInfo.phoneNumber}</p>
         </div>
      </div>
   );
}
