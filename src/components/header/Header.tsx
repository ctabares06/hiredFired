import React from "react";
import Navbar from "../navbar/Navbar";
import './Header.scss';

const Header: React.FC = () => (
  <>
  <header className="header">
    <h1 className="header__title">
      Hired <span className="header__title--fixed">Fired</span>
    </h1>
  </header>
  <Navbar />
  </>
)

export default Header;