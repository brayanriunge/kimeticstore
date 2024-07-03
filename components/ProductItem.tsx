import { useCart } from "@/context/CartContext";
import { product, productType } from "@/hooks/types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function ProductItem({
  description,
  id,
  imgUrl,
  name,
}: product) {
  const { getItemQuantity, addToCart } = useCart();
  const [item, setItem] = useState("");

  return (
    <div
      className="flex flex-col items-start justify-between gap-4 mx-auto mt-4 w-5/6  bg-white rounded-md shadow-sm hover:shadow-2xl "
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

      <div className="flex items-center justify-between gap-2 mx-auto tracking-widest">
        <h1 className="text-sm font-semibold ">Name:</h1>
        <p className="text-md font-bold">{name}</p>
      </div>
      <div className="flex items-center justify-between gap-2 mx-auto ">
        <h1 className="text-sm font-semibold">Description:</h1>
        <p className="text-md font-bold">{description.slice(0, 10)}...</p>
      </div>
    </div>
  );
}
