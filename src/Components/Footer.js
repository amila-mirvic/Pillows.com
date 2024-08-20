import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>CUSTOMER CARE</h3>
          <p><b>Email: </b>sleepbetter@pillows.com</p>
          <p><b>Call: </b>1-800-720-6973<small>  M-F 8am-4pm EST</small></p>
          <p><b>Text: </b>1-800-000-0000</p>
          <a href='#'>Customer Service</a>
          <a href='#'>Track My Order</a>
          <a href='#'>Returns & Exchanges</a>
          <a href='#'>Shipping Information</a>
          <a href='#'>FAQs</a>
          <a href='#'>International Orders</a>
          <a href='#'>Gift Certificates</a>
        </div>
        <div className="footer-column">
          <h3>About Us</h3>
          <a href='#'>Our Story</a>
          <a href='#'>Reviews</a>
          <a href='#'>Blog</a>
          <a href='#'>Satisfaction Guarantee</a>
          <a href='#'>Why Shop with Us</a>
          <a href='#'>Stadd Picks</a>
          <a href='#'>Pillow Finder</a>
        </div>
        <div className="footer-column">
          <h3>Partner</h3>
          <a href='#'>Wholesale</a>
          <a href='#'>Affiliates</a>
          <a href='#'>Become a Vendor</a>
          <a href='#'>PR</a>
        </div>
        <div className="footer-column">
          <h2>Pillow Talk.</h2>
          <p>You’re going to want in. Sign up to stay up-to-date on the latest news, product releases and exclusive deals!</p>
          <div className="search-bar">
            <input type="text" placeholder="Enter your email address" />
            <button>Sign up</button>
          </div>
          <h2>Let’s Be Friends</h2>
          <div className="social-icons">
            {/* Add your social media icons here */}
            <a href='#'><div className="social-icon"><img src='/images/Icon awesome-facebook-f.svg'></img></div></a>
            <a href='#'><div className="social-icon"><img src='/images/Icon awesome-instagram.svg'></img></div></a>
            <a href='#'><div className="social-icon"><img src='/images/Icon awesome-pinterest-p.svg'></img></div></a>
            <a href='#'><div className="social-icon"><img src='/images/Icon awesome-twitter.svg'></img></div></a>
            <a href='#'><div className="social-icon"><img src='/images/Icon awesome-youtube.svg'></img></div></a>
            <a href='#'><div className="social-icon"><img src='/images/Icon awesome-google-plus-g.svg'></img></div></a>
            
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className='footer-bottom-text'>© Pillows.com All Rights Reserved. 
        <a href='#' className='footer-bottom-links'>Privacy Policy</a>
        <a href='#' className='footer-bottom-links'>Terms of Use</a>
        <a href='#' className='footer-bottom-links'>Coupon Policy</a>
        <a href='#' className='footer-bottom-links'>Safe & Secure Shopping</a></p>
      </div>
    </footer>
  );
};

export default Footer;
