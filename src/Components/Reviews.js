import React, { useState } from 'react';
import './Reviews.css';

const Reviews = () => {
  const reviewsCount = 3;
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      title: 'Best pillow I’ve ever had!',
      text: 'Been sleeping on this little cloud for a month now and I LOVE it! It’s so so soft and makes me feel like a well rested baby. Thank you Pillows.com!',
      name: 'Jessica R.',
    },
    {
      title: 'Finally found the perfect pillow!',
      text: 'I was a skeptic until I laid my lovely head on this pillow. I was really shocked that the pillow kept its fluff this long. I love it and will be buying more.',
      name: 'Alex S.',
    },
    {
      title: 'Seriously THE best!',
      text: 'These are the SOFTEST and coziest pillows ever! I have to get into bed fast before my dogs take them!',
      name: 'Stephanie L.',
    },
  ];

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };


  const getVisibleItems = () => {
    const firstIndex = currentIndex;
    const secondIndex = (currentIndex + 1) % reviewsCount;
    const thirdIndex = (currentIndex + 2) % reviewsCount;

    return [firstIndex, secondIndex, thirdIndex];
  };

  const visibleItems = getVisibleItems();

  return (
    <div className="reviews-container">
      <div className="reviews-header">
        <svg xmlns="http://www.w3.org/2000/svg" width="52.808" height="48.146" viewBox="0 0 52.808 48.146">
          <g transform="translate(-693.81 -2814.695)">
          <path
              className="a"
              d="M6.338,23.376a10.561,10.561,0,0,0,10.7,10.162,10.775,10.775,0,0,0,8.97-4.726,9.6,9.6,0,0,0,3.1-.006c4.042-.659,6.969-3.666,6.9-6.914a7.427,7.427,0,0,0,5.532-7.11,7.5,7.5,0,0,0-7.61-7.391c-.233,0-.465.012-.694.032V7.391A7.5,7.5,0,0,0,25.637,0a7.675,7.675,0,0,0-5.986,2.83,7.718,7.718,0,0,0-4.625-1.523A7.5,7.5,0,0,0,7.417,8.7V8.7A7.5,7.5,0,0,0,0,16.089,7.458,7.458,0,0,0,6.338,23.376Z"
              transform="matrix(-0.995, -0.105, 0.105, -0.995, 743.112, 2852.393)"
            />
            <path
              className="b zzz"
              d="M1.635,0,7.522,1.22,0,7.67,5.932,8.9"
              transform="translate(710.967 2829.803) rotate(-6)"
            />
            <path
              className="b zzz"
              d="M0,.056,4.759,0,.036,6.263l4.795-.055"
              transform="translate(721.474 2834.049) rotate(-6)"
            />
            <path
              className="b zzz"
              d="M0,.741,3.516,0,.941,5.332l3.542-.746"
              transform="translate(730.278 2837.065) rotate(-6)"
            />
            <path
              className="b"
              d="M6.338,23.376a10.561,10.561,0,0,0,10.7,10.162,10.775,10.775,0,0,0,8.97-4.726,9.6,9.6,0,0,0,3.1-.006c4.042-.659,6.969-3.666,6.9-6.914a7.427,7.427,0,0,0,5.532-7.11,7.5,7.5,0,0,0-7.61-7.391c-.233,0-.465.012-.694.032V7.391A7.5,7.5,0,0,0,25.637,0a7.675,7.675,0,0,0-5.986,2.83,7.718,7.718,0,0,0-4.625-1.523A7.5,7.5,0,0,0,7.417,8.7V8.7A7.5,7.5,0,0,0,0,16.089,7.458,7.458,0,0,0,6.338,23.376Z"
              transform="matrix(-0.995, -0.105, 0.105, -0.995, 741.772, 2854.606)"
            />
            <path
              className="a"
              d="M3.5,7A3.5,3.5,0,1,0,0,3.5"
              transform="translate(699.738 2847.258)"
            />
            <path
              className="b"
              d="M3.5,7A3.5,3.5,0,1,0,0,3.5"
              transform="matrix(-0.995, -0.105, 0.105, -0.995, 706.353, 2854.605)"
            />
            <path
              className="a"
              d="M3.495,5A2.583,2.583,0,1,0,.27,3.736"
              transform="matrix(0.966, 0.259, -0.259, 0.966, 695.617, 2856.176)"
            />
            <path
              className="b"
              d="M3.495,5A2.583,2.583,0,1,0,.27,3.736"
              transform="matrix(-0.995, -0.105, 0.105, -0.995, 699.773, 2862.017)"
            />
          </g>
        </svg>
        <h1>Happy Sleepers.</h1>
        <p>With over <b>20,000 five-star reviews</b>, don’t take our word for it. Take theirs.</p>
      </div>

      <div className="reviews-carousel">
        <div className="carousel-wrapper" style={{ transform: `translateX(0)` }}>
          {visibleItems.map((index) => (
            <div className="review-box" key={index}>
              <div className="stars">
                {[...Array(5)].map((_, starIndex) => (
                  <img 
                    src="/images/Path 55.svg" 
                    alt="Star" 
                    className="star-icon" 
                    width="30" 
                    height="28.5"
                    key={starIndex}
                  />
                ))}
              </div>
              <h3 className='highlight'>{reviews[index].title}</h3>
              <p className='review-text'>{reviews[index].text}</p>
              <p className='name'>- {reviews[index].name}</p>
            </div>
          ))}
        </div>

        <div className="carousel-dots">
          {[0, 1, 2].map((dot, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>

      <button className="reviews-button">View all Reviews</button>
    </div>
  );
};

export default Reviews;
