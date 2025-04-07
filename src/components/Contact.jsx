
const Contact = () => {

    return(
      <section id='contacts' className='flex justify-center h-[400px] p-10 contain-content '>
      
          
          <div className=' p-10 w-[500px] h-[300px] shadow-2xl ring-neutral-500'>

            <div>
            <p className='text-lg text-center font-bold'>Social Media</p>
            <div className='flex gap-10 mt-5 justify-center'>
                <a href='#'><img className='w-10 h-10 ' src ='src/assets/fonts/facebook-brands-solid.svg' alt='facebook-logo'/></a>
                <a href='#'><img className='w-10 h-10 ' src ='src/assets/fonts/linkedin.png' alt='facebook-logo'/></a>
                <a href='#'><img className='w-10 h-10 ' src ='src/assets/fonts/instagram-brands-solid.svg' alt='instagram-logo'/></a>
                <a href='#'><img className='w-10 h-10 ' src ='src/assets/fonts/twitter-brands-solid.svg' alt='twitter-logo'/></a>
            </div>
            </div>
            <div className='pt-10'>
            <p className='text-lg font-bold mt-5'>Send an Email:   <span className='font-medium'><a href='mailto:bullasoft7117@gmail.com'>bullasoft7117@gmail.com</a></span> </p>
          
            <p className='text-lg font-bold '>Tel:   <span className='font-medium'>011-990-3943</span></p>
            
            </div>
          </div>

  </section>
    )
}
export default Contact