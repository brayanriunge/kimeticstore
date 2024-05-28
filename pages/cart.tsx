import CartItem from "@/components/Cartitems";
import Layout from "@/components/Layout";
import { useCart } from "@/context/CartContext";
import { use } from "react";

export default function Cart() {
  const { cartItem } = useCart();
  return (
    <Layout>
      <div>
        {cartItem.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
    </Layout>
  );
}
