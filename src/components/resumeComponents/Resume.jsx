import EducationInfo from "./EducationInfo";
import ExperienceInfo from "./ExperienceInfo";
import PersonalInfo from "./PersonalInfo";

export default function Resume() {
   return (
      <section className="resume-container">
         <PersonalInfo />
         <EducationInfo />
         <ExperienceInfo />
      </section>
   );
}
