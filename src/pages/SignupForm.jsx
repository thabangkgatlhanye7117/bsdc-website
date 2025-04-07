import { useFormik } from  'formik';
import { basicSchema } from '../schemas';

const SignupForm = () => {

const formik = useFormik({
        initialValues : {
            fullname: '',
            email: '',
            password: '',
            cpassword: '',
            
        },
        validationSchema : basicSchema,

        onSubmit :  (values,actions) => {
            console.log('Form Submitted', values);
            actions.resetForm();
        }
   });

    return (

    <section id='signup-sec'className='shadow-2xl rounded-2xl m-20 p-10 font-san font-semibold max-sm:m-5'>

        <h1 className='text-center py-5 text-2xl'>Let's get started!</h1>

        <div className='flex justify-center items-center   '>


            <div className='w-1/2 h-[500px] max-sm:w-full'>
                <form id='sign-up' onSubmit={formik.handleSubmit}>
                    
                    <label htmlFor='fullname' >Full Name</label>
                    <br/>
                    <input className={formik.errors.fullname && formik.touched.fullname ? 'ring-2 ring-red-600 w-3/4 h-[30px] mb-5':'ring-2 ring-neutral-300 w-3/4 h-[30px] mb-5'}
                           type='text' id='fullname' name='fullname' 
                           onChange={formik.handleChange}
                           value={formik.values.fullname}
                           onBlur={formik.handleBlur}
                    />
                    {formik.errors.fullname && formik.touched.fullname && (<p className='text-red-600 text-xs'>{formik.errors.fullname}</p>)}
                    <br/>



                    <label htmlFor='email' >Email Address</label>
                    <br/>
                    <input className={formik.errors.email && formik.touched.email ? 'ring-2 ring-red-600 w-3/4 h-[30px] mb-5':'ring-2 ring-neutral-300 w-3/4 h-[30px] mb-5'}
                           type='email' id='email' name='email'
                           onChange={formik.handleChange} 
                           value={formik.values.email} 
                           onBlur={formik.handleBlur}
                     />
                    {formik.errors.email && formik.touched.email && (<p className='text-red-600 text-xs'>{formik.errors.email}</p>)}
                    <br/>



                    <label htmlFor='password' >Password</label>
                    <br/>
                    <input className={formik.errors.password && formik.touched.password ? 'ring-2 ring-red-600 w-3/4 h-[30px] mb-5':'ring-2 ring-neutral-300 w-3/4 h-[30px] mb-5'} 
                           type='password' id='password' name='password'
                           onChange={formik.handleChange}
                           value={formik.values.password}
                           onBlur={formik.handleBlur}
                    />
                    {formik.errors.password && formik.touched.password && (<p className='text-red-600 text-xs'>{formik.errors.password}</p>)}
                    <br/>



                    <label htmlFor='cpassword'>Confirm Password</label>
                    <br/>
                    <input className={formik.errors.cpassword && formik.touched.cpassword ? 'ring-2 ring-red-600 w-3/4 h-[30px] mb-5':'ring-2 ring-neutral-300 w-3/4 h-[30px] mb-5'}
                           type='password' id='cpassword' name='cpassword' 
                           onChange={formik.handleChange}
                           value={formik.values.cpassword}
                           onBlur={formik.handleBlur}
                    />
                    {formik.errors.cpassword && formik.touched.cpassword && (<p className='text-red-600 text-xs'>{formik.errors.cpassword}</p>)}
                    <br/>



                     <input  className=''
                     type='checkbox' id='tsandcs'name='tsandcs'/> 
                     <label className='ml-2' htmlFor='tsandcs'>I accept the <a href='#'><span className='text-sky-500 '>terms and conditions</span></a></label>

                    <div className='flex justify-center py-10'>
                        <button type='submit' className='bg-red-600 text-white w-[200px] h-[50px] rounded-xl '>Create Profile</button>
                    </div>
                    
                </form>
               
            </div>

            <div className='w-1/2  flex justify-end max-sm:hidden'>
                    <img className= 'h-[400px] w-3/4'src='src/assets/images-icons/formImage.jpg' alt='lady using finger-print'/>
            </div>

        </div>
        
    </section>
    );


} 

export default SignupForm