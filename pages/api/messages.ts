import { prisma } from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const session = await getServerSession(req, res, authOptions);
//   const { method } = req;
//   if (!session) {
//     return res.status(401).json({ message: "Unauthorized" });
//   }

//   if (req.method === "POST") {
//     const { content } = req.body;
//     const user = await prisma.user.findUnique({
//       where: { email: session.user.email as string },
//     });
//     const message = await prisma.message.create({
//       data: {
//         content,
//         userId: user?.id as string, // Use session data correctly
//       },
//     });
//     res.json(message);
//   } else {
//     res.status(405).end();
//   }

//   // if (req.method === "GET") {
//   //   const { userId } = req.query;

//   //   if (!userId) {
//   //     return res.status(400).json({ error: "User ID is required" });
//   //   }

//   //   const messages = await prisma.message.findMany({
//   //     where: { userId: userId as string },
//   //     include: { user: true },
//   //     orderBy: { createdAt: "asc" },
//   //   });

//   //   return res.json(messages);
//   //   } else {
//   //     res.status(405).end();
//   //   }
//   switch (method) {
//     case "GET":
//       try {
//         const { userId } = req.query;
//         if (!userId || typeof userId !== "string") {
//           return res.status(400).json({ error: "User ID is required" });
//         }

//         const messages = await prisma.message.findMany({
//           where: { userId },
//           include: {
//             Reply: {
//               include: {
//                 user: true,
//               },
//             },
//           },
//           orderBy: { createdAt: "asc" },
//         });

//         res.status(200).json(messages);
//       } catch (error) {
//         res.status(500).json({ error: "Failed to fetch messages" });
//       }
//       break;

//     default:
//       res.setHeader("Allow", ["GET", "POST"]);
//       res.status(405).end(`Method ${method} Not Allowed`);
//   }
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const { userId } = req.query;

        if (!userId || typeof userId !== "string") {
          return res.status(400).json({ error: "User ID is required" });
        }

        const messages = await prisma.message.findMany({
          where: { userId: String(userId) },
          include: {
            user: true,
            Reply: {
              include: {
                user: true,
              },
            },
          },
          orderBy: { createdAt: "asc" },
        });

        res.status(200).json(messages);
      } catch (error) {
        res.status(500).json({ error: "Failed to fetch messages" });
      }
      break;

    case "POST":
      try {
        if (session?.user.role !== "USER") {
          return res.status(401).json({ message: "Unauthorized" });
        }
        const { content } = req.body;
        const user = await prisma.user.findUnique({
          where: { email: session.user.email as string },
        });
        const message = await prisma.message.create({
          data: {
            content,
            userId: user?.id as string,
          },
        });
        res.status(200).json(message);
      } catch (error) {
        res.status(500).json({ error: "Failed to create message" });
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
