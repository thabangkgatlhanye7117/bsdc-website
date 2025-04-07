import Softwares from './softwares.json'

const SoftwareList = () => {


    return(
      <section id='popular-software'class='bg-blue-200 p-10 font-sans mt-20 pt-[50px]'>
          <h1 className='text-center p-5 text-2xl font-semibold'>Popular Softwares</h1>
          <div className ='w-full overflow-x-scroll overflow-y-hidden whitespace-nowrap h-[520px] p-16  mb-5   max-md:h-[520px] '>

               {
                  Softwares.map(software =>{
                      return(
              
                            <div className='h-full w-[300px] mx-3 inline-block border-none bg-neutral-100 p-10 ring-2 ring-neutral-200 rounded-lg font-san hover:shadow-2xl contain-content'key={software.id}>
                                    <div class='w-[220px] h-[220px] mb-3 contain-content'> 
                                    <img src={software.image} alt='software-logo'/>
                                    </div>
                                  <p><span className='font-medium'>Name:</span> {software.name}</p>
                                  <p><span className='font-medium'>Lessons:</span> {software.lessons}</p>
                                  <p><span className='font-medium'>Tasks:</span> {software.tasks}</p>
                                  <p><span className='font-medium'>Duration:</span> {software.duration}</p>
                                  

                            </div>

                            )
                            })
                }

    
 
      </div> 
    
    </section>
  
      )


}


export default SoftwareList