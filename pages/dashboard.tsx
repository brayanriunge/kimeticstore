import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { MdCloudUpload } from "react-icons/md";
type formValues = {
  name: string;
  // category: string[];
  category: string;
  description: string;
};

export default function Dashboard() {
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const router = useRouter();

  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user.role !== "ADMIN1") {
      router.push("/");
    }
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<formValues>();

  // event handler for file input change
  const handleFileUploadChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!event.target.files) return;
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      setSelectedFile(file);
    }
  };

  //event handler for form submission
  const handleFormSubmission = async (data: formValues) => {
    setIsUploading(true);
    const { description, category, name } = data;
    // Ensure category is an array

    const product = {
      name,
      description,
      category,
    };
    //creating formData to send to the server
    const formData = new FormData();
    formData.append("product", JSON.stringify(product));
    if (selectedFile) formData.append("image", selectedFile);
    console.log("before fetch");
    try {
      const res = await fetch("http://localhost:3000/api/Admin/register", {
        method: "POST",
        body: formData,
      });
      console.log("to be registered:", res);
      if (res.ok) {
        router.push("/");
      } else {
        throw new Error(`Http error ${res.status}`);
      }
    } catch (error) {
      return console.log(error);
    } finally {
      setIsUploading(false);
    }
  };

  //adding category

  return (
    <section className="gap-16 bg-indigo-200 md:h-full  min-h-full ">
      <div className="md:flex items-center justify-between py-4 px-10">
        <h1 className="font-bold text-xl ">Add Product</h1>
      </div>
      <form
        action=""
        className="flex items-center justify-between gap-16 w-5/6 md:h-5/6 mx-auto p-5 m-5 "
        onSubmit={handleSubmit(handleFormSubmission)}
      >
        <div className="md:flex flex-col  mx-auto  items-center justify-between p-5 m-5 gap-8">
          <div className=" md:flex border-2 rounded-xl border-orange-300 items-center basis-3/5">
            <input
              type="name"
              id="name"
              placeholder="Name"
              required
              className="rounded-xl px-5 py-5 focus:outline-none border-none "
              {...register("name")}
            />
            {errors.name?.message && (
              <div className="text-red-500 text-sm">{errors.name.message}</div>
            )}
          </div>
          <div className=" md:flex border-2 rounded-xl border-orange-300 items-center ">
            <input
              type="text"
              id="category"
              placeholder="Category"
              required
              className="rounded-xl px-5 py-5 focus:outline-none border-none "
              {...register("category")}
            />
            {errors.category?.message && (
              <div className="text-red-500 text-sm">
                {errors.category.message}
              </div>
            )}
          </div>

          <div className=" md:flex border-2 rounded-xl border-orange-300 items-center ">
            <input
              type="text"
              id="description"
              placeholder="Description"
              required
              className="rounded-xl px-5 py-5 focus:outline-none border-none"
              {...register("description")}
            />
            {errors.description?.message && (
              <div className="text-red-500 text-sm">
                {errors.description.message}
              </div>
            )}
          </div>
        </div>
        <div className=" md:flex flex-col justify-between gap-4 pt-6 mt-5 mx-auto">
          <label htmlFor="dropzone-file">
            {selectedImage ? (
              <Image
                src={selectedImage}
                alt="selected"
                height={280}
                width={280}
                className="rounded-md bg-gray-200 pb-4"
              />
            ) : (
              <div className="">
                <div className="md:flex flex-col items-center justify-between pb-4 ">
                  <MdCloudUpload className="w-12 h-12 mb-4 text-gray-500" />
                  <p className="text-gray-200 font-semibold">
                    Click to select a File
                    <span className="text-sm">or Drag and Drop</span>
                  </p>
                  <input
                    id="dropzone-file"
                    type="file"
                    placeholder="picture"
                    required
                    className="rounded-xl px-10 py-5 focus:outline-none w-5/6 border-dotted mt-6"
                    onChange={handleFileUploadChange}
                  />
                </div>
              </div>
            )}
          </label>
          <button
            className="rounded-md px-4 py-4 bg-yellow-500"
            type="submit"
            disabled={isUploading}
          >
            {isUploading ? (
              <>
                Uploading
                <AiOutlineLoading3Quarters />
              </>
            ) : (
              <>Upload</>
            )}
          </button>
        </div>
      </form>
    </section>
  );
}
