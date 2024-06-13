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
  ];
  return (
    <div>
      {services.map((service) => (
        <div className="rounded-md text-montserrat px-8 p-2 shadow-md">
          {service.name}
        </div>
      ))}
    </div>
  );
}
