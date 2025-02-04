import "@fontsource/albert-sans/400.css"; // Import Albert Sans normal weight
import "@fontsource/albert-sans/700.css"; // Import Albert Sans bold weight

import { motion } from "framer-motion";
import { useEffect, useState, useRef, Fragment } from "react";
import Card from "./StatCards"; // Adjust the path as necessary

const Stats = () => {
  const descriptions = [
    "Hackathon Attendees",
    "Workshops Hosted",
    "Articles Written",
    "Projects Completed",
  ];

  const maxNumbers = [500, 78, 35, 28];

  const [statsData, setStatsData] = useState<number[]>([0, 0, 0, 0]);
  const [animated, setAnimated] = useState<boolean[]>([
    false,
    false,
    false,
    false,
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
    <div className="flex flex-col items-center justify-center gap-8 text-white py-24 h-screen w-screen mb-[4vw] mt-20">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="title font-bold mb-10 text-[4.75vw] mt-10"
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
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                style={{
                  fontFamily: "'Albert Sans', sans-serif",
                  color:
                    index === 0
                      ? "#F58134"
                      : index === 1
                        ? "#11B3C9"
                        : index === 2
                          ? "#6C6C6C"
                          : "#FFFFFF",
                }}
                className="number text-[4.5vw] font-normal hero-text-shadow"
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
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="text-white text-[1.3vw] mt-2"
              >
                {descriptions[index]}
              </motion.span>
            </div>

            {/* Vertical white bar divider (except after the last stat) */}
            {index < statsData.length - 1 && (
              <div
                className="bg-white"
                style={{ width: "2px", height: "4.5vw" }}
              />
            )}
          </Fragment>
        ))}
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-2 gap-8 mt-10">
        <Card
          title="Data Hacks"
          imageSrc="src/Assets/Images/homepage/images/datahacks_2.png"
          description="Do projects and make your resume look better. I love projects so much omg!"
        />
        <Card
          title="Projects"
          imageSrc="src/Assets/Images/homepage/images/projects-img.png"
          description="Do projects and make your resume look better. I love projects so much omg!"
        />
        <Card
          title="Workshops"
          imageSrc="src/Assets/Images/homepage/images/workshop-img.png"
          description="Do projects and make your resume look better. I love projects so much omg!"
        />
        <Card
          title="Professional Events"
          imageSrc="src/Assets/Images/homepage/images/pf-events-img.png"
          description="Do projects and make your resume look better. I love projects so much omg!"
        />
      </div>
    </div>
  );
};

export default Stats;
