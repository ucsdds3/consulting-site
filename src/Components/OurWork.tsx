import { useState } from "react";
import { WorkCard } from "./Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./UI/tabs";
import projectsByYear from "../../projects.json";

const OurWork = () => {
  const years = Object.keys(projectsByYear).sort().reverse();
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const selectedYearKey = selectedYear as keyof typeof projectsByYear;
  const projects = projectsByYear[selectedYearKey];

  return (
    <div className="dark w-full md:px-24 flex flex-col gap-4" id="work">
      <h2 className="text-[clamp(32px,5vw,50px)] text-white font-bold text-center">
        OUR WORK
      </h2>
      <Tabs defaultValue="projects" className="relative mr-auto w-full">
        <TabsList className="w-full justify-start rounded-none bg-transparent p-0">
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="members">Members</TabsTrigger>
          <TabsTrigger value="clients">Clients</TabsTrigger>
        </TabsList>

        <TabsContent value="projects">
          <div className="flex gap-4 pt-6">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-4 py-2 rounded-lg border ${
                  selectedYear === year
                    ? "bg-white text-black font-semibold"
                    : "bg-transparent text-white border-white"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,clamp(300px,50vw,400px))] justify-center w-full m-auto gap-8 pt-10">
            {projects.map((project, index) => (
              <WorkCard
                key={index}
                title={project.project_name}
                description={project.project_description}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="members">
          <div className="grid grid-cols-[repeat(auto-fill,clamp(300px,50vw,400px))] justify-center w-full m-auto gap-8 pt-10">
            {Array.from({ length: 12 }).map((_, index) => (
              <WorkCard
                key={index}
                title={`Member ${index + 1}`}
                description={`Description for Member ${index + 1}`}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="clients">
          <div className="grid grid-cols-[repeat(auto-fill,clamp(300px,50vw,400px))] justify-center w-full m-auto gap-8 pt-10">
            {Array.from({ length: 12 }).map((_, index) => (
              <WorkCard
                key={index}
                title={`Client ${index + 1}`}
                description={`Description for Client ${index + 1}`}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default OurWork;
