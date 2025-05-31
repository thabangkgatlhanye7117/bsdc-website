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

                  
                  <h1 className="hero-heading from-left">Digital <br/>

                    <span className="hero-span-1 outlined-text">Construction</span><br/>
                    {/*<span className="hero-span-2">Agency</span>*/}
              
                  </h1>
                
                <div className="hero-text-container">
                    <p className="hero-statement from-right">
                      <span>DIGITAL ARCHITECTS</span>, specializing in the construction of modern <span>E-COMMERCE STORES</span>,
                      that help <span>START-UPS</span> and growing businesses thrive
                      in the <span>DIGITAL WORLD.</span>
                                            
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
                <a href='#hero-image-container' className="scroll-button from-bottom">
                    <span className="scroll-text">scroll down</span>
                      <i className="ri-arrow-down-line"></i>
                </a>

            </div>
             <div className="hero-image-container" id='hero-image-container'>
                   <img src='/ecom-sign.webp' width={'100%'} height={'180px'} alt='ecommerce-sign'/>
              </div>
                
        </section>
      )  
}
export default Hero