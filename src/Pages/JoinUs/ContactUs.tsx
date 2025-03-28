import ContactForm from "./ContactForm";
import { motion } from "framer-motion";
import dino from "/src/Assets/Images/betterdino.png";
import { useTheme } from "../../Pages/Home/useTheme";

const ContactUs = () => {
  const { isDark } = useTheme();
  const textColor = isDark ? "text-white" : "text-black";
  
  return (
    <div className={`flex flex-col ${textColor} items-center font-albert-sans py-8 md:py-16 w-full overflow-hidden`}>
      <div className="grid gap-16 md:gap-20 grid-cols-1 md:grid-cols-2 w-full max-w-7xl px-4 md:px-6">
        <div className="flex flex-col justify-between gap-6 md:gap-8">
          <div className="flex flex-col">
            <div className="flex flex-col w-full gap-3 md:gap-4">
              <h3 className="text-lg md:text-xl">WANT TO LEARN MORE?</h3>
              <h2 className="text-3xl md:text-4xl lg:text-5xl">CONTACT US</h2>
              <p className={`${textColor} text-sm md:text-base pr-8 md:pr-0`}>
                Get in touch with us regarding blah blah we are so cool you will
                love being in our club, i think by the time you are here you
                would get a direct offer from amazon.
              </p>
            </div>
            
            {/* Dino image container */}
            <div className="w-full h-40 md:h-64 lg:h-auto lg:aspect-video relative mt-6 md:mt-12">
              <motion.img
                src={dino}
                alt="Dinosaur mascot"
                className="absolute w-32 sm:w-40 md:w-48 lg:w-[25vw] max-w-xs rotate-[-25deg] scale-x-[-1]"
              />
            </div>
          </div>
        </div>
        
        <div className="w-full">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;