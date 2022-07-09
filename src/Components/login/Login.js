import React, { useState } from 'react'
import './login.scss'
import imglogin from './../../assets/image/thumb.svg'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Footer from '../footer/Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Toast from '../toast/Toast';
import { loginSuccess, hideNotify } from '../../redux/SliceReducer/AuthSlice';
import { useDispatch, useSelector } from 'react-redux';
const Login = () => {
    const [error, setError] = useState({
        username1: '', password1: ''
    })
    console.log('error', error)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const selector = useSelector((state) => state.AuthSliceReducer)
    return (


        <>
            <div id="test"><Navbar /></div>

            <div className="logincomponent">
                {selector.isShowToast && <Toast />}
                <div className='loginContent'>
                    <div className="image">
                        <img src={imglogin} alt="thumb" />
                    </div>
                    <div className="block-right">
                        <h3 className='form-heading'>JOIN WITH US</h3>
                        <span>Don't have an account?</span><span className='red-color'
                            onClick={() => navigate('/register')}
                        > Create an account</span>
                        <Formik
                            initialValues={{ username: '', password: '' }}
                            validationSchema={Yup.object({
                                username: Yup.string().required('This username is required'),
                                password: Yup.string().required('This password is required'),


                            })}
                            onSubmit={(values) => {

                                console.log(values)
                                axios.post('http://localhost:3001/auth/login', values).then(data => {
                                    setError({ username1: '', password1: '' })
                                    console.log(data)
                                    document.cookie = `accesstoken = ${data.data.accessToken}`
                                    dispatch(loginSuccess({ username: values.username, isLogin: true, isShowToast: true }))
                                    setTimeout(() => {
                                        dispatch(hideNotify())
                                        navigate('/home')
                                    }, 2000)


                                })
                                    .catch(err => {
                                        console.log(err)
                                        if (err.response.data.error && err.response.data.error === 'Username') {
                                            setError((prevError) => {
                                                return { ...prevError, username1: err.response.data.message }
                                            })
                                        }
                                        if (err.response.data.error && err.response.data.error === 'Password') {
                                            setError((prevError) => {
                                                return { ...prevError, password1: err.response.data.message }
                                            })
                                        }
                                    })

                            }}
                        >
                            <Form className='form'>
                                <label htmlFor="username">User name</label>
                                <Field name="username" type="text" />
                                <div className='error '>
                                    <ErrorMessage name="username" />
                                    <div> {error.username1 ? error.username1 : null}</div>
                                </div>
                                <div className='error '>
                                </div>

                                <label htmlFor="password">Password</label>
                                <Field name="password" type="text" />
                                <div className='error'>
                                    <ErrorMessage name="password" />
                                    <div> {error.password1 ? error.password1 : null}</div>

                                </div>
                                <div className="btn-submit">
                                    <button type="submit">Sign in</button>
                                </div>

                            </Form>
                        </Formik>
                    </div>

                </div>
            </div>
            <Footer />
        </>





    );
};

export default Login