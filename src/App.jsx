import Footer from "./components/Footer";
import Header from "./components/Header";
import ResumeForms from "./components/formComponents/ResumeForms";
import Resume from "./components/resumeComponents/Resume";

export default function App() {
   return (
      <div className="page-container">
         <Header />
         <main className="main-content">
            <ResumeForms />
            {/* <Resume /> */}
         </main>
         <Footer />
      </div>
   );
}
