import React from 'react';
import './Brands.css';

const BrandBox = ({ text }) => {
  return (
    <div className="card-box">
      <p className='brands-name'>{text}</p>
    </div>
  );
};

const Brands = () => {
  return (
    <div className="brands-container">
      <div className="brands-heading">
        <h2>Shop bedding from other top hotel brands</h2>
      </div>
      <div className="cards-row">
        <BrandBox text="Marriott®" />
        <BrandBox text="Hilton®" />
        <BrandBox text="Hampton Inn®" />
        <BrandBox text="Comfort Inn®" />
        <BrandBox text="Four Seasons®" />
        <BrandBox text="Ritz-Carlton®" />
      </div>
      <div className="link-row">
        <a href="#" className="see-more-link">see all hotel brands</a>
      </div>
    </div>
  );
};

export default Brands;
