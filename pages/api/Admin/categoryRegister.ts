import { prisma } from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { categoryName } = req.body;
  const productId = req.body.id as string;
  try {
    const result = await prisma.category.create({
      data: {
        // categoryName categoryName as unknown as string,
        productId,
        categoryName,
      },
    });
    console.log(result);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(403).json({ message: "error fetching category" });
  }
}
