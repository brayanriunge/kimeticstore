import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { prisma } from "@/utils/db";
import { json } from "stream/consumers";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "DELETE")
      res.status(405).json({ message: "Method not allowed" });

    const session = await getServerSession(req, res, authOptions);

    if (session?.user.role !== "ADMIN1")
      res
        .status(405)
        .json({ message: "User not allowed to make this request" });

    const user = await prisma.user.findUnique({
      where: {
        email: session?.user.email as string,
      },
    });
    if (!user) res.status(404).json({ message: "user not found" });

    const { id } = req.query;

    const product = await prisma.product.findUnique({
      where: {
        id: id as string,
      },
    });
    if (!product) res.status(404).json({ message: " Product not found" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "an error occurred during deleting the item" });
  }
}
