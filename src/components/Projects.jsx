import ScrollReveal from 'scrollreveal'
import { useEffect } from 'react'
const Projects = () => {

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
      <section className="projects-section " id='project-portfolio'>
          <div className="projects-container">
             <h3 className="projects-heading from-bottom">
                PROJECTS PORTFOLIO
             </h3>
             <div className="projects-card from-bottom">
                <div className="project-image">
                  <img src='/fn-logo.png' loading='lazy' alt='football-nostalgia-logo'/>
                </div>
                <div className="project-info">
                    <h3 className="project-title">Football Nostalgia</h3>
                    <p className="project-details">Custom Landing Page, Conversion Optimization</p>
                    <button className="read-more">Read More</button>
                </div>
             </div>
          </div>
      </section>
   )
}
export default Projects