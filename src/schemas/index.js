import * as yup from 'yup'
const passWord = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({

    fullname:yup.string().required('Please enter your full name'),

    email:yup.string().email('Invalid email').required('Please enter a email'),

    password: yup.string().min(5, 'Must have mininmum of 5 char').matches(passWord, {message:'Please create a strong password'}).required('Required'),

    cpassword:yup.string().oneOf([yup.ref('password'),null],'Password must match').required('Required'),

   
})