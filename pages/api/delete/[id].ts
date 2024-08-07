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
      return res
        .status(405)
        .json({ message: "User not allowed to make this request" });

    const user = await prisma.user.findUnique({
      where: {
        email: session?.user.email as string,
      },
    });
    if (!user) return res.status(404).json({ message: "user not found" });

    const { id } = req.query;

    const product = await prisma.product.findUnique({
      where: {
        id: id as string,
      },
    });
    if (!product)
      return res.status(404).json({ message: " Product not found" });

    if (product?.userId !== user?.id)
      return res
        .status(405)
        .json({ message: "User is unauthorized to make the delete request" });

    const response = await prisma.product.delete({
      where: {
        id: id as string,
      },
    });
    console.log(response);
  } catch (error) {
    res
      .status(500)
      .json({ message: "an error occurred during deleting the item" });
  }
}
