const Hero = () => {
      return(
        <section className="hero-section" id="hero">
          
                <div className="hero-container container grid">
                  <h1 className="hero-text">GO DIGITAL NOW!</h1>
                </div>
                <div className="hero-text-container">
                    <p className="hero-question">Want to launch your business<br/>
                                            <span> ONLINE?</span><br/> We build powerful<br/>
                                            <span> E-COMMERCE STORES!</span>
                          
                    </p>
                </div>
                <div className="hero-description-container">

                     <p className="hero-description">We're Digital Architects building E-COMMERCE 
                        websites to help start-ups and growing businesses
                        thrive in the digital world.
                     </p>
                      <button className="hero-button button">
                        Free Consultation
                      </button>
                </div>
                <button className="hero-scroll-button">
                  <i class="ri-arrow-down-s-line"></i>
                </button>
                
        </section>
      )  
}
export default Hero