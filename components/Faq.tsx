import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faCodepen } from "@fortawesome/free-brands-svg-icons";

const AccordionItem = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
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
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <img
            src="/images/icon-arrow-down.svg"
            alt="Arrow"
            className="w-4 h-4"
          />
        </span>
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

const AccordionCard = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gradientViolet to-gradientBlue font-kumbh-sans">
      <main className="bg-white rounded-2xl p-6 md:p-24 shadow-lg mx-4 max-w-5xl">
        <div className="relative flex flex-col md:flex-row items-center">
          <img
            src="/images/illustration-box-desktop.svg"
            alt="Box"
            className="hidden md:block absolute -left-20 top-1/2 transform -translate-y-1/2"
          />
          <div className="relative w-full md:w-1/2">
            <img
              src="/images/illustration-woman-online-mobile.svg"
              alt="Woman online Mobile"
              className="md:hidden block mx-auto"
            />
            <img
              src="/images/illustration-woman-online-desktop.svg"
              alt="Woman online desktop"
              className="hidden md:block"
            />
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
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
      <footer className="text-center text-dividerGray mt-8">
        <p>
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            className="text-white font-bold"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://www.frontendmentor.io/profile/MizAndhre"
            target="_blank"
            className="text-white font-bold"
          >
            Andhre
          </a>
          .
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          <a
            href="https://github.com/MizAndhre"
            target="_blank"
            aria-label="Github"
          >
            <FontAwesomeIcon icon={faGithub} className="text-2xl text-white" />
          </a>
          <a
            href="https://codepen.io/mizandhre"
            target="_blank"
            aria-label="Codepen"
          >
            <FontAwesomeIcon icon={faCodepen} className="text-2xl text-white" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default AccordionCard;
