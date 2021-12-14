import React from 'react'
import './AboutItem.css'

const AboutItem = ({imgUrl, text, onClick}) => {
  return (
    <div className="aboutItem">
      <img className="aboutItemImg" src={imgUrl} alt="" onClick={onClick}/>
      <h3 className="clickText" onClick={onClick}>{text}</h3>
    </div>
  )
}

export default AboutItem
