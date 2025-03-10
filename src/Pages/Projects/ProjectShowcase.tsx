import { useTheme } from "../../Pages/Home/useTheme";
const projects = Array(6).fill({ name: "Project Name" });

const ProjectShowcase = () => {
  const { isDark } = useTheme();

  const textColor = isDark ? "text-white" : "text-black";
  const borderColor = isDark ? "border-white" : "border-black";
  const hoverColor = isDark ? "hover:bg-gray-800" : "hover:bg-gray-200";
  
  return (
    <section className={`pt-24 ${textColor}`}>
      {/* Title and Filters */}
      <div className="flex justify-between items-center mb-6 w-[80vw]">
        <div>
          <h2 className="text-2xl font-semibold">PROJECT SHOWCASE</h2>
          <p className={`${textColor}`}>Take a look at some projects from previous years.</p>
        </div>
        <div className="space-x-3">
          <button className={`border ${borderColor} px-4 py-2 rounded-full ${hoverColor} duration-200`}>
            Year
          </button>
          <button className={`border ${borderColor} px-4 py-2 rounded-full ${hoverColor} duration-200`}>
            Categories
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <section className="w-[80vw]">
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="col-span-1">
              <div className="bg-white rounded-md h-[45vh]"></div>
              <p className={`mt-2 ${textColor}`}>{project.name}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default ProjectShowcase;
