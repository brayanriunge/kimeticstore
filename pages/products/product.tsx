// import ProductItem from "@/components/ProductItem";
// import { fetchProductByCategory } from "@/hooks/productService";
import { productType } from "@/hooks/types";
import { strict } from "assert";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ProductList() {
  const router = useRouter();
  const [products, setProducts] = useState<productType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/products${
            selectedCategory ? `?category=${selectedCategory}` : ""
          }`
        );
        if (!response.ok) {
          throw new Error("failed to fetch product");
        }
        const data = await response.json();
        setProducts(data);
        console.log("this is the data", data);
      } catch (error) {
        setError("error fetching products");
        console.log(error);
        setLoading(false);
      }
    };

    fetchItems();
    setLoading(false);
  }, [selectedCategory]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };
  if (loading) {
    <p> {loading}</p>;
  }
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex justify-between gap-4 items-center">
      {/* checkboxes */}
      <div className="flex flex-col justify-between items-center gap-6">
        <div>
          <label>
            <input
              type="radio"
              name="category"
              value=""
              checked={!selectedCategory}
              onChange={() => handleCategoryChange("")}
            />
            All
          </label>
          <label>
            <input
              type="radio"
              name="category"
              value="Agriculture"
              checked={!selectedCategory}
              onChange={() => handleCategoryChange("Agriculture")}
            />
            All
          </label>
        </div>
      </div>
      {/* products */}
      <div>
        <div className="grid grid-cols-4 gap-6">
          <h1>Products</h1>
          {products.map((product) => (
            <div key={product.id}>
              {/* <ProductItem {...product} /> */}
              <div>{product.imgUrl}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
