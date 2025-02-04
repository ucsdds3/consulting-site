// src/Components/Card.tsx
import React from "react";

interface CardProps {
  title: string;
  imageSrc: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, imageSrc, description }) => {
  return (
    <div className="bg-black text-white p-4 rounded-lg shadow-lg border border-white relative">
      <div className="absolute top-4 right-4 flex space-x-2">
        <span className="w-3 h-3 bg-[#F58134] rounded-full"></span>
        <span className="w-3 h-3 bg-[#11B3C9] rounded-full"></span>
        <span className="w-3 h-3 bg-[#434343] rounded-full"></span>
      </div>
      <div
        className="w-80 h-4 mb-2"
        style={{
          backgroundColor: "#A7A7A7",
          opacity: 0.3,
          borderRadius: "370px",
        }}
      ></div>
      <div className="flex items-center justify-between mb-2">
        <span
          className="text-xl font-normal"
          style={{
            fontFamily: "'Albert Sans', sans-serif",
            color: "white",
            lineHeight: "70px",
          }}
        >
          {title}
        </span>
      </div>
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-56 object-cover rounded-md mb-2"
        style={{ borderRadius: "8px" }}
      />
      <p
        className="text-sm"
        style={{
          fontFamily: "'Albert Sans', sans-serif",
          color: "white",
          lineHeight: "25px",
        }}
      >
        {description}
      </p>
    </div>
  );
};

export default Card;
