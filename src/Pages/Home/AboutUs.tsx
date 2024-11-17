const AboutUs = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-32 h-screen">
      <div className="flex max-w-[60vw] gap-40">
        <div className="flex-1 flex flex-col gap-4">
          <h3 className="text-xl text-gray-200">WHO WE ARE</h3>
          <h2 className="text-3xl text-white">We share a passion for data, technology, and problem-solving.</h2>
          <p>we are here to expand the horizons of data science as a community together.</p>
          <button className="w-1/2 text-white rounded-full border border-white p-4">ABOUT</button>
        </div>
        <div className="bg-gray-300 w-80 h-80 rounded-lg" />
      </div>
      <div className="flex max-w-[60vw] gap-40">
        <div className="bg-gray-300 w-80 h-80 rounded-lg" />
        <div className="flex-1 flex flex-col gap-4">
          <h3 className="text-xl text-gray-200">WHAT WE DO</h3>
          <h2 className="text-3xl text-white">Build technical skills, network, and gain practical experience in data science.</h2>
          <p>we are here to expand the horizons of data science as a community together.</p>
          <button className="w-1/2 text-white rounded-full border border-white p-4">EVENTS</button>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
