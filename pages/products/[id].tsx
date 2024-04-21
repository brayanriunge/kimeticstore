import { productType } from "@/hooks/types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default async function ProductItem() {
  const router = useRouter();
  const [item, setItem] = useState<productType | null>(null);
  const { id } = router.query;
  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/${id}`);
        if (response.ok) {
          throw new Error(" Failed to fetch product");
        }
        const res = response.json();
        setItem(await res);
      } catch (error) {}
    };
  }, [id]);

  return <div></div>;
}
