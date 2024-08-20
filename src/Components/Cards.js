import React from 'react';
import './Cards.css';

const Cards = () => {
  const cardsData = [
    { title: 'Pillows', link: '#', className: 'card-1' },
    { title: 'Sheets & Duvet Covers', link: '#', className: 'card-2' },
    { title: 'Comforters', link: '#', className: 'card-3' },
  ];

  return (
    <div className="cards-container">
      {cardsData.map((card, index) => (
        <div key={index} className={`card ${card.className}`}>
          <div className="card-content">
            <h2>{card.title}</h2>
            <a href={card.link}>Shop Now</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
