import Hero from "../components/Hero";
import RequestQuote from "../components/RequestQuote";
import Help from "../components/Help";
import Projects from "../components/Projects";
import Inside from "../components/Inside";
import WhyPictures from "../components/WhyPictures";


const HomePage = ()=>{
   return(

           <main>
            
             <Hero/>
             <Inside/> 
             <Projects/>   
             <Help/> 
             <WhyPictures/>
             <RequestQuote/> 
                   
            </main>

   )
}
export default HomePage