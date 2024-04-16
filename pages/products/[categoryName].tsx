// import ProductItem from "@/components/ProductItem";
// import { fetchProductByCategory } from "@/hooks/productService";
import { productType } from "@/hooks/types";
import { strict } from "assert";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function categoryPage() {
  const router = useRouter();
  const [products, setProducts] = useState<productType[]>([]);
  const { categoryName } = router.query;
  console.log(router.query);

  useEffect(() => {
    const fetchItem = async () => {
      if (categoryName) {
        try {
          const res = await fetch(
            `http://localhost:3000/api/products?category=${categoryName}`
          );
          if (res.ok) {
            const data = await res.json();
            setProducts(data);
            console.log("this is data", data);
          } else {
            throw new Error(`Http Error: ${res.status}`);
          }
        } catch (error) {
          console.log("Failed to fetch data:", error);
        }
      }
    };

    fetchItem();
    // if (category) {
    //   fetchProductByCategory(category as string)
    //     .then((data) => setProducts(data))
    //     .then((error) => console.error("error fetching product", error));
    // }
  }, [categoryName]);

  return (
    <div className="grid grid-cols-4 gap-6">
      <h1>Category:{categoryName}</h1>
      {products.map((product) => (
        <div key={product.id}>
          {/* <ProductItem {...product} /> */}
          <div>{product.imgUrl}</div>
        </div>
      ))}
    </div>
  );
}