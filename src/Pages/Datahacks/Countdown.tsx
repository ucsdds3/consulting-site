import { useState, useEffect } from 'react';
import Button from "../../Components/Button";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 20,
    minutes: 30,
    seconds: 30
  });

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
    <div className="flex flex-col items-center w-full py-24 min-h-screen font-albert-sans relative">
      {/* Decorative elements - plus signs */}
      <div className="absolute left-24 top-1/2 text-gray-700 text-8xl opacity-20">+</div>
      <div className="absolute right-24 bottom-1/4 text-gray-700 text-8xl opacity-20">+</div>
      
      <div className="w-full max-w-3xl mx-auto px-4 flex flex-col">
        {/* Content container with the same width as the timer */}
        <div className="w-full">
          {/* Intro text - aligned left */}
          <p className="text-white text-2xl mb-4 font-albert-sans">What will you create?</p>
          
          {/* Main heading - aligned left */}
          <h1 className="text-white text-7xl font-medium mb-4 font-albert-sans">DATAHACKS 2025</h1>
          
          {/* Description - aligned left */}
          <p className="text-white text-xl mb-12 font-albert-sans">
            Analyze real-world data, build powerful insights, and create impactful solutions
          </p>
          
          {/* Countdown timer - centered */}
          <div className="border border-white-600 rounded-lg py-3 px-4 mb-12 w-full">
            <div className="flex justify-around items-center text-center">
              <div className="flex flex-col items-center">
                <span className="text-white text-6xl font-albert-sans">{timeLeft.days}</span>
                <span className="text-gray-400 text-xs">days</span>
              </div>
              <span className="text-white text-6xl font-albert-sans">:</span>
              <div className="flex flex-col items-center">
                <span className="text-white text-6xl font-albert-sans">{timeLeft.hours}</span>
                <span className="text-gray-400 text-xs">hrs</span>
              </div>
              <span className="text-white text-6xl font-albert-sans">:</span>
              <div className="flex flex-col items-center">
                <span className="text-white text-6xl font-albert-sans">{timeLeft.minutes}</span>
                <span className="text-gray-400 text-xs">min</span>
              </div>
              <span className="text-white text-6xl font-albert-sans">:</span>
              <div className="flex flex-col items-center">
                <span className="text-white text-6xl font-albert-sans">{timeLeft.seconds}</span>
                <span className="text-gray-400 text-xs">sec</span>
              </div>
              <div className="pl-6 border-l border-gray-600">
                <span className="text-white text-4xl mr-2">LEFT TO</span>
                <span className="text-orange-500 text-4xl font-albert-sans">APPLY</span>
              </div>
            </div>
          </div>
          
          {/* Apply now button - centered */}
          <div className="flex justify-center w-full">
            <Button contents="APPLY NOW" onclick={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;