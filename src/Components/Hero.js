import React from "react";
import "./Hero.css";

function Hero() {
return (
<div className="hero">
    <div className="call-to-action">

        <h2 className="hero-heading">Shop Hotel Pillows</h2>
        <p className="hero-italic">Experience hotel relaxation in the comfort of your home.</p>
        <p className="hero-paragraph">Bring the same bedding featured in your favorite hotel or resort to your home. Find your favorite pillow from the most popular hotel chains: <b> Marriott ®, Hampton Inn ®, Hilton ®, Four Seasons ®, Ritz-Carlton ® </b>, and so much more!</p>

        <div className="dual-button">

            <button className="button">SHOP HOTEL PILLOWS</button>
            <button className="button">FIND YOUR DREAM PILLOW</button>

        </div>

    </div>
</div>

);
}


export default Hero;