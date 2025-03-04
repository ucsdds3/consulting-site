const WantToSupport = () => {
  return (
    <div className="lg:w-[80vw] w-[95vw] pb-16">
      <section className="text-white py-20 font-albert-sans mx-auto justify-center">
        <div className="flex flex-col gap-4">
          <h3 className="pt-16 text-xl text-white">WANT TO SUPPORT US?</h3>
          <h2 className="text-5xl text-white">OUR PARTNERS</h2>
        </div>
        <div className="flex flex-col pb-20 sm:flex-row items-start sm:items-center space-y-6 sm:space-y-0 sm:space-x-24 mt-12">
          <img src="src/Assets/Images/CSE_logo.png" alt="" />
          <img
            src="src/Assets/Images/palantir-vector-logo.svg"
            className="w-1/4"
            alt=""
          />
          <img
            src="src/Assets/Images/HDSI_logo_light.png"
            className="w-1/4"
            alt=""
          />
        </div>
        <div className="bg-gray-300 mt-20 w-full h-[85vh] rounded-lg md:order-2"></div>
      </section>
    </div>
  );
};

export default WantToSupport;
