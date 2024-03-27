import { NextApiRequest, NextApiResponse } from "next";
import { v2 as cloudinary } from "cloudinary";

import formidable from "formidable";
import { prisma } from "@/utils/db";

// declare module "next" {
//   interface NextApiRequest {
//     file: any;
//   }
// }

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const getFormData = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
  const options: formidable.Options = {};
  options.maxFileSize = 4000 * 1024 * 1024;
  const form = formidable(options);
  return new Promise<{ fields: formidable.Fields; files: formidable.Files }>(
    (resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) {
          reject(err);
        } else {
          const productFields = fields.product
            ? JSON.parse(fields.product[0])
            : null;
          if (!productFields) {
            return res.status(400).json({ message: "invalid product data" });
          }
          resolve({ fields: productFields, files });
        }
      });
    }
  );
};

//

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST")
    return res.status(405).json({ message: "The method is not allowed" });
  try {
    //extracting fields and files from form data
    const { fields, files } = await getFormData(req, res);

    // Extract the uploaded file from the form data
    const myFile = files.image as formidable.File[] | undefined;
    if (!myFile || myFile.length === 0) {
      return res
        .status(400)
        .json({ message: 'No file uploaded with the name "image"' });
    }
    const file = myFile[0];

    // uploading image to cloudinary
    const uploadImage = await cloudinary.uploader.upload(file.filepath);
    if (!uploadImage)
      return res.status(500).json({ message: "failed to upload image" });

    // const uploadPath = "@/public/upload";
    // require("fs").renameSync(file.filepath, uploadPath);

    //extracting fields
    const { description, name, category } = fields;
    console.log(fields);

    //checking if any field is missing
    if (!description || !name || !category)
      return res.status(400).json({ message: "missing required fields" });
    //creating a new product
    const newProduct = await prisma.product.create({
      data: {
        description: description as unknown as string,
        name: name as unknown as string,
        category: category as unknown as string,
      },
    });
    console.log(newProduct);
    if (!newProduct) {
      return res.status(500).json({ message: "Failed to created product" });
    } else {
      return res.status(201).json({ message: "Product created successfully" });
    }
  } catch (error) {
    console.log(error);
    // Handle specific Prisma validation errors
    if (error === "P2025") {
      return res
        .status(500)
        .json({ message: "Invalid data for creating a product" });
    }
    return res.status(500).json({ message: "Internal server error" });
  }
}
