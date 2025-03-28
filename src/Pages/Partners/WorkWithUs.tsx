import Button from "../../Components/Button";
import { useTheme } from "../../Pages/Home/useTheme";

const WorkWithUs = () => {
  const { isDark } = useTheme();
  const textColor = isDark ? "text-white" : "text-black";

  return (
    <div className="w-full px-4 sm:px-6 md:px-8">
      <div className="flex flex-col items-center font-albert-sans py-16 md:py-32">
        {/* Work with us Section */}
        <div className="flex flex-col justify-between gap-4 md:gap-8 w-full max-w-2xl">
          <div className="flex flex-col gap-3 md:gap-4">
            <h3 className="pt-8 md:pt-16 text-lg sm:text-xl text-center">
              WANT TO WORK WITH US?
            </h3>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-center font-medium">DS3 CONSULTING</h2>
            <p className={`${textColor} text-sm sm:text-base md:text-lg text-center px-4 max-w-lg mx-auto`}>
              Taste some sweet, sweet child labor and hit up our consulting site
            </p>
            <div className="flex justify-center mt-2 md:mt-4">
              <Button contents="LEARN MORE" onclick={() => {}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkWithUs;
