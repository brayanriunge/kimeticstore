import { productType } from "@/hooks/types";
import Image from "next/image";

export default function ProductItem({
  description,
  id,
  imgUrl,
  name,
}: productType) {
  return (
    <div className="flex flex-col items-start justify-between gap-8 mx-auto rounded-md shadow-sm ">
      <div className="p-5 m-5">
        <Image height={194} width={194} src={imgUrl} alt="image" />
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="text-sm font-semibold">Name</div>
        <div className="text-md font-bold">{name}</div>
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="text-sm font-semibold">Description:</div>
        <div className="text-md font-bold">{description}</div>
      </div>
    </div>
  );
}
