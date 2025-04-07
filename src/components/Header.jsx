import { Link ,Outlet} from "react-router-dom";
const Header = () => {
  return(

    <>
      <header className='bg-black h-30 flex px-10 justify-between border-b border-b-neutral-700'  >

                 
          <div className='flex w-2/7 items-center contain-content'>
             <Link to ='/'><img className=' w-full h-auto  border-none 'src='src/assets/images-icons/logo-black.png' alt='logo'/></Link>
          </div>

          <div className= 'flex w-2/5 items-center justify-between p-3'>
              <div className= 'flex w-3/5 h-10 justify-around px-3 contain-content items-center '>
                  <input className='h-8 w-[300px] border-none rounded-md  ' type ='text' />
                  <button onClick=''><img className='object-contain h-5 ml-2 ' src='src/assets/images-icons/search.png' alt='search-button'/></button>
              </div>
              <Link to='/login' ><p className= 'text-white hover:text-red-600 font-semibold'>LOGIN</p></Link>
          </div> 
           
      </header>

     
      </>
  );
}

export default Header