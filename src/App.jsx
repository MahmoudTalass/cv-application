import Footer from "./components/Footer";
import Header from "./components/Header";
import ResumeForms from "./components/formComponents/ResumeForms";
import Resume from "./components/resumeComponents/Resume";
import { useState } from "react";

export default function App() {
   const [personalData, setPersonalData] = useState({
      name: "Name",
      email: "example@gmail.com",
      phoneNumber: "555 555-5555",
      location: "city, state",
      id: crypto.randomUUID(),
   });
   const [educationData, setEducationData] = useState([
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
   const [experienceData, setExperienceData] = useState([
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

   function handlePersonalData(data) {
      setPersonalData({ ...data });
   }

   function handleEducationData(data) {
      setEducationData([...educationData, { ...data }]);
   }

   function handleExperienceData(data) {
      setExperienceData([...experienceData, { ...data }]);
   }

   function handleRemoveEducation(id) {
      setEducationData(educationData.filter((data) => data.id !== id));
   }

   function handleRemoveExperience(id) {
      setExperienceData(experienceData.filter((data) => data.id !== id));
   }

   function handleEditEducation(editedData) {
      setEducationData(
         educationData.map((data) => {
            if (data.id === editedData.id) {
               return editedData;
            } else {
               return data;
            }
         })
      );
   }

   function handleEditExperience(editedData) {
      setExperienceData(
         experienceData.map((data) => {
            if (data.id === editedData.id) {
               return editedData;
            } else {
               return data;
            }
         })
      );
   }

   function print() {
      window.print();
   }

   return (
      <div className="page-container">
         <Header />
         <main className="main-content">
            <button onClick={print} className="print-cv-btn">
               Print your CV
            </button>
            <ResumeForms
               handlePersonalData={handlePersonalData}
               handleEducationData={handleEducationData}
               handleExperienceData={handleExperienceData}
               educationData={educationData}
               experienceData={experienceData}
               personalData={personalData}
               handleRemoveEducation={handleRemoveEducation}
               handleRemoveExperience={handleRemoveExperience}
               handleEditEducation={handleEditEducation}
               handleEditExperience={handleEditExperience}
            />
            <Resume
               personalData={personalData}
               educationData={educationData}
               experienceData={experienceData}
            />
         </main>
         <Footer />
      </div>
   );
}
