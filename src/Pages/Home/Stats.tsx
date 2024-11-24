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

  const [statsData, setStatsData] = useState<number[]>([0, 0, 0, 0]);
  const [animated, setAnimated] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const startCounting = (index: number): void => {
    const interval = setInterval(() => {
      setStatsData((prev) => {
        const newStats = [...prev];
        newStats[index] = Math.min(
          newStats[index] + maxNumbers[index] / 15,
          maxNumbers[index]
        );
        return newStats;
      });
    }, 50);

    return () => clearInterval(interval);
  };

  useEffect(() => {
    const observers = itemRefs.current.map(
      (ref, index): IntersectionObserver | null => {
        if (!ref) return null;

        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting && !animated[index]) {
              setAnimated((prev) => {
                const updated = [...prev];
                updated[index] = true;
                return updated;
              });
              startCounting(index);
            }
          },
          { threshold: 0.4 }
        );

        observer.observe(ref);
        return observer;
      }
    );

    return () => {
      observers.forEach((observer, index) => {
        if (observer && itemRefs.current[index]) {
          observer.unobserve(itemRefs.current[index]!);
        }
      });
    };
  }, [animated]);

  return (
    <div className="flex flex-col items-center justify-center gap-8 text-white py-24 h-screen w-screen mb-[4vw]">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="title font-bold mb-10 text-[4.75vw] mt-10"
      >
        Get Involved
      </motion.h1>

      <div className="stats-list">
        <div className="flex flex-col gap-8">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="stat-item flex items-center"
              ref={(el: HTMLDivElement | null) =>
                (itemRefs.current[index] = el)
              }
            >
              <motion.span
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: -40, opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: index * 0.125,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="number text-[4.5vw] font-bold w-[2vw] text-right text-white hero-text-shadow mr-[8vw]"
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
                className="text-white text-[1.8vw] ml-[8vw]"
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
