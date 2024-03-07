import React from 'react'
import './LoginSignup.css'

import email from '../Assets/email.svg';
import profile from '../Assets/profile.svg';
import lock from '../Assets/lock.svg';
const LoginSignup = () => {
    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>Sign Up</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                <div className='input'>
                    <img src={profile} alt='' />
                    <input type='text' placeholder='Name'/>
                </div>
                <div className='input'>
                    <img src={email} alt='' />
                    <input type='email' placeholder='Email'/>
                </div>
                <div className='input'>
                    <img src={lock} alt='' />
                    <input type='password' placeholder='Password'/>
                </div>
            </div>
            <div className='forget-password'>Lost Password ? <span>Click Here!</span></div>
            <div className='submit-container'>
                <div className='submit'>Sign Up</div>
                <div className='submit'>Login</div>

            </div>
        </div>
    )
}

export default LoginSignup;