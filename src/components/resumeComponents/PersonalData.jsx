/* eslint-disable react/prop-types */
export default function PersonalData({ personalData }) {
   return (
      <div className="personal-Data-section resume-section">
         <p>{personalData.name}</p>
         <div className="contact-Data-container">
            <p>{personalData.location}</p>
            <p>{personalData.email}</p>
            <p>{personalData.phoneNumber}</p>
         </div>
      </div>
   );
}
