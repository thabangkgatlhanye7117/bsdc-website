import Header from "./components/Header"
import Hero from "./components/Hero"
import Reasons from "./components/Reasons"
import Help from "./components/Help"
import Projects from "./components/Projects"
import ParticlesComponent from "./components/ParticlesComponent"
const Layout = () => {
return(
  <>
      
      {/*HEADER*/}
      <header className="header shadow" id="header">
          <Header/>
      </header> 


    
       {/*MAIN*/}
      <main>
       <Hero/>    
          
           
          
      </main>



  </>
)



}
export default Layout