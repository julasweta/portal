import React from 'react';
import { Link } from 'react-router-dom';

function CardPost({item}) {



  return (
   
        <div className='card card-post'>
      <h2>{item.name}</h2>
      <div className="card-img"><img src={item.img} alt={item.name} /></div>
      <div className="card-description">{item.description}</div>
      <Link to={`/recipes/:id/:${item.id}`}> read</Link>
  
    </div>
   
  )
}

export default CardPost
