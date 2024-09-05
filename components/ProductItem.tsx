// import { useCart } from "@/context/CartContext";
// import { product, productType } from "@/hooks/types";
// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";
// import { FaShoppingCart } from "react-icons/fa";

// export default function ProductItem({
//   description,
//   id,
//   imgUrl,
//   name,
// }: product) {
//   const { getItemQuantity, addToCart } = useCart();
//   const [item, setItem] = useState("");

//   return (
//     <div
//       className="flex flex-col items-start justify-between gap-4 mx-auto mt-4 w-5/6  bg-white rounded-md shadow-sm hover:shadow-2xl "
//       key={id}
//     >
//       <div className="flex flex-col h-full max-w-sm rounded overflow-hidden shadow-lg ">
//         <Link
//           href={`/products/${id}`}
//           className="md:relative block  cursor-pointer overflow-hidden rounded"
//         >
//           <Image
//             src={imgUrl}
//             alt="Card Image"
//             width={288} // Adjust the width based on your image
//             height={192} // Adjust the height based on your image
//             className="w-full h-auto"
//           />
//           <div className="flex-grow px-6 py-4">
//             <div className="font-bold text-xl mb-2">{name}</div>
//             <p className="text-gray-700 text-base">
//               {description.slice(0, 20)}...
//             </p>
//           </div>
//         </Link>
//         <div className=" flex flex-row justify-between items-center px-6 pt-4 pb-2">
//           <button
//             className="flex flex-row-2 items-center justify-between gap-2  mx-auto  p-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 hover:shadow-xl "
//             onClick={() => addToCart(id as string)}
//           >
//             Add to cart <FaShoppingCart />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useCart } from "@/context/CartContext";
import { product } from "@/hooks/types";
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
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4" key={id}>
      <div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
        <Link
          href={`/products/${id}`}
          className="relative block cursor-pointer rounded overflow-hidden"
        >
          <Image
            src={imgUrl}
            alt="Product Image"
            width={400}
            height={400}
            className="w-full h-64 object-cover rounded-t-lg hover:scale-105 transition-transform duration-300"
          />
        </Link>
        <div className="flex-grow px-4 py-3">
          <Link href={`/products/${id}`}>
            <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors">
              {name}
            </h3>
          </Link>
          <p className="text-gray-600 mt-2 text-sm">
            {description.slice(0, 50)}...
          </p>
        </div>
        <div className="flex justify-between items-center px-4 py-3">
          <button
            className="flex items-center gap-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
            onClick={() => addToCart(id as string)}
          >
            Add to cart <FaShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
}
