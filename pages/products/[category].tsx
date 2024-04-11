import ProductItem from "@/components/ProductItem";
import { fetchProductByCategory } from "@/hooks/productService";
import { productType } from "@/hooks/types";
import { strict } from "assert";
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
          `http://localhost:3000/api/products?catgory=${category}`
        );
        if (res.ok) {
          const data = await res.json();
          setProducts(data);
          console.log(data);
        } else {
          throw new Error(`Http Error: ${res.status}`);
        }
      } catch (error) {
        console.log("Failed to fetch data:", error);
      }
    };

    // if (category) {
    //   fetchProductByCategory(category as string)
    //     .then((data) => setProducts(data))
    //     .then((error) => console.error("error fetching product", error));
    // }
  }, [category]);

  return (
    <div className="grid grid-cols-4 gap-6">
      <h1>Category:{category}</h1>
      {products.map((product) => (
        <div key={product.id}>
          {/* <ProductItem {...product} /> */}
          <div>{product.imgUrl}</div>
        </div>
      ))}
    </div>
  );
}
