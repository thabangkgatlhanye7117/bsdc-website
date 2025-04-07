
import Footer from "../components/Footer"
import { useState } from "react"
import { Link, Outlet } from "react-router-dom"

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen]= useState(false)
  return (
<>
<div class='fixed top-0 z-10 w-full'>

    <header class='bg-black h-30 flex px-10 justify-between border-b border-b-neutral-700 max-sm:px-0'  >

                 
              <div class='flex w-2/7 items-center contain-content '>
                    <Link to ='/'><img class=' w-full h-auto  border-none'src='src/assets/images-icons/logo-black.png '/></Link>
              </div>

              <div class= 'flex w-2/5 items-center justify-between p-3 max-sm:w-1/5'>
                  <div class= 'flex w-3/5 h-10 justify-around px-3 items-center max-md:hidden'>
                  <input class='h-8 w-[300px] border-none rounded-md' type ='text' />
                  <img class='object-contain h-5 ml-2 ' src='src/assets/images-icons/search.png'/>
                  </div>
                  <Link to ='/logIn' ><p class= 'text-white hover:text-red-600 font-semibold max-sm:hidden'>LOGIN</p></Link>
                  <Link to ='/logIn' ><img class='object-contain h-5  md:hidden ' src='src/assets/images-icons/profile.jpg'/></Link>
                  <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <img class='object-contain h-5  md:hidden ' src='src/assets/images-icons/hamburger.jpg' alt='hamburger-menu'/>
                  </button>
              </div> 
              <div className={`absolute xl:hidden top-20 left-0 w-full bg-white flex flex-col
                              items-center gap-6 font-semibold text-lg transform transition-transform
                              ${isMenuOpen ? 'opacity-100':'opacity-0'}`}
                              style={{transition: 'transform 0.3s ease, opacity 0.3s ease'}}>

                                <li className='list-none w-full text-center p-4 hover:bg-red-600 hover:text-black
                                transition-all cursor-pointer'>HOME</li>

                                <li className='list-none w-full text-center p-4 hover:bg-red-600 hover:text-black
                                transition-all cursor-pointer'>NEWS</li>

                                <li className='list-none w-full text-center p-4 hover:bg-red-600 hover:text-black
                                transition-all cursor-pointer'>TUTORIAL</li>

                                <li className='list-none w-full text-center p-4 hover:bg-red-600 hover:text-black
                                transition-all cursor-pointer'>COMMUNITY</li>

              </div>

     </header>
         
<nav class='flex bg-black h-10 items-center px-20 max-md:hidden  '>

            <ul class= 'flex w-full h-10 items-center justify-around '>
                <Link to ='/'><li class='text-neutral-600 font-semibold text-sm hover:text-red-600'>HOME</li></Link>
                <Link to = '/newsLetter'><li class='text-neutral-600 font-semibold text-sm hover:text-red-600'>NEWS</li></Link>
                <Link to ='/tutorials'><li class='text-neutral-600 font-semibold text-sm hover:text-red-600'>TUTORIALS</li></Link>
                <Link to = '/community'><li class='text-neutral-600 font-semibold text-sm hover:text-red-600'>COMMUNITY</li></Link>
                <Link to ='/userDashboard'><li class='text-neutral-600 font-semibold text-sm hover:text-red-600'>DASHBOARD</li></Link>
            </ul>
</nav>

</div>
<Outlet/>
<Footer/>
</>    
      


  )
}
export default Layout