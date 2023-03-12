import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import { Routes, Route } from "react-router-dom";

function List({list}) {
  return (
    <div className='list'>
       

        {list.map(item => (<Link to={item.link} key={item.id}><Card  name ={item.name}
            description={item.description} img={item.img}></Card></Link>))}

     
     
    </div>
  )
}

export default List
