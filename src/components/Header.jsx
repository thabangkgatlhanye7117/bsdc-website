import { useState } from "react";
import { Link } from "react-router-dom";

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
               <img className="logo" src="/new-logo.png" loading='lazy' alt="logo"/>
               
            </a>
            
      <div className="nav-menu-container">

          <div className={`nav-menu ${menuVisible ? 'show-menu': ''}`}>

                <Link to="/"><h3 className="nav-menu-title">Bullasoft</h3></Link>

                <ul className="nav-list">

                    

                    <Link to="/#hero"><li className="nav-list-item" onClick={closeMenu}><a href="#hero">Home</a></li></Link>
                     <Link to="/#inside"><li className="nav-list-item" onClick={closeMenu}><a href="#inside">Inside</a></li></Link>
                     <Link to="/#project-portfolio"><li className="nav-list-item" onClick={closeMenu}><a href="#project-portfolio">Portfolio</a></li></Link>
                     <Link to="/#help"><li className="nav-list-item" onClick={closeMenu}><a href="#help">How We Help</a></li></Link>
                     <Link to="/#quote-section"><li className="nav-list-item" onClick={closeMenu}><a href="#quote-section">Request a Quote</a></li></Link>

                </ul>
                {/*Close icon */}

                <div className="nav-close" onClick={closeMenu}>
                    <i className="ri-close-line"></i>
                </div>
            </div>
      </div>
      <div className="nav-buttons">

            {/*Theme-icon*/}
           
           <button className="nav-toggle" id="nav-toggle" onClick={toggleMenu}>
                <span  className="menu-span">menu</span>
               <i class="ri-menu-4-line"></i>
             
           </button>

      </div>
</nav>
  )
}
export default Header