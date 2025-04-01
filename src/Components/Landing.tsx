import Button from "./Button";
import Card from "./Card";
import ModelDesign from "/src/Assets/Model_Design.png";
import MLOPS from "/src/Assets/MLOPS.png";
import DataAnalytics from "/src/Assets/Data_Analytics.png";
import SolutionsArchitecture from "/src/Assets/Solutions_Architecture.png";

const Landing = () => {
  return (
    <div className="flex flex-col justify-center items-center w-[95vw] min-h-[90vh]">
        <h1 className="text-[5vw] font-bold">
          <span className="text-[#F58134]">D</span>
          <span className="text-[#19B5CA]">S</span>
          <span className="text-[#A9A9A9]">3</span>
          <span className="text-white">{" CONSULTING"}</span>
        </h1>
        <p className="text-[1.5vw] text-white mb-4">PRO BONO SUPPORT FOR LOCAL BUSINESSES</p>
        <Button contents="CONTACT US" onclick={() => {}} />
        <div className="flex gap-4 mt-20">
          <Card title="MODEL DESIGN" description="Lorem ipsum dolor sit amet" image={ModelDesign} />
          <Card title="MLOPS" description="Lorem ipsum dolor sit amet" image={MLOPS} />
          <Card title="DATA ANALYTICS" description="Lorem ipsum dolor sit amet" image={DataAnalytics} />
          <Card title="SOLUTIONS ARCHITECTURE" description="Lorem ipsum dolor sit amet" image={SolutionsArchitecture} />
        </div>
    </div>
  );
};

export default Landing;
