import { Link } from "react-router-dom"
const Mperceptions = ()=>{
    return(
        <section className="fn-section">
          <div className="fn-container">
            <Link to='/'>
              <i className="ri-arrow-left-circle-line back-icon"></i>
            </Link>
             <h1 className="fn-heading">
                Introducing Mperception.
             </h1>
              <div className="projects-card">
                <div className="project-image">
                  <img src='/mperceptions-logo.webp' loading='lazy' alt='mpeceptions-logo'/>
                </div>
                <div className="project-info">
    
                    <h3 className="project-details">Whatsapp intergrated webapp, Conversion Optimization</h3>
                    <div className="project-description">
                        <h4>Overview</h4>
                        <p>
                          Mperceptions approached us to enhance their online presence with a 
                          high-impact Whatsapp intergated webapp designed to maximize conversions and drive fan 
                          engagement
                        </p>
                        <h4>What We Did</h4>
                        <p>
                          We crafted a custom webapp tailored specifically for Mperceptions 
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
                          The result is a sleek, professional landing page that reflects Mperceptions 
                          brand identity and is strategically optimized to increase sign-ups, orders, and community
                          involvement.
                        </p>

                    </div>

                    
                    <button className="visit"><a href="https://mperceptions.vercel.app">Visit Site</a></button>
                </div>
             </div>
          </div>
        
        </section>
    )
}
export default Mperceptions