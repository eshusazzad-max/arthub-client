"use client";

import {
  HiOutlineUsers,
  HiOutlinePhoto,
  HiOutlineSparkles,
  HiOutlineShieldCheck,
} from "react-icons/hi2";

export default function AdminDashboard() {
  return (
    <div className="space-y-8">

      {/* Header */}
        <p className="mt-3 text-gray-400 text-lg">
          Manage users, artworks and monitor the entire ArtHub platform.
        </p>

      {/* Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {/* Total Users */}

        <div className="rounded-3xl border border-white/10 bg-[#111827] p-6 hover:border-violet-500 duration-300">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-gray-400">
                Total Users
              </p>

              <h2 className="mt-3 text-5xl font-bold text-white">
                0
              </h2>
            </div>

            <div className="rounded-2xl bg-violet-500/20 p-4">
              <HiOutlineUsers className="text-4xl text-violet-400" />
            </div>

          </div>

        </div>

        {/* Artists */}

        <div className="rounded-3xl border border-white/10 bg-[#111827] p-6 hover:border-cyan-500 duration-300">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-400">
                Artists
              </p>

              <h2 className="mt-3 text-5xl font-bold text-white">
                0
              </h2>

            </div>

            <div className="rounded-2xl bg-cyan-500/20 p-4">
              <HiOutlineSparkles className="text-4xl text-cyan-400" />
            </div>

          </div>

        </div>

        {/* Artworks */}

        <div className="rounded-3xl border border-white/10 bg-[#111827] p-6 hover:border-pink-500 duration-300">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-400">
                Total Artworks
              </p>

              <h2 className="mt-3 text-5xl font-bold text-white">
                0
              </h2>

            </div>

            <div className="rounded-2xl bg-pink-500/20 p-4">
              <HiOutlinePhoto className="text-4xl text-pink-400" />
            </div>

          </div>

        </div>

        {/* Admin */}

        <div className="rounded-3xl border border-white/10 bg-[#111827] p-6 hover:border-green-500 duration-300">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-400">
                Admins
              </p>

              <h2 className="mt-3 text-5xl font-bold text-white">
                1
              </h2>

            </div>

            <div className="rounded-2xl bg-green-500/20 p-4">
              <HiOutlineShieldCheck className="text-4xl text-green-400" />
            </div>

          </div>

        </div>

      </div>

      {/* Recent Users */}

      <div className="rounded-3xl border border-white/10 bg-[#111827] p-8">

        <h2 className="text-2xl font-bold text-white">
          Recent Users
        </h2>

        <p className="mt-2 text-gray-400">
          All registered users will appear here.
        </p>

        <div className="mt-8 rounded-2xl border border-dashed border-white/10 p-12 text-center">

          <HiOutlineUsers className="mx-auto text-6xl text-violet-400" />

          <h3 className="mt-5 text-2xl font-semibold text-white">
            No User Data Yet
          </h3>

          <p className="mt-2 text-gray-400">
            Users table will be connected with the backend in the next step.
          </p>

        </div>

      </div>

    </div>
  );
}