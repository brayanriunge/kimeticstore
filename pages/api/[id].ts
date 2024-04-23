import { prisma } from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.status(405).json({ message: "Method not found" });
  }

  const { id } = req.query;

  try {
    const item = await prisma.product.findUnique({
      where: {
        id: id as string,
      },
    });
    if (!item) {
      res.status(404).json({ message: "item not found" });
    }
    console.log(item);
    return res.status(200).json(item);
  } catch (error) {
    console.log(error);
  }
}
