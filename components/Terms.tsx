import Link from "next/link";
import { useState } from "react";

interface TabItem {
  id: string;
  title: string;
  content: string;
}

const tabData: TabItem[] = [
  {
    id: "tab_item_1",
    title: "Terms of use",
    content: `
      
    Welcome to Kemetic Amezan's website. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions of use. Please read these terms and conditions carefully before using our website.
     Acceptance of Terms: By accessing or using Kemetic Amezan's website, you agree to be bound by these terms and conditions. If you do not agree with any part of these terms and conditions, you may not access or use our website
    Intellectual Property Rights: The content, design, and layout of this website, including but not limited to text, graphics, logos, images, audio clips, digital downloads, and software, are the property of Kemetic Amezan or its licensors and are protected by intellectual property laws. You may not reproduce, distribute, modify, transmit, or use any content from this website without the prior written consent of Kemetic Amezan.  Use of Website: You agree to use Kemetic Amezan's website only for lawful purposes and in accordance with these terms and conditions. You may not use our website in any manner that could damage, disable, overburden, or impair the website or interfere with any other party's use and enjoyment of the website. You may not attempt to gain unauthorized access to any part of the website, other accounts, computer systems, or networks connected to the website, through hacking, password mining, or any other means. Privacy Policy: Your use of Kemetic Amezan's website is governed by our Privacy Policy, which can be found [here]. By using our website, you consent to the collection, use, and disclosure of your information as described in our Privacy Policy
 Third-Party Links: Kemetic Amezan's website may contain links to third-party websites that are not owned or controlled by us. We are not responsible for the content, privacy policies, or practices of any third-party websites. We encourage you to review the terms and conditions and privacy policies of any third-party websites that you visit.
 Disclaimer of Warranties: Kemetic Amezan's website is provided on an "as is" and "as available" basis, without any warranties of any kind, express or implied. We do not warrant that our website will be uninterrupted, error-free, or free of viruses or other harmful components. We disclaim all warranties, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.
 Limitation of Liability: In no event shall Kemetic Amezan or its affiliates be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with your use of or inability to use our website, even if we have been advised of the possibility of such damages. This includes, but is not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses. Changes to Terms and Conditions: Kemetic Amezan reserves the right to modify or replace these terms and conditions at any time without prior notice. Your continued use of our website after any such changes constitutes your acceptance of the new terms and conditions. Please check this page periodically for updates. 
 Governing Law: These terms and conditions shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law provisions.</p>
     User Account: Certain features of Kemetic Amezan's website may require you to create a user account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.
   Prohibited Conduct: You agree not to engage in any conduct that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, invasive of another's privacy, hateful, or racially, ethnically, or otherwise objectionable. You also agree not to engage in any conduct that could constitute a criminal offense or give rise to civil liability.
   Indemnification: You agree to indemnify, defend, and hold harmless Kemetic Amezan, its officers, directors, employees, agents, and affiliates, from and against any and all claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising out of or related to your use of our website or any violation of these terms and conditions.
    Termination: Kemetic Amezan reserves the right to terminate or suspend your access to our website without prior notice for any reason, including but not limited to violation of these terms and conditions. Upon termination, your right to use our website will immediately cease.
 Severability: If any provision of these terms and conditions is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect to the maximum extent permitted by law.

     Waiver: The failure of Kemetic Amezan to enforce any provision of these terms and conditions shall not constitute a waiver of such provision or any other provision. 
 Entire Agreement: These terms and conditions constitute the entire agreement between you and Kemetic Amezan regarding your use of our website and supersede all prior or contemporaneous agreements and understandings, whether oral or written. 
  Assignment: You may not assign or transfer any of your rights or obligations under these terms and conditions without the prior written consent of Kemetic Amezan. Any attempted assignment or transfer in violation of this provision shall be null and void. 
     Headings: The section headings in these terms and conditions are for convenience only and shall not affect the interpretation of any provision.
     Feedback and Submissions: You may voluntarily submit feedback, suggestions, ideas, or other materials to Kemetic Amezan through our website. By submitting such materials, you grant us a perpetual, irrevocable, worldwide, royalty-free license to use, modify, adapt, publish, translate, distribute, and display such materials for any purpose.
       Third-Party Services: Kemetic Amezan may use third-party services, plugins, or applications on our website. We are not responsible for any third-party services, and your use of such services is subject to their respective terms and conditions and privacy policies.
      Compliance with Laws: You agree to comply with all applicable laws, rules, and regulations when using Kemetic Amezan's website. You are solely responsible for ensuring that your use of our website is in compliance with applicable laws in your jurisdiction. (ESTHER JUDGE enquiry on sell of wild dagga to clients of certain countries that is illegal)  
 Geographic Restrictions: Kemetic Amezan's website may not be available in certain geographic locations. We make no representations or warranties regarding the availability of our website in any specific location. Accessing our website from prohibited locations is strictly prohibited. 
     Modification of Website: Kemetic Amezan reserves the right to modify or discontinue our website, temporarily or permanently, with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuation of our website. 
 Force Majeure: Kemetic Amezan shall not be liable for any failure or delay in the performance of our obligations under these terms and conditions due to causes beyond our reasonable control, including but not limited to acts of God, natural disasters, terrorism, war, labor disputes, or governmental actions.
     Relationship: Your use of Kemetic Amezan's website creates any agency, partnership, joint venture, employee-employer, or franchisor-franchisee relationship between you and us.
      Reservation of Rights: All rights not expressly granted to you in these terms and conditions are reserved by Kemetic Amezan. No additional rights or licenses are granted to you, whether by implication, estoppel, or otherwise.
     Electronic Communications: By using Kemetic Amezan's website, you consent to receive electronic communications from us, including but not limited to emails, newsletters, and notices. You agree that all agreements, notices, disclosures, and other communications that we provide to you electronically satisfy any legal requirement that such communications be in writing.
     No Legal Advice: The information provided on Kemetic Amezan's website is for general informational purposes only and does not constitute legal, health, financial, or professional advice. You should not rely on any information on our website as a substitute for professional advice relevant to your specific circumstances.
    `,
  },
];

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex items-center justify-center min-h-screen bg-primary-clr  p-5 mt-20">
      <div className="bg-white rounded-md shadow-lg overflow-hidden w-full max-w-5xl ">
        <div className="w-5/6 mx-auto p-5">
          <div className="text-center mb-4">
            <h2 className="text-textclr">Terms & Conditions</h2>
          </div>
          <div className="overflow-y-auto ">
            <div>
              <h3 className="text-primary-clr mb-2">
                {tabData[activeTab].title}
              </h3>
              <p className="text-text-clr mb-4">{tabData[activeTab].content}</p>
            </div>
          </div>
          <div className=" mt-4">
            <Link href={"/"}>
              <button className="bg-orange-400 border-primary-clr  border-2 rounded-full px-6 py-2 transition-colors duration-300 hover:bg-btn-hvr hover:border-btn-hvr">
                I Agree to the terms and conditions
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
