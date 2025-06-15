const Footer = ()=>{
  return(
    <footer>
      <img src="/e-banner.webp"/>
      <div className="footer-container">
         <span className="quick-links-heading">QUICK LINKS</span>
          <ul className="quick-links">
            <li className="quick-link"><a href="#hero">Home</a></li>
            <li className="quick-link"><a href="#inside">Inside Bullasoft</a></li>
            <li className="quick-link"><a href="#project-portfolio">Project Portfolio</a></li>
            <li className="quick-link"><a href="#help">How We Help</a></li>
          </ul>
            
      </div>
        <h1 className="footer-tagline">YOUR DIGITAL FUTURE, ENGINEERED BY BULLASOFT</h1>
        <a href="#quote-section" className="footer-button">Request a Quote</a>
        <img src="logo-name.webp" />
        <span className="copy-rights">&copy; 2025 Bullasoft Digital Construction. All Rights.</span>
    </footer>
  )
}
export default Footer