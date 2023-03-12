import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';


function List({list}) {
  // list - всі категорії
   
  return (
    <div className='list'>
        <h2>List</h2>
      {list.map(item => (
        <Link to={item.link} key={item.id}>
          <Card name={item.name} description={item.description} img={item.img} ></Card>
        </Link>
      ))}

   
    </div>
  );
}

export default List;

