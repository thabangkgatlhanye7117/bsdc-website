import * as yup from 'yup'

const passWord = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;


export const loginSchema = yup.object().shape({

    username : yup.string().required('required'),
    password : yup.string().matches(passWord).required('required')

});