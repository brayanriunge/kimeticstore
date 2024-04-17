import Layout from "@/components/Layout";
import ProductItem from "@/components/ProductItem";
import CategoryFilter from "@/components/categoryFilter";
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
      <div className="flex justify-between gap-4 items-center bg-gray-200 mt-28 min-h-screen">
        {/* checkboxes */}
        <div className="flex flex-col sticky top-0 items-center gap-6 p-5 m-5 w-1/4 justify-start">
          <CategoryFilter
            selectedCategory={selectedCategory}
            onSelectedCategory={handleCategoryChange}
          />
        </div>
        {/* products */}
        <div className="w-3/4 overflow-y-auto p-5 m-5">
          <h1 className="mt-4 text-lg font-sans ">Products</h1>
          <div className="grid grid-cols-3 gap-6">
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
