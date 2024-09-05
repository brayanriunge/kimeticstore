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
        <section className="  flex flex-row-3 items-center justify-between mt-20">
          <div className="mx-auto p-5 w-11/12 flex flex-row-4 items-center justify-between gap-4  shadow-xl bg-white rounded-lg mt-2">
            <div className="rounded-md ">
              <Image
                className="mx-auto h-16 w-16"
                src={item.imgUrl}
                alt={item?.name as string}
                height={100}
                width={100}
              />
            </div>

            <div className=" inline-flex border-4 border-gray-700 ">
              <button
                className=" px-5 py-2.5 font-medium "
                onClick={() => addToCart(item.id)}
              >
                <HiOutlinePlus />
              </button>
              <div className="px-5 py-2.5 font-medium font-gray-900">
                {quantity}
              </div>

              <button
                className="px-5 py-2.5 font-medium "
                onClick={() => decreaseCartItem(item.id)}
              >
                <HiOutlineMinus />
              </button>
            </div>

            <div className="text-md">
              <button
                onClick={() => removeFromCart(id)}
                className="text-red-600 hover:underline"
              >
                Remove
              </button>
            </div>
            <div className="font-large ">
              <button className="hover:underline hover:text-orange-600">
                <Link href={"/chat"}> Make Order</Link>
              </button>
            </div>
          </div>
        </section>
      )}
    </section>
  );
}
