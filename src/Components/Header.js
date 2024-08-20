import React, { useState, useEffect } from "react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [offerIndex, setOfferIndex] = useState(0);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSearchToggle = () => {
    setSearchOpen(!searchOpen);
  };

  const closeSearchBox = () => {
    setSearchOpen(false);
  };

  const offers = [
    "BUY MORE SAVE MORE. Buy 2 of the same pillow Save 5%. Buy 4 of the same pillow Save 10%.",
    "LIMITED OFFER! Free shipping on orders above 100$."
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setOfferIndex((prevIndex) => (prevIndex + 1) % offers.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [offers.length]);

  return (
    <div className="header">
      <div className="pre-header">
        <div className="header-container">
          <div className="veteran-icon">
            <img alt="veteran-icon" src="/images/veteran icon.svg" /> Veteran Owned Business
          </div>
          <div className="offer">
            <p className="save-more"><b>{offers[offerIndex]}</b> <a href="#">See Details</a>.</p>
          </div>
          <div className="contact">
            <a className="header-contact" href="#">Contact Us</a>
          </div>
        </div>
      </div>

      <header className="navbar-container">
        <div className="header-row navbar-menu">
          <button className="hamburger-menu" onClick={handleMenuToggle}>
            ☰
          </button>
          <a href="#"><img src="/images/Pillows_logo.svg" alt="logo" className="logo" /></a>
        </div>
        <div className={`header-row navbar ${menuOpen ? "open" : ""}`}>
          <nav className={`navbar ${menuOpen ? "open" : ""}`}>
            <ul>
              <a href="#"><img src="/images/Pillows_logo.svg" alt="logo" className="logo-navbar" /></a>
              <li><a href="#">Pillows</a></li>
              <li><a href="#">Hotel Bedding</a></li>
              <li><a href="#">Shop By Brand</a></li>
              <li><a href="#">Shop All Products</a></li>
              <li><a href="#">Pillow Finder</a></li>
              <li><a href="#">Sale</a></li>
            </ul>
          </nav>
        </div>
        <div className="header-row">
          <div className="icon-links">
            <a href="#" className="search" onClick={handleSearchToggle}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
              </svg>
            </a>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
              </svg>
            </a>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
              </svg>
            </a>
          </div>
        </div>
      </header>

      {searchOpen && (
        <div className="search-box">
          <input type="text" placeholder="Search Pillows.com" />
          <button className="close-button" onClick={closeSearchBox}>
            <img alt="icon" src="/images/x-lg.svg" />
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
