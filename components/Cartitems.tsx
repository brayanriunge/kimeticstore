import { useCart } from "@/context/CartContext";
import { productType } from "@/hooks/types";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi";

export type cartItemProp = {
  id: string;
  quantity: number;
};

export default function CartItem({ id, quantity }: cartItemProp) {
  const { addToCart, removeFromCart, decreaseCartItem } = useCart();
  const [item, setItem] = useState<productType | null>(null);
  const { data: session } = useSession();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>();

  useEffect(() => {
    if (session) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [session]);

  const fetchItem = async () => {
    const productId = await fetch(`/api/${id}`);
    console.log("Response");
    const res = await productId.json();
    setItem(res);
    console.log(res);
  };

  useEffect(() => {
    fetchItem();
  }, [id]);

  return (
    <section>
      {item && (
        <section className="mt-10 flex flex-col items-center justify-between md:flex-row md:mt-20">
          {/* Main container with padding and shadow */}
          <div className="mx-auto p-4 w-full max-w-md md:max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl bg-white rounded-lg mt-2">
            {/* Image section */}
            <div className="rounded-md mb-4 md:mb-0">
              <Image
                className="mx-auto h-24 w-24 md:h-16 md:w-16"
                src={item.imgUrl}
                alt={item?.name as string}
                height={100}
                width={100}
              />
            </div>

            {/* Quantity control section */}
            <div className="inline-flex items-center border-2 border-gray-700 rounded-md">
              <button
                className="px-3 py-2 font-medium hover:bg-gray-200"
                onClick={() => addToCart(item.id)}
              >
                <HiOutlinePlus />
              </button>
              <div className="px-4 py-2 font-medium text-gray-900">
                {quantity}
              </div>
              <button
                className="px-3 py-2 font-medium hover:bg-gray-200"
                onClick={() => decreaseCartItem(item.id)}
              >
                <HiOutlineMinus />
              </button>
            </div>

            {/* Remove item section */}
            <div className="mt-4 md:mt-0 text-md">
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 hover:underline"
              >
                Remove
              </button>
            </div>

            {/* Make order section */}
            <div className="mt-4 md:mt-0 font-large text-center md:text-left">
              <button className="hover:underline hover:text-orange-600">
                <Link href="/chat">Make Order</Link>
              </button>
            </div>
          </div>
        </section>
      )}
    </section>
  );
}
