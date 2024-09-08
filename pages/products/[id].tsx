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

// export default function ProductItem() {
//   const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
//   const router = useRouter();
//   const [items, setItems] = useState<productType | null>(null);
//   const { id } = router.query;

//   const { data: session } = useSession();

//   useEffect(() => {
//     if (session) {
//       setIsLoggedIn(true);
//     } else {
//       setIsLoggedIn(false);
//     }
//   }, [session]);

//   useEffect(() => {
//     const fetchItem = async () => {
//       try {
//         const response = await fetch(`/api/${id}`);
//         if (!response.ok) {
//           throw new Error(" Failed to fetch product");
//         }
//         const data = await response.json();
//         // console.log(data);
//         setItems(data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchItem();
//   }, [id]);
//   const { getItemQuantity, addToCart } = useCart();

//   const quantity = items ? getItemQuantity(items?.id as string) : 0;

//   return (
//     <>
//       <Head>
//         <title> {items?.name}</title>
//         <meta property="og:title" content="My page title" key="title" />
//         <link rel="icon" href="/LOGO.png" />
//       </Head>
//       <Layout>
//         <div className="min-h-screen body-font overflow-hidden mt-16 bg-custom-radial">
//           <div className="md:flex w-4/5 mx-auto py-24 px-5 gap-10 md:mb-2 mb-4">
//             <div className="w-1/2 flex justify-center items-center">
//               <Image
//                 width={1000}
//                 className="object-cover object-center w-full rounded"
//                 height={1000}
//                 alt="product"
//                 unoptimized={true}
//                 src={items?.imgUrl as string}
//               />
//             </div>
//             <div className="w-1/2 flex flex-col justify-between">
//               <div className="font-bold text-indigo-400 text-3xl p-5">
//                 {items?.name}
//               </div>
//               <p className="text-xl font-mono text-gray-700 p-2 flex-grow">
//                 {items?.description}
//               </p>
//               <div className="mt-4 flex justify-between items-center">
//                 <button
//                   className="flex items-center gap-2 text-lg font-bold px-8 py-2 bg-orange-400 hover:bg-orange-600 hover:shadow-xl rounded-lg"
//                   onClick={() => addToCart(items?.id as string)}
//                 >
//                   Add to cart <FaShoppingCart />
//                 </button>
//               </div>
//             </div>
//           </div>
//           <TopDeal />
//         </div>

//       </Layout>
//     </>
//   );
// }

{
  /* <div className="min-h-screen body-font overflow-hidden mt-16 bg-custom-radial">
          <div className="flex w-5/6 mx-auto py-24 px-5 flex-wrap gap-10 mb-2 ">
            <div className="w-1/2">
              <Image
                width={1000}
                className="h-auto object-cover object-center w-full rounded"
                height={1000}
                alt="product"
                unoptimized={true}
                src={items?.imgUrl as string}
              />
            </div>

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
        </div> */
}

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
        const response = await fetch(`/api/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchItem();
  }, [id]);

  const { getItemQuantity, addToCart } = useCart();
  const quantity = items ? getItemQuantity(items?.id as string) : 0;

  return (
    <>
      <Head>
        <title> {items?.name}</title>
        <meta property="og:title" content="My page title" key="title" />
        <link rel="icon" href="/LOGO.png" />
      </Head>
      <Layout>
        <div className="min-h-screen body-font overflow-hidden mt-16 bg-custom-radial">
          <div className="container mx-auto py-10 px-4">
            <div className="md:flex gap-10 md:mb-2 mb-4">
              {/* Product Image */}
              <div className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
                <Image
                  width={600}
                  height={600}
                  className="object-contain w-full h-auto rounded-md"
                  alt="product"
                  unoptimized={true}
                  src={items?.imgUrl as string}
                />
              </div>

              {/* Product Details */}
              <div className="w-full md:w-1/2 flex flex-col justify-between">
                <div className="text-indigo-500 text-2xl md:text-3xl font-semibold mb-4">
                  {items?.name}
                </div>
                <p className="text-lg md:text-xl font-mono text-gray-700 mb-6">
                  {items?.description}
                </p>

                {/* Add to Cart Button */}
                <div className="mt-4">
                  <button
                    className="flex items-center justify-center gap-2 w-full md:w-auto text-lg font-bold px-6 py-3 bg-orange-500 hover:bg-orange-600 hover:shadow-xl rounded-lg"
                    onClick={() => addToCart(items?.id as string)}
                  >
                    Add to cart <FaShoppingCart />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <TopDeal />
        </div>
      </Layout>
    </>
  );
}
