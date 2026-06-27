import Link from "next/link";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-slate-400 dark:bg-[#050816]">

      {/* Sidebar */}
     <Sidebar/>

      {/* Main Content */}
     <main className="flex-1 p-8 overflow-y-auto">
      <DashboardHeader />
      {children}
     </main>

    </div>
  );
}