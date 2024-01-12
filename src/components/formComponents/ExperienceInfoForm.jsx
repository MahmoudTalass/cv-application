export default function ExperienceInfoForm() {
   return (
      <form className="personalInfoForm form">
         <h2>Experience:</h2>
         <div className="input-container">
            <label htmlFor="company">Company:</label>
            <input type="text" name="company" id="company" />
         </div>
         <div className="input-container">
            <label htmlFor="position-title">Position Title:</label>
            <input type="text" name="position-title" id="position-title" />
         </div>
         <div className="start-end-date-container">
            <div className="input-container">
               <label htmlFor="start-date">Start Date</label>
               <input
                  type="text"
                  name="start-date"
                  id="start-date"
                  maxLength={7}
                  placeholder="MM/YYYY"
               />
            </div>
            <div className="input-container">
               <label htmlFor="end-date">End Date</label>
               <input
                  type="text"
                  name="end-date"
                  id="end-date"
                  maxLength={7}
                  placeholder="MM/YYYY"
               />
            </div>
         </div>
         <div className="input-container">
            <label htmlFor="description">Description</label>
            <textarea
               name="description"
               id="description"
               cols="30"
               rows="10"
            ></textarea>
         </div>

         <button type="submit">Submit</button>
      </form>
   );
}
