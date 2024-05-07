import Layout from "@/components/Layout";
import { productType } from "@/hooks/types";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ProductItem() {
  const router = useRouter();
  const [items, setItems] = useState<productType | null>(null);
  const { id } = router.query;
  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/${id}`);
        if (!response.ok) {
          throw new Error(" Failed to fetch product");
        }
        const data = await response.json();
        // console.log(data);
        setItems(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchItem();
  }, [id]);

  return (
    <Layout>
      <div className="min-h-screen body-font overflow-hidden mt-28">
        <div className="flex w-4/5 mx-auto py-24 px-5 flex-wrap gap-10">
          <Image
            width={192}
            className="h-60 object-cover object-center w-auto rounded"
            height={192}
            alt="product"
            unoptimized={true}
            src={items?.imgUrl as string}
          />
          <div className="w-1/2 mt-6">
            <div className="font-bold text-indigo-400 text-3xl p-5">
              {items?.name}
            </div>
            <p className="text-xl font-mono text-gray-700 p-2">
              {items?.description}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}