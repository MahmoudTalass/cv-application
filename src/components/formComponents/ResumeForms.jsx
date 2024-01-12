import EducationInfoForm from "./EducationInfoForm";
import ExperienceInfoForm from "./ExperienceInfoForm";
import PersonalInfoForm from "./PersonalInfoForm";

export default function ResumeForms() {
   return (
      <section className="forms-container">
         <PersonalInfoForm />
         <EducationInfoForm />
         <ExperienceInfoForm />
      </section>
   );
}
