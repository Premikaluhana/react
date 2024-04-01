import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
      <div>
        <h1 className="logo">MixMaster</h1>
      </div>
      <ul className="menu">
        <li className="Ahome"><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/newslatter'>Newslatter</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
