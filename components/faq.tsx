import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faCodepen } from "@fortawesome/free-brands-svg-icons";
import Faq from "@/public/faq.png";
import Image from "next/image";

interface AccordionItemProps {
  title: string;
  content: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-dividerGray">
      <button
        className={`flex justify-between items-center w-full py-3 px-2 text-left transition-all duration-300 ${
          isOpen ? "font-bold text-textBlue" : "text-textVeryDarkBlue"
        }`}
        onClick={toggleAccordion}
      >
        {title}
        <span
          className={`w-4 h-4 bg-icon-arrow-down bg-no-repeat bg-center transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-height duration-300 ${
          isOpen ? "h-auto" : "h-0"
        }`}
      >
        <div className="px-2 pb-4 text-textDarkBlue">{content}</div>
      </div>
    </div>
  );
};

const AccordionCard: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gradientViolet to-gradientBlue mt-14 font-kumbh-sans">
      <main className="bg-white rounded-2xl p-6 md:p-24 shadow-lg mx-4 max-w-5xl">
        <div className="relative flex flex-col md:flex-row items-center">
          <div className="w-full md:w-5/6 mt-8 md:mt-0">
            <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left text-textBlue mb-6">
              FAQ
            </h1>
            <div className="space-y-4">
              <AccordionItem
                title="How many team members can I invite?"
                content="You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."
              />
              <AccordionItem
                title="What is the maximum file upload size?"
                content="No more than 2GB. All files in your account must fit your allotted storage space."
              />
              <AccordionItem
                title="How do I reset my password?"
                content="Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you."
              />
              <AccordionItem
                title="Can I cancel my subscription?"
                content="Yes! Send us a message and we’ll process your request no questions asked."
              />
              <AccordionItem
                title="Do you provide additional support?"
                content="Chat and email support is available 24/7. Phone lines are open during normal business hours."
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AccordionCard;
