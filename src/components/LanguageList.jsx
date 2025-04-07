import Languages from './languages.json'

const LanguageList = () => {

    return(
        <section id='languages'class='bg-red-600 p-10 font-sans pt-[50px]  '>
          <h1 class='text-center p-5 text-2xl font-semibold'>Programming Languages</h1>
          <div class =' w-full overflow-x-scroll overflow-y-hidden whitespace-nowrap h-[500px] p-14  mb-5 contain-content  max-md:h-[500px] '>

            {
              Languages.map(language => {
                return(
                        <div class='h-full w-[300px] mx-3 inline-block border-none bg-neutral-100 p-10 ring-2 ring-neutral-200 rounded-lg font-san hover:shadow-2xl contain-content' key={language.id}>
                            <div class='w-[220px] h-[220px] mb-3 contain-content'> 
                            <img src={language.image} alt='language-logo'/>
                            </div>
                            <p> <span class='font-medium'>Name:</span> {language.name}</p>;
                            <p> <span class='font-medium'>Lessons:</span> {language.lessons}</p>;
                            <p> <span class='font-medium'>Tasks:</span> {language.tasks}</p>;
                            <p> <span class='font-medium'>Duration:</span> {language.duration}</p>;

                          
                        </div>
                      )
                })
            }

        </div>
            </section>
    )
}
export default LanguageList