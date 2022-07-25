import React, { useState } from 'react'
import './login.scss'
import imglogin from './../../assets/image/thumb.svg'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Footer from '../footer/Footer';
import axios from 'axios';
import Registersuccess from './Registersuccess';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [register, setRegister] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    // console.log(process.env.REACT_APP_BASEURLNODE)
    return (
        <>

            {(!register) ? <>
                <div className="logincomponent">
                    <div className='loginContent'>
                        <div className="image">
                            <img src={imglogin} alt="thumb" />
                        </div>
                        <div className="block-right">
                            <h3 className='form-heading'>Register Account</h3>
                            <span>Already have an account? </span><span
                                className='red-color'
                                onClick={() => navigate('/login')}
                            >Sign in</span>
                            <Formik
                                initialValues={{ username: '', password: '', checkbox: false }}
                                validationSchema={Yup.object({
                                    username: Yup.string()

                                        .required('This username is required').max(10),
                                    password: Yup.string().required('This password is required'),
                                    checkbox: Yup.boolean().oneOf([true], 'You must agree to our term & conditions')

                                })}
                                onSubmit={(values) => {

                                    // console.log(values)
                                    axios.post(`${process.env.REACT_APP_BASEURLNODE}/auth/register`, values).then(data => {
                                        setRegister(true)
                                    })
                                        .catch(err => setError(err.response.data.error))

                                }}
                            >

                                <Form className='form'>
                                    <label htmlFor="username">User name</label>
                                    <Field name="username" type="text" />
                                    <div className='error '>
                                        <ErrorMessage name="username" />

                                    </div>
                                    <div className='error '>
                                        {error}

                                    </div>

                                    <label htmlFor="password">Password</label>
                                    <Field name="password" type="password" />
                                    <div className='error'>
                                        <ErrorMessage name="password" />
                                    </div>
                                    <div className="checkbox-container">
                                        <Field name="checkbox" type="checkbox" />
                                        <span>{'Please confirm that you agree to our term & conditions'}</span>
                                    </div>
                                    <div className='error'>
                                        <ErrorMessage name="checkbox" />
                                    </div>

                                    <div className="btn-submit">
                                        <button type="submit">Sign Up</button>
                                    </div>

                                </Form>
                            </Formik>
                        </div>

                    </div>
                </div>
                <Footer />
            </> : <Registersuccess />}

        </>



    );
};

export default Register