import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

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
  return (
    <div className="faq-sectionbox mt-5 w-full">
      <div
        className="display flex justify-between faq-question pb-4 border-b-2 border-[white] cursor-pointer"
        onClick={onToggle}
      >
        <p className="justify-center flex text-xl text-white">{question}</p>
        {isExpanded && <IoIosArrowUp className="justify-center text-3xl" />}
        {!isExpanded && <IoIosArrowDown className="justify-center text-3xl" />}
      </div>
      {isExpanded && (
        <div className="faq-answer mt-4 pt-4 pb-8 border-b-2 border-[white]">
          <p className="justify-center flex text-xl text-white">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQQuestion;
