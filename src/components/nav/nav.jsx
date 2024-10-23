import React from 'react';
import { Link } from "react-router-dom";
import "./Nav.css"; // Import custom styles

const Nav = () => {
  return (
    <header className="bg-gradient-radial relative overflow-hidden">
      <nav className="container mx-auto m-2 flex items-center transition-all duration-500">
        {/* Logo */}
       
          <span className="no-wrap flex items-center hover:text-[#b34bee]">
            <img
              src="/public/assets/Logo.png"
              alt="Pfeifer Bros Logo"
              className="w-44 h-42 mt-2" 
            />
          </span>
       

        {/* All Menu Items */}
        <div
          style={{ fontFamily: "DM Sans, sans-serif" }}
          className="md:flex items-center space-x-6 mt-4 md:mt-0 font-bold"
        >
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/services">SERVICES</NavLink>
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







