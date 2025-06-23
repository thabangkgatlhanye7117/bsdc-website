import React, {useRef, useState} from 'react';

const RequestQuote = ()=> {
   const form= useRef();
   const  [statusMessage,setStatusMessage]= useState('');
   const [isSuccess, setIsSuccess] = useState(null);

   const sendEmail = (e) =>{
      e.preventDefault();

      emailjs.sendForm(
         
         'service_waxeozq',
         'template_33wh5hw',
         form.current,
         'aK8oOGYOtTaLR24fl',
         
      )
      .then(
         (result)=> {
            console.log(result.text);
            setIsSuccess(true);
            setStatusMessage('Message sent successfully!');
            e.target.reset();

         },
         (error)=>{
            console.log(error.text);
            setIsSuccess(false);
            setStatusMessage('Failed to send message. Please try again.');
         }
      );
   };
  return(

    <section className='quote-section' id="quote-section">
      <div className="quote-container container">
         
          <form className='quote-form' id="quote-form" ref={form} onSubmit={sendEmail}>
            
           
            <div className="form-container">
                <h3 className="quote-form-heading">Request a Quote</h3>
               <span className="form-heading">Your Details:</span>
              <div>
                 <label htmlFor="user-name">Name: </label><br/>
                 <input type="text" className="form-input" id="user-name" name='user-name'  required/><br/>
              </div>

              <div>
                 <label htmlFor="user-surname">Surname: </label><br/>
                 <input type="text" className="form-input" id="user-surname" name='user-surname' required /><br/>
              </div>

              <div>
                 <label htmlFor="user-email">Email: </label><br/>
                 <input type="email" className="form-input" id="user-email" name='user-email' required /><br/>
              </div>

              <div>
                 <label htmlFor="user-number">Phone: </label><br/>
                 <input type="number" className="form-input" id="user-number" name='user-number' required /><br/>
              </div>
            </div>

          <div className='form-radio-buttons'>

            <span className="form-heading">I am looking for/to</span>
            <div>
               <input type="radio" id="option" name='option' value='Landing Page'/>
               <label htmlFor="">A clean and simple website to tell people who i am, 
                              what i offer and how they can contact me 
               </label>
            </div>
            <div>
               <input type="radio" id="option" name='option' value='WhatsApp Intergrated Store'/>
               <label htmlFor="">Showcase my products online, without online paymnets, with a whataspp button. 
                               
               </label>
            </div>

            <div>
               <input type="radio" id="option" name='option' value='e-Commerce store'/>
               <label htmlFor="">Sell my products online, with online payments 
                              
               </label>
            </div>

            <div>
               <input type="radio" id="option" name='option' value='Advance e-Commerce Store' />
               <label htmlFor="">A fully customized website to meet my business needs 
                              
               </label>
            </div>
            <button type='submit' className="form-submit-button">Submit</button>
        </div>
        
          </form>
            {statusMessage && (<p style={{color: isSuccess ? 'green' : 'red' , marginTop: '10px'}}>
            {statusMessage}</p>)} 
      </div>
    </section>

  )
}
export default RequestQuote