const AboutUs = () => {
  return (
    <div className="flex flex-col items-center py-24 min-h-screen lg:w-[80vw] w-[95vw] font-albert-sans pb-56">
      <div className="grid gap-12 md:grid-cols-2 max-w-[90vw] w-full px-4">
        {/* WHO WE ARE Section */}
        <div className="flex flex-col justify-between gap-8 md:order-1">
          <div className="flex flex-col gap-4">
            <h3 className="text-xl text-white">WHO WE ARE</h3>
            <h2 className="text-5xl text-white">
              We share a passion for data, technology, and problem-solving.
            </h2>
            <p className="text-white">
              We are here to expand the horizons of data science as a community
              together.
            </p>
          </div>
          <button className="w-1/3 text-white rounded-full border-2 border-white p-4 bg-black">
            OUR TEAM
          </button>
        </div>
        {/* First Image */}
        <div className="bg-gray-300 w-full aspect-video rounded-lg md:order-2">
          <img
            src="src/Assets/Images/homepage/images/who-we-are-img.png"
            alt="Who we are"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        {/* Second Image */}
        <div className="bg-gray-300 w-full aspect-video rounded-xl md:order-3 order-4">
          <img
            src="src/Assets/Images/homepage/images/what-we-do-img.png"
            alt="Who we are"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        {/* WHAT WE DO Section */}
        <div className="flex flex-col justify-between gap-8 md:order-last order-3">
          <div className="flex flex-col gap-4">
            <h3 className="text-xl text-gray-200">WHAT WE DO</h3>
            <h2 className="text-5xl text-white">
              Build technical skills, network, and gain practical experience in
              data science.
            </h2>
            <p className="text-white">
              We are here to expand the horizons of data science as a community
              together.
            </p>
          </div>
          <button className="w-1/3 text-white rounded-full border-2 border-white p-4 bg-black">
            EVENTS
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
