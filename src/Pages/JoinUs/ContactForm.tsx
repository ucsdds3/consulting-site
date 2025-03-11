import Button from "../../Components/Button";
import { useTheme } from "../../Pages/Home/useTheme";

const ContactForm = () => {
  const { isDark } = useTheme();
  const textColor = isDark ? "text-white" : "text-black";
  const borderColor = isDark ? "border-white" : "border-black";
  const fillColor = isDark ? "bg-[#1E11E]" : "bg-gray-200";
  const sendForm = () => {
    //will handle email sending
  };
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <form className=" w-full max-w-mdp-6 rounded-lg">
        <p className={`${textColor} pb-2`}>Name</p>
        <input
          type="text"
          className={`w-full p-3 mb-4 ${fillColor} ${textColor} border ${borderColor} rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500`}
        />

        <p className={`${textColor} pb-2`}>Email</p>
        <input
          type="email"
          className={`w-full p-3 mb-4 ${fillColor} ${textColor} border ${borderColor} rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500`}
        />
        <p className={`${textColor} pb-2`}>Subject</p>
        <input
          type="text"
          className={`w-full p-3 mb-4 ${fillColor} ${textColor} border ${borderColor} rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500`}
        />
        <p className={`${textColor} pb-2`}>Message</p>
        <textarea
          rows={5}
          className={`w-full p-3 mb-4 ${fillColor} ${textColor} border ${borderColor} rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500`}
        ></textarea>

        <Button
          contents="SEND"
          onclick={() => {
            sendForm;
          }}
        />
      </form>
    </div>
  );
};

export default ContactForm;
