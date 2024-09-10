import { prisma } from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";
import router from "next/router";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "method not allowed" });
  }
  const { category } = req.query;
  let products;

  try {
    if (category) {
      products = await prisma.product.findMany({
        where: {
          category: category as string,
        },
      });
    } else {
      products = await prisma.product.findMany();
    }
    res.status(200).json(products);
  } catch (error) {
    console.log("Error fetching category products:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
