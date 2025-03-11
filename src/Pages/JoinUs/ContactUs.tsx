import ContactForm from "./ContactForm";
import { motion } from "framer-motion";
import dino from "/src/Assets/Images/betterdino.png";
import { useTheme } from "../../Pages/Home/useTheme";

const ContactUs = () => {
  const { isDark } = useTheme();
  const textColor = isDark ? "text-white" : "text-black";
  
  return (
    <div className="flex flex-col ${textColor} items-center min-h-screen lg:w-[80vw] w-[95vw] font-albert-sans">
      <div className="grid gap-20 md:grid-cols-2 max-w-[90vw] w-full px-4">
        <div className=" flex flex-col justify-between gap-8 md:order-1">
          <div className="pt-20 flex flex-col">
            <div className="flex flex-col w-[22vw] gap-4">
              <h3 className=" text-xl ">WANT TO LEARN MORE?</h3>
              <h2 className="text-5xl">CONTACT US</h2>
              <p className={`${textColor}`}>
                Get in touch with us regarding blah blah we are so cool you will
                love being in our club, i think by the time you are here you
                would get a direct offer from amazon.
              </p>
            </div>
            <div className="w-full aspect-video rounded-xl md:order-2 relative">
              {" "}
              {/* Add relative to contain the absolute image */}
              <motion.img
                src={dino}
                alt=""
                className="pt-24 absolute w-[25vw] rotate-[-25deg] scale-x-[-1]" // Flipping horizontally
              />
            </div>
          </div>
        </div>

        <div className="w-full aspect-video rounded-xl md:order-3">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
