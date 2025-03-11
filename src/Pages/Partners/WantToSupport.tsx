import { useTheme } from "../../Pages/Home/useTheme";
import { baseURL } from "../../Utils/info";

const WantToSupport = () => {
  const { isDark } = useTheme();
  const imgTypeHDSI = isDark ? "src/Assets/Images/HDSI_logo_light.png" : "src/Assets/Images/HDSI_logo.png";
  const imgTypePalantir = isDark ? "src/Assets/Images/palantir-vector-logo.svg" : "src/Assets/Images/homepage/partners logos/palantir_dark.png";


  return (
    <div className="lg:w-[80vw] w-[95vw] pb-16">
      <section className="py-20 font-albert-sans mx-auto justify-center">
        <div className="flex flex-col gap-4">
          <h3 className="pt-16 text-xl">WANT TO SUPPORT US?</h3>
          <h2 className="text-5xl">OUR PARTNERS</h2>
        </div>
        <div className="flex flex-col pb-20 sm:flex-row items-start sm:items-center space-y-6 sm:space-y-0 sm:space-x-24 mt-12">
          <img src="src/Assets/Images/CSE_logo.png" alt="" />
          <img
            src={`${baseURL}/${imgTypePalantir}`}
            className="w-1/4"
            alt=""
          />
          <img
            src={`${baseURL}/${imgTypeHDSI}`}
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
