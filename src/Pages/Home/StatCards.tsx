// src/Components/Card.tsx
import { useNavigate } from "react-router-dom";
import React from "react";
import { useTheme } from "./useTheme";

interface CardProps {
  title: string;
  imageSrc: string;
  description: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ title, imageSrc, description, link }) => {
  const navigate = useNavigate();
  const { isDark } = useTheme();

  return (
    <div
      className={`p-4 rounded-lg shadow-lg border relative cursor-pointer duration-100 ${
        isDark
          ? "bg-black text-white border-white hover:[box-shadow:0px_0px_20px_8px_#F58134]"
          : "bg-white text-black border-gray-300 hover:[box-shadow:0px_0px_20px_8px_#11B3C9]"
      }`}
      onClick={() => navigate("/our-team")}
    >
      <div className="absolute top-4 right-4 flex space-x-2">
        <span className="w-3 h-3 bg-[#F58134] rounded-full"></span>
        <span className="w-3 h-3 bg-[#11B3C9] rounded-full"></span>
        <span className="w-3 h-3 bg-[#434343] rounded-full"></span>
      </div>
      <div
        className={`w-[80%]  h-4 mb-2 flex items-center rounded-full ${
          isDark ? "bg-[#303030]" : "bg-gray-200"
        }`}
        style={{
          borderRadius: "370px"
        }}
      >
        <p
          className={`absolute text-sm w-[70%] text-nowrap ml-2 font-albert-sans hover:cursor-pointer overflow-hidden [text-overflow:ellipsis]  ${
            isDark
              ? "text-white hover:text-gray-400"
              : "text-black hover:text-gray-600"
          }`}
        >
          {link}
        </p>
      </div>

      <div className="flex items-center justify-between mb-2">
        <span
          className="text-2xl font-normal"
          style={{
            fontFamily: "'Albert Sans', sans-serif",
            color: isDark ? "white" : "black",
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
        className="text-lg"
        style={{
          fontFamily: "'Albert Sans', sans-serif",
          color: isDark ? "white" : "black",
          lineHeight: "25px"
        }}
      >
        {description}
      </p>
    </div>
  );
};

export default Card;
