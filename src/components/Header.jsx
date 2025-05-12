

const Header = () => {


  return(
        <nav className="nav-container">

            <a className="nav-logo-container">
               <img className="logo" src="public/logo.webp" loading='lazy' alt="logo"/>
               <img className="logo-name" src="public/logo-name.webp"  loading='lazy' alt="logo-name"/>
            </a>
            
      <div className="nav-menu-container">

          <div className="nav-menu">

                <h3 className="nav-menu-title">Bullasoft</h3>

                <ul className="nav-list">

                    

                    <li className="nav-list-item">Home</li>
                    <li className="nav-list-item">What We Do</li>
                    <li className="nav-list-item">Services</li>
                    <li className="nav-list-item">Projects</li>
                    <li className="nav-list-item">Contact Us</li>

                </ul>
                {/*Close icon */}

                <div className="toggle-button">
                    <i className="ri-menu-4-line"></i>
                </div>
            </div>
      </div>
      <div className="nav-buttons">

            {/*Theme-icon*/}
            <div className="theme-button">
                <i class="ri-moon-line change-theme" id="theme-button"></i>
            </div>
           <div className="toggle-button">
               <i class="ri-menu-4-line"></i>
           </div>

      </div>
</nav>
  )
}
export default Header