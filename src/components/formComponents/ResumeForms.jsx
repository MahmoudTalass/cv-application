/* eslint-disable react/prop-types */
import EducationInfoForm from "./EducationInfoForm";
import ExperienceInfoForm from "./ExperienceInfoForm";
import PersonalInfoForm from "./PersonalInfoForm";

export default function ResumeForms({
   handlePersonalInfo,
   handleEducationInfo,
   handleExperienceInfo,
   personalInfo,
   educationInfo,
   experienceInfo,
}) {
   return (
      <section className="forms-container">
         <PersonalInfoForm
            handlePersonalInfo={handlePersonalInfo}
            personalInfo={personalInfo}
         />
         <EducationInfoForm
            handleEducationInfo={handleEducationInfo}
            educationInfo={educationInfo}
         />
         <ExperienceInfoForm
            handleExperienceInfo={handleExperienceInfo}
            experienceInfo={experienceInfo}
         />
      </section>
   );
}
