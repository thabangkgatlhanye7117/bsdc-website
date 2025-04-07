import { Link } from "react-router-dom"
const Hero = () => {

return(

<div id='hero'className=' mt-30 max-sm:mt-10 '>

  <section  className= 'flex h-[620px] bg-black p-20 font-san contain-content max-sm:h-[450px] max-sm:py-10 '>
  
    <div className=' flex w-1/2 h-full items-center max-sm:w-full '>

        <div>
              <div className= 'flex w-3/5 h-10 justify-around px-3 contain-content items-center md:hidden max-sm:w-full max-sm:mb-8'>
                  <input className='h-8 w-[300px] border-none rounded-md  ' type ='text' />
                  <img className='object-contain h-5 ml-2 ' src='src/assets/images-icons/search.png'/>
              </div>
              <p className='text-white mb-10 max-sm:text-sm'>Welcome to BULLASOFT.DEV!</p>
              <p className='text-white text-4xl max-sm:text-3xl'>KEEP UP WITH THE EVER-EVOLVING WORLD OF <span className='text-red-600'>TECH AND SOFTWARE</span> WITH US!</p>
              <div className='flex w-full h-1/5 py-10 '>
                <Link to='/signUp'><button className='text-white w-[200px] h-[50px] bg-red-600 rounded-lg shadow-md shadow-neutral-600'>SIGN-UP</button></Link>
              </div>

       </div>

    </div>

  <div className='w-1/2 h-full max-sm:hidden'>

        <div className='flex h-full w-full pt-10 justify-end contain-content '>
          <img className='h-full w-3/4'src=' src/assets/images-icons/laptop-white.jpg' alt='laptop-image'/>
        </div>

        <p className='text-white text-center font-mono'>image by rawpix.com on Freepix</p>
  </div>
  
  
</section>

      <div className='flex h-[50px] bg-black justify-start items-end  px-20 py-5 '>

          <div className='flex w-2/4 justify-around max-sm:w-full'>
            <a href ='#about'><p className='text-white font-medium text-sm hover:text-sky-400'>ABOUT</p></a>
            <a href='#popular-software'><p className='text-white font-medium text-sm hover:text-sky-400'>SOFTWARE</p></a>
            <a href="#languages"><p className='text-white font-medium text-sm hover:text-sky-400'>PROGRAMMING</p></a>
            <a href= '#contacts'><p className='text-white font-medium text-sm hover:text-sky-400'>CONTACT</p></a>
          </div>
          
      </div>

</div>
)
}

export default Hero