import { product, productType } from "@/hooks/types";
import Image from "next/image";
import Link from "next/link";

export default function ProductItem({
  description,
  id,
  imgUrl,
  name,
}: product) {
  return (
    <div
      className="flex flex-col items-start justify-between gap-4 mx-auto mt-4 w-5/6 bg-white rounded-md shadow-sm "
      key={id}
    >
      <div>
        <Link
          href={`/products/${id}`}
          className="md:relative block  cursor-pointer overflow-hidden rounded"
        >
          <Image
            height={192}
            width={192}
            src={imgUrl}
            alt="image"
            className="block h-full  w-full object-cover object-center"
          />
        </Link>
      </div>
      <div className="flex items-center justify-between gap-2 m-4 tracking-widest">
        <div className="text-sm font-semibold">Name:</div>
        <div className="text-md font-bold">{name}</div>
      </div>
      <div className="flex items-center justify-between gap-2 m-4">
        <div className="text-sm font-semibold">Description:</div>
        <div className="text-md font-bold">{description.slice(0, 10)}...</div>
      </div>
    </div>
  );
}
