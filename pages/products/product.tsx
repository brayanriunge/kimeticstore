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
      <div className="min-h-screen">
        <div className=" mx-auto  w-5/6 mt-32 ">
          <CategoryFilter
            selectedCategory={selectedCategory}
            onSelectedCategory={handleCategoryChange}
          />
        </div>

        {/* products */}
        <div className="w-11/12 overflow-y-auto mx-auto">
          <h1 className="mt-4 text-lg font-sans ">Products</h1>
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
