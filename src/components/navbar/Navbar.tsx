import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar: React.FC = () => (
  <nav className="nav">
      <NavLink className="nav__link" activeClassName="nav__link--active" to="/hired" >
        <span>Hired</span>
        <div className="nav__link__bar"></div>
      </NavLink>
      <NavLink className="nav__link" activeClassName="nav__link--active"  exact to="/" >
        <span>Curriculums</span>
        <div className="nav__link__bar"></div>
      </NavLink>
      <NavLink className="nav__link" activeClassName="nav__link--active" to="/fired" >
        <span>Fired</span>
        <div className="nav__link__bar"></div>
      </NavLink>
  </nav>
)   

export default Navbar;
