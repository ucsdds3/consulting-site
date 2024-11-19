const AboutUs = () => {
  return (
    <div className="grid grid-cols-2 gap-24 max-w-[72vw] h-screen py-24">
      <div className="flex-1 flex flex-col justify-between py-4">
        <div className="flex flex-col gap-4">
          <h3 className="text-xl text-gray-200">WHO WE ARE</h3>
          <h2 className="text-3xl text-white">
            We share a passion for data, technology, and problem-solving.
          </h2>
          <p>We are here to expand the horizons of data science as a community together</p>
        </div>
        <button className="w-1/2 text-white rounded-full border-2 border-white p-4">ABOUT</button>
      </div>
      <div className="bg-gray-300 w-[30vw] h-[20vw] rounded-lg" />
      <div className="bg-gray-300 w-[30vw] h-[20vw] rounded-lg" />
      <div className="flex-1 flex flex-col justify-between py-4">
        <div className="flex flex-col gap-4">
          <h3 className="text-xl text-gray-200">WHAT WE DO</h3>
          <h2 className="text-3xl text-white">
            Build technical skills, network, and gain practical experience in data science.
          </h2>
          <p>We are here to expand the horizons of data science as a community together</p>
        </div>
        <button className="w-1/2 text-white rounded-full border-2 border-white p-4">EVENTS</button>
      </div>
    </div>
  );
};

export default AboutUs;
