import Layout from "@/components/Layout";
import TopDeal from "@/components/TopDeals";
import Delete from "@/components/[id]";
import { useCart } from "@/context/CartContext";
import { productType } from "@/hooks/types";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function ProductItem() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const router = useRouter();
  const [items, setItems] = useState<productType | null>(null);
  const { id } = router.query;

  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [session]);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/${id}`);
        if (!response.ok) {
          throw new Error(" Failed to fetch product");
        }
        const data = await response.json();
        // console.log(data);
        setItems(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchItem();
  }, [id]);
  const { getItemQuantity, addToCart } = useCart();
  console.log("useCart context: ", { getItemQuantity, addToCart });
  const quantity = items ? getItemQuantity(items?.id as string) : 0;

  return (
    <>
      <Head>
        <title>Terms</title>
        <meta property="og:title" content="My page title" key="title" />
        <link rel="icon" href="/LOGO.png" />
      </Head>
      <Layout>
        <div className="min-h-screen body-font overflow-hidden mt-16 bg-custom-radial">
          <div className="flex w-4/5 mx-auto py-24 px-5 flex-wrap gap-10 mb-2">
            <Image
              width={192}
              className="h-60 object-cover object-center w-auto rounded"
              height={192}
              alt="product"
              unoptimized={true}
              src={items?.imgUrl as string}
            />
            <div className="w-1/2 mt-6">
              <div className="font-bold text-indigo-400 text-3xl p-5">
                {items?.name}
              </div>
              <p className="text-xl font-mono text-gray-700 p-2">
                {items?.description}
              </p>
              <div className="mt-4 flex flex-row justify-between items-center">
                <button
                  className="flex flex-row-2 items-center justify-between gap-2 text-lg font-bold mx-auto px-8 p-2 bg-orange-400 hover:bg-orange-600 hover:shadow-xl rounded-lg"
                  onClick={() => addToCart(items?.id as string)}
                >
                  Add to cart <FaShoppingCart />
                </button>
                <Delete isLoggedIn={isLoggedIn} />
              </div>
            </div>
          </div>
          <TopDeal />
        </div>
      </Layout>
    </>
  );
}
