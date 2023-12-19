import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-radial relative overflow-hidden">
      <div className="container mx-auto flex items-center justify-center p-4 md:p-9 transition-all duration-500">
        {/* Social Icons */}

        <div className="social-icons">
          <a
            href="https://www.facebook.com/PfeiferBros/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:text-[#b34bee]"
          >
            <FaFacebook size={30} />
          </a>
          <a
            href="https://www.instagram.com/jakobpfeifer60/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:text-[#b34bee]"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/jakob-pfeifer-747aa4220/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:text-[#b34bee]"
          >
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;