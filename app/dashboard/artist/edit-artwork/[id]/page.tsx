"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

interface ArtworkFormData {
  title: string;
  price: number;
  category: string;
  description: string;
  image: FileList;
}
export default function EditArtworkPage() {
  const params = useParams();
  const id = params.id as string;

  const [artwork, setArtwork] = useState<any>(null);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ArtworkFormData>();

  useEffect(() => {
  if (!id) return;

  axios
    .get(`http://localhost:5000/artworks/${id}`)
    
    .then((res) => {
     setArtwork(res.data);

     reset({
      title: res.data.title,
      price: res.data.price,
      category: res.data.category,
      description: res.data.description,
    });
  });

}, [id, reset]);

const onSubmit = async (data: ArtworkFormData) => {
  try {
    let imageUrl = artwork.image;


    if (data.image && data.image.length > 0) {
      const formData = new FormData();

      formData.append("image", data.image[0]);

      const imageUpload = await axios.post(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
        formData
      );

      imageUrl = imageUpload.data.data.url;
    }

    const updatedArtwork = {
      title: data.title,
      price: Number(data.price),
      category: data.category,
      description: data.description,
      image: imageUrl,
    };

    const res = await axios.patch(
      `http://localhost:5000/artworks/${id}`,
      updatedArtwork
    );

    if (res.data.modifiedCount > 0) {
      Swal.fire({
        icon: "success",
        title: "Artwork Updated!",
        text: "Your artwork has been updated successfully.",
        timer: 1800,
        showConfirmButton: false,
      });

      router.push("/dashboard/artist/my-artworks");
    }
  } catch (error) {
    console.log(error);

    Swal.fire({
      icon: "error",
      title: "Oops!",
      text: "Something went wrong.",
    });
  }
};

  if (!artwork) {
    return (
      <div className="py-40 text-center text-2xl font-bold text-white">
        Loading...
      </div>
    );
  }

 return (
  <section className="mx-auto max-w-5xl">

    <div className="mb-8">

      <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
        Edit Artwork
      </h1>

      <p className="mt-2 text-slate-600 dark:text-slate-400">
        Update your artwork information.
      </p>

    </div>

    <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-[#0B1120] p-8 shadow-xl">

      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6">

        {/* Title */}

        <div>

          <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-300">
            Artwork Title
          </label>

          <input
            type="text"
            {...register("title", {
              required: "Title is required",
            })}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-violet-500 dark:border-white/10 dark:bg-[#111827] dark:text-white"
          />

          {errors.title && (
           <p className="mt-2 text-sm text-red-500">
             {errors.title.message}
           </p>
         )}

        </div>

        {/* Price */}

        <div>

          <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-300">
            Price ($)
          </label>

          <input
            type="number"
            {...register("price", {
              required: "Price is required",
            })}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-violet-500 dark:border-white/10 dark:bg-[#111827] dark:text-white"
          />

          {errors.price && (
           <p className="mt-2 text-sm text-red-500">
             {errors.price.message}
           </p>
          )}

        </div>

        {/* Category */}

        <div>

          <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-300">
            Category
          </label>

          <select
             {...register("category")}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-violet-500 dark:border-white/10 dark:bg-[#111827] dark:text-white"
          >
            <option>Painting</option>
            <option>Drawing</option>
            <option>Digital Art</option>
            <option>Sculpture</option>
            <option>Photography</option>
          </select>

        </div>

        {/* Description */}

        <div>

          <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-300">
            Description
          </label>

          <textarea
            rows={6}
            {...register("description", {
              required: "Description is required",
            })}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-violet-500 dark:border-white/10 dark:bg-[#111827] dark:text-white"
          />

          {errors.description && (
           <p className="mt-2 text-sm text-red-500">
          {errors.description.message}
           </p>
          )}

        </div>

        {/* Current Image */}

        <div>

          <label className="mb-3 block font-semibold text-slate-700 dark:text-slate-300">
            Current Image
          </label>

          <img
            src={artwork.image}
            alt={artwork.title}
            className="h-72 w-full rounded-2xl object-cover"
          />

        </div>

        {/* New Image */}

        <div>

          <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-300">
            Change Image (Optional)
          </label>

          <input
            type="file"
            {...register("image")}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 dark:border-white/10 dark:bg-[#111827] dark:text-white"
          />

        </div>

        {/* Button */}

        <button
          type="submit"
          className="mt-4 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 py-4 text-lg font-bold text-white transition duration-300 hover:scale-[1.02]"
        >
          Update Artwork
        </button>

      </form>

    </div>

  </section>
);
}