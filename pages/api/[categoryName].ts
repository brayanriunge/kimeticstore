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
  const { categoryName } = req.query;

  console.log("received category:", categoryName);
  // Ensure categoryName is extracted properly
  const categoryNameString =
    typeof categoryName === "string"
      ? categoryName
      : Array.isArray(categoryName)
      ? categoryName[0]
      : null;

  // Check if categoryNameString is null or undefined
  if (!categoryNameString) {
    return res.status(400).json({ message: "Invalid category name" });
  }
  try {
    const category = await prisma.category.findUnique({
      where: {
        categoryName: categoryNameString,
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
    res.status(200).json(category?.product);
    console.log("the products:", category?.product);
  } catch (error) {
    console.log("Error fetching category products:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
