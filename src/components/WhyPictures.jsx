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

    <section className= "pictures-section">
          <div className="pictures-container">
            <div className='heading-container from-bottom'>
            <i className="ri-pages-line"></i>
            <h2 className="pictures-heading">
              Why rely on foot traffic when you can sell online?
            </h2>
            </div>
            <div className="ecommerce-pictures">

                <img src="/ecom-laptop.webp" className='from-left'loading='lazy'/>
                <img className='from-right'  loading='lazy' src="/e-shopping.webp"/>
                <img className='from-bottom'  loading='lazy' src="/online-store.webp"/>
              
            </div>
          </div>
    </section>
  )
}
export default WhyPictures