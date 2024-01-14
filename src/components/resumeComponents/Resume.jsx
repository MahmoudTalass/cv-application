/* eslint-disable react/prop-types */
import EducationData from "./EducationData";
import ExperienceData from "./ExperienceData";
import PersonalData from "./PersonalData";

export default function Resume({
   personalData,
   educationData,
   experienceData,
}) {
   return (
      <section className="resume-container">
         <PersonalData personalData={personalData} />
         <EducationData educationData={educationData} />
         <ExperienceData experienceData={experienceData} />
      </section>
   );
}
