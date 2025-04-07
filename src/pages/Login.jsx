
import {useFormik} from 'formik';

import { loginSchema } from '../schemas/loginSchema';
const Login = () => {
 
  const formik = useFormik({
          initialValues : {
            username:'',
            password : '',
          },
          validationSchema : loginSchema ,
          onSubmit : (values,actions) => {
            console.log(values)
            actions.resetForm();
          }

  })


  return(
    <section className='m-20 p-24 font-san font-semibold max-sm:m-0'>
      <div class='shadow-2xl rounded-2xl w-[500px] h-[400px] m-auto font-san font-semibold max-sm:w-[300px]'>
        <h1 className='text-center m-auto text-2xl'>Login!</h1>

     
        <div className='flex justify-center items-center w-full h-[300px] '>
            <form class='w-full p-10' onSubmit={formik.handleSubmit}>
                
                <label htmlFor='username'>Username</label>
                <br/>
                <input className='ring-2 ring-neutral-300 w-full h-[30px] mb-5' type='text' id='username'
                  value ={formik.values.username} name ='username' onChange={formik.handleChange} onBlur ={formik.handleBlur}/>
                  {formik.errors.username && formik.touched.username && (<p className='text-red-500 text-xs'>{formik.errors.username}</p>)}
                <br/>
                <label htmlFor='password' >Password</label>
                <br/>
                <input className='ring-2 ring-neutral-300 w-full h-[30px] mb-5' type='password' id='password'
                       value ={formik.values.password} name ='password' onChange={formik.handleChange} onBlur ={formik.handleBlur}
               />
                       {formik.errors.password && formik.touched.password && (<p className='text-red-500 text-xs'>{formik.errors.password}</p>)}
                  
                <br/>
                <div className='flex justify-center'>
                  <button type='submit' className='bg-red-600 text-white w-[200px] h-[50px] rounded-xl '>Login</button>
                </div>
            </form>
            
        </div>
       
    </div>
  
   
</section>
  )
}
export default Login