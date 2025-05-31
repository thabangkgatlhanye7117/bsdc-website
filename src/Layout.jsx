import Header from "./components/Header"
import Hero from "./components/Hero"
import RequestQuote from "./components/RequestQuote"
import Help from "./components/Help"
import Projects from "./components/Projects"
import Inside from "./components/Inside"
import WhyPictures from "./components/WhyPictures"
import Footer from "./components/Footer"
const Layout = () => {
return(
  <>
      
      {/*HEADER*/}
      <header className="header " id="header">
          <Header/>
      </header> 


    
       {/*MAIN*/}
      <main>
       <Hero/>
       <Inside/> 
       <Projects/>   
       <Help/> 
       <WhyPictures/>
       <RequestQuote/> 
           
          
      </main>
      <footer>
        <Footer/>
      </footer>


  </>
)



}
export default Layout