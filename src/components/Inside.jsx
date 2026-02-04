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
                <h3 className="inside-heading from-bottom">
                      Inside Bullasoft
                </h3>
                <div className='inside-columns-container'>

                   <div className="inside-column  glass-card from-bottom">
                      
                       <i className="ri-lightbulb-flash-line"></i>
                       <div className="column-description">
                          <span>Your Business Is Online — But Not Working</span>
                          <p>
                              Many businesses have websites or social pages, but they don’t attract traffic, generate leads, or convert visitors into customers. Slow sites, poor design, no clear messaging,
                               and no digital strategy mean lost sales every day. 
                          </p>
                       </div>

                   </div>
                
                   <div className="inside-column glass-card from-bottom">
                      
                      <i className="ri-macbook-line"></i>
                      <div className="column-description">
                          <span>We Build Digital Systems That Grow Businesses</span>
                          <p >
                              Bullasoft designs and develops high-performance websites and eCommerce stores that are built to convert.
                               We don’t just create websites — we build complete digital systems that help customers find you, trust you,
                                and take action.
                            
                          </p>
                      </div>
                   </div>
                   <div className="inside-column glass-card from-bottom">
                      
                      <i className="ri-settings-line"></i>
                     <div className="column-description">
                         <span>Design. Build. Maintain. Market.</span>
                          <p>
                              We handle the full digital journey: conversion-focused design,
                               fast and secure development, reliable hosting and maintenance, and AI-powered digital marketing. This means your business stays online, optimized,
                               and growing — without technical stress.
                        
                          </p>
                     </div>
                   </div>

                </div>
            </div>
      
            <img src='/ecom-sign.webp' width={'100%'}/>
             <img className='shopify-logo'  loading='lazy' src="/shopify-partner-logo.webp"/>
      </section>
  )
}

export default Inside