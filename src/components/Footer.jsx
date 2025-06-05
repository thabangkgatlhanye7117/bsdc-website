const Footer = ()=>{
  return(
    <footer>
      <img src="/e-banner.webp"/>
      <div className="footer-container">
         <span className="quick-links-heading">QUICK LINKS</span>
          <ul className="quick-links">
            <li className="quick-link"><a>Home</a></li>
            <li className="quick-link"><a>Inside Bullasoft</a></li>
            <li className="quick-link"><a>Project Portfolio</a></li>
            <li className="quick-link"><a>Request a Quote</a></li>
          </ul>
            
      </div>
        <h1 className="footer-tagline">YOUR DIGITAL FUTURE, ENGINEERED BY BULLASOFT</h1>
        <button className="footer-button">Request a Quote</button>
        <img src="logo-name.webp" />
        <span className="copy-rights">&copy 2025 Bullasoft Digital Construction. All Rights.</span>
    </footer>
  )
}
export default Footer