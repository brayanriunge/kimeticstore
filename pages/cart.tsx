import CartItem from "@/components/Cartitems";
import Layout from "@/components/Layout";
import { useCart } from "@/context/CartContext";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { FaArrowLeft } from "react-icons/fa";

export default function Cart() {
  const { cartItem, cartQuantity } = useCart();
  const router = useRouter();

  const { data: session } = useSession();

  useEffect(() => {
    if (!session) {
      toast.error("You must login fist");
      router.push("/login");
    }
  }, []);

  return (
    <>
      <Head>
        <title>Cart</title>
        <meta property="og:title" content="My page title" key="title" />
        <link rel="icon" href="/LOGO.png" />
      </Head>
      <Layout>
        {cartQuantity > 0 ? (
          <div className="w-5/6 mx-auto mb-4s">
            {cartItem.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>
        ) : (
          <div className="mx-auto mt-10 max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
            <div className="mx-auto max-w-screen-sm text-center">
              <div className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                No items in the cart
              </div>
              <div className="mb-4 font-mono text-lg font-light text-gray-500">
                Please add items to the cart. You&apos;ll find lots of products
                to explore on the home page.
              </div>
              <Link
                href="/"
                className="my-4 inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                <FaArrowLeft /> &nbsp; Back to Homepage
              </Link>
            </div>
          </div>
        )}
      </Layout>
    </>
  );
}
