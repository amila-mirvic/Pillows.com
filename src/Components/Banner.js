import React from 'react';
import './Banner.css'; // Import the CSS file for styling

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <p className='banner-subheading'>Need help picking out a pillow?</p>
        <h2 className='banner-heading'>Find the perfect pillow for you <br></br> with our Pillow Finder.</h2>
        <button className='banner-button'>LET’S GET STARTED</button>
      </div>
    </div>
  );
};

export default Banner;
