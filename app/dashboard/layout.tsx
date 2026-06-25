import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-slate-400 dark:bg-[#050816]">

      {/* Sidebar */}
      <aside className="w-72 bg-white/60 dark:bg-[#0B1120] border-r border-gray-200 dark:border-white/10 p-6">

        <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-400 via-pink-500 to-violet-500 bg-clip-text text-transparent">
          ArtHub
        </h2>

        <nav className="space-y-4">

          <Link
            href="/dashboard/user"
            className="group flex items-center gap-3 px-5 py-3 rounded-xl text-gray-600 hover:text-gray-800 bg-transparent hover:bg-white/5 hover:shadow-[0_0_20px_rgba(139,92,246,0.25)] hover:border hover:border-violet-500/40 transition-all duration-300"
          >
            User Dashboard
          </Link>

          <Link
            href="/dashboard/artist"
            className="group flex items-center gap-3 px-5 py-3 rounded-xl text-gray-600 hover:text-gray-800 bg-transparent hover:bg-white/5 hover:shadow-[0_0_20px_rgba(139,92,246,0.25)] hover:border hover:border-violet-500/40 transition-all duration-300"
          >
            Artist Dashboard
          </Link>

          <Link
            href="/dashboard/admin"
            className="group flex items-center gap-3 px-5 py-3 rounded-xl text-gray-600 hover:text-gray-800 bg-transparent hover:bg-white/5 hover:shadow-[0_0_20px_rgba(139,92,246,0.25)] hover:border hover:border-violet-500/40 transition-all duration-300"
          >
            Admin Dashboard
          </Link>

          <Link
            href="/"
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-white/700 dark:bg-transparent border border-slate-400 dark:border-violet-500 text-slate-800 dark:text-white"
          >
            Back Home
          </Link>

        </nav>

      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {children}
      </main>

    </div>
  );
}