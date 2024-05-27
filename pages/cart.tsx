import CartItem from "@/components/Cartitems";
import { useCart } from "@/context/CartContext";
import { use } from "react";

export default function Cart() {
  const { cartItem } = useCart();
  return (
    <div>
      {cartItem.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
    </div>
  );
}
