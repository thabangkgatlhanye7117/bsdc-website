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
                          <span>Problem</span>
                          <p>
                            Startups and schools often lack an online presence due to cost, limited
                            digital knowledge, and not realizing the impact an eCommerce store or digital school
                            can have on their growth and engagement. 
                          </p>
                       </div>

                   </div>
                
                   <div className="inside-column glass-card from-bottom">
                      
                      <i className="ri-macbook-line"></i>
                      <div className="column-description">
                          <span>Solution</span>
                          <p >
                            Bullasoft helps startups and educational institutions go digital with affordable, high-quality
                            websites, online stores, and portals__built to boost visibilty, efficiency, and trust.
                            
                          </p>
                      </div>
                   </div>
                   <div className="inside-column glass-card from-bottom">
                      
                      <i className="ri-settings-line"></i>
                     <div className="column-description">
                         <span>Method</span>
                          <p>
                            We design and build fast, modern websites using custom tools__offering hosting, support,
                            and everything needed to launch and grow online.
                        
                          </p>
                     </div>
                   </div>

                </div>
            </div>
      
            <img src='/ecom-sign.webp' width={'100%'}/>
             <img className='from-bottom'  loading='lazy' src="/shopify-partner-logo.webp"/>
      </section>
  )
}

export default Inside