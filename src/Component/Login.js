import React from 'react'
import style from '/Users/ungmonita/my-website/src/Style/Login.module.scss'
import { Link } from 'react-router-dom'
import { useRef } from 'react'

const Login = () => {
const inputRef = useRef()
  const submit = (e) => {
    e.preventDefault()
    console.log(inputRef.current.value);
    inputRef.current.value = ''
  }
  
  return (
   <div className="login">
      <div className={ `${style.login} login` }>
      <h2>Sign in to deft</h2>

      <form action="" onSubmit={submit}>
        <div className={`${style.url}`}>
        <label htmlFor="">Your deft URL</label>
        <input type="email" placeholder="your email" ref={inputRef}/>
        </div>
        <div className={`${style.right}`}>
          <a href="#">Forget your name? </a>
        </div>
        <div>
          <input className='btn-primary' type="submit" value='Sign In' />
        </div>
        <div>
        <Link to='/Register'> <input className={`btn-secondary ${style.border}`} type="submit" value='New here? Start free trial?' /></Link>   
        </div>
      </form>
  
    </div>
   </div>
  )
}

export default Login
