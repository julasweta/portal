import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      Home Page
      <p>for registration</p>
      <Link to="/register">Register</Link>
    </div>
  );
}

export default Home;
