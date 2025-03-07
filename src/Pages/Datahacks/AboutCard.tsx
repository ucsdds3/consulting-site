import { useTheme } from "../Home/useTheme";

const AboutCard = () => {
  const { isDark } = useTheme();
  return (
    <div className="flex justify-center w-full py-12 px-4">
      {/* card border */}
      <div className={`max-w-6xl w-full mx-auto rounded-xl border p-8 md:p-12 ${
        isDark
          ? "bg-black border-white-700 text-white"
          : "bg-white border-black text-black"
      }`}
      >
        <h2 className={`text-4xl font-medium font-albert-sans mb-12 ${
          isDark ? "text-white" : "text-black"
        }`}>ABOUT DATAHACKS</h2>
        
        <div className="flex flex-col md:flex-row gap-10">
          {/* Image placeholder */}
          <div className="w-full md:w-1/2">
            <div className="bg-gray-200 rounded-lg w-full aspect-video"></div>
          </div>
          
          {/* Content with plus sign bullet points */}
          <div className="w-full md:w-1/2 flex flex-col space-y-6">
            <div className="flex flex-col mb-2">
              <div className="flex items-start gap-4">
                <span className="text-gray-500 text-3xl">+</span>
                <h3 className={`text-lg font-medium font-albert-sans ${
                  isDark ? "text-white" : "text-black"
                }`}>
                  Event Overview
                </h3>
              </div>
              <div className="ml-10 mt-1">
                <p className={`text-lg font-light font-albert-sans ${
                  isDark ? "text-white" : "text-black"
                }`}>
                  DataHacks is an annual data science hackathon hosted by DS3 every Spring Quarter
                </p>
              </div>
            </div>
            
            <div className="flex flex-col mb-2">
              <div className="flex items-start gap-4">
                <span className="text-gray-500 text-3xl">+</span>
                <h3 className={`text-lg font-medium font-albert-sans ${
                  isDark ? "text-white" : "text-black"
                }`}>
                  Community Engagement
                </h3>
              </div>
              <div className="ml-10 mt-1">
                <p className={`text-lg font-light font-albert-sans ${
                  isDark ? "text-white" : "text-black"
                }`}>
                  Over 150 attendees from diverse backgrounds participated in DataHacks 2024
                </p>
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-start gap-4">
                <span className="text-gray-500 text-3xl">+</span>
                <h3 className={`text-lg font-medium font-albert-sans ${
                  isDark ? "text-white" : "text-black"
                }`}>
                  Opportunities for Growth
                </h3>
              </div>
              <div className="ml-10 mt-1">
                <p className={`text-lg font-light font-albert-sans ${
                  isDark ? "text-white" : "text-black"
                }`}>
                  Participate to build your portfolio, win exciting prizes, and gain invaluable experience!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;