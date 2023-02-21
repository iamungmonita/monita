import React, { useEffect, useState, useContext } from 'react'
import style from '/Users/ungmonita/my-website/src/Style/Header.module.scss'
import list from '/Users/ungmonita/my-website/src/Icons/icon-list.svg'
import remove from '/Users/ungmonita/my-website/src/Icons/icon-remove.svg'
import Sidebar from './Sidebar'
import { GlobalState } from '../Goblal/GlobalState'
import {Route, Routes, Link } from 'react-router-dom'
import Login from './Login'
const Header = () => {


  const {categories} = useContext(GlobalState)

  
  const show = () => {
    const cross = document.querySelector('.icon-cross');
    const sidebar = document.querySelector('.sidebar');
    const list = document.querySelector('.icon-list');
    console.log(cross.classList);
    cross.classList.add('icon-add');
    sidebar.classList.add('icon-add');
    list.classList.add('icon-remove');
    list.classList.remove('mobile-add');
    console.log(list.classList);
  }
  const unshow = () => {
    const cross = document.querySelector('.icon-cross');
    const list = document.querySelector('.icon-list');
    const sidebar = document.querySelector('.sidebar');
    cross.classList.add('icon-remove');
    cross.classList.remove('icon-add');
    sidebar.classList.add('icon-remove');
    sidebar.classList.remove('icon-add');
    list.classList.remove('icon-remove');
    list.classList.add('mobile-add');
    console.log(cross.classList);
  }
  return (

    <div className='container'>
      <div className={style.container}> 
        <div className="upper">
          <nav className={style.upper}>
            <li>   <Link to='/Login'>Login</Link>  </li>
            <li><a href="#">Product support</a></li>
            <li><a href="#">Company</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">English</a></li>
          </nav>
        </div>
        <nav className={style.lower}> 
        
          <h1><a className={style.main} href="#">deft</a></h1>
          <img src={list} alt="" className="icon-list mobile-add" onClick={show}/>
          <img src={remove} alt="" className="icon-cross icon-remove" onClick={unshow}/>

          <div className="mobile-remove">
              <ul className={style.list}>
              {categories.map((cat,index) => <li key={index}><a>{cat.title}</a></li>)}
              </ul>
          </div>
        
          <div className='mobile-remove'>
            <div className={style.btn}> 
              <button className='btn-primary remove-mobile'>Start Free Trail</button>
              <button className='btn-secondary tablet-remove'>Contact Us</button>
            </div>
          </div>
        </nav> 
        <div className="sidebar icon-remove">
          <Sidebar/>
        </div>
  
       
     
        </div>
    </div>
  )
}

export default Header
