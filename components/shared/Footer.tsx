"use client";

import Link from "next/link";
import Logo from "./Logo";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-violet-500/20 mt-28">

      {/* Glow */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[500px] h-[200px] bg-violet-500/10 blur-[150px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo */}
          <div>
              <Logo />
            <p className="text-gray-400 mt-5 leading-8">
              Discover and collect extraordinary digital artworks from talented creators around the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <div className="space-y-4 text-gray-400">
              <Link href="#home" className="block hover:text-violet-400 duration-300">
                Home
              </Link>

              <Link href="featured" className="block hover:text-violet-400 duration-300">
                Explore
              </Link>

              <Link href="artists" className="block hover:text-violet-400 duration-300">
                Artists
              </Link>

              <Link href="faq" className="block hover:text-violet-400 duration-300">
                FAQ
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">
              Resources
            </h3>

            <div className="space-y-4 text-gray-400">
              <Link href="/" className="block hover:text-violet-400 duration-300">
                Privacy Policy
              </Link>

              <Link href="/" className="block hover:text-violet-400 duration-300">
                Terms & Conditions
              </Link>

              <Link href="/" className="block hover:text-violet-400 duration-300">
                Support
              </Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">
              Follow Us
            </h3>

            <div className="flex gap-4">

              <a
                href="https://www.facebook.com/login/"

                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-violet-500 hover:border-violet-500 duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/?hl=en"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-pink-500 hover:border-pink-500 duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="https://x.com/i"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-sky-500 hover:border-sky-500 duration-300"
              >
                <FaXTwitter />
              </a>

              <a
                href="https://www.linkedin.com/feed/"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-cyan-500 hover:border-cyan-500 duration-300"
              >
                <FaLinkedinIn />
              </a>

            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-16 pt-8 text-center">
           <p className="text-gray-500 text-sm">
             &copy; {new Date().getFullYear()} ArtHub. Crafted with passion for art enthusiasts.
          </p>
        </div>
      </div>
    </footer>
  );
}