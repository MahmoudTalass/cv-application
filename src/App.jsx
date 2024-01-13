import Footer from "./components/Footer";
import Header from "./components/Header";
import ResumeForms from "./components/formComponents/ResumeForms";
import Resume from "./components/resumeComponents/Resume";
import { useState } from "react";

export default function App() {
   const [personalInfo, setPersonalInfo] = useState({
      name: "Mahmoud",
      email: "mahmoud@gmail.com",
      phoneNumber: "555 555-5555",
      location: "College Park, MD",
      id: crypto.randomUUID(),
   });
   const [educationInfo, setEducationInfo] = useState([
      {
         school: "University of Maryland",
         degree: "Computer Science",
         city: "College Park",
         state: "MD",
         graduationDate: "04/2024",
         id: crypto.randomUUID(),
      },
      {
         school: "Harvard College",
         degree: "Quantum Physics",
         city: "Cambridege",
         state: "MA",
         graduationDate: "12/2018",
         id: crypto.randomUUID(),
      },
   ]);
   const [experienceInfo, setExperienceInfo] = useState([
      {
         company: "google",
         position: "Front-end engineer",
         startDate: "09/2022",
         endDate: "Present",
         description:
            "Developed a responsive website UI using HTML, CSS, and JavaScript that reduced overall page load speed by 15% Enhanced the usability of existing applications by applying the latest accessibility standards and best practices Collaborated with project managers to successfully deliver projects on time, resulting in an increase in organizational efficiency",
         id: crypto.randomUUID(),
      },
      {
         company: "blue shoes",
         position: "software engineer",
         startDate: "10/2010",
         endDate: "08/2022",
         description:
            "Spearheaded the development of a large-scale software system to meet regulatory standards, resulting in a 25% improvement in customer satisfaction Upgraded a critical server-side solution with automation and optimized code to enhance security and process speed by 27%",
         id: crypto.randomUUID(),
      },
   ]);

   function handlePersonalInfo(info) {
      setPersonalInfo({ ...info });
   }

   function handleEducationInfo(info) {
      setEducationInfo([...educationInfo, { ...info }]);
   }

   function handleExperienceInfo(info) {
      setExperienceInfo([...experienceInfo, { ...info }]);
   }

   function handleRemoveEducation(id) {
      setEducationInfo(educationInfo.filter((info) => info.id !== id));
   }

   function handleRemoveExperience(id) {
      setExperienceInfo(experienceInfo.filter((info) => info.id !== id));
   }

   function handleEditEducation(info) {
      setEducationInfo(
         educationInfo.map((data) => {
            if (data.id === info.id) {
               return info;
            } else {
               return data;
            }
         })
      );
   }

   function handleEditExperience(info) {
      setExperienceInfo(
         experienceInfo.map((data) => {
            if (data.id === info.id) {
               return info;
            } else {
               return data;
            }
         })
      );
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
               personalInfo={personalInfo}
               handleRemoveEducation={handleRemoveEducation}
               handleRemoveExperience={handleRemoveExperience}
               handleEditEducation={handleEditEducation}
               handleEditExperience={handleEditExperience}
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
