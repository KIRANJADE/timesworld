import React from 'react'
import LazyImage from '../components/LazyImage'
import LoginForm from '../components/LoginForm'
import Illustration from '../assets/images/Illustration.png'

const Login = () => {
  return (
    <React.Fragment>
      <div className='login_container'>
        <LoginForm />
        <LazyImage src={Illustration} alt="illustration" className="login_illustration" />
      </div>
    </React.Fragment>
  )
}

export default Login