import { categoryType } from "@/hooks/types";
import Image, { StaticImageData } from "next/image";
import Land from "@/public/land.jpeg";
import Crop from "@/public/agriculture.jpg";
import Art from "@/public/art.jpeg";
import Car from "@/public/car.jpeg";
import Gem from "@/public/gem.jpeg";
import House from "@/public/house.jpeg";

type props = {
  id: number;
  picture: StaticImageData;
  name: string;
};

const explores: Array<categoryType> = [
  {
    id: 1,
    name: "Art",
    picture: Art,
  },
  {
    id: 2,
    name: "Cars",
    picture: Car,
  },
  {
    id: 3,
    name: "Crop",
    picture: Crop,
  },
  {
    id: 4,
    name: "Gem",
    picture: Gem,
  },
  {
    id: 5,
    name: "Land",
    picture: Land,
  },
  {
    id: 6,
    name: "House",
    picture: House,
  },
];

export default function Explore() {
  return (
    <section className="p-5">
      <div className="mb-2 text-xl font-light">Explore Categories :</div>
      <div className="grid grid-cols-4 gap-4">
        {explores.map((explore) => (
          <div className="relative mb-5 block " key={explore.id}>
            <Image
              src={explore.picture}
              alt="picture"
              height={192}
              width={192}
              className="mb-2 h-48 w-48 flex items-center cursor-pointer overflow-hidden rounded-full"
            />
            <div className=" font-mono">{explore.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
