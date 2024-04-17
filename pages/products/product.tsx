import Layout from "@/components/Layout";
import ProductItem from "@/components/ProductItem";
import { fetchProductByCategory } from "@/hooks/productService";
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
          `http://localhost:3000/api/product${
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
    <Layout>
      <div className="flex justify-between gap-4 items-center bg-gray-200">
        {/* checkboxes */}
        <div className="flex flex-col justify-between items-center gap-6">
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
              value="agriculture"
              checked={selectedCategory === "agriculture"}
              onChange={() => handleCategoryChange("agriculture")}
            />
            Agriculture
          </label>
          <label>
            <input
              type="radio"
              name="category"
              value="gem"
              checked={selectedCategory === "gem"}
              onChange={() => handleCategoryChange("gem")}
            />
            gem
          </label>
        </div>
        {/* products */}
        <div>
          <h1>Products</h1>
          <div className="grid grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id}>
                <ProductItem {...product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
