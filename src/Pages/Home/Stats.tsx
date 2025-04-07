import "@fontsource/albert-sans/400.css"; // Import Albert Sans normal weight
import "@fontsource/albert-sans/700.css"; // Import Albert Sans bold weight

import { motion } from "framer-motion";
import { useEffect, useState, useRef, Fragment } from "react";
import Card from "./StatCards"; // Adjust the path as necessary
import { useTheme } from "./useTheme";

const Stats = () => {
  const { isDark } = useTheme();
  const descriptions = [
    "Hackathon Attendees",
    "Workshops Hosted",
    "Active Members",
    "Projects Completed"
  ];

  const maxNumbers = [700, 100, 500, 50];

  // Define colors for each stat
  const statColors = [
    "#F58134", // Orange
    "#11B3C9", // Blue
    "#6C6C6C", // Gray
    isDark ? "#FFFFFF" : "#333333" // White/Dark based on theme
  ];

  const [statsData, setStatsData] = useState<number[]>([0, 0, 0, 0]);
  const [animated, setAnimated] = useState<boolean[]>([
    false,
    false,
    false,
    false
  ]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const startCounting = (index: number) => {
    return setInterval(() => {
      setStatsData((prev) => {
        const newStats = [...prev];
        newStats[index] = Math.min(
          newStats[index] + maxNumbers[index] / 15,
          maxNumbers[index]
        );
        return newStats;
      });
    }, 50);
  };

  // Function to generate custom text shadow based on color
  const getTextShadowStyle = (color: string) => {
    // Convert hex to rgba with opacity
    const toRGBA = (hex: string, opacity: number) => {
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
      `
    };
  };

  useEffect(() => {
    const data = itemRefs.current.map((ref, index) => {
      if (!ref) return { observer: null, interval: null };

      let interval;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !animated[index]) {
            setAnimated((prev) => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
            interval = startCounting(index);
          }
        },
        { threshold: 0.4 }
      );

      observer.observe(ref);
      return { observer, interval };
    });

    return () => {
      data.forEach(({ observer, interval }, index) => {
        if (observer && itemRefs.current[index]) {
          observer.unobserve(itemRefs.current[index]);
        }
        if (interval) clearInterval(interval);
      });
    };
  }, [animated, itemRefs, startCounting, setAnimated]);

  return (
    <div className="flex flex-col items-center justify-center gap-8 text-white pt-24 pb-12 lg:w-[80vw] w-[95vw] mx-auto">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className={`title font-bold mb-10 text-[4.75vw] ${
          isDark ? "text-white" : "text-black"
        }`}
        style={{ fontFamily: "'Albert Sans', sans-serif" }}
      >
        Get Involved
      </motion.h1>

      {/* Horizontal container for stat items */}
      <div className="flex items-center">
        {statsData.map((stat, index) => (
          <Fragment key={index}>
            <div
              className="flex flex-col items-center px-6"
              ref={(el: HTMLDivElement | null) =>
                (itemRefs.current[index] = el)
              }
            >
              <motion.span
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: index * 0.125,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                style={{
                  fontFamily: "'Albert Sans', sans-serif",
                  color: statColors[index],
                  ...getTextShadowStyle(statColors[index])
                }}
                className="number text-[4.5vw] font-normal"
              >
                {Math.round(stat) +
                  (Math.round(stat) === maxNumbers[index] ? "+" : "")}
              </motion.span>

              <motion.span
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: index * 0.125,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                className={`text-[1.3vw] mt-2 ${
                  isDark ? "text-white" : "text-black"
                }`}
              >
                {descriptions[index]}
              </motion.span>
            </div>

            {/* Vertical divider (except after the last stat) */}
            {index < statsData.length - 1 && (
              <div
                className={`${isDark ? "bg-white" : "bg-gray-800"}`}
                style={{ width: "2px", height: "4.5vw" }}
              />
            )}
          </Fragment>
        ))}
      </div>

      {/* Cards Section - Updated to match AboutUs layout */}
      <div className="w-full max-w-[90vw] px-4 mt-10">
        <div className="grid md:grid-cols-2 gap-8">
          <Card
            title="Data Hacks"
            imageSrc="src/Assets/Images/homepage/images/datahacks_2.png"
            description="Do projects and make your resume look better. I love projects so much omg!"
            link="www.ds3ucsd.com/our-team/datahacks"
          />
          <Card
            title="Projects"
            imageSrc="src/Assets/Images/homepage/images/projects-img.png"
            description="Do projects and make your resume look better. I love projects so much omg!"
            link="www.ds3ucsd.com/our-team/projects"
          />
          <Card
            title="Workshops"
            imageSrc="src/Assets/Images/homepage/images/workshop-img.png"
            description="Do projects and make your resume look better. I love projects so much omg!"
            link="www.ds3ucsd.com/our-team/workshops"
          />
          <Card
            title="Professional Events"
            imageSrc="src/Assets/Images/homepage/images/pf-events-img.png"
            description="Do projects and make your resume look better. I love projects so much omg!"
            link="www.ds3ucsd.com/our-team/professional-events"
          />
        </div>
      </div>
    </div>
  );
};

export default Stats;