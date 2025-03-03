const AboutCard = () => {
  return (
    <div className="flex justify-center w-full py-12 px-4">
      <div className="max-w-6xl w-full mx-auto rounded-xl border border-white-700 p-8 md:p-12 bg-black">
        <h2 className="text-white text-4xl font-medium font-albert-sans mb-12">ABOUT DATA HACKS</h2>
        
        <div className="flex flex-col md:flex-row gap-10">
          {/* Image placeholder */}
          <div className="w-full md:w-1/2">
            <div className="bg-gray-200 rounded-lg w-full aspect-video"></div>
          </div>
          
          {/* Content with plus sign bullet points */}
          <div className="w-full md:w-1/2 flex flex-col space-y-10">
            <div className="flex items-start gap-4">
              <span className="text-gray-500 text-3xl">+</span>
              <p className="text-white text-lg font-light font-albert-sans">
                DataHacks is an annual data science hackathon hosted by DS3 every Spring Quarter
              </p>
            </div>
            
            <div className="flex items-start gap-4">
              <span className="text-gray-500 text-3xl">+</span>
              <p className="text-white text-lg font-light font-albert-sans">
                Over 150 attendees from diverse backgrounds participated in DataHacks 2024
              </p>
            </div>
            
            <div className="flex items-start gap-4">
              <span className="text-gray-500 text-3xl">+</span>
              <p className="text-white text-lg font-light font-albert-sans">
                Participate to build your portfolio, win exciting prizes, and gain invaluable experience!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;