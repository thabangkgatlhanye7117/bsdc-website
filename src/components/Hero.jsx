import ScrollReveal from 'scrollreveal'
import { useEffect } from 'react'
const Hero = () => {

  useEffect(()=>{
    ScrollReveal().reveal('.from-left', {
      origin:'left',
      distance:'50px',
      duration:1500,
    });

    ScrollReveal().reveal('.from-right', {
      origin:'right',
      distance:'50px',
      duration:1500,
    });

    ScrollReveal().reveal('.from-top', {
      origin:'top',
      distance:'50px',
      duration:1500,
    });
    ScrollReveal().reveal('.from-bottom', {
      origin:'bottom',
      distance:'50px',
      duration:1500,
    });

  },[])
  
      return(
        <section className="hero-section " id="hero">
          
            <div className="hero-container container ">

                  <span className="social-kicker">
                    WElCOME TO BULLASOFT.
                  </span>
                  <h3 className="hero-heading from-left">
                      TURNING <span>STARTUPS</span> INTO STANDOUTS<br/>
                      ONE <span>DIGITAL</span> BUILD AT A TIME.
              
                  </h3>
                
                <div className="hero-text-container">
                    <p className="hero-statement from-right">
                    We're the architects of the digital world<br/>
                    constructing the future of digital store and learning
                    platforms that boost reach and sales.
                                            
                    </p>
                </div>
                <div className="hero-buttons from-left">
                    <button className="quote-button button"id="quote-button">
                          Request Quote
                    </button>
                    <button className="view-work-button button">
                          Our work
                    </button>

                    
                </div>
                <a href='#inside-container' className="scroll-button from-bottom">
                    <span className="scroll-text">scroll down</span>
                     <div className='scroll-arrow'>
                        <i className="ri-arrow-down-line "></i>
                     </div>
                      
                </a>

            </div>
             {/*<div className="hero-image-container" id='hero-image-container'>
                   <img src='/ecom-sign.webp' width={'100%'} height={'180px'} alt='ecommerce-sign'/>
              </div>*/}
                
        </section>
      )  
}
export default Hero