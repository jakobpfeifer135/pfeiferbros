// import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css"; // Import custom styles
import { FaReact } from "react-icons/fa";
const Nav = () => {
  return (

<header className="bg-gradient-radial relative overflow-hidden">
  <nav className="container mx-auto flex items-center p-4 md:p-9 transition-all duration-500">
    {/* Logo */}
    <Link
      to="/"
      className="text-white text-4xl font-bold flex items-center space-x-2 mr-6"
    >
      <span className="no-wrap flex items-center hover:text-[#b34bee]">
        <span  className="no-wrap">Pfeifer</span>
        <FaReact className="text-[#b34bee] text-4xl mx-2" />
        <span className="no-wrap"> Bros.</span>
      </span>
    </Link>

    {/* All Menu Items */}
    <div style={{ fontFamily: 'DM Sans, sans-serif'}}

 className="md:flex items-center space-x-6 mt-4 md:mt-0 font-extralight">
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/services">SERVICES</NavLink>
      {/* <NavLink to="/about">ABOUT</NavLink> */}
      <NavLink to="/contact">CONTACT</NavLink>

    </div>
  </nav>
</header>

  );
};

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-white hover:text-[#E74CED] transition duration-500"
  >
    {children}
  </Link>
);

export default Nav;





