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
    const product = await prisma.product.findMany({
      where: {
        category: {
          some: {
            categoryName: category as string,
          },
        },
      },
    });
    // if (!product) {
    //   // Handle case where no products are found for the given category
    //   return res
    //     .status(404)
    //     .json({ message: "No products found for the category" });
    // }
    res.status(200).json(product);
    console.log(product);
  } catch (error) {
    console.log("Error fetching category products:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
