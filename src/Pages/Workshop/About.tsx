const About = () => {
  return (
    <div className="w-[1204px] h-[688px] relative mx-auto border-2 border-black rounded-[15px] flex flex-col px-8 py-6">
      <h2 className="w-full text-black text-[45px] font-medium font-['Albert Sans'] uppercase leading-[65px]">
        ABOUT WORKSHOPS
      </h2>

      <div className="flex items-center mt-6">
        {/* Placeholder for Image */}
        <div className="w-[574px] h-[459px] bg-[#D9D9D9] rounded-[10px]"></div>
        
        {/* Text Section */}
        <div className="ml-12 flex flex-col justify-center space-y-8">
          <div className="flex items-start gap-4">
            <span className="text-[40px] font-bold text-black">+</span>
            <div>
              <p className="text-[25px] font-semibold font-['Albert Sans'] uppercase leading-[30px]">
                MAKING DATA SCIENCE ACCESSIBLE
              </p>
              <p className="text-[25px] font-light font-['Albert Sans'] leading-[25px] mt-2">
                The Workshops Team is here to make data science accessible to everyone! Whether you're just starting out or diving into advanced topics, our workshops are designed to help students build the skills and confidence to thrive as data scientists.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-[40px] font-bold text-black">+</span>
            <div>
              <p className="text-[25px] font-semibold font-['Albert Sans'] uppercase leading-[30px]">
                HANDS-ON LEARNING
              </p>
              <p className="text-[25px] font-light font-['Albert Sans'] leading-[25px] mt-2">
                We run workshops on a variety of topics, including Exploratory Data Analysis, Scikit-Learn, Generative AI Theory, LLMs, and AI Agents.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;