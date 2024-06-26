import CartItem from "@/components/Cartitems";
import Layout from "@/components/Layout";
import { useCart } from "@/context/CartContext";
import Head from "next/head";
import { use } from "react";

export default function Cart() {
  const { cartItem } = useCart();
  return (
    <>
      <Head>
        <title>Cart</title>
        <meta property="og:title" content="My page title" key="title" />
        <link rel="icon" href="/LOGO.png" />
      </Head>
      <Layout>
        <div className="w-5/6 mx-auto mb-4s">
          {cartItem.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
      </Layout>
    </>
  );
}
