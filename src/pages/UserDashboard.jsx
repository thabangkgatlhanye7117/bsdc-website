import {NavLink, Outlet } from "react-router-dom"

const UserDashboard =() => {
  return(
<>


<nav className='flex fixed top-28 left-0 right-0 z-20  bg-white h-20 m-auto ring-1  ring-neutral-300 w-[90%] shadow-2xl rounded-2xl justify-center'>

<div className='flex justify-center items-center w-1/4 h-full '>
 <NavLink to='/userDashboard'>
  <img className='w-[50px] h-[50px]'src=' src/assets/images-icons/home.png' alt='house-icon'/>
  </NavLink>
</div>

<div className='flex justify-center items-center w-1/4 h-full '>
<NavLink to='/userDashboard/dashboardLessons'>
<img className='w-[50px] h-[50px]'src=' src/assets/images-icons/book.png' alt='book-icon'/>
</NavLink>
</div>

<div className='flex justify-center items-center w-1/4 h-full '>
<NavLink to='/userDashboard/dashboardRoadmaps' > 
<img className='w-[50px] h-[50px]'src=' src/assets/images-icons/roadmap.png' alt='roadmap-icon'/>
</NavLink>
</div>

<div className='flex justify-center items-center w-1/4 h-full '>
<NavLink to='/userDashboard/dashboardSettings'>
<img className='w-[50px] h-[50px]'src=' src/assets/images-icons/gears.png' alt='settings-icon'/>
</NavLink>
</div>


</nav>

 <section className='h-[85%] pt-40 px-20 mb-10 relative contain-content'>

      <div className=' my-28 '>
        <h2 className='text-lg font-sans font-bold '>WELCOME TO YOUR DASHBOARD</h2>
      </div>
      

      <div className='flex h-[500px] ring-1 ring-neutral-500 mt-10 w-full  '>

        <div className='w-1/2 h-full max-sm:w-full'>

          <div className='flex h-full w-full ring-1 ring-neutral-500 justify-end contain-content '>
            <Outlet/>
          </div>
          
        </div>

        <div className='w-1/2 h-full max-sm:hidden'>

          <div className='flex h-full w-full justify-center p-10 '>
          <img className='h-full w-full'src=' src/assets/images-icons/purple.jpg' alt='laptop-image'/>
          </div>

         

        </div>
          

    
        
      </div>
    
      
      </section>
    
      </>
  )
}
export default UserDashboard