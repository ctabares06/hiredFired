import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.scss';

const Navbar: React.FC = () => (
  <nav>
      <Link to="/hired" >Hired</Link>
      <Link to="/fired" >Fired</Link>
      <Link to="/" >Curriculums</Link>
  </nav>
)   

export default Navbar;
