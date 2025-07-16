import React from 'react';
import './Scss/TiltedImage.scss';

const TiltedCard: React.FC = () => {
  return (
    <div className="tilted-wrapper">
      <img src="https://tailark.com/_next/image?url=%2Fdark-card.webp&w=3840&q=75" alt="Dashboard" />
    </div>
  );
};

export default TiltedCard;
