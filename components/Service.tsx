type props = {
  id: number;
  name: string;
};

export default function Service() {
  const services: Array<props> = [
    {
      id: 1,
      name: "Software Development",
    },
    {
      id: 2,
      name: "Private Security",
    },
    {
      id: 3,
      name: "Private Jet Flights",
    },
    {
      id: 4,
      name: "Land Survey",
    },
    {
      id: 5,
      name: "Academic Consultation",
    },
    {
      id: 6,
      name: "International Investment Advisory",
    },
    {
      id: 7,
      name: "Partnership",
    },
  ];
  return (
    <div className=" ">
      <div className="mx-auto w-5/6">
        <div className=" p-5 ">
          <h1 className="text-2xl font-semibold mb-2 ">Services:</h1>
          <div className=" md:grid  md:grid-cols-4 gap-4 items-center">
            {services.map((service) => (
              <div className="rounded-md text-montserrat px-8 p-2 shadow-md hover:border-l-pink-200 hover:border-4">
                {service.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
