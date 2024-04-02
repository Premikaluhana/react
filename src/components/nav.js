import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Nav = () => {
  return (
    <nav>
      <motion.div
      initial={{scale:0}}
      animate={{scale:1}}
      transition={{duration:1}}>
        <h1 className="logo">MixMaster</h1>
      </motion.div>
      <ul className="menu">
        <li className="Ahome">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/newslatter">Newslatter</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
