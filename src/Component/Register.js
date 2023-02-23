import React from 'react'
import style from '/Users/ungmonita/my-website/src/Style/Login.module.scss'

const Register = () => {
  return (
    <div className="login">
    <div className={ `${style.login} login` }>
    <h2>Register</h2>

    <form action="">
      <div className={`${style.url}`}>
      <label htmlFor="">Your deft URL</label>
      <input type="email" placeholder="your email" />
      </div>
      <div className={`${style.right}`}>
        <a href="#">Forget your name? </a>
      </div>
      <div>
        <input className='btn-primary' type="submit" value='Register' />
      </div>
      <div>
      {/* <Link to='/Register'> <input className={`btn-secondary ${style.border}`} type="submit" value='New here? Start free trial?' /></Link>    */}
      </div>
    </form>

  </div>
 </div>
  )
}

export default Register
