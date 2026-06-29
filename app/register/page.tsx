"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

import {
  HiOutlineEnvelope,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineLockClosed,
  HiOutlineUser,
} from "react-icons/hi2";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("user");
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleRegister = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  if (!name || !email || !password || !confirmPassword) {
    toast.error("Please fill all fields");
    return;
  }

  if (password !== confirmPassword) {
   toast.error("Passwords do not match");
    return;
  }

  try {
    setLoading(true);

    await axios.post("http://localhost:5000/users", {
      name,
      email,
      password,
      role,
    });

   toast.success("Account created successfully!");

   setTimeout(() => {
  router.push("/login");
}, 1000);

    router.push("/login");
  } catch (error: any) {
    toast.error(
  error.response?.data?.message || "Registration Failed"
);
  } finally {
    setLoading(false);
  }
};

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-white/60 dark:bg-[#050816]">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <div className="hidden lg:block relative">

          <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-violet-500/20 blur-[150px] rounded-full"></div>

          <div className="absolute left-32 bottom-0 w-[250px] h-[250px] bg-cyan-500/20 blur-[150px] rounded-full"></div>

          <div className="flex items-center gap-5 mb-8">

            <div className="w-20 h-[1px] bg-gradient-to-r from-transparent to-violet-500"></div>

            <span className="uppercase tracking-[8px] text-sm bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
              CREATE ACCOUNT
            </span>

            <div className="w-20 h-[1px] bg-gradient-to-l from-transparent to-cyan-400"></div>

          </div>

          <h1 className="text-6xl font-bold text-slate-900 dark:text-white leading-tight">
            Join The
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Art Community
            </span>
          </h1>

          <p className="text-slate-600 dark:text-gray-400 mt-8 text-lg leading-8">
            Create your account and discover extraordinary masterpieces from talented artists around the world.
          </p>

          <div className="mt-12 p-8 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5">
            <p className="text-slate-600 dark:text-gray-300 italic leading-8">
               "Art is not what you see, but what you make others see. Start your journey and inspire the world with creativity."
            </p>
          </div>

        </div>

        {/* Right Side */}
        <div className="bg-white/60 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[32px] p-10 backdrop-blur-xl shadow-[0_0_40px_rgba(139,92,246,.1)]">

          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-10">
            Register
          </h2>
          <form onSubmit={handleRegister}>
         

          {/* Name */}
          <div className="relative mb-6">
            <HiOutlineUser className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />

            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white/60 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl py-4 pl-14 pr-5 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500 outline-none focus:border-violet-500"
            />
          </div>

          {/* Email */}
          <div className="relative mb-6">
            <HiOutlineEnvelope className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
             className="w-full bg-white/60 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl py-4 pl-14 pr-5 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500 outline-none focus:border-violet-500"
            />
          </div>

          {/* Password */}
          <div className="relative mb-6">
            <HiOutlineLockClosed className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white/60 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl py-4 pl-14 pr-14 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500 outline-none focus:border-violet-500"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-violet-400"
            >
              {showPassword ? (
                <HiOutlineEyeSlash className="text-xl" />
              ) : (
                <HiOutlineEye className="text-xl" />
              )}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative mb-8">
            <HiOutlineLockClosed className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />

            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
             className="w-full bg-white/60 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl py-4 pl-14 pr-14 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500 outline-none focus:border-violet-500"
            />

            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-violet-400"
            >
              {showConfirmPassword ? (
                <HiOutlineEyeSlash className="text-xl" />
              ) : (
                <HiOutlineEye className="text-xl" />
              )}
            </button>
          </div>

          <div className="mb-8">
           <p className="mb-4 font-semibold text-slate-800 dark:text-white">
             Select Your Role
           </p>

            <div className="flex gap-6">

             <label className="flex items-center gap-3 cursor-pointer">
              <input
               type="radio"
               name="role"
               value="user"
               checked={role === "user"}
               onChange={(e) => setRole(e.target.value)}
               className="w-5 h-5 accent-violet-600"
              />
             <span className="text-slate-700 dark:text-gray-300">
              User
             </span>
            </label>

           <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
               name="role"
               value="artist"
               checked={role === "artist"}
               onChange={(e) => setRole(e.target.value)}
               className="w-5 h-5 accent-violet-600"
            />
            <span className="text-slate-700 dark:text-gray-300">
             Artist
            </span>
           </label>

          </div>
         </div>
          

          <button
           type="submit"
           disabled={loading}
           className="w-full py-4 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 text-white font-semibold hover:scale-[1.02] duration-300">
            {loading ? "Creating Account..." : "Create Account"}
          </button>

          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-[1px] bg-slate-400 dark:bg-white/10"></div>

            <span className="text-gray-500 text-sm">
              OR
            </span>

            <div className="flex-1 h-[1px] bg-slate-400 dark:bg-white/10"></div>
          </div>

          <button 
          onClick={() => signIn("google")}
          className="w-full py-4 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-slate-900 dark:text-white flex items-center justify-center gap-3 hover:border-violet-500 duration-300">

            <FcGoogle className="text-2xl" />

            Continue with Google

          </button>

          <p className="text-center text-slate-600 dark:text-gray-400 mt-8">
            Already have an account?{" "}

            <Link
              href="/login"
              className="text-violet-400 hover:text-violet-300"
            >
              Login
            </Link>
          </p>
         </form>
         
        </div>
      </div>
    </section>
  );
}