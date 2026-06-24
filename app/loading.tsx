export default function Loading() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white/60 dark:bg-[#050816]">
      {/* Glow */}
      <div className="absolute w-[300px] h-[300px] bg-violet-500/20 blur-[150px] rounded-full"></div>

      <div className="absolute w-[250px] h-[250px] bg-cyan-500/20 blur-[150px] rounded-full"></div>

      {/* Card */}
      <div className="flex flex-col items-center bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[40px] px-16 py-14 backdrop-blur-xl">

        {/* Spinner */}
        <div className="w-20 h-20 border-4 border-violet-500 border-t-cyan-400 rounded-full animate-spin"></div>

        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-8">
          Loading ArtHub...
        </h2>

        <p className="text-slate-600 dark:text-gray-400 mt-3">
          Preparing amazing artworks for you.
        </p>

      </div>
    </section>
  );
}