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
import dev from "@/public/dev.png";
import ai from "@/public/ai.jpg";
import iot from "@/public/iot.jpg";
import useMediaQuery from "@/hooks/useMediaQuery";

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

type softwareProps = {
  id: number;
  src: StaticImageData;
  content: string;
  title: string;
};

export default function Service() {
  const softwares: Array<softwareProps> = [
    {
      id: 1,
      title: "Software product and application development",
      src: dev,
      content:
        "Expedite product development to meet the most pressing customer needs and deliver innovative new features more frequently.",
    },
    {
      id: 2,
      title: "Data engineering and AI/ML",
      src: ai,
      content:
        "Aggregate and enrich data securely to help reduce time to insights and enable next-gen AI/ML experiences.",
    },
    {
      id: 3,
      title: "Connected device engineering",
      src: iot,
      content:
        "We are ready to  design, develop, and commercialize smart connected devices, including hardware and firmware, to drive innovation and build seamless experiences.",
    },
  ];

  const isAboveMediaScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <Layout>
      <Head>
        <title>Services</title>
        <meta property="og:title" content="My page title" key="title" />
        <link rel="icon" href="/LOGO.png" />
      </Head>

      <>
        {isAboveMediaScreens ? (
          <div className="md:grid md:grid-cols-4 gap-6 mt-16 p-5">
            {softwares.map((software) => (
              <div
                className="flex flex-col items-start justify-between gap-4 mx-auto mt-4 w-5/6  bg-white rounded-md shadow-sm hover:shadow-2xl "
                key={software.id}
              >
                <div className="flex flex-col h-full max-w-sm rounded overflow-hidden shadow-lg ">
                  <div className="md:relative block  cursor-pointer overflow-hidden rounded">
                    <Image
                      src={software.src}
                      alt="Card Image"
                      width={288} // Adjust the width based on your image
                      height={192} // Adjust the height based on your image
                      className="w-full h-auto"
                    />
                    <div className="flex-grow px-6 py-4">
                      <div className="font-bold text-xl mb-2">
                        {software.title}
                      </div>
                      <p className="text-gray-700 text-base">
                        {software.content}
                      </p>
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
        ) : (
          <div className=" mt-16  grid grid-cols-2 gap-6 p-2">
            {softwares.map((software) => (
              <div
                className="flex flex-col items-start justify-between gap-4 mx-auto mt-4 w-5/6  bg-white rounded-md shadow-sm hover:shadow-2xl "
                key={software.id}
              >
                <div className="flex flex-col h-full max-w-sm rounded overflow-hidden shadow-lg ">
                  <div className="md:relative block  cursor-pointer overflow-hidden rounded">
                    <Image
                      src={software.src}
                      alt="Card Image"
                      width={288} // Adjust the width based on your image
                      height={192} // Adjust the height based on your image
                      className="w-full h-auto"
                    />
                    <div className="flex-grow px-6 py-4">
                      <div className="font-bold text-xl mb-2">
                        {software.title}
                      </div>
                      <p className="text-gray-700 text-base">
                        {software.content}
                      </p>
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
        )}
      </>
    </Layout>
  );
}
