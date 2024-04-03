import { productType } from "./types";
interface ProductInfo {
  name: string;
  description: string;
  imgUrl: string;
  id: string;
  category: string;
}

export async function fetchProductByCategory(
  category: string
): Promise<productType[]> {
  try {
    const res = await fetch(
      `http://localhost:3000/api/products?category=${category}`
    );
    if (!res.ok) {
      throw new Error("failed to fetch products by category");
    }
    const items: productType[] = await res.json();
    const productInfo: ProductInfo[] = items.map((item) => ({
      name: item.name,
      description: item.description,
      imgUrl: item.imgUrl,
      id: item.id,
      category: item.category,
    }));
    return productInfo;
  } catch (error) {
    console.error("Error fetch product by category:", error);
    return [];
  }
}
