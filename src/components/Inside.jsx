import ScrollReveal from 'scrollreveal'
import { useEffect } from 'react'
const Inside = () => {
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

  return (
      <section className="inside-section " id="inside">
            <div className="inside-container" id="inside-container">

                <div className="inside-image from-bottom" id="inside-image">
                    <h3 className="inside-image-text">
                      POWERING DIGITAL COMMERCE
                    </h3>
                </div>
                <h2 className="inside-heading from-bottom">
                      INSIDE <span className="outlined-text">BULLA</span>SOFT
                </h2>
                <div className="inside-column from-bottom">
                      
                      <i className="ri-lightbulb-flash-line"></i>
                      <span>Why</span>
                      <p className="column-description">
                       We believe African start-ups deserve digital platforms that turn visitors
                       into customers. Our goal is to make it easy for anyone to launch and grow.
                      </p>
                </div>
                <div className="inside-column from-bottom">
                      
                      <i className="ri-macbook-line"></i>
                      <span>What</span>
                      <p className="column-description">
                      Build high-converting eCommerce stores, mobile apps, landing pages, and
                      offer hosting services tailored to your business goals
                      </p>
                </div>
                <div className="inside-column from-bottom">
                      
                      <i className="ri-settings-line"></i>
                      <span>How</span>
                      <p className="column-description">
                      Using modern design, clean code, and intuitive UX, we create websites that are
                      easy to navigate, fast to load, and optimized for conversions.

                      </p>
                </div>
            </div>
      
      
      </section>
  )
}

export default Inside