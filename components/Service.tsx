import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import logo from "@/public/Logo.png";
import code from "@/public/code.png";
import guard from "@/public/guard.png";
import school from "@/public/university.png";
import jet from "@/public/private-jet.png";
import partner from "@/public/partnership.png";
import land from "@/public/construction.png";
import consult from "@/public/conversation.png";

type props = {
  id: number;
  name: string;
  src: StaticImageData;
};

export default function Service() {
  const services: Array<props> = [
    {
      id: 1,
      name: "Software Development",
      src: code,
    },

    {
      id: 4,
      name: "Engineering Consultation",
      src: consult,
    },
    {
      id: 5,
      name: "International Investment Advisory",
      src: school,
    },
    {
      id: 6,
      name: "Partnership",
      src: partner,
    },
  ];
  return (
    <div className=" ">
      <div className="mx-auto w-5/6">
        <div className=" p-5 ">
          <h1 className="text-2xl font-semibold mb-2 ">Services:</h1>
          <div className=" md:grid  md:grid-cols-4 gap-4 items-center">
            {services.map((service) => (
              <div className="flex flex-col items-center hover:border-l-pink-200 hover:border-4 justify-between gap-4 mx-auto mt-4  bg-white rounded-md shadow-sm hover:shadow-2xl">
                <div>
                  <div
                    className="md:relative block  cursor-pointer overflow-hidden rounded"
                    key={service.id}
                  >
                    <Image
                      height={100}
                      width={100}
                      src={service.src}
                      alt="image"
                      className="block h-full  w-full object-cover object-center"
                    />
                  </div>
                </div>
                <div className="rounded-md text-montserrat px-8 p-2  ">
                  {service.name}
                </div>
                <div className="rounded-md text-montserrat px-8 p-2">
                  <Link href={"/service"}>
                    <button className="x-auto  p-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 hover:shadow-xl">
                      View this service
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
