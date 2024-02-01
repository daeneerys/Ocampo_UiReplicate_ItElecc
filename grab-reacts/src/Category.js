import React from 'react'

const Category = (props) => {
  return (
           <div className='category'>
         <img src = {props.categoryObj.photoName} alt = {props.name}></img>
         <h3>{props.categoryObj.name}</h3>
     </div>
  )
}


export default Category