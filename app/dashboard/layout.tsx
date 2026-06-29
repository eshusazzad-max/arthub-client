import Link from "next/link";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

import ArtistSidebar from "@/components/dashboard/Sidebar";
import AdminSidebar from "@/app/dashboard/AdminSidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-slate-400 dark:bg-[#050816]">

      {/* Sidebar */}
    <AdminSidebar />

      {/* Main Content */}
     <main className="flex-1 p-8 overflow-y-auto">
      <DashboardHeader />
      {children}
     </main>

    </div>
  );
}