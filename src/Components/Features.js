import React from "react";
import './Features.css'

const Features = () => {
    const featuredcards = [
      { iconUrl: '/images/Group 18.svg', text: '30 Day Sleep Better Guarantee' },
      { iconUrl: '/images/Group 15.svg', text: 'Fastest Delivery' },
      { iconUrl: '/images/Group 16.svg', text: 'Free Returns & Exchanges' },
      { iconUrl: '/images/Group 21.svg', text: 'Low Price Guarantee' }
    ];
  
    return (
      <div className="featured-card-section">
        {featuredcards.map((card, index) => (
          <div className="featured-card" key={index}>
            <div className="featured-card-content">
              <img src={card.iconUrl} alt={card.text} className="featured-card-icon" />
              <span className="featured-card-text">{card.text}</span>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Features;