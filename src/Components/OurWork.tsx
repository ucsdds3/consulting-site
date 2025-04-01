import { WorkCard } from "./Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./UI/tabs";

const OurWork = () => {
  return (
    <div className="w-full px-24 flex flex-col gap-4">
      <h2 className="text-[3vw] text-white font-bold text-center">OUR WORK</h2>
      <Tabs defaultValue="projects" className="relative mr-auto w-full">
        <TabsList className="w-full justify-start rounded-none bg-transparent p-0">
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="members">Members</TabsTrigger>
          <TabsTrigger value="clients">Clients</TabsTrigger>
        </TabsList>
        <TabsContent value="projects">
          <div className="grid grid-cols-4 grid-rows-3 gap-8 pt-10">
            {Array.from({ length: 12 }).map((_, index) => (
              <WorkCard key={index} title={`Project ${index + 1}`} description={`Description for Project ${index + 1}`} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="members">
          <div className="grid grid-cols-4 grid-rows-3 gap-8 pt-10">
            {Array.from({ length: 12 }).map((_, index) => (
              <WorkCard key={index} title={`Member ${index + 1}`} description={`Description for Member ${index + 1}`} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="clients">
          <div className="grid grid-cols-4 grid-rows-3 gap-8 pt-10">
            {Array.from({ length: 12 }).map((_, index) => (
              <WorkCard key={index} title={`Client ${index + 1}`} description={`Description for Client ${index + 1}`} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default OurWork;
