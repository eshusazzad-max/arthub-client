"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Link from "next/link";
import { useSession } from "next-auth/react";
import {
  HiOutlinePencilSquare,
  HiOutlineTrash,
} from "react-icons/hi2";

interface Artwork {
  _id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  price: number;
  createdAt?: string;
}

export default function MyArtworksPage() {
  const { data: session } = useSession();

  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!session?.user?.email) return;

    const loadArtworks = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/my-artworks/${session.user.email}`
        );

        setArtworks(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    loadArtworks();
  }, [session]);

  const handleDelete = async (id: string) => {
  const result = await Swal.fire({
    title: "Delete Artwork?",
    text: "You won't be able to recover this artwork.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#7C3AED",
    cancelButtonColor: "#EF4444",
    confirmButtonText: "Yes, Delete",
    cancelButtonText: "Cancel",
  });

  if (!result.isConfirmed) return;

  try {
    const res = await axios.delete(
      `http://localhost:5000/artworks/${id}`
    );

    if (res.data.deletedCount > 0) {
      Swal.fire({
        icon: "success",
        title: "Deleted!",
        text: "Artwork deleted successfully.",
        timer: 1500,
        showConfirmButton: false,
      });

      setArtworks((prev) =>
        prev.filter((item) => item._id !== id)
      );
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

  if (loading) {
    return (
      <div className="flex items-center justify-center py-40">
        <span className="text-lg font-semibold text-violet-600">
          Loading artworks...
        </span>
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-7xl">

      <div className="mb-10 flex items-center justify-between">

        <div>

          <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
            My Artworks
          </h1>

          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Manage all your published artworks.
          </p>

        </div>

        <div className="rounded-2xl bg-violet-600 px-6 py-3 text-white shadow-lg shadow-violet-500/30">
          Total : {artworks.length}
        </div>

      </div>

      {artworks.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-slate-300 dark:border-white/10 py-24 text-center">

          <h2 className="text-3xl font-bold text-slate-800 dark:text-white">
            No Artwork Found
          </h2>

          <p className="mt-3 text-slate-500 dark:text-slate-400">
            Publish your first artwork to see it here.
          </p>

        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {artworks.map((artwork) => (
            <div
              key={artwork._id}
              className="group overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-[#0B1120] shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-500/40 hover:shadow-2xl hover:shadow-violet-500/20"
            >
                          {/* Image */}
              <div className="relative h-64 overflow-hidden">

                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

                {/* Category Badge */}
                <span className="absolute top-4 left-4 rounded-full border border-white/20 bg-black/30 px-4 py-1.5 text-xs font-semibold tracking-wide text-white backdrop-blur-md transition duration-300 group-hover:scale-105">
                  {artwork.category}
                </span>

              </div>

              {/* Content */}
              <div className="p-6">

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {artwork.title}
                </h2>

                <p className="mt-3 line-clamp-2 text-[15px] leading-7 text-slate-600 dark:text-slate-400">
                  {artwork.description}
                </p>

                {/* Price & Date */}
                <div className="mt-6 flex items-center justify-between">

                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Price
                    </p>

                    <h3 className="text-3xl font-bold text-violet-600 dark:text-violet-400">
                      ${artwork.price}
                    </h3>
                  </div>

                  <div className="text-right">
                    <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Uploaded
                    </p>

                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {artwork.createdAt
                        ? new Date(artwork.createdAt).toLocaleDateString()
                        : "Today"}
                    </p>
                  </div>

                </div>

                <div className="my-6 border-t border-slate-600 dark:border-white/10"></div>

                {/* Buttons */}
                <div className="grid grid-cols-2 gap-4">

                  <Link
                    href={`/dashboard/artist/edit-artwork/${artwork._id}`}
                  className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 py-2.5 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/30"
                  >
                    <HiOutlinePencilSquare className="text-xl" />
                    Edit
                  </Link>

                  <button
                      onClick={() => handleDelete(artwork._id)}
                    className="flex items-center justify-center gap-2 rounded-xl border border-red-500 bg-transparent py-2.5 font-semibold text-red-500 transition-all duration-300 hover:-translate-y-1 hover:bg-red-500 hover:text-white hover:shadow-lg hover:shadow-red-500/30"

                  >
                    <HiOutlineTrash className="text-xl" />
                    Delete
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>
      )}

    </section>
  );
}