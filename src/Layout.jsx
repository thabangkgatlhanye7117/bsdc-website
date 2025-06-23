import React, {useState} from 'react';
import IntroVideo from './components/IntroVideo';
import {Outlet} from 'react-router-dom';
import Header from "./components/Header"
import Footer from "./components/Footer"
import ScrollToTop from './components/ScrollTop';
const Layout = () => {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroEnd = ()=>{
    setShowIntro(false);
  };

  if (showIntro){
    return <IntroVideo
        onEnd={handleIntroEnd} />
  }
  
return(
  <>
      <ScrollToTop/>
      {/*HEADER*/}
      <header className="header " id="header">
          <Header/>
      </header> 
        <Outlet/>
      <footer>
        <Footer/>
      </footer>


  </>
)



}
export default Layout