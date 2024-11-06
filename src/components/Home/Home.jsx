import React from 'react';
import './Home.css'; // Import CSS for styling
import Login from '../modals/login';
import SignUp from '../modals/signup';

const Home = () => {
  return (
    <div className="hero-section">
      <nav className="navbar">
        <input type="text" placeholder="Search For Music, Artists, ..." className="search-bar" />
        <div className="nav-links">
          {/* <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
          <a href="#premium">Premium</a> */}
          {/* <button href="#login" id="login-btn">Login</button> */}
					<Login />
          {/* <button href="#signup" id="signup-btn">Sign Up</button> */}
					or
					<SignUp />
        </div>
      </nav>
      <div className="hero-content">
        <h1>
          All the <span className="gradient-text">Best Songs</span> <br />
          in One Place
        </h1>
        <p>
          On our website, you can access an amazing collection of popular and new songs. Stream your favorite tracks in high quality and enjoy without interruptions. Whatever your taste in music, we have it all for you!
        </p>
        <div className="hero-buttons">
          <button className="btn discover-btn">Discover Now</button>
          <button className="btn create-playlist-btn">Create Playlist</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
