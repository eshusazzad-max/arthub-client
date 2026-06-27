"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useSession } from "next-auth/react";
export default function ProfilePage() {
  const { data: session } = useSession();

const [user, setUser] = useState<any>(null);
const [openModal, setOpenModal] = useState(false);
const [name, setName] = useState("");
const [imageFile, setImageFile] = useState<File | null>(null);

useEffect(() => {
  if (!session?.user?.email) return;

  axios
    .get(`http://localhost:5000/users/${session.user.email}`)
    .then((res) => {
      setUser(res.data);
      setName(res.data.name);
    });
}, [session]);

const handleProfileUpdate = async () => {

  console.log("USER =", user);
  console.log("USER ID =", user?._id);
  console.log("URL =", `http://localhost:5000/users/${user?._id}`);
  try {


    let imageUrl = user.image;

if (imageFile) {
  const formData = new FormData();

  formData.append("image", imageFile);

  const imageUpload = await axios.post(
    `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
    formData
  );

  imageUrl = imageUpload.data.data.url;
}
    const res = await axios.patch(
  `http://localhost:5000/users/${user._id}`,
  {
    name: name,
    image: imageUrl,
  }
);
   console.log("PATCH SUCCESS", res.data);

    if (res.data.modifiedCount > 0) {
      Swal.fire({
        icon: "success",
        title: "Profile Updated!",
        text: "Your profile has been updated successfully.",
        timer: 1800,
        showConfirmButton: false,
      });

      setUser({
       ...user,
          name,
       image: imageUrl,
      });

      setOpenModal(false);
    }
  }

  catch (error: any) {
  console.log("Status:", error.response?.status);
  console.log("Data:", error.response?.data);
  console.log("Full Error:", error);
  console.log("Response:", error.response?.data);
  console.log("Message:", error.message);

  Swal.fire({
    icon: "error",
    title: "Oops!",
    text: error.response?.data?.message || error.message,
  });
}
};
  return (
    <section className="mx-auto max-w-6xl">

      {/* Header */}
     <div className="mb-8">
      <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
        My Profile
      </h1>

      </div>
       <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-[#0B1120] shadow-xl">

        {/* Cover */}
        <div className="h-32 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400"></div>

        {/* Profile */}
       <div className="px-8 pb-8">

        <div className="-mt-16 flex flex-col items-center">

         <img
           src={user?.image || "https://i.ibb.co/0jqHpnp/default-avatar.png"}
           alt={user?.name}
           className="h-32 w-32 rounded-full border-4 border-white dark:border-[#0B1120] object-cover shadow-xl"
         />

         <h2 className="mt-5 text-3xl font-bold text-slate-900 dark:text-white">
           {user?.name}
        </h2>

         <p className="mt-2 text-slate-600 dark:text-slate-400">
           {user?.email}
         </p>

          <span className="mt-5 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-2 text-sm font-semibold text-white shadow-lg">
           {user?.role}
         </span>

        </div>

       </div>

        {/* Divider */}
         <div className="mt-10 border-t border-slate-400 dark:border-white/10"></div>

        {/* Information */}
       <div className="grid gap-4 pt-6 md:grid-cols-2">

          {/* Full Name */}
          <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#111827] p-5">

          <p className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400">
            Full Name
          </p>

          <h3 className="mt-1 text-lg font-bold text-slate-900 dark:text-white">
           {user?.name}
          </h3>

        </div>

       {/* Email */}
       <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#111827] p-5">

        <p className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400">
         Email Address
        </p>

        <h3 className="mt-1 text-lg font-bold text-slate-900 dark:text-white break-all">
          {user?.email}
        </h3>

       </div>

       {/* Role */}
       <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#111827] p-5">

         <p className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400">
          Account Role
         </p>

         <h3 className="mt-1 text-lg font-bold capitalize text-slate-900 dark:text-white">
          {user?.role}
         </h3>

       </div>

       {/* Joined */}
       <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#111827] p-5">

        <p className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400">
         Member Since
        </p>

        <h3 className="mt-1 text-lg font-bold text-slate-900 dark:text-white">
         {user?.createdAt
          ? new Date(user.createdAt).toLocaleDateString()
          : "N/A"}
        </h3>

       </div>

       </div>

       {/* Action Buttons */}
       <div className="mt-8 pb-8 flex flex-col gap-4 sm:flex-row sm:justify-end">

         <button
            onClick={() => setOpenModal(true)}
          className="rounded-xl border border-violet-500 px-8 py-3 font-semibold text-violet-600 transition-all duration-300 hover:bg-violet-500 hover:text-white dark:text-violet-400 dark:hover:text-white"
          >
            Edit Profile
          </button>

        </div>

       </div>


       {openModal && (
       <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">

         <div className="w-full max-w-lg rounded-3xl bg-white/80 p-8 shadow-2xl dark:bg-[#0B1120]">

           <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
             Edit Profile
           </h2>

           <p className="mb-6 text-slate-600 dark:text-slate-400">
             Update your profile information.
           </p>

           <div className="space-y-4">

            <input
             type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
             className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 dark:border-white/10 dark:bg-[#111827] dark:text-white"
           />

           <input
            type="file"
             accept="image/*"
              onChange={(e) => {
             if (e.target.files && e.target.files[0]) {
              setImageFile(e.target.files[0]);
              }
            }}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-700 file:mr-4 file:rounded-lg file:border-0 file:bg-violet-600 file:px-4 file:py-2 file:font-semibold file:text-white hover:file:bg-violet-700 dark:border-white/10 dark:bg-[#111827] dark:text-white"
           />

         </div>

         <div className="mt-8 flex justify-end gap-3">

           <button
             onClick={() => setOpenModal(false)}
             className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-medium text-slate-700 transition-all duration-300 hover:bg-slate-100 hover:border-slate-400 dark:border-white/10 dark:bg-[#111827] dark:text-white dark:hover:bg-white/10"
           >
             Cancel
           </button>

           <button
            type="button"
            onClick={handleProfileUpdate}
             className="rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 font-semibold text-white"
           >
             Save Changes
           </button>

         </div>

        </div>

       </div>
     )}

    </section>
  );
}