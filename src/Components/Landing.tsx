import Button from "./Button";
import { LandingCard } from "./Card";
import ModelDesign from "/src/Assets/Model_Design.png";
import MLOPS from "/src/Assets/MLOPS.png";
import DataAnalytics from "/src/Assets/Data_Analytics.png";
import SolutionsArchitecture from "/src/Assets/Solutions_Architecture.png";

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
        <LandingCard
          title="MODEL DESIGN"
          description="Lorem ipsum dolor sit amet"
          image={ModelDesign}
        />
        <LandingCard
          title="MLOPS"
          description="Lorem ipsum dolor sit amet"
          image={MLOPS}
        />
        <LandingCard
          title="DATA ANALYTICS"
          description="Lorem ipsum dolor sit amet"
          image={DataAnalytics}
        />
        <LandingCard
          title="SOLUTIONS ARCHITECTURE"
          description="Lorem ipsum dolor sit amet"
          image={SolutionsArchitecture}
        />
      </div>
    </div>
  );
};

export default Landing;
