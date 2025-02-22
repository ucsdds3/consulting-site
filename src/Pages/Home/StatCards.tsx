// src/Components/Card.tsx
import { useNavigate } from "react-router-dom";
import React from "react";

interface CardProps {
  title: string;
  imageSrc: string;
  description: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ title, imageSrc, description, link }) => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-black text-white p-4 rounded-lg shadow-lg border border-white relative cursor-pointer hover:[box-shadow:0px_0px_20px_8px_#F58134] duration-100"
      onClick={() => navigate("/our-team")}
    >
      <div className="absolute top-4 right-4 flex space-x-2">
        <span className="w-3 h-3 bg-[#F58134] rounded-full"></span>
        <span className="w-3 h-3 bg-[#11B3C9] rounded-full"></span>
        <span className="w-3 h-3 bg-[#434343] rounded-full"></span>
      </div>
      <div
        className="w-80 h-4 mb-2"
        style={{
          backgroundColor: "#303030",
          borderRadius: "370px",
          flex: 1,
          alignItems: "center"
        }}
      >
        <p className="text-white opacity-100 absolute text-xs ml-2 font-albert-sans  hover:text-gray-400">
          {link}
        </p>
      </div>

      <div className="flex items-center justify-between mb-2">
        <span
          className="text-xl font-normal"
          style={{
            fontFamily: "'Albert Sans', sans-serif",
            color: "white",
            lineHeight: "70px"
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
          lineHeight: "25px"
        }}
      >
        {description}
      </p>
    </div>
  );
};

export default Card;
