import ProductItem from "@/components/ProductItem";
import { productType } from "@/hooks/types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function categoryPage() {
  const router = useRouter();
  const [products, setProducts] = useState<productType[]>([]);
  const { category } = router.query;

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/api/products/${category}`
        );
        if (res.ok) {
          const data = await res.json();
          setProducts(data);
        } else {
          throw new Error(`Http Error: ${res.status}`);
        }
      } catch (error) {
        console.log("Failed to fetch data:", error);
      }
    };

    if (category) {
      fetchItem();
    }
  }, [category]);

  return (
    <div className="grid grid-cols-4 gap-6">
      <h1>Category:{category}</h1>
      {products.map((product) => (
        <div key={product.id}>
          <ProductItem {...product} />
        </div>
      ))}
    </div>
  );
}
