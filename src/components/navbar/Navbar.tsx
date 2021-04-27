import React from 'react';
import { NavLink } from 'react-router-dom'
import './Navbar.scss';

const Navbar: React.FC = () => (
  <nav className="nav-container">
      <NavLink className="nav-link" activeClassName="active" to="/hired" >
        <span>Hired</span>
        <div className="nav-link-bar"></div>
      </NavLink>
      <NavLink className="nav-link" activeClassName="active"  exact to="/" >
        <span>Curriculums</span>
        <div className="nav-link-bar"></div>
      </NavLink>
      <NavLink className="nav-link" activeClassName="active" to="/fired" >
        <span>Fired</span>
        <div className="nav-link-bar"></div>
      </NavLink>
  </nav>
)   

export default Navbar;
