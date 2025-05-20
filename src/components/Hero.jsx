
const Hero = () => {

   /* const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true // Animations repeat
})
sr.reveal(`.hero-heading`, {origin:'right'})
sr.reveal(`.hero-text-container`, {origin:'left'})
sr.reveal(`hero-buttons`, {interval: 100})*/
      return(
        <section className="hero-section section" id="hero">
          
            <div className="hero-container container grid">
                  <h1 className="hero-heading">Digital Construction<br/><span>Agency</span></h1>
                
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
                <div className="hero-image">
                    <h3 className="hero-image-text">
                      POWERING DIGITAL COMMERCE
                    </h3>
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