import React from 'react';
import './Weekly.css'; 
import PHimg from '../../assets/placeHolderIcon.jpeg'

const songs = [
  { title: "Whatever It Takes", artist: "Imagine Dragons", image: {PHimg} },
  { title: "Skyfall", artist: "Adele", image: {PHimg} },
  { title: "Superman", artist: "Eminem", image: {PHimg} },
  { title: "Softcore", artist: "The Neighbourhood", image: {PHimg} },
  { title: "The Loneliest", artist: "Måneskin", image: {PHimg} },
];

const WeeklyTopSongs = () => {
  return (
    <div className="weekly-top-songs">
      <h2>Weekly Top <span>Songs</span></h2>
      <div className="song-list">
        {songs.map((song, index) => (
          <div key={index} className="song-card">
            <img src={song.image} alt={song.title} className="song-image" />
            <div className="song-info">
              <p className="song-title">{song.title}</p>
              <p className="song-artist">{song.artist}</p>
            </div>
          </div>
        ))}
        <div className="view-all">
          <p>View All</p>
        </div>
      </div>
    </div>
  );
};

export default WeeklyTopSongs;
