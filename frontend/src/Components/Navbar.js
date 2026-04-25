import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Navbar.css";

function Navbar() {
   return (
      <div className="navbar">
         <Link to="/" className="logo-text">
            Placement<span>Prep</span>
         </Link>
         <div className="menu">
            <ul>
               <Link to="/">Home</Link>
               <Link to="/aptitude">Aptitude</Link>
               <Link to="/dsa">Coding</Link>
               <Link to="/resources">Resources</Link>
               <div className="button">
                  <input type="text" placeholder="Any Questions"></input>
                  <button>Search</button>
               </div>
            </ul>
         </div>
      </div>
   );
}

export default Navbar;
