/* eslint-disable react/prop-types */
import EducationInfoForm from "./EducationInfoForm";
import ExperienceInfoForm from "./ExperienceInfoForm";
import PersonalInfoForm from "./PersonalInfoForm";

export default function ResumeForms({
   handlePersonalInfo,
   handleEducationInfo,
   handleExperienceInfo,
   experienceInfo,
}) {
   return (
      <section className="forms-container">
         <PersonalInfoForm handlePersonalInfo={handlePersonalInfo} />
         <EducationInfoForm handleEducationInfo={handleEducationInfo} />
         <ExperienceInfoForm
            handleExperienceInfo={handleExperienceInfo}
            experienceInfo={experienceInfo}
         />
      </section>
   );
}
