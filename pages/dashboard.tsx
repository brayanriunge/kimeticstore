import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
type formValues = {
  name: string;
  category: string;
  price: number;
  description: string;
  begin: number;
};

export default function Dashboard() {
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

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
    const { description, category, name } = data;
    const product = {
      name,
      description,
      category,
    };
    //creating formData to send to the server
    const formData = new FormData();
    formData.append("product", JSON.stringify(product));
    if (selectedImage) formData.append("image", selectedImage);
  };

  return (
    <section className="gap-16 bg-indigo-200 md:h-full pb-12 min-h-full ">
      <div className="flex items-center justify-between py-4 px-10">
        <h1 className="font-bold text-xl ">Add Ticket</h1>
      </div>
      <form action=""
      className="flex items-center justify-between gap-16"
      onSubmit={handleSubmit(handleFormSubmission)}>
        <div className="md:flex flex-col w-5/6 mx-auto md:h-5/6 items-center justify-between p-5 m-5 gap-8">
          <div className=" md:flex border-2 rounded-xl border-orange-300 items-center ">
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
        <div className="flex flex-col justify-between gap-4">
        <label htmlFor="dropzone-ile">
          {selectedImage ?(
            <Image
            src={selectedImage}
            alt="selected"
            height={280}
            width={280}
            className="rounded-md bg-gray-200"
            />
          ):()}
        </label>

        </div>
      </form>
    </section>
  );
}
