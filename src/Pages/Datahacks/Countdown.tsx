import { useState, useEffect } from 'react';
import Button from "../../Components/Button";
import { useTheme } from "../Home/useTheme";

const Countdown = () => {
  const { isDark } = useTheme();

  // Function to generate custom text shadow based on color
  const getTextShadowStyle = (color) => {
    // Convert hex to rgba with opacity
    const toRGBA = (hex, opacity) => {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    };

    return {
      textShadow: `
        0 5px 20px ${toRGBA(color, 0.4)},
        0 -5px 15px ${toRGBA(color, 0.2)},
        0 0 30px ${toRGBA(color, 0.33)}
      `,
    };
  };

  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 20,
    minutes: 30,
    seconds: 30
  });

  // Add a helper function to format numbers with leading zeros
  const formatNumber = (num) => {
    return num < 10 ? `0${num}` : num;
  };

  useEffect(() => {
    // Set the initial countdown based on the target date
    const calculateTimeLeft = () => {
      const targetDate = new Date("2025-04-05T00:00:00"); // Set your actual target date here
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        // If countdown is over
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Calculate immediately
    calculateTimeLeft();
    
    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);
    
    // Cleanup on unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-full py-12 md:py-24 min-h-screen font-albert-sans relative">
      {/* Decorative elements - plus signs - hidden on mobile */}
      <div className="hidden md:block absolute left-24 top-1/2 text-gray-700 text-8xl opacity-20">+</div>
      <div className="hidden md:block absolute right-24 bottom-1/4 text-gray-700 text-8xl opacity-20">+</div>
      
      <div className="w-full max-w-3xl mx-auto px-4 flex flex-col">
        {/* Content container with the same width as the timer */}
        <div className="w-full">
          {/* Intro text - aligned left */}
          <p className={`text-xl md:text-2xl mb-2 md:mb-4 font-albert-sans ${
            isDark ? "text-white" : "text-black"
          }`}>What will you create?</p>
          
          {/* Main heading - aligned left */}
          <h1 className={`text-4xl md:text-5xl lg:text-7xl font-medium mb-2 md:mb-4 font-albert-sans ${
            isDark ? "text-white" : "text-black"
          }`}
          style={{
            ...getTextShadowStyle(isDark ? "#F58134" : "#19B5CA")
          }}
          >DATAHACKS 2025</h1>
          
          {/* Description - aligned left */}
          <p className={`text-base md:text-xl mb-6 md:mb-12 font-albert-sans ${
            isDark? "text-white" : "text-black"
          }`}>
            Analyze real-world data, build powerful insights, and create impactful solutions
          </p>
          
          {/* Countdown timer */}
          <div className={`border rounded-lg py-3 px-2 md:px-4 mb-8 md:mb-12 w-full ${
            isDark ? "border-white-600" : "border-black"
          }`}>
            <div className="flex flex-wrap justify-around items-center text-center">
              {/* Days */}
              <div className="flex flex-col items-center">
                <div className="flex items-center">
                  <span className={`text-3xl md:text-4xl lg:text-6xl font-albert-sans w-12 md:w-16 lg:w-24 text-center tabular-nums ${
                    isDark ? "text-white" : "text-black"
                  }`}>{formatNumber(timeLeft.days)}</span>
                  <span className={`text-3xl md:text-4xl lg:text-6xl font-albert-sans ${
                    isDark ? "text-white" : "text-black"
                  }`}> : </span>
                </div>
                <span className="text-gray-400 text-xs">days</span>
              </div>
              
              {/* Hours */}
              <div className="flex flex-col items-center">
                <div className="flex items-center">
                <span className={`text-3xl md:text-4xl lg:text-6xl font-albert-sans w-12 md:w-16 lg:w-24 text-center tabular-nums ${
                    isDark ? "text-white" : "text-black"
                  }`}>{formatNumber(timeLeft.hours)}</span>
                  <span className={`text-3xl md:text-4xl lg:text-6xl font-albert-sans ${
                    isDark ? "text-white" : "text-black"
                  }`}> : </span>
                </div>
                <span className="text-gray-400 text-xs">hrs</span>
              </div>
              
              {/* Minutes */}
              <div className="flex flex-col items-center">
                <div className="flex items-center">
                <span className={`text-3xl md:text-4xl lg:text-6xl font-albert-sans w-12 md:w-16 lg:w-24 text-center tabular-nums ${
                    isDark ? "text-white" : "text-black"
                  }`}>{formatNumber(timeLeft.minutes)}</span>
                  <span className={`text-3xl md:text-4xl lg:text-6xl font-albert-sans ${
                    isDark ? "text-white" : "text-black"
                  }`}> : </span>
                </div>
                <span className="text-gray-400 text-xs">min</span>
              </div>
              
              {/* Seconds */}
              <div className="flex flex-col items-center">
              <span className={`text-3xl md:text-4xl lg:text-6xl font-albert-sans w-12 md:w-16 lg:w-24 text-center tabular-nums ${
                    isDark ? "text-white" : "text-black"
                  }`}>{formatNumber(timeLeft.seconds)}</span>
                <span className="text-gray-400 text-xs">sec</span>
              </div>
              
              {/* Left to apply - full width on mobile, side by side on larger screens */}
              <div className="w-full md:w-auto mt-4 md:mt-0 md:pl-6 md:border-l md:border-gray-600 text-center md:text-left">
              <span className={`text-xl md:text-2xl lg:text-3xl mr-2 ${
                    isDark ? "text-white" : "text-black"
                  }`}>LEFT TO</span>
                <span className={`text-xl md:text-2xl lg:text-3xl font-albert-sans ${
                  isDark ? "text-[#F58134]" : "text-[#19B5CA]"
                }`}>APPLY</span>
              </div>
            </div>
          </div>
          
          {/* Apply now button */}
          <div className="flex justify-center w-full">
            <Button contents="APPLY NOW" onclick={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;