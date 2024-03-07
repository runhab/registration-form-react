import React,{useState} from 'react'
import './LoginSignup.css'

import email from '../Assets/email.svg';
import profile from '../Assets/profile.svg';
import lock from '../Assets/lock.svg';
const LoginSignup = () => {
    const [action, setAction] = useState("Login");
    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                <div>
                    {
                        action==="Sign Up"? <div className='input'><img src={profile} alt='' /> <input type='text' placeholder='Name'/></div>:<></>
                }
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
            <div>
                {
                    action==="Login"? <div className='forget-password'>Forget Password ? <span>Click Here!</span></div> :<></>
                }
            </div>
            <div className='submit-container'>
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => {
                    setAction("Login")
                }}>Login</div>

            </div>
        </div>
    )
}

export default LoginSignup;