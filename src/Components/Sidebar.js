// src/components/Sidebar.js
import React from 'react';
import { FaHome, FaEnvelope, FaChartLine, FaCog } from 'react-icons/fa';


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="icon">
        <FaHome />
      </div>
      <div className="icon">
        <FaEnvelope />
      </div>
      <div className="icon">
        <FaChartLine />
      </div>
      <div className="icon">
        <FaCog />
      </div>
    </div>
  );
};

export default Sidebar;
