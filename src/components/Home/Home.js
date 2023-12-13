import React from "react";
import { Link } from "react-router-dom";
import  "./home.css";
function Home(props) {
  return (
    <div className="my">
       <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2>
       <br />
      <br />
      <br />

     
      <div>
       <button><h1>
          <Link to="/login">Login</Link>
        </h1></button>
        <br />
        <button><h1>
          <Link to="/signup">Signup</Link>
        </h1></button>
      </div>

     
    </div>
  );
}

export default Home;
