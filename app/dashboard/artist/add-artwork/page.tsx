"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { HiOutlineCloudArrowUp } from "react-icons/hi2";


interface ArtworkFormData {
  title: string;
  price: number;
  category: string;
  description: string;
  image: FileList;
}


export default function AddArtworkPage() {
  const [loading, setLoading] = useState(false);
  
  const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm<ArtworkFormData>();

const { data: session } = useSession();
const router = useRouter();


const onSubmit = async (data: ArtworkFormData) => {
  try {
    setLoading(true);

    const imageFile = data.image[0];

    const formData = new FormData();

    formData.append("image", imageFile);

    console.log(process.env.NEXT_PUBLIC_IMGBB_API_KEY);

    const imageUpload = await axios.post(
      `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
      formData
    );

    console.log("Upload Success:", imageUpload.data);
    const imageUrl = imageUpload.data.data.url;

    const artworkData = {
     title: data.title,
     price: Number(data.price),
     category: data.category,
     description: data.description,
     image: imageUrl,
     artistName: session?.user?.name,
     artistEmail: session?.user?.email,
    };

    const response = await axios.post(
    "http://localhost:5000/artworks",
     artworkData
    );

     console.log("Artwork Saved:", response.data);

     toast.success("Artwork Published Successfully!");

     router.push("/dashboard/artist/my-artworks");
      } catch (error) {
       console.error("Upload Error:", error);
      } finally {
       setLoading(false);
      }
   };

  return (
    <section className="max-w-5xl mx-auto">

      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
          Add Artwork
        </h1>

        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Publish your artwork and reach thousands of art lovers.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-[#0B1120] p-8 shadow-xl"
      >

        <div className="grid md:grid-cols-2 gap-6">

          {/* Title */}
          <div>
            <label className="block mb-2 font-medium text-slate-700 dark:text-white">
              Artwork Title
            </label>

            <input
             {...register("title", {
               required: "Artwork title is required",
             })}
              type="text"
              placeholder="Enter artwork title"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-violet-500 dark:border-white/10 dark:bg-[#111827] dark:text-white dark:placeholder:text-slate-500"
            />
            {errors.title && (
             <p className="mt-2 text-sm text-red-500">
               {String(errors.title.message)}
            </p>
           )}
          </div>

          {/* Price */}
          <div>
            <label className="block mb-2 font-medium text-slate-700 dark:text-white">
              Price ($)
            </label>

            <input
              {...register("price", {
               required: "Price is required",
              })}
              type="number"
              placeholder="Enter price"
             className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-violet-500 dark:border-white/10 dark:bg-[#111827] dark:text-white dark:placeholder:text-slate-500"
            />

            {errors.price && (
             <p className="mt-2 text-sm text-red-500">
              Price is required
            </p>
           )}
          </div>

          {/* Category */}
          <div>
            <label className="block mb-2 font-medium text-slate-700 dark:text-white">
              Category
            </label>

            <select
              {...register("category", {
                required: true,
             })}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-violet-500 dark:border-white/10 dark:bg-[#111827] dark:text-white dark:placeholder:text-slate-500"
            >
              <option>Painting</option>
              <option>Digital Art</option>
              <option>Sculpture</option>
              <option>Photography</option>
            </select>

            {errors.category && (
             <p className="mt-2 text-sm text-red-500">
              Category is required
            </p>
            )}
          </div>

          {/* Image */}
          <div>
            <label className="block mb-2 font-medium text-slate-700 dark:text-white">
              Artwork Image
            </label>

            <input
              {...register("image", {
               required: true,
              })}
              type="file"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 file:mr-4 file:rounded-lg file:border-0 file:bg-violet-500 file:px-4 file:py-2 file:text-white hover:file:bg-violet-500 dark:border-white/10 dark:bg-[#111827] dark:text-white"
            />

            {errors.image && (
             <p className="mt-2 text-sm text-red-500">
              Image is required
            </p>
           )}
          </div>

        </div>

        {/* Description */}
        <div className="mt-6">

          <label className="block mb-2 font-medium text-slate-700 dark:text-white">
            Description
          </label>

          <textarea
            {...register("description", {
              required: true,
            })}
            rows={6}
            placeholder="Write artwork description..."
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-violet-500 dark:border-white/10 dark:bg-[#111827] dark:text-white dark:placeholder:text-slate-500"
          ></textarea>

          {errors.description && (
           <p className="mt-2 text-sm text-red-500">
              Description is required
           </p>
         )}

        </div>

       <button
         disabled={loading}
         className="mt-8 w-full h-14 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg hover:shadow-violet-500/30">
          <HiOutlineCloudArrowUp className="text-xl" />

          {loading ? "Publishing..." : "Publish Artwork"}
       </button>

      </form>

    </section>
  );
}