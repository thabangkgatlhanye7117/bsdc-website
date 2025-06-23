import { Link } from "react-router-dom"
const FootballNostalgia = ()=>{
    return(
        <section className="fn-section">
          <div className="fn-container">
            <Link to='/'>
              <i className="ri-arrow-left-circle-line back-icon"></i>
            </Link>
             <h1 className="fn-heading">
                Indroducing Football Nostalgia.
             </h1>
              <div className="projects-card">
                <div className="project-image">
                  <img src='/fn-logo.png' loading='lazy' alt='football-nostalgia-logo'/>
                </div>
                <div className="project-info">
    
                    <h3 className="project-details">Custom Landing Page, Conversion Optimization</h3>
                    <div className="project-description">
                        <h4>Overview</h4>
                        <p>
                          Football Nostalgia approached us to enhance their online presence with a 
                          high-impact landing page designed to maximize conversions and drive fan 
                          engagement
                        </p>
                        <h4>What We Did</h4>
                        <p>
                          We crafted a custom landing page tailored specifically for Football Nostalgia's 
                          audience.
                        </p>
                        <p>
                          - ⚡Clean, responsive design for mobile and desktop users.
                        </p>
                         <p>
                          - 🎯Conversion-focused layout that guides visitors toward key actions.
                        </p>
                         <p>
                          - 📷Strategic placement of visuals and headlines to trigger emotional connection.
                        </p>
                         <p>
                          - 🚀Fast loading times and performance optimizations to reduce bounce rates.
                        </p>
                        <h4>Outcome</h4>
                        <p>
                          The result is a sleek, professional landing page that reflects Football Nostalgia's 
                          brand identity and is strategically optimized to increase sign-ups, orders, and community
                          involvement.
                        </p>

                    </div>

                    
                    <button className="visit"><a href="https://football-nostalgia.vercel.app">Visit Site</a></button>
                </div>
             </div>
          </div>
        
        </section>
    )
}
export default FootballNostalgia