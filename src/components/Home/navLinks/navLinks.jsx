import React from 'react';
import './navLink.css'; 

const navLink = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="navLink-overlay">
      <div className="navLink-content">
        <button className="close-button" onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
};

export default navLink;
