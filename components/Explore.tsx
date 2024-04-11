import { categoryType } from "@/hooks/types";
import Image, { StaticImageData } from "next/image";
import Land from "@/public/land.jpeg";
import Crop from "@/public/agriculture.jpg";
import Art from "@/public/art.jpeg";
import Car from "@/public/car.jpeg";
import Gem from "@/public/gem.jpeg";
import House from "@/public/house.jpeg";
import Herbs from "@/public/herbs.jpg";
import Cigars from "@/public/cigars.jpg";
import Construction from "@/public/construction.jpg";
import Link from "next/link";

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
    href: "/category?name=Art",
  },
  {
    id: 2,
    name: "Cars",
    picture: Car,
    href: "/category?name=cars",
  },
  {
    id: 3,
    name: "Crop",
    picture: Crop,
    href: "/category?name=agriculture",
  },
  {
    id: 4,
    name: "Gem",
    picture: Gem,
    href: "/category?name=gem",
  },
  {
    id: 5,
    name: "Land",
    picture: Land,
    href: "/category?name=Land",
  },
  {
    id: 6,
    name: "House",
    picture: House,
    href: "/category?name=house",
  },
  {
    id: 7,
    name: "Cigars",
    picture: Cigars,
    href: "/category?name=cigars",
  },
  {
    id: 8,
    name: "Construction materials",
    picture: Construction,
    href: "/category?name=construction",
  },
  {
    id: 9,
    name: "Herbs",
    picture: Herbs,
    href: "/category?name=herbs",
  },
];

export default function Explore() {
  return (
    <section className="p-5">
      <div className="mb-2 text-xl font-bold">Explore Categories :</div>
      <div className="md:grid md:grid-cols-4 gap-4">
        {explores.map((explore) => (
          <div className="relative mb-5 block " key={explore.id}>
            <Link href={`/category?category=${explore.href}`}>
              <Image
                src={explore.picture}
                alt="picture"
                height={192}
                width={192}
                className="mb-2 h-48 w-48 flex items-center cursor-pointer overflow-hidden rounded-full"
              />
            </Link>

            <div className=" font-mono">{explore.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
