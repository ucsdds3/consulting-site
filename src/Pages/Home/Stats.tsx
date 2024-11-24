import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const Stats = () => {
  const descriptions = [
    "Hackathon Attendees",
    "Workshops Hosted",
    "Articles Written",
    "Projects Completed",
  ];

  const maxNumbers = [500, 78, 35, 28];

  const [statsData, setStatsData] = useState([0, 0, 0, 0]);
  const sectionRef = useRef(null);

  const startCounting = () => {
    const interval = setInterval(() => {
      setStatsData((prev) =>
        prev.map((num, index) =>
          Math.min(num + maxNumbers[index] / 15, maxNumbers[index])
        )
      );
    }, 50);

    return () => clearInterval(interval);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("Intersection Observer callback triggered"); // Log every time the observer is triggered
        console.log("Is intersecting:", entry.isIntersecting); // Log whether the section is intersecting or not
        console.log("Intersection Ratio:", entry.intersectionRatio); // Log how much of the section is visible

        if (entry.isIntersecting) {
          console.log("Section is in view. Starting count-up!"); // Log when the count-up is about to start
          startCounting();
        }
      },
      { threshold: 0.99 } // % of the section that must be visible
    );

    if (sectionRef.current) {
      console.log("Observing section:", sectionRef.current); // Log when the observer starts observing the section
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        console.log("Unobserving section:", sectionRef.current); // Log when the observer stops observing the section
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center gap-10 justify-start text-white py-24 w-screen">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="title font-bold mb-10 text-5xl mt-10"
      >
        Get Involved
      </motion.h1>

      <div ref={sectionRef} className="stats-list">
        <div className="flex flex-col gap-10">
          {statsData.map((stat, index) => (
            <div key={index} className="stat-item flex items-center">
              <motion.span
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: -40, opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: index * 0.125,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="number text-7xl font-bold w-20 text-right text-white hero-text-shadow mr-20"
              >
                {Math.round(stat) +
                  (Math.round(stat) === maxNumbers[index] ? "+" : "")}
              </motion.span>

              <motion.span
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 40, opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: index * 0.125,
                  ease: "easeOut",
                }}
                className="text-white text-2xl ml-20"
                viewport={{ once: true }}
              >
                {descriptions[index]}
              </motion.span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
