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
        <section className="hero-section section" id="hero">
          
            <div className="hero-container container ">
                  <h1 className="hero-heading from-left">DIGITAL <br/>

                    <span className="hero-span-1 outlined-text">CONSTRUCTION</span><br/>
                    <span className="hero-span-2">AGENCY</span>
              
                  </h1>
                
                <div className="hero-text-container">
                    <p className="hero-statement from-right">
                      We're digital architects, specializing in the construction of modern <span>e-commerce stores</span>,
                       landing pages
                      and mobile apps that help <span>start-ups</span> and growing businesses thrive
                      in the digital world.
                                            
                    </p>
                </div>
                <div className="hero-buttons from-left">
                    <button className="quote-button button"id="quote-button">
                          Get Quote
                    </button>
                    <button className="view-work-button button">
                          View Our Work
                    </button>

                    
                </div>
                <a href='#inside-image' className="scroll-button from-bottom">
                    <span className="scroll-text">scroll down</span>
                      <i className="ri-arrow-down-line"></i>
                </a>


            </div>
                
        </section>
      )  
}
export default Hero