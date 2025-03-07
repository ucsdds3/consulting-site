import Button from '../../Components/Button';
import { useTheme } from "../Home/useTheme";

interface ProjectInfo {
  rank: number;
  name: string;
  link: string;
  height: string;
}

const PastYears = () => {
  const { isDark } = useTheme();
  // Project data in order of rank (1st, 2nd, 3rd)
  const projects: ProjectInfo[] = [
    {
      rank: 1,
      name: "PROJECT NAME",
      link: "githublink",
      height: "h-96" // Tallest podium
    },
    {
      rank: 2,
      name: "PROJECT NAME",
      link: "githublink",
      height: "h-80" // Medium height podium
    },
    {
      rank: 3,
      name: "PROJECT NAME",
      link: "githublink",
      height: "h-64" // Shortest podium
    }
  ];

  // Function to get the correct order for display
  // We want 2nd (index 1) on left, 1st (index 0) in middle, 3rd (index 2) on right
  const getOrderedProjects = () => {
    return [projects[1], projects[0], projects[2]];
  };

  return (
    <div className="flex flex-col items-center py-20 px-4 relative">
      {/* Decorative plus signs */}
      <div className="absolute left-1/4 top-24 text-gray-700 text-6xl opacity-20">+</div>
      <div className="absolute left-1/3 top-40 text-gray-700 text-4xl opacity-20">+</div>
      
      <h2 className={` text-4xl font-medium font-albert-sans mb-20 ${
        isDark ? "text-white" : "text-black"
      }`}>PAST YEARS SHOWCASE</h2>
      
      {/* Top project - displayed separately at the top */}
      <div className="text-center mb-6">
        <h3 className={`font-light ${
          isDark ? "text-white" : "text-black"
        }`}>{projects[0].name}</h3>
        <a href={`https://${projects[0].link}`} 
           className="text-gray-500 hover:text-gray-400" 
           target="_blank" 
           rel="noopener noreferrer">
          {projects[0].link}
        </a>
      </div>
      
      {/* Podium display */}
      <div className="flex items-end justify-center gap-4 mb-16 w-full max-w-3xl">
        {getOrderedProjects().map((project, index) => (
          <div key={project.rank} className="flex flex-col items-center">
            {/* Project info above podium */}
            {index !== 1 && ( // Don't show info for middle podium (it's shown at the top)
              <div className="text-center mb-4">
                <h3 className={`font-light ${
                  isDark ? "text-white" : "text-black"
                }`}>{project.name}</h3>
                <a href={`https://${project.link}`} 
                   className="text-gray-500 hover:text-gray-400" 
                   target="_blank" 
                   rel="noopener noreferrer">
                  {project.link}
                </a>
              </div>
            )}
            
            {/* Podium with rank number */}
            <div className={`${project.height} w-32 border rounded-md flex items-end justify-center relative ${
              isDark ? "border-white bg-black" : "border-black bg-white"
            }`}>
              <span className={`text-7xl font-light absolute bottom-6 font-albert-sans ${
                isDark ? "text-white" : "text-black"
              }`}>{project.rank}</span>
            </div>
          </div>
        ))}
      </div>
      
      {/* View Gallery button */}
      <div className="mt-8">
        <Button contents="View 2024 Gallery" onclick={() => {}} />
      </div>
    </div>
  );
};

export default PastYears;