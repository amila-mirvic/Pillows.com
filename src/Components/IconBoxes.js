import React from 'react';
import './IconBoxes.css'; 

const IconBox = ({ icon, iconboxitemheading, iconboxitemdescription }) => (
  <div className="icon-box">
    <div className="icon">{icon}</div>
    <h3 className="iconboxitemheading">{iconboxitemheading}</h3>
    <p className="iconboxitemdescription">{iconboxitemdescription}</p>
  </div>
);

const IconBoxes = () => {
  return (
   <div className='main-icon-box-container'>
    <h1 className='icon-box-heading'>We’re here to help</h1>
    <div className="icon-boxes-container">
      <IconBox
        icon={<img src="/images/bedding experts icon.svg" alt="Icon 1" />}
        iconboxitemheading="Talk to Our Bedding Experts"
        iconboxitemdescription="Looking for a particular pillow? Our expert staff can make a recommendation to meet your individual sleep needs."
      />
      <IconBox
        icon={<img src="/images/satisfaction icon.svg" alt="Icon 2" />}
        iconboxitemheading="100% Satisfaction Guarantee"
        iconboxitemdescription="If a product does not help you Sleep Better, our bedding experts can find you a product that will help you Sleep Better Guaranteed!"
      />
      <IconBox
        icon={<img src="/images/free exchange and returns icon.svg" alt="Icon 3" />}
        iconboxitemheading="Free Exchanges & Returns"
        iconboxitemdescription="You have up to 90 days to process 3 free shipping exchanges. We want you to find that perfect pillow!"
      />
    </div>
    </div>
    
  );
};

export default IconBoxes;
