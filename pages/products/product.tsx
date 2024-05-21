import Layout from "@/components/Layout";
import ProductItem from "@/components/ProductItem";
import CategoryFilter from "@/components/categoryFilter";
import { fetchProductByCategory } from "@/hooks/productService";
import { product, productType } from "@/hooks/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { strict } from "assert";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface ProductListProp {
  filteredItems: product[];
}
type props = {
  selectedCategory: string;
  onSelectedCategory: (category: string) => void;
};

export default function ProductList({ filteredItems }: ProductListProp) {
  const router = useRouter();
  const [products, setProducts] = useState<product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const isAboveMediaScreens = useMediaQuery("(min-width: 1060px)");

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
      {/* products */}

      {isAboveMediaScreens ? (
        <>
          <div className="min-h-screen mt-28 ">
            <div className=" mx-auto  w-5/6  ">
              <CategoryFilter
                selectedCategory={selectedCategory}
                onSelectedCategory={handleCategoryChange}
              />
            </div>
            <div className="w-11/12 overflow-y-auto mx-auto">
              {products.map((product) => (
                <div>
                  <h1 className="mt-4 text-lg font-sans ">
                    Products: {product.category}
                  </h1>
                </div>
              ))}
            </div>
            <div className="md:grid md:grid-cols-4 gap-6 p-5">
              {products.map((product) => (
                <div key={product.id}>
                  <ProductItem {...product} />
                </div>
              ))}
              {filteredItems &&
                filteredItems.map((product) => (
                  <ProductItem
                    key={product.id}
                    description={product.description}
                    name={product.name}
                    imgUrl={product.imgUrl}
                    id={product.id}
                    category={product.category}
                  />
                ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className=" mx-auto  w-5/6  mt-28 ">
            <CategoryFilter
              selectedCategory={selectedCategory}
              onSelectedCategory={handleCategoryChange}
            />
          </div>
          <div className="w-11/12 overflow-y-auto mx-auto">
            {products.map((product) => (
              <div>
                <h1 className="mt-4 text-lg font-sans ">
                  Products: {product.category}
                </h1>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-6 p-2">
            {products.map((product) => (
              <div key={product.id}>
                <ProductItem {...product} />
              </div>
            ))}
            {filteredItems &&
              filteredItems.map((product) => (
                <ProductItem
                  key={product.id}
                  description={product.description}
                  name={product.name}
                  imgUrl={product.imgUrl}
                  id={product.id}
                  category={product.category}
                />
              ))}
          </div>
        </>
      )}
    </Layout>
  );
}
