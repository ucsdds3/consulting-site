import React, { useState } from "react";
import FAQQuestion from "../../Components/FAQ/FAQQuestion";
import faqJ from "./faqJoinUs.json";
import faqP from "./faqPartners.json";

interface FAQTypeProps {
  type: string;
}

const FAQ: React.FC<FAQTypeProps> = ({ type }) => {
  const questions = type === "joinUs" ? faqJ.questions : faqP.questions; //accesses different json files given the type

  const questionLen = questions.length; //access the length of the array

  // State to track which question is expanded
  const [expanded, setExpanded] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpanded(expanded === index ? null : index); // toggle the expanded state
  };

  return (
    <div className="flex flex-col items-center min-h-screen lg:w-[60vw] w-[95vw] font-albert-sans py-24 pb-56">
      <h1 className="text-5xl text-white pb-5">FAQ</h1>
      {Array.from({ length: questionLen }).map((_, index) => (
        <FAQQuestion
          question={questions[index].question}
          answer={questions[index].answer}
          key={index}
          isExpanded={expanded === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default FAQ;
