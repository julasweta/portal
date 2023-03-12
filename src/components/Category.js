import React from 'react'

function Category({name, img, description}) {
  return (
    <div className='card'>
      <h2>{name}</h2>
      <div className="card-img"><img src={img} alt={name} /></div>
      <div className="card-description">{description}</div>
    </div>
  )
}

export default Category
