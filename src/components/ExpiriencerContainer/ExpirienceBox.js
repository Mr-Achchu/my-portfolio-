import React from 'react'
import './Expirience.css'

const ExpirienceBox = ({number,title,style}) => {
  return (
    <div style={{...style}} className="Expirience">
        <h1>{number}</h1>
        <p>{title}</p>
    </div>
  )
}

export default ExpirienceBox