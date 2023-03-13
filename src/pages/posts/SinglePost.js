import React from 'react'
import { useParams } from 'react-router-dom';

function SinglePost() {
    const ff = useParams()
    console.log(ff);
  return (
    <div>
      <h4>Single</h4>

    </div>
  )
}

export default SinglePost
