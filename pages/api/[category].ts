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
  const category = req.query.category?.toString();
  if (!category || typeof category !== "string") {
    return res.status(400).json({ message: "Invalid category parameter" });
  }
  console.log("received category:", category);
  try {
    const products = await prisma.category.findUnique({
      where: {
        categoryName: category as string,
      },
      include: {
        product: true,
      },
    });
    // const categoryResult = await prisma.category.findUnique({
    //   where: { categoryName: req.query.category as string },
    // });
    // if (!categoryResult) {
    //   return res.status(404).json({ message: "category not found" });
    // }
    // const products = await prisma.product.findMany({
    //   where: {
    //     category: {
    //       some: {
    //         id: categoryResult.id,
    //       },
    //     },
    //   },
    // });

    // if (!product) {
    //   // Handle case where no products are found for the given category
    //   return res
    //     .status(404)
    //     .json({ message: "No products found for the category" });
    // }
    res.status(200).json(products);
    console.log("the products:", products);
  } catch (error) {
    console.log("Error fetching category products:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
