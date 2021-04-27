import React from "react";
import Navbar from "../navbar/Navbar";
import './Header.scss';

const Header: React.FC = () => (
  <header className="main-header">
    <h1 className="header-title">
      Hired <span>Fired</span>
    </h1>
    <Navbar />
  </header>
)

export default Header;