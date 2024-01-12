/* eslint-disable react/prop-types */
import EducationInfo from "./EducationInfo";
import ExperienceInfo from "./ExperienceInfo";
import PersonalInfo from "./PersonalInfo";

export default function Resume({
   personalInfo,
   educationInfo,
   experienceInfo,
}) {
   return (
      <section className="resume-container">
         <PersonalInfo personalInfo={personalInfo} />
         <EducationInfo educationInfo={educationInfo} />
         <ExperienceInfo experienceInfo={experienceInfo} />
      </section>
   );
}
