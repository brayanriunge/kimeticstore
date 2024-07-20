import Image, { StaticImageData } from "next/image";
import body from "@/public/security.jpg";
import travel from "@/public/Travel.jpg";
import investigator from "@/public/private-investigator.jpg";
import counter from "@/public/CounterSurveillance.jpg";
import Layout from "@/components/Layout";
import Head from "next/head";
import heli from "@/public/heli.webp";
import mustang from "@/public/mustang.jpg";
import globalPlane from "@/public/global-express.jpg";
import Xls from "@/public/xls.jpg";

type securityProps = {
  id: number;
  src: StaticImageData;
  content: string;
  title: string;
};

type jetProps = {
  id: number;
  src: StaticImageData;
  content: string;
  title: string;
};

export default function Service() {
  const jets: Array<jetProps> = [
    {
      id: 1,
      src: heli,
      title: "AS350 Single Squirrel",
      content: "Three passengers maximum",
    },
    {
      id: 2,
      src: Xls,
      title: "Citation XLS",
      content: "Eight passengers maximum",
    },
    {
      id: 3,
      src: mustang,
      title: "Citation Mustang",
      content: "Four passengers maximum",
    },
    {
      id: 4,
      src: globalPlane,
      title: "",
      content: "Twelve passengers maximum",
    },
  ];

  const securityItems: Array<securityProps> = [
    {
      id: 1,
      src: body,
      content:
        "Trailed and discreet global bodyguard service for (V)VIPS,UHNW families,media terms, public figures celebrities and diplomats",
      title: "Bodyguard Services",
    },
    {
      id: 2,
      src: travel,
      title: "Travel risk management",
      content:
        " Secure your business travel with our expert risk management services. Tailored solutions for high-risk destinations",
    },
    {
      id: 3,
      src: investigator,
      title: "Private investigator",
      content:
        "Tailored international private investigative services or corporations high-net-worth families and governments.",
    },
    {
      id: 4,
      src: counter,
      title: "Counter Surveillance",
      content:
        " Safeguard against threats with counter surveillance tactics. Identify risks and protect your privacy and assets.Contact us for expert assistance",
    },
  ];

  return (
    <Layout>
      <Head>
        <title>Services</title>
        <meta property="og:title" content="My page title" key="title" />
        <link rel="icon" href="/LOGO.png" />
      </Head>
      <div>
        <p> Private security:</p>
        <div className="md:grid md:grid-cols-4 gap-6 mt-16 p-5">
          {securityItems.map((security) => (
            <div
              className="flex flex-col items-start justify-between gap-4 mx-auto mt-4 w-5/6  bg-white rounded-md shadow-sm hover:shadow-2xl "
              key={security.id}
            >
              <div className="flex flex-col h-full max-w-sm rounded overflow-hidden shadow-lg ">
                <div className="md:relative block  cursor-pointer overflow-hidden rounded">
                  <Image
                    src={security.src}
                    alt="Card Image"
                    width={288} // Adjust the width based on your image
                    height={192} // Adjust the height based on your image
                    className="w-full h-auto"
                  />
                  <div className="flex-grow px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                      {security.title}
                    </div>
                    <p className="text-gray-700 text-base">
                      {security.content}
                    </p>
                  </div>
                </div>
                <div className=" flex flex-row justify-between items-center px-6 pt-4 pb-2">
                  <button className="flex flex-row-2 items-center justify-between gap-2  mx-auto  p-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 hover:shadow-xl ">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          ))}

          {jets.map((jet) => (
            <div
              className="flex flex-col items-start justify-between gap-4 mx-auto mt-4 w-5/6  bg-white rounded-md shadow-sm hover:shadow-2xl "
              key={jet.id}
            >
              <div className="flex flex-col h-full max-w-sm rounded overflow-hidden shadow-lg ">
                <div className="md:relative block  cursor-pointer overflow-hidden rounded">
                  <Image
                    src={jet.src}
                    alt="Card Image"
                    width={288} // Adjust the width based on your image
                    height={192} // Adjust the height based on your image
                    className="w-full h-auto"
                  />
                  <div className="flex-grow px-6 py-4">
                    <div className="font-bold text-xl mb-2">{jet.title}</div>
                    <p className="text-gray-700 text-base">{jet.content}</p>
                  </div>
                </div>
                <div className=" flex flex-row justify-between items-center px-6 pt-4 pb-2">
                  <button className="flex flex-row-2 items-center justify-between gap-2  mx-auto  p-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 hover:shadow-xl ">
                    Hire now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
