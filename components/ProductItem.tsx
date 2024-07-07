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
      <div className="flex flex-col h-full max-w-sm rounded overflow-hidden shadow-lg ">
        <Image
          src={imgUrl}
          alt="Card Image"
          width={288} // Adjust the width based on your image
          height={192} // Adjust the height based on your image
          className="w-full h-auto"
        />
        <div className="flex-grow px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base">
            {description.slice(0, 20)}...
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <a
            href="#"
            className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Go somewhere
          </a>
        </div>
      </div>
      {/* <div>
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
      </div> */}
    </div>
  );
}
