import React, { useState } from 'react';
import './Resorts.css'; // External CSS file for styling

const Resorts = () => {
  return (
    <div className="container">
      <div className="image-box">
        <img src='/images/AdobeStock_129081408.png' alt="Resort" />
      </div>
      <div className="carousel-box">
        <div className="carousel-box-heading">
          <div className='heading-column'>
            <p className='resorts-subheading'>Featured Hotel Bedding</p>
            <h2 className='resorts-heading-title'>Holiday Inn Hotel & Resorts®</h2>
          </div>
          <div className='heading-column'>
            <img src='/images/Component 10 – 3.svg' className='spinning-icon' alt="Spinning Icon" />
          </div>
        </div>
        <div className="carousel-row">
          <Carousels />
        </div>
        <button className='resort-button'>SHOP ALL HOLIDAY INN® BEDDING</button>
      </div>
    </div>
  );
};

const Carousels = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      imageSrc: '/images/AdobeStock_750144393.jpeg',
      carouselbadgeText: '5% OFF',
      heading: 'Soft and Firm Combo Pack (Includes 2 Pillows)',
      paragraph: 'SOFT AND FIRM SUPPORT',
      additionalParagraph: 'From $132.98',
      originalPrice: '$139.98'
    },
    {
      imageSrc: '/images/AdobeStock_190107415.jpeg',
      carouselbadgeText: 'BACK IN STOCK!',
      heading: 'Holiday Inn ® Touch of Down ® Soft Support Pillow',
      paragraph: 'SOFT SUPPORT',
      additionalParagraph: 'From $69.99',
      originalPrice: ''
    }
  ];

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousels-container">
      <div className="carousel">
        <CarouselItem
          imageSrc={items[currentIndex].imageSrc}
          carouselbadgeText={items[currentIndex].carouselbadgeText}
          heading={items[currentIndex].heading}
          paragraph={items[currentIndex].paragraph}
          additionalParagraph={items[currentIndex].additionalParagraph}
          originalPrice={items[currentIndex].originalPrice}
          isFirstItem={currentIndex === 0}
        />
      </div>
      <div className="carousel second-carousel">
        <CarouselItem
          imageSrc={items[(currentIndex + 1) % items.length].imageSrc}
          carouselbadgeText={items[(currentIndex + 1) % items.length].carouselbadgeText}
          heading={items[(currentIndex + 1) % items.length].heading}
          paragraph={items[(currentIndex + 1) % items.length].paragraph}
          additionalParagraph={items[(currentIndex + 1) % items.length].additionalParagraph}
          originalPrice={items[(currentIndex + 1) % items.length].originalPrice}
          isFirstItem={false}
        />
      </div>
      <div className="carousel-controls">
        <img src='/images/chevron-left.svg' className="prev" alt="Previous" onClick={handlePrevClick} />
        <img src='/images/chevron-right.svg' className="next" alt="Next" onClick={handleNextClick} />
      </div>
    </div>
  );
};

const CarouselItem = ({ imageSrc, carouselbadgeText, heading, paragraph, additionalParagraph, originalPrice, isFirstItem }) => {
  return (
    <div className="carousel-item">
      <div className="image-container">
        <img src={imageSrc} alt={heading} />
        <div className={`carouselbadge ${isFirstItem ? 'red-badge' : 'blue-badge'}`}>{carouselbadgeText}</div>
      </div>
      <h3 className='resort-item-title'>{heading}</h3>
      <p className='resort-item-description'>{paragraph}</p>
      <div className="price-container">
        <p className={`resort-item-price ${isFirstItem ? 'red-price' : 'blue-price'}`}>{additionalParagraph}</p>
        {isFirstItem && <p className='resort-item-price original-price'>{originalPrice}</p>}
      </div>
    </div>
  );
};

export default Resorts;
