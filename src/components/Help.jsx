import ScrollReveal from 'scrollreveal'
import { useEffect } from 'react'
const Help = () => {

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
      })
      
  return(
    <section className ="help-section">
        <div className="help-container container grid">
            <img src="" alt="" />
            <h3 className="help-heading from-left">
                Here's How We Can Help
            </h3>
            <div className="benefits-container">

                <h3 className="benefit-title from-right">Increase Reach</h3>
                <p className="benefit-description from-left">
                    Expand your customer base by creating a platform that's accesible, 
                    24/7.
                </p>

                   <h3 className="benefit-title from-right">Boost Sales</h3>
                <p className="benefit-description from-left">
                    Implement user-friendly designs and optimized checkout processes to increase
                    conversions and revenue.
                </p>

                   <h3 className="benefit-title from-right">Enhance User-Experience</h3>
                <p className="benefit-description from-left">
                    Build an intuitive and seamless shopping experience, making it easy
                    for customers to find and purchase products.
                </p>

                   <h3 className="benefit-title from-right">Secure Transactions</h3>
                <p className="benefit-description from-left">
                    Ensure your customers' data and payment processes are secure and trustworthy, 
                    building confidence in the brand.

                </p>

                   <h3 className="benefit-title from-right">Provide Support</h3>
                <p className="benefit-description from-left">
                    Offer ongoing maintenance, technical support, and update product listing, 
                    offering you flexibility as your inventory grows.
                </p>

                
                   <h3 className="benefit-title from-right">Improve Brand Identity</h3>
                <p className="benefit-description from-left">
                   Develop a site that reflects your brand and engages customers' with personalized
                   shopping experiences.
                </p>

            </div>
        </div>
    </section>
  )
}
export default Help