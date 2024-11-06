import React from 'react';
import './Sidebar.css'; // Import a CSS file for styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Quad_Beat</h2>
      </div>
      <div className="sidebar-section">
        <h4>Menu</h4>
        <ul>
          <li className="sidebar-item">
            <span className="icon">🏠</span> Home
          </li>
          <li className="sidebar-item">
            <span className="icon">🔍</span> Discover
          </li>
          <li className="sidebar-item">
            <span className="icon">🎵</span> Albums
          </li>
          <li className="sidebar-item">
            <span className="icon">👤</span> Artists
          </li>
        </ul>
      </div>
      <div className="sidebar-section">
        <h4>Library</h4>
        <ul>
          <li className="sidebar-item">
            <span className="icon">🕒</span> Recently Added
          </li>
          <li className="sidebar-item">
            <span className="icon">🔥</span> Most played
          </li>
        </ul>
      </div>
      <div className="sidebar-section">
        <h4>Playlist and favorite</h4>
        <ul>
          <li className="sidebar-item">
            <span className="icon">❤️</span> Your favorites
          </li>
          <li className="sidebar-item">
            <span className="icon">📂</span> Your playlist
          </li>
          <li className="sidebar-item">
            <span className="icon">➕</span> Add playlist
          </li>
        </ul>
      </div>
      <div className="sidebar-section">
        <h4>General</h4>
        <ul>
          <li className="sidebar-item">
            <span className="icon">⚙️</span> Setting
          </li>
          <li className="sidebar-item">
            <span className="icon">🚪</span> Logout
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
