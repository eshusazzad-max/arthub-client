import {
  HiOutlinePhoto,
  HiOutlineCurrencyDollar,
  HiOutlineChartBar,
  HiOutlineUser,
} from "react-icons/hi2";

export default function UserDashboard() {
  return (
    <div className="mb-8">
  <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
    Overview
  </h1>

  <p className="mt-2 text-slate-600 dark:text-slate-400">
    Monitor your artworks, sales and account activity.
  </p>

  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

  {/* Card 1 */}
  <div className="group rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-[#111827]">
  
    <p className="text-sm text-slate-500">Total Artworks</p>

    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-violet-600 dark:bg-violet-500/20">
      <HiOutlinePhoto className="text-2xl" />
    </div>

    <h2 className="text-5xl font-extrabold tracking-tight text-violet-600">
      
      0
    </h2>
  </div>

  {/* Card 2 */}
  <div className="group rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-[#111827]">
    <p className="text-sm text-slate-500">Sales</p>

    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-green-600 dark:bg-green-500/20">
      <HiOutlineChartBar className="text-2xl" />
    </div>

    <h2 className="text-5xl font-extrabold tracking-tight text-green-500">
      0
    </h2>
  </div>

  {/* Card 3 */}
  <div className="group rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-[#111827]">
    <p className="text-sm text-slate-500">Revenue</p> 

    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-600 dark:bg-cyan-500/20">
     <HiOutlineCurrencyDollar className="text-2xl" />
    </div>

    <h2 className="text-5xl font-extrabold tracking-tight text-cyan-500">
      $0
    </h2>
  </div>

  {/* Card 4 */}
  <div className="group rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-[#111827]">
    <p className="text-sm text-slate-500">Account Role</p>

    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-100 text-pink-600 dark:bg-pink-500/20">
      <HiOutlineUser className="text-2xl" />
    </div>

    <h2 className="text-5xl font-extrabold tracking-tight text-pink-500">
      Artist
    </h2>
  </div>

  </div>


  <div className="mt-10">

  <div className="mb-6 flex items-center justify-between">

    <div>

      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
        Recent Artworks
      </h2>

      <p className="text-slate-500">
        Your latest uploaded artworks.
      </p>

    </div>

  </div>

</div>

<div className="rounded-3xl border border-dashed border-slate-300 bg-white/70 p-10 text-center shadow-sm dark:border-white/10 dark:bg-[#111827]">

  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
    No artworks yet
  </h3>

  <p className="mt-2 text-slate-500">
    Upload your first artwork to start selling on ArtHub.
  </p>

</div>
</div>

  );
}