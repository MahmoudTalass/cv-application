export default function PersonalInfoForm() {
   return (
      <form className="personalInfoForm form">
         <h2>Personal Details</h2>
         <div className="input-container">
            <label htmlFor="">Name:</label>
            <input type="text" name="name" id="name" />
         </div>
         <div className="input-container">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" />
         </div>
         <div className="input-container">
            <label htmlFor="phone-number">Phone Number:</label>
            <input type="tel" name="phone-number" id="phone-number" />
         </div>
         <div className="input-container">
            <label htmlFor="location">Location:</label>
            <input
               type="text"
               name="location"
               id="location"
               placeholder="city, state"
            />
         </div>
      </form>
   );
}
