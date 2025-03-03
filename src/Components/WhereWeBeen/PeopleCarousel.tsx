import React, { useState } from "react";
import cardsData from "../../Pages/Home/cardsData.json";
import { useTheme } from "../../Pages/Home/useTheme";

const PeopleCarousel = () => {
  // Get theme state
  const { isDark } = useTheme();

  // Destructure the cards array
  const { cards } = cardsData;

  // Keep track of which card is being shown
  const [currentIndex, setCurrentIndex] = useState(0);

  // Helper to handle "Previous" button
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  // Helper to handle "Next" button
  const handleNext = () => {
    setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  // Current card data
  const card = cards[currentIndex];

  return (
    <div
      className={`w-full min-h-[400px] flex items-center justify-center py-12 px-4 ${isDark ? "text-white" : "text-black"}`}
    >
      {/* Container for arrows + content */}
      <div className="flex items-center max-w-5xl w-full gap-8">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className={`rounded-full p-3 ${isDark ? "hover:bg-neutral-700" : "hover:bg-neutral-200"} transition-colors`}
          aria-label="Previous"
        >
          {/* Simple Chevron Left (use any icon system you like) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        {/* Card Content */}
        <div className="flex flex-col sm:flex-row items-center justify-center rounded-xl p-6 w-full">
          {/* Left: Image */}
          <div className="sm:w-1/2 w-full flex justify-center mb-6 sm:mb-0 sm:mr-8">
            <img
              src={card.image}
              alt={card.title}
              className="rounded-xl w-[300px] h-[300px] object-cover"
            />
          </div>

          {/* Right: Text (title, description, author) */}
          <div className="sm:w-1/2 w-full text-left font-albert-sans">
            <h2
              className={`text-xl font-semibold mb-2 ${isDark ? "text-white" : "text-black"}`}
            >
              {card.title}
            </h2>
            {/* Description - Gray in dark mode, black in light mode */}
            <p
              className={`text-sm mb-4 leading-relaxed ${isDark ? "text-gray-400" : "text-black"}`}
            >
              {card.description}
            </p>
            <p
              className={`text-sm font-light ${isDark ? "text-white" : "text-black"}`}
            >
              {card.author}
            </p>
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className={`rounded-full p-3 ${isDark ? "bg-neutral-800 hover:bg-neutral-700" : "bg-neutral-200 hover:bg-neutral-300"} transition-colors`}
          aria-label="Next"
        >
          {/* Simple Chevron Right */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PeopleCarousel;
