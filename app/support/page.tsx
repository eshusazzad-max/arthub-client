import { HiOutlineEnvelope, HiOutlinePhone } from "react-icons/hi2";

export default function SupportPage() {
  return (
    <section className="min-h-screen py-28 px-6 bg-white/60 dark:bg-[#050816]">

      <div className="max-w-5xl mx-auto rounded-[32px] border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl p-10">

        <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-10">
          Support Center
        </h1>

        <div className="space-y-8">

          <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 p-8">

            <div className="flex items-center gap-4 mb-4">

              <HiOutlineEnvelope className="text-3xl text-violet-500" />

              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
                Email Support
              </h2>

            </div>

            <p className="text-slate-600 dark:text-gray-400">
              eshusazzad@gmail.com
            </p>

          </div>

          <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 p-8">

            <div className="flex items-center gap-4 mb-4">

              <HiOutlinePhone className="text-3xl text-cyan-500" />

              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
                Contact Number
              </h2>

            </div>

            <p className="text-slate-600 dark:text-gray-400">
              +880 123 456789
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}