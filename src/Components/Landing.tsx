import Button from "./Button";
import { LandingCard } from "./Card";
import services from "../../services.json"
import ModelDesign from "../Assets/Model_Design.png"
import MLOPS from "../Assets/MLOPS.png"
import DataAnalytics from "../Assets/Data_Analytics.png"
import SolutionsArchitecture from "../Assets/Solutions_Architecture.png"

const imageMap = {
  "Model Design": ModelDesign,
  "MLOPS": MLOPS,
  "Data Analytics": DataAnalytics,
  "Solutions Architecture": SolutionsArchitecture,
};

const Landing = () => {
  return (
    <div
      className="flex flex-col justify-center items-center w-full min-h-[90vh]"
      id="landing"
    >
      <h1 className="text-[clamp(32px,5vw,70px)] font-bold">
        <span className="text-[#F58134]">D</span>
        <span className="text-[#19B5CA]">S</span>
        <span className="text-[#A9A9A9]">3</span>
        <span className="text-white">{" CONSULTING"}</span>
      </h1>
      <p className="text-[clamp(16px,2.5vw,35px)] w-8/10 text-center text-white mb-4">
        PRO BONO SUPPORT FOR LOCAL BUSINESSES
      </p>
      <Button contents="CONTACT US" onclick={() => {}} />
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 w-fit mt-20">
        {Object.entries(services).map(([key, value]) => (
          <LandingCard
            key={key}
            title={key}
            description={value.description}
            image={imageMap[key as keyof typeof imageMap]}
          />
        ))}
      </div>
    </div>
  );
};

export default Landing;
