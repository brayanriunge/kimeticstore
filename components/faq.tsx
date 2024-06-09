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
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gradientViolet to-gradientBlue mt-10 font-kumbh-sans">
      <main className="bg-white rounded-2xl p-6 md:p-24 shadow-lg mx-4 max-w-5xl mt-14">
        <div className="relative flex flex-col md:flex-row items-center">
          <div className="w-full md:w-5/6 mt-8 md:mt-0">
            <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left text-textBlue mb-6">
              FAQ
            </h1>
            <div className="space-y-4">
              <AccordionItem
                title="What is Kemetic Amezan?"
                content="Kemetic Amezan is a multinational digital marketing company headquartered in Africa, Kenya. We specialize in leveraging cutting-edge technology to connect buyers and sellers from around the world, facilitating seamless transactions and fostering economic growth."
              />
              <AccordionItem
                title="How does Kemetic Amezan work?"
                content="At Kemetic Amezan, we employ an innovative digital marketing platform to bridge geographical barriers and facilitate transactions between businesses and consumers worldwide. Our platform empowers individuals to access global markets and engage in meaningful interactions across various social media platforms.."
              />
              <AccordionItem
                title=" What services does Kemetic Amezan offer?"
                content="We offer a range of digital marketing services, including but not limited to:
    • Strategic marketing consultancy
    • Social media management
    • Search engine optimization (SEO)
    • Content marketing
    • Email marketing
    • Pay-per-click (PPC) advertising"
              />

              <AccordionItem
                title="How can I become a partner with Kemetic Amezan?"
                content="If you're interested in partnering with Kemetic Amezan, please contact us through our website or email us at [email address]. Our team will be happy to discuss potential partnership opportunities and how we can collaborate to achieve mutual success."
              />
              <AccordionItem
                title="How does Kemetic Amezan ensure confidentiality and data security?"
                content="At Kemetic Amezan, we take data security and confidentiality very seriously. We adhere to strict privacy policies and implement robust security measures to protect sensitive information. Our platform is designed to ensure secure transactions and safeguard the privacy of our users."
              />
              <AccordionItem
                title="What is the pricing structure for Kemetic Amezan's services?"
                content="Our pricing structure varies depending on the specific services and requirements of our clients. We offer customized solutions tailored to meet the unique needs of each business. For detailed pricing information, please contact us directly or request a quote through our website."
              />
              <AccordionItem
                title="How can I contact Kemetic Amezan for support?"
                content="For any inquiries or support requests, you can reach out to our customer support team via email at [email address] or through the contact form on our website. Our dedicated support team is available to assist you with any questions or concerns you may have."
              />
              <AccordionItem
                title=" Is Kemetic Amezan environmentally responsible?"
                content="Yes, environmental responsibility is a core value at Kemetic Amezan. We are committed to minimizing our environmental footprint and actively participate in various initiatives to promote sustainability and combat climate change. For more information on our environmental efforts, please visit our Sustainability page."
              />
              <AccordionItem
                title=" Does Kemetic Amezan offer employment opportunities?"
                content="Yes, Kemetic Amezan is always on the lookout for talented individuals to join our team. If you're passionate about digital marketing and want to be part of a dynamic and innovative company, we encourage you to check our Careers page for current job openings and opportunities to join our team."
              />
              <AccordionItem
                title="How can I stay updated with Kemetic Amezan's latest news and developments?"
                content="To stay informed about Kemetic Amezan's latest news, updates, and developments, we encourage you to subscribe to our newsletter and follow us on social media. You can also visit our Newsroom page for press releases and announcements."
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AccordionCard;
