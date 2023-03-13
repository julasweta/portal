import React from 'react';
import Button from './Button';

function Card({name, img, description, link}) {
  return (
    <div className='card'>
      <h2>{name}</h2>
      <div className="card-img"><img src={img} alt={name} /></div>
      <div className="card-description">{description}</div>

    </div>
  )
}

export default Card;
