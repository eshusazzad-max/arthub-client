import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-violet-500/15 blur-[180px] rounded-full"></div>

      <div className="max-w-5xl mx-auto border border-white/10 bg-white/5 rounded-[40px] p-16 text-center backdrop-blur-xl">

        <div className="flex items-center justify-center gap-5 mb-8">

          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent to-violet-500"></div>

          <span className="uppercase tracking-[8px] text-sm bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-transparent">
            NEED HELP?
          </span>

          <div className="w-20 h-[1px] bg-gradient-to-l from-transparent to-cyan-400"></div>

        </div>

        <h2 className="text-5xl font-bold text-white">
          Let's Start a Conversation
        </h2>

        <p className="text-gray-400 text-lg mt-6 leading-8 max-w-2xl mx-auto">
          Have questions or need assistance? Our team is always ready to help you explore amazing artworks.
        </p>

        <Link
          href="/contact"
          className="inline-flex mt-10 px-10 py-5 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 text-white font-semibold hover:scale-105 duration-300"
        >
          Contact Us
        </Link>

      </div>

    </section>
  );
}