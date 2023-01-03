import * as Yup from 'yup';


const Validation = Yup.object().shape({
    email: Yup.string().email('Enter a valid email address').required('Required'),
    password: Yup.string().required().min(7),
    confirmPassword:Yup.string().required().oneOf([Yup.ref("password")]),
    firstName:Yup.string().required(),
    lastName:Yup.string().required()
})

export default Validation