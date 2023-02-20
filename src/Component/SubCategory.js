import React, { useContext } from 'react'
import style from '/Users/ungmonita/my-website/src/Style/SubCategory.module.scss'
import { useState } from 'react'
import { GlobalState } from '../Goblal/GlobalState'

const SubCategory = () => {
  const [subCatgegory, setSubCategory] = useState([
    {id: 1, title: 'Service', description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
    {id: 2, title: 'Sale'},
    {id: 3, title: 'Platform'},
    {id: 4, title: 'Market Place', description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
  ])
  const {showScreen} = useContext(GlobalState)
  return (
    <div className={style.bg}>
      {subCatgegory.map((el,index) => <p key={index}>{el.title} {el.description}</p>)}
                    
    </div>
  )
}

export default SubCategory
