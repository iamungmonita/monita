
import React, { useContext } from 'react'
import style from '/Users/ungmonita/my-website/src/Style/Sidebar.module.scss'
import { GlobalState} from '../Goblal/GlobalState'
import Drop from '../Icons/Drop'

const Sidebar = () => {
  const {categories} = useContext(GlobalState)
  return (
    <div>
       <div className="">
            <ul className={style.container}>
              {categories.map((cat,index) => <li key={index}><a href="#">{cat.title}</a><Drop/></li>)}
            </ul>
        </div>
    </div>
  )
}

export default Sidebar
