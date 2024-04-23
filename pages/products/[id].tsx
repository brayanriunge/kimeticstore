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
    <div className="min-h-screen">
      <div>
        <Image
          width={192}
          height={192}
          alt="product"
          unoptimized={true}
          src={items?.imgUrl as string}
        />
      </div>
    </div>
  );
}
