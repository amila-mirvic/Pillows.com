import React, { useState } from 'react';
import './PerfectPillow.css';

const productsData = [
  { id: 1, image: '/images/AdobeStock_643000549.jpeg', hoverImage: '/images/AdobeStock_315871979.jpeg', badge: 'FEATURED AT MANY HOTELS', title: 'Down Dreams ® Classic Firm Pillow', description1: 'MEDIUM SUPPORT', description2: 'From $74.99' },
  { id: 2, image: '/images/AdobeStock_272948044.jpeg', hoverImage: '/images/AdobeStock_152833289.jpeg', badge: '', title: 'Down Dreams ® Classic Soft Pillow', description1: 'SOFT SUPPORT', description2: 'From $69.99' },
  { id: 3, image: '/images/AdobeStock_208248729.jpeg', hoverImage: '/images/AdobeStock_303487904.jpeg', badge: 'HOLIDAY INN EXPRESS®', title: 'Holiday Inn Express ® Soft Support Pillow', description1: 'SOFT SUPPORT', description2: '$69.99', description3: '10% OFF WHEN YOU BUY 2' },
  { id: 4, image: '/images/AdobeStock_802952697.jpeg', hoverImage: '/images/AdobeStock_410861199.jpeg', badge: 'MARRIOTT®', title: 'Down Alternative Eco Standard Pillow', description1: 'MEDIUM SUPPORT', description2: 'From $44.99' },
];

const PerfectPillow = () => {
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [activeFilter, setActiveFilter] = useState('Back Sleeper');

  const filterProducts = (filter, label) => {
    let filtered;
    if (label === 'Side Sleeper') {
      filtered = productsData.slice(0, 2); 
    } else {
      filtered = filter ? productsData.filter(product => product.badge.toLowerCase() === filter.toLowerCase()) : productsData;
    }
    setFilteredProducts(filtered);
    setActiveFilter(label);
  };

  return (
    <div className="perfect-pillow">
      <p className='perfect-subheading'>Find the perfect pillow for you.</p>
      <h2 className='perfect-heading'>What kind of sleeper are you?</h2>

      <div className="filters">
        <button
          className={activeFilter === 'Back Sleeper' ? 'active' : ''}
          onClick={() => filterProducts('', 'Back Sleeper')}
        >
          Back Sleeper
        </button>
        <button
          className={activeFilter === 'Side Sleeper' ? 'active' : ''}
          onClick={() => filterProducts('', 'Side Sleeper')}
        >
          Side Sleeper
        </button>
        <button
          className={activeFilter === 'Stomach Sleeper' ? 'active' : ''}
          onClick={() => filterProducts('MARRIOTT®', 'Stomach Sleeper')}
        >
          Stomach Sleeper
        </button>
        <button
          className={activeFilter === 'All Positions Sleeper' ? 'active' : ''}
          onClick={() => filterProducts('FEATURED AT MANY HOTELS', 'All Positions Sleeper')}
        >
          All Positions Sleeper
        </button>
      </div>

      <div className="products">
        {filteredProducts.map((product, index) => (
          <div key={product.id} className={`product-box ${index === 2 ? 'product-3' : ''}`}>
            <div className="image-container">
              <img src={product.image} alt={product.title} className="default-image" />
              <img src={product.hoverImage} alt={`${product.title} Hover`} className="hover-image" />
              <div className="badge">{product.badge}</div>
            </div>
            <h3 className='perfect-title'>{product.title}</h3>
            <p className='perfect-description'>{product.description1}</p>
            <div className="price-container">
              {index === 2 && <p className='perfect-price red-price'>From $62.99</p>}
              <p className='perfect-price'>{product.description2}</p>
            </div>
            <p className='perfect-offer'>{product.description3}</p>
          </div>
        ))}
      </div>

      <button className="view-more">SHOP ALL BACK SLEEPER PILLOWS</button>
    </div>
  );
};

export default PerfectPillow;
