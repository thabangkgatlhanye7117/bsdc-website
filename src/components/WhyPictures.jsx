import ScrollReveal from 'scrollreveal'
import { useEffect } from 'react'
const WhyPictures = ()=>{

   useEffect(()=>{
          ScrollReveal().reveal('.from-left', {
            origin:'left',
            distance:'80px',
            duration:1500,
          });
      
          ScrollReveal().reveal('.from-right', {
            origin:'right',
            distance:'80px',
            duration:1500,
          });
      
          ScrollReveal().reveal('.from-top', {
            origin:'top',
            distance:'80px',
            duration:1500,
          });
          ScrollReveal().reveal('.from-bottom', {
            origin:'bottom',
            distance:'80px',
            duration:1500,
          });
        })

  return(
    <section className="pictures-section">
          <div className="pictures-container">
            <div className='heading-container from-bottom'>
            <i className="ri-pages-line"></i>
            <h2 className="pictures-heading">
              Why rely on foot customers when people are buying online!
            </h2>
            </div>
            <div className="ecommerce-pictures">

              <div className='img-1-div from-left'>
                <img src="/ecom-laptop.webp" loading='lazy' height={'100%'}/>
              </div>

              <div className="img-2-3 ">
                <img className='from-right'  loading='lazy' src="/e-shopping.webp"/>
                <img className='from-bottom'  loading='lazy' src="/online-store.webp"/>
              </div>
              
            </div>
          </div>
    </section>
  )
}
export default WhyPictures