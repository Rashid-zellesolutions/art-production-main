import React from 'react'
import './PrimeryButton.css';
import right from "../../Assets/right.png"

const PrimeryButton = ({
    text, 
    width, 
    height, 
    padding,
    fontSize,
    lineHeight,
    fontWeight,
    color,
    arrowTrue,
    navigateClick,
  }) => {
  return (
    <button className='main-button' 
      style={{
        width: width, 
        height: height, 
        padding: padding,
        fontSize: fontSize,
        lineHeight: lineHeight,
        fontWeight: fontWeight,
        color: color,
      }}
      onClick={navigateClick}
      >
        {text}
        {arrowTrue && <img src={right} alt="" />}
    </button>
  )
}

export default PrimeryButton
