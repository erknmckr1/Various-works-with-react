import React from 'react'
import { useFormik } from 'formik'
import Validation from './validation'


function Xorm() {

    const { values, handleSubmit, handleChange, handleBlur,errors , touched } = useFormik({
        initialValues:{
            firstName: '',
            lastName: '',
            email: '',
            address: '',
            city: '',
            gender: '',
            classs: '',
            password: '',
            confirmPassword: '',
            textareaa: ''
        },

        onSubmit: values => {
            console.log(values);
        },

        validationSchema:Validation,
    });
    return (
        <div className='form'>
            <form className="container mt-3" onSubmit={handleSubmit}>
                <div className='row'>

                    <div className='col-md-6 info'>
                        <label className='form-label' htmlFor='firstName' >First Name  </label>
                        <input className='form-control' type="text" id='firstName' name="firstName" placeholder='firstname' value={values.firstName} onChange={handleChange} onBlur={handleBlur} />
                        {errors.firstName && touched.firstName && (<div className='error'>{errors.firstName}</div>) }
                    </div>

                    <div className='col-md-6 info'>
                        <label className='form-label' htmlFor='firstName' >Last Name  </label>
                        <input className='form-control' type="text" id='lastName' name="lastName" placeholder='lastname' value={values.lastName} onChange={handleChange} onBlur={handleBlur} />
                        {errors.lastName && touched.lastName && (<div className='error'>{errors.lastName}</div>) }
                    </div>

                    <div className='col-md-12 info'>
                        <label className='form-label' htmlFor='email' >Email  </label>
                        <input className='form-control' type="email" id='email' name="email" placeholder='email@' value={values.email} onChange={handleChange} onBlur={handleBlur}  />
                        {errors.email && touched.email && (<div className='error'>{errors.email}</div>) }
                    </div>

                    <div className='col-md-12 info'>
                        <label className='form-label' htmlFor='password' >Password</label>
                        <input className='form-control' type="password" id='password' name="password" placeholder='password' value={values.password} onChange={handleChange} />
                        {errors.password && touched.password && (<div className='error'>{errors.password}</div>) }

                    </div>

                    <div className='col-md-12 info'>
                        <label className='form-label' htmlFor='confirmPassword' >Confirm password </label>
                        <input className='form-control' type="password" id='confirmPassword' name="confirmPassword" placeholder='confirmPassword' value={values.confirmPassword} onChange={handleChange}  />
                        {errors.confirmPassword && touched.confirmPassword && (<div className='error'>{errors.confirmPassword}</div>) }

                    </div>


                    <div className='col-md-12 info'>
                        <label className='form-label' htmlFor='address' >Address : </label>
                        <input className='form-control' type="text" id='address' name="address" placeholder='address' value={values.address} onChange={handleChange} />
                    </div>

                    <div className='col-md-4 info'>
                        <label className='form-label' htmlFor='city' >City : </label>
                        <input className='form-control' type="text" id='city' name="city" placeholder='city' value={values.city} onChange={handleChange} />
                    </div>

                    <div className='col-md-4  info'>
                        <label className='d-block'>Gender</label>
                        <input className='form-check-input' value="male" type="radio" name="gender" placeholder='gender' checked={values.gender === 'male'} onChange={handleChange} /> male
                        <input className='form-check-input ms-2' value="female" type="radio" name="gender" placeholder='gender' checked={values.gender === 'female'} onChange={handleChange} /> female
                    </div>

                    <div className='col-md-4 info'>
                        <label>Class</label>
                        <select className='form-select' name='classs' value={values.classs} onChange={handleChange} >
                            <option value="1.sınıf" >1st Class</option>
                            <option value="2.sınıf" >2st Class</option>
                            <option value="3.sınıf" >3st Class</option>
                            <option value="4.sınıf" >4st Class</option>
                        </select>
                    </div>

                    <div className='col-md-12 info'>
                        <label className='d-block'>About you</label>
                        <textarea className='form-control' name='textareaa' value={values.textareaa} placeholder='Tell about yourself' onChange={handleChange} />
                    </div>

                    <div className='col-md-12 info '>
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className='form-check-label ms-2' htmlFor='check'>Check me</label>
                    </div>

                    <div className="col-12 info">
                        <button type="submit" class="btn btn-warning">Register</button>
                    </div>

                </div>

            </form>
            <br></br>
            <code>{JSON.stringify(values)}</code>


        </div>
    )
}

export default Xorm