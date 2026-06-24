export default function TermsPage() {
  return (
    <section className="min-h-screen py-28 px-6 bg-white/60 dark:bg-[#050816]">

      <div className="max-w-5xl mx-auto rounded-[32px] border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl p-10">

        <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-10">
          Terms & Conditions
        </h1>

        <div className="space-y-8 text-slate-600 dark:text-gray-400 leading-8">

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">
              Acceptance
            </h2>

            <p>
              By using ArtHub, you agree to comply with our terms and policies.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">
              User Responsibility
            </h2>

            <p>
              Users are responsible for maintaining the security of their
              accounts and activities.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">
              Copyright
            </h2>

            <p>
              All artworks belong to their respective creators and are protected
              by copyright laws.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}