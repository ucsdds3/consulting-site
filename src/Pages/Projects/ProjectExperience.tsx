import { useTheme } from "../../Pages/Home/useTheme";

const ProjectExperience = () => {
  const { isDark } = useTheme();

  const textColor = isDark ? "text-white" : "text-black";
  return (
    <section className="w-[80vw] pt-48 pb-24 text-white">
        <p className={`text-2xl ${textColor} font-semibold mb-4`}>GALLERY</p>
        <div className="grid grid-cols-10 grid-rows-10 gap-2 h-[100vh]">
            <div className="bg-white col-span-4 row-span-5 rounded-sm"></div>
            <div className="bg-white col-span-3 row-span-3 rounded-sm"></div>
            <div className="bg-white col-span-3 row-span-3 rounded-sm"></div>
            <div className="bg-white col-span-3 row-span-3 rounded-sm"></div>
            <div className="bg-white col-span-3 row-span-7 rounded-sm"></div>
            <div className="bg-white col-span-4 row-span-5 rounded-sm"></div>
            <div className="bg-white col-span-3 row-span-4 rounded-sm"></div>
        </div>

    </section>
  );
};

export default ProjectExperience;
