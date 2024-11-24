const AboutUs = () => {
  return (
    <div className="flex flex-col items-center py-24 min-h-screen w-full">
      <div className="grid gap-12 md:grid-cols-2 max-w-[90vw] w-full px-4">
        {/* WHO WE ARE Section */}
        <div className="flex flex-col justify-between gap-8 md:order-1">
          <div className="flex flex-col gap-4">
            <h3 className="text-xl text-gray-200">WHO WE ARE</h3>
            <h2 className="text-3xl text-white">
              We share a passion for data, technology, and problem-solving.
            </h2>
            <p>
              We are here to expand the horizons of data science as a community
              together.
            </p>
          </div>
          <button className="w-1/2 text-white rounded-full border-2 border-white p-4">
            ABOUT
          </button>
        </div>
        {/* First Image */}
        <div className="bg-gray-300 w-full aspect-video rounded-lg md:order-2" />
        {/* Second Image */}
        <div className="bg-gray-300 w-full aspect-video rounded-lg md:order-3 order-4" />
        {/* WHAT WE DO Section */}
        <div className="flex flex-col justify-between gap-8 md:order-last order-3">
          <div className="flex flex-col gap-4">
            <h3 className="text-xl text-gray-200">WHAT WE DO</h3>
            <h2 className="text-3xl text-white">
              Build technical skills, network, and gain practical experience in
              data science.
            </h2>
            <p>
              We are here to expand the horizons of data science as a community
              together.
            </p>
          </div>
          <button className="w-1/2 text-white rounded-full border-2 border-white p-4">
            EVENTS
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
