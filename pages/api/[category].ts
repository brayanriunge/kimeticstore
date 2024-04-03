import { prisma } from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { category } = req.query;

  if (req.method !== "GET") {
    return res.status(405).json({ message: "method not allowed" });
  }

  try {
    const product = prisma.product.findMany({
      where: {
        category: category as string,
      },
    });
    console.log(product);
  } catch (error) {
    console.log("Error fetching category products:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
