import BreakingNews from './breakingNews.json'

const NewsLetter = () => {

  return(
    <>
    <section className='h-full pt-40 contain-content'>

      <div className='px-20'>
        <h2 className='text-2xl text-center font-sans font-bold '>BULLASOFT TECH NEWSLETTER</h2>
      </div>

      <div className=' h-28 m-auto  w-[85%] my-20'>

          <p className='bg-red-600 inline-block font-mono'>Breaking News</p>
          <div className='flex h-full  ring-1 ring-neutral-300 w-full  justify-center'>

              {
                 BreakingNews.map( news => {

                   return(
                             <div className='w-1/4 p-3 ring-1 ring-neutral-300' key= {news.id}>

                                  <p className='text-xs'>{news.time}</p>
                                  <p className='font-bold'>{news.continent}</p>
                                  <p className='font-serif'>{news.headline}</p>
                                  
                             </div>

                        )

                         }
                         )
                  
              }

          </div>
      </div>
     
      <br/>
      <div className='flex h-[500px] m-auto ring-1 ring-neutral-300 w-[85%] '>
      <div className='w-1/2 ring-1 ring-neutral-300 h-full'>

          <div className='flex h-full w-full justify-end contain-content '>
  
          </div>

      </div>
      <div className='w-1/2 h-full'>

          <div className='flex h-full w-full justify-center p-10 '>
          
          </div>
        
      </div>
        
      </div>
      <br/>
      
      </section>
    
      </>
  );
}
export default NewsLetter