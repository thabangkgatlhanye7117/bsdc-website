import Header from "../components/Header"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import About from "../components/About"
import SoftwareList from "../components/SoftwareList"
import LanguageList from "../components/LanguageList"
import Contact from "../components/Contact"


function HomePage() {
 
  return (
    <>
      
      <main className='h-[70%] contain-content mt-5'>

        <section><Hero/></section>
        <section><About/></section>
        <section><SoftwareList/></section>
        <section><LanguageList/></section>
        <section><Contact/></section>
        
      

      </main>
    
      
      </>
    
  )
}

export default HomePage
