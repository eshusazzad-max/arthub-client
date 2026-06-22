import Image from "next/image";

export default function Logo() {
  return (
    <div className="group flex items-center gap-4 cursor-pointer">
      <Image
        src="/images/logo.png"
        alt="logo"
        width={45}
        height={45}
        className="transition duration-500 group-hover:rotate-12"
      />

      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 via-pink-500 to-violet-500 bg-clip-text text-transparent">
        ArtHub
      </h1>
    </div>
  );
}