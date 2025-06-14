import { useState } from "react";

const Header = () => {

      const [menuVisible, setMenuVisible] = useState(false);

      const toggleMenu = ()=> {
        setMenuVisible(prev => !prev);
      };

      const closeMenu = ()=>{
        setMenuVisible(false);
      };





  return(
        <nav className="nav-container">

            <a className="nav-logo-container">
               <img className="logo" src="/logo.webp" loading='lazy' alt="logo"/>
               
            </a>
            
      <div className="nav-menu-container">

          <div className={`nav-menu ${menuVisible ? 'show-menu': ''}`}>

                <h3 className="nav-menu-title">Bullasoft</h3>

                <ul className="nav-list">

                    

                    <li className="nav-list-item" onClick={closeMenu}><a href="#hero">Home</a></li>
                    <li className="nav-list-item" onClick={closeMenu}><a href="#inside">Inside</a></li>
                    <li className="nav-list-item" onClick={closeMenu}><a href="#project-portfolio">Portfolio</a></li>
                    <li className="nav-list-item" onClick={closeMenu}><a href="#help">How We Help</a></li>
                    <li className="nav-list-item" onClick={closeMenu}><a href="#quote-section">Request a Quote</a></li>

                </ul>
                {/*Close icon */}

                <div className="nav-close" onClick={closeMenu}>
                    <i className="ri-close-line"></i>
                </div>
            </div>
      </div>
      <div className="nav-buttons">

            {/*Theme-icon*/}
            <div className="theme-button">
                <i class="ri-moon-line change-theme" id="theme-button"></i>
            </div>
           <button className="nav-toggle" id="nav-toggle" onClick={toggleMenu}>
               <i class="ri-menu-4-line"></i>
           </button>

      </div>
</nav>
  )
}
export default Header