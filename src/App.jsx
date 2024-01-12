import Footer from "./components/Footer";
import Header from "./components/Header";
import ResumeForms from "./components/formComponents/ResumeForms";
import Resume from "./components/resumeComponents/Resume";
import { useState } from "react";

export default function App() {
   const [personalInfo, setPersonalInfo] = useState({});
   const [educationInfo, setEducationInfo] = useState([]);
   const [experienceInfo, setExperienceInfo] = useState([]);

   function handlePersonalInfo(info) {
      setPersonalInfo({ ...info });
   }

   function handleEducationInfo(info) {
      setEducationInfo([...educationInfo, { ...info }]);
   }

   function handleExperienceInfo({
      company,
      position,
      startDate,
      endDate,
      description,
   }) {
      setExperienceInfo([
         ...experienceInfo,
         { company, position, startDate, endDate, description },
      ]);
   }

   return (
      <div className="page-container">
         <Header />
         <main className="main-content">
            <ResumeForms
               handlePersonalInfo={handlePersonalInfo}
               handleEducationInfo={handleEducationInfo}
               handleExperienceInfo={handleExperienceInfo}
               educationInfo={educationInfo}
               experienceInfo={experienceInfo}
            />
            <Resume
               personalInfo={personalInfo}
               educationInfo={educationInfo}
               experienceInfo={experienceInfo}
            />
         </main>
         <Footer />
      </div>
   );
}
