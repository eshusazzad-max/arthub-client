export default function PrivacyPolicyPage() {
  return (
    <section className="min-h-screen py-28 px-6 bg-white/60 dark:bg-[#050816]">
      <div className="max-w-5xl mx-auto rounded-[32px] border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl p-10">

        <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-10">
          Privacy Policy
        </h1>

        <div className="space-y-8 text-slate-600 dark:text-gray-400 leading-8">

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">
              Information Collection
            </h2>

            <p>
              ArtHub may collect your name, email address and account details
              to provide a secure and personalized experience.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">
              Data Protection
            </h2>

            <p>
              We value your privacy and never sell your personal information to
              third parties.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">
              Security
            </h2>

            <p>
              We use secure technologies to protect your information and ensure
              safe transactions.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}