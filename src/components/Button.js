import React from 'react'

function Button({type, name}) {
  return (
    <div>
      <button type={type}   className="custom-btn btn">{name}</button>
    </div>
  )
}

export default Button
