import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";

import { MdWeb, MdPalette } from "react-icons/md";
import { GrDomain } from "react-icons/gr";
import {  FiSettings } from "react-icons/fi";
import { FaFacebook, FaSearchDollar, FaCartArrowDown } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import "../index.css";
import "./Services.css"
const servicesData = [
  { id: 1, title: "Web Development", description: "Crafting responsive and user-friendly websites.", icon: <MdWeb size={32} /> },
  { id: 2, title: "UI/UX Design", description: "Creating intuitive and visually appealing user interfaces.", icon: <MdPalette size={32} /> },
  { id: 3, title: "SEO Optimization", description: "Optimizing your website for search engines.", icon: <FaSearchDollar size={32} /> },
  { id: 4, title: "Social Media Integration", description: "Integrating social media features into your web presence.", icon: <FaFacebook size={32} /> },
  { id: 5, title: "Custom Logo", description: "Designing a unique and memorable logo for your brand.", icon: <SiAdobephotoshop size={32} /> },
  { id: 6, title: "E-commerce Integration", description: "Setting up online shopping capabilities for your business.", icon: <FaCartArrowDown size={32} /> },
  { id: 7, title: "Web-Hosting", description: "Providing reliable hosting solutions for your website.", icon: <GrDomain size={32} /> },
  { id: 8, title: "Webpage Maintenance", description: "Ensuring your website stays up-to-date and secure.", icon: <FiSettings size={32} /> },
];

const ServicesPage = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const controls = useAnimation();

  const handleServiceToggle = (serviceId) => {
    setSelectedServices((prevServices) =>
      prevServices.includes(serviceId)
        ? prevServices.filter((prevService) => prevService !== serviceId)
        : [...prevServices, serviceId]
    );
  };

  const staggerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const backgroundVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 2, ease: "easeInOut" },
    },
  };

  const backgroundAnimation = {
    animate: { rotate: 360, scale: 1.2, transition: { repeat: Infinity, duration: 20, ease: "linear" } },
  };

  const animateBackground = async () => {
    await controls.start("animate");
  };

  return (
    <motion.div
    className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    initial="initial"
    animate={controls}
  >
      {/* Background elements */}
      {["from-blue-900 to-indigo-800", "from-yellow-500 to-purple-700"].map((gradient, index) => (
        <motion.div
          key={index}
          variants={backgroundVariants}
          animate="animate"
          className={`absolute inset-0 bg-gradient-to-br ${gradient} mix-blend-multiply`}
        ></motion.div>
      ))}
      <motion.div
        className="absolute inset-0"
        variants={backgroundAnimation}
        animate="animate"
        onAnimationStart={animateBackground}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-700 opacity-50 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500 to-indigo-800 opacity-50 mix-blend-multiply"></div>
      </motion.div>

      {/* Service cards */}
      <motion.div
        variants={staggerVariants}
        initial="hidden"
        animate="visible"
        onAnimationStart={animateBackground}
        className="relative z-10 max-w-lg w-full bg-white p-8 rounded-md shadow-md text-black mb-8 mt-20 overflow-hidden cardBG"
      >
        <h1 className="text-4xl font-semibold text-black text-center mb-6 TopText">What We Offer</h1>
        <div className="flex flex-wrap gap-8 justify-center ">
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              className="bg-white p-4 rounded-md shadow-md flex flex-col items-center cursor-pointer w-40 border-2 border-black space-x-2"
              style={{ minHeight: "200px" }}
              onClick={() => handleServiceToggle(service.id)}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              transition={{ duration: 0.5, type: "spring", stiffness: 120, damping: 12 }}
            >
              <motion.span
                role="img"
                aria-label={service.title}
                className="text-4xl mb-2"
                whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
              >
                {service.icon}
              </motion.span>
              <h2 className="text-lg font-semibold mb-2 text-center">{service.title}</h2>
              <p className="text-sm text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ServicesPage;




