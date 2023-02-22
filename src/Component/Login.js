import React from 'react'
import style from '/Users/ungmonita/my-website/src/Style/Login.module.scss'
import Register from './Register'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className={ `bg  ${style.green}` }>
      <h2>Login</h2>
      <Link to='/Register'>Register</Link>   
    </div>
  )
}

export default Login
