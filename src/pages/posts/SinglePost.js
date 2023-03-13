import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {setActiveCategories} from "../../redux/slices/categoriesSlice";



function SinglePost() {
    const dispatch = useDispatch();

    const {'*': p1, p2} = useParams()
    console.log(p1);
useEffect(()=>{
dispatch(setActiveCategories(p1))
},[])

  return (
    <div>
      <h4>Single</h4>

    </div>
  )
}

export default SinglePost
