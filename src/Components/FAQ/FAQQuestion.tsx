import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useTheme } from "../../Pages/Home/useTheme";

interface FAQQuestionProps {
  //creates parameters for FAQ questions
  question: string;
  answer: string;
  isExpanded: boolean;
  onToggle: () => void; //sets up a void function
}

const FAQQuestion: React.FC<FAQQuestionProps> = ({
  question,
  answer,
  isExpanded,
  onToggle,
}) => {
  const { isDark } = useTheme();
  const textColor = isDark ? "text-white" : "text-black";
  const borderColor = isDark ? "border-white" : "border-black";
  return (
    <div className={`faq-sectionbox mt-5 w-full`}>
      <div
        className={`display flex justify-between faq-question pb-4 border-b-2 ${borderColor} cursor-pointer`}
        onClick={onToggle}
      >
        <p className={`justify-center flex text-xl ${textColor}`}>{question}</p>
        {isExpanded && <IoIosArrowUp className="justify-center text-3xl" />}
        {!isExpanded && <IoIosArrowDown className="justify-center text-3xl" />}
      </div>
      {isExpanded && (
        <div className={`faq-answer mt-4 pt-4 pb-8 border-b-2 ${borderColor}`}>
          <p className={`justify-center flex text-xl  ${textColor}`}>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQQuestion;
