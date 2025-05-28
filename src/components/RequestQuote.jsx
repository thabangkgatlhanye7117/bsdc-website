const RequestQuote = ()=> {
  return(

    <section className='quote-section'>
      <div className="quote-container container">
         
          <form className='quote-form' id="quote-form">
            
           
            <div className="form-container">
                <h3 className="quote-form-heading">Request a Quote</h3>
               <span className="form-heading">Your Details:</span>
              <div>
                 <label htmlFor="user-name">Name: </label><br/>
                 <input type="text" className="user-name" id="user-name" /><br/>
              </div>

              <div>
                 <label htmlFor="user-surname">Surname: </label><br/>
                 <input type="text" className="user-surname" id="user-surname" /><br/>
              </div>

              <div>
                 <label htmlFor="user-email">Email: </label><br/>
                 <input type="email" className="user-email" id="user-email" /><br/>
              </div>

              <div>
                 <label htmlFor="user-number">Phone: </label><br/>
                 <input type="number" className="user-number" id="user-number" /><br/>
              </div>
            </div>

          <div className='form-radio-buttons'>

            <span>I am looking for/to</span>
            <div>
               <input type="radio" id="option" />
               <label htmlFor="">A clean and simple website to tell people who i am, 
                              what i offer and how they can contact me 
               </label>
            </div>
            <div>
               <input type="radio" id="option" />
               <label htmlFor="">A clean and simple website to tell people who i am, 
                              what i offer and how they can contact me 
               </label>
            </div>

            <div>
               <input type="radio" id="option" />
               <label htmlFor="">A clean and simple website to tell people who i am, 
                              what i offer and how they can contact me 
               </label>
            </div>

            <div>
               <input type="radio" id="option" />
               <label htmlFor="">A clean and simple website to tell people who i am, 
                              what i offer and how they can contact me 
               </label>
            </div>
            <button className="form-submit-button">Submit</button>
        </div>
          </form>
      </div>
    </section>

  )
}
export default RequestQuote