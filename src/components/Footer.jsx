import { Link } from "react-router-dom"
const Footer = ()=>{
  return(
    <footer>
      <img src="/e-banner.webp"/>
      <div className="footer-container">
         <span className="quick-links-heading">QUICK LINKS</span>
          <ul className="quick-links">
            <Link to="/"><li className="quick-link"><a href="#hero">Home</a></li></Link>
            <Link to="/#inside"><li className="quick-link"><a href="#">Inside Bullasoft</a></li></Link>
            <Link to="/#project-portfolio"><li className="quick-link"><a href="#">Project Portfolio</a></li></Link>
            <Link to="/#help"><li className="quick-link"><a href="#">How We Help</a></li></Link>
          </ul>
            
      </div>
        <h1 className="footer-tagline">YOUR DIGITAL FUTURE, ENGINEERED BY BULLASOFT</h1>
        <Link to="/#quote-section"><a href="#" className="footer-button">Request a Quote</a></Link>
        <img src="logo-name.webp" />
        <span className="copy-rights">&copy; 2025 Bullasoft Digital Construction. All Rights.</span>
    </footer>
  )
}
export default Footer