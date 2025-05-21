
const Hero = () => {

  
      return(
        <section className="hero-section section" id="hero">
          
            <div className="hero-container container ">
                  <h1 className="hero-heading">DIGITAL <br/>

                    <span className="hero-span-1 outlined-text">CONSTRUCTION</span><br/>
                    <span className="hero-span-2">AGENCY</span>
              
                  </h1>
                
                <div className="hero-text-container">
                    <p className="hero-statement">
                      We're digital architects, specializing in the construction of modern <span>e-commerce stores</span>,
                       landing pages
                      and mobile apps that help <span>start-ups</span> and growing businesses thrive
                      in the digital world.
                                            
                    </p>
                </div>
                <div className="hero-buttons">
                    <button className="quote-button button"id="quote-button">
                          Get Quote
                    </button>
                    <button className="view-work-button button">
                          View Our Work
                    </button>

                    
                </div>
                <div className="scroll-button">
                    <span className="scroll-text">scroll down</span>
                      <i className="ri-arrow-down-line"></i>
                </div>


            </div>
                
        </section>
      )  
}
export default Hero