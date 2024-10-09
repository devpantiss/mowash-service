// components/FlipCard.tsx
import React from "react";

interface FlipCardProps {
  cardNumber: string;
  validThru: string;
  name: string;
}

const FlipCard: React.FC<FlipCardProps> = ({ cardNumber, validThru, name }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front bg-gray-800 text-white rounded-lg shadow-lg">
          <p className="heading">MASTERCARD</p>
          <svg className="logo" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 48 48">
            <path fill="#ff9800" d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z" />
            <path fill="#d50000" d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z" />
            <path fill="#ff3d00" d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z" />
          </svg>
          <p className="number">{cardNumber}</p>
          <p className="valid-thru">VALID THRU</p>
          <p className="date">{validThru}</p>
          <p className="name">{name}</p>
        </div>
        <div className="flip-card-back">
          <div className="strip"></div>
          <div className="mstrip"></div>
          <div className="sstrip"></div>
          <p className="code">***</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
