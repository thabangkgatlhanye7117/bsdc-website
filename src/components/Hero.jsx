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
                    WELCOME TO BULLASOFT.
                  </span>
                  <h3 className="hero-heading from-left">
                      WE BUILD STORES THAT SELL<br/> 
                      LAUNCH. SELL. SCALE.
                    
              
                  </h3>
                
                <div className="hero-text-container">
                    <p className="hero-statement from-right">
                      Design, development, maintenance, and
                      AI-driven digital marketing — everything you need to grow online.
                                            
                    </p>
                </div>
                <div className="hero-buttons from-left">
                    <a href='#quote-section' className="quote-button button"id="quote-button">
                          Request Quote
                    </a>
                    <a href='#project-portfolio' className="view-work-button button">
                          Our work
                    </a>

                    
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