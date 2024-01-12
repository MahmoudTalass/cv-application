export default function EducationInfoForm() {
   return (
      <form className="personalInfoForm form">
         <h2>Education:</h2>
         <div className="input-container">
            <label htmlFor="degree">Degree:</label>
            <input type="text" name="degree" id="degree" />
         </div>
         <div className="input-container">
            <label htmlFor="school">School:</label>
            <input type="text" name="school" id="school" />
         </div>
         <div className="input-container">
            <label htmlFor="city">City:</label>
            <input type="text" name="city" id="city" />
         </div>
         <div className="input-container">
            <label htmlFor="state">State:</label>
            <input type="text" name="state" id="state" />
         </div>
         <div className="input-container">
            <label htmlFor="graduation-date">Graduation Date:</label>
            <input
               type="text"
               name="graduation-date"
               id="graduation-date"
               maxLength={7}
               placeholder="MM/YYYY"
            />
         </div>
         <button type="submit">Submit</button>
      </form>
   );
}
