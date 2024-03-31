import React, { useState } from 'react';
import './Navbar.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { Link, useNavigate } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState("false");

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const auth = localStorage.getItem('user');
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate('/signup')
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="brand">E-Com Dash</div>
        <div className={`menu ${isOpen ? 'open' : ''}`}>
          <ul>
              {auth ? 
                <>
                <li className="nav-item"><Link to="/" className="nav-link">Products</Link></li>
                <li className="nav-item"><Link to="/add-product" className="nav-link">Add Products</Link></li>
                <li className="nav-item"><Link to="/profile" className="nav-link">Profile</Link></li>
                <li className="nav-item"><Link onClick={logout} to="/signup" className="nav-link">Logout</Link></li>                             
                <li className="nav-item"><i class="fa-solid fa-user-astronaut"></i> {JSON.parse(auth).name}</li>
                </>
                  :
                <>
                <li><Link to="/signup" className="nav-link">Signup</Link></li>
                <li className="nav-item"><Link to="/login" className="nav-link">Login</Link></li>
               </>
              }
          </ul>
        </div>
        <button className={`toggle-button ${isOpen ? 'open' : ''}`} onClick={toggleNavbar}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
