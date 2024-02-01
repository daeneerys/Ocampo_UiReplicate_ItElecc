import React from 'react'
import {FaCheck} from 'react-icons/fa'

const Information = (props) => {
  return (
        <> <p><FaCheck style={{color: "#00b14f", width: "13px", height: "10px"}} /><strong> {props.informationObj.traits}</strong> - {props.informationObj.description}</p></>
  )
}


export default Information