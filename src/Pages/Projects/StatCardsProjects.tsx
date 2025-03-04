// src/Components/Card.tsx
import React from "react";

const Card: React.FC = () => {

  const title = "ABOUT PROJECTS";
  const imageSrc = ""; 
  const bulletTitle1 = "Experience First Hand Data Science";
  const bullet1 = "Whether it be building language models from scratch or emulating the machine learning systems of top companies, you will have the chance to build your own project from the ground up with a team of likeminded enthusiasts.";
  const bulletTitle2 = "Build Your Portfolio";
  const bullet2 = "These projects are guaranteed to boost your credibility in job-seeking by a significant margin. Plus, you'll learn important methodologies and libraries that all are in demand now!";

  return (
    <div className="size-fit bg-black p-10 w-[80vw] rounded-xl border-white border m-20">
      <p className="text-white text-3xl mb-2">{title}</p>
      <div className="grid grid-flow-row grid-cols-10 gap-3">
        <div className="h-[100%] bg-white col-span-6 rounded-md">
          {imageSrc}
        </div>
        <div className="col-span-4">
          <div className="grid grid-flow-row grid-cols-8 gap-2">
            <div className="col-span-1">
                <img src='src/Assets/Images/Star.svg' className="size-8 opacity-40 rotate-[-15deg]"></img>
            </div>
            <div className="col-span-7">
              <p className="text-white text-2xl font-bold mb-2">{bulletTitle1}</p>
              <p className="text-white mb-4">{bullet1}</p>
            </div>
            <div className="col-span-1">
              <img src='src/Assets/Images/Star.svg' className="size-8 opacity-40 rotate-[-15deg]"></img>
            </div>
            <div className="col-span-7">
              <p className="text-white text-2xl font-bold mb-2">{bulletTitle2}</p>
              <p className="text-white">{bullet2}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Card;