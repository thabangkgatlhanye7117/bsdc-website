import { useState } from "react";

const Header = () => {

  const [isActive, setIsActive] = useState(false);
    
/*SHOW MENU*/ 
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

/*Menu Show*/

const menuShow = ()=> {
  
     navMenu.classList.add('show-menu')
   }


/*Menu Hidden*/

if(navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

/*Remove mobile menu*/

const navLink = document.querySelectorAll(".nav-link");

const linkAction = () =>{
  const  navMenu = document.getElementById('nav-menu');
  /*Remove the menu when link is clicked */
  navMenu.classList.remove('show-menu')
}

navLink.forEach(l => l.addEventListener('click' , linkAction))
/*shadow header */

const shadowHeader = () => {

      const header = document.getElementById('header');

      this.scrollY >= 50 ? header.classList.add('shadow-header')
                           :header.classList.remove('shadow-header')
    
}
window.addEventListener('scroll', shadowHeader);



  return(
        <nav className="nav-container">

            <a className="nav-logo-container">
               <img className="logo" src="/logo.webp" loading='lazy' alt="logo"/>
               
            </a>
            
      <div className="nav-menu-container">

          <div className="nav-menu" id='nav-menu'>

                <h3 className="nav-menu-title">Bullasoft</h3>

                <ul className="nav-list">

                    

                    <li className="nav-list-item">Home</li>
                    <li className="nav-list-item">What We Do</li>
                    <li className="nav-list-item">Services</li>
                    <li className="nav-list-item">Projects</li>
                    <li className="nav-list-item">Contact Us</li>

                </ul>
                {/*Close icon */}

                <div className="nav-close" id="nav-close">
                    <i className="ri-close-line"></i>
                </div>
            </div>
      </div>
      <div className="nav-buttons">

            {/*Theme-icon*/}
            <div className="theme-button">
                <i class="ri-moon-line change-theme" id="theme-button"></i>
            </div>
           <button className="nav-toggle" id="nav-toggle" onClick={menuShow}>
               <i class="ri-menu-4-line"></i>
           </button>

      </div>
</nav>
  )
}
export default Header