/* eslint-disable react/prop-types */
export default function PersonalData({ personalData }) {
   return (
      <div className="personal-data-section resume-section">
         <p className="name">{personalData.name}</p>
         <div className="contact-info-container">
            <p>{personalData.location}</p>
            <p>{personalData.email}</p>
            <p>{personalData.phoneNumber}</p>
         </div>
      </div>
   );
}
