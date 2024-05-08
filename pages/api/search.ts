import { prisma } from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.status(405).json({ message: "method not found" });
  }
  const { query } = req.query;

  try {
    let products;
    if (typeof query === "string") {
      // If query is a string, directly use it for filtering
      products = await prisma.product.findMany({
        where: {
          OR: [
            { name: { contains: query, mode: "insensitive" } }, // Search by product name (case-insensitive)
            { description: { contains: query, mode: "insensitive" } }, // Search by product description (case-insensitive)
          ],
        },
      });
    } else if (Array.isArray(query)) {
      // If query is an array, join its elements into a single string
      const searchString = query.join(" ");
      products = await prisma.product.findMany({
        where: {
          OR: [
            { name: { contains: searchString, mode: "insensitive" } }, // Search by product name (case-insensitive)
            { description: { contains: searchString, mode: "insensitive" } }, // Search by product description (case-insensitive)
          ],
        },
      });
    } else {
      // If query is neither a string nor an array, return all products
      products = await prisma.product.findMany();
    }

    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
