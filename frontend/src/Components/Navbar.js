import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/Navbar.css";

function Navbar() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   };

   return (
      <div className="navbar">
         <Link to="/" className="logo-text">
            Placement<span>Prep</span>
         </Link>
         
         <div className={`hamburger ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
         </div>

         <div className={`menu ${isMenuOpen ? "active" : ""}`}>
            <ul>
               <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
               <li><Link to="/aptitude" onClick={() => setIsMenuOpen(false)}>Aptitude</Link></li>
               <li><Link to="/dsa" onClick={() => setIsMenuOpen(false)}>Coding</Link></li>
               <li><Link to="/resources" onClick={() => setIsMenuOpen(false)}>Resources</Link></li>
               <li className="search-item">
                  <div className="button">
                     <input type="text" placeholder="Any Questions" />
                     <button>Search</button>
                  </div>
               </li>
            </ul>
         </div>
      </div>
   );
}

export default Navbar;
