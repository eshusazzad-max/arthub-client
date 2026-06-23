import {
  HiOutlineChatBubbleLeftRight,
  HiOutlineUser,
  HiOutlineEnvelope,
  HiOutlineDocumentText,
  HiOutlinePencilSquare,
  HiOutlinePaperAirplane,
  HiOutlinePhone,
  HiOutlineMapPin,
} from "react-icons/hi2";

export default function ContactPage() {
  return (
    <section className="min-h-screen py-28 px-6">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div className="relative">

          <div className="absolute -left-20 top-20 w-[250px] h-[250px] bg-violet-500/20 blur-[140px] rounded-full"></div>

          <div className="flex items-center gap-5 mb-8">

            <div className="w-20 h-[1px] bg-gradient-to-r from-transparent to-violet-500"></div>

            <span className="uppercase tracking-[8px] text-sm bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-transparent">
              CONTACT US
            </span>

            <div className="w-20 h-[1px] bg-gradient-to-l from-transparent to-cyan-400"></div>

          </div>

          <h1 className="text-6xl font-bold text-white leading-tight">
            Let's Start a
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}Conversation
            </span>
          </h1>

          <p className="text-gray-400 text-lg leading-8 mt-8">
            Have questions or need assistance? Reach out to us and we'll be happy to help.
          </p>

          <div className="space-y-8 mt-14">

            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                <HiOutlineEnvelope className="text-violet-400 text-2xl" />
              </div>

              <div>
                <p className="text-gray-500">Email</p>
                <h3 className="text-white text-xl">
                  eshusazzad@gmail.com
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                <HiOutlinePhone className="text-cyan-400 text-2xl" />
              </div>

              <div>
                <p className="text-gray-500">Phone</p>
                <h3 className="text-white text-xl">
                  +880 1737 456789
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-pink-500/10 border border-pink-500/20 flex items-center justify-center">
                <HiOutlineMapPin className="text-pink-400 text-2xl" />
              </div>

              <div>
                <p className="text-gray-500">Location</p>
                <h3 className="text-white text-xl">
                  Dhaka, Bangladesh
                </h3>
              </div>
            </div>

          </div>
        </div>

        {/* Right Side */}
        <div className="bg-white/5 border border-white/10 rounded-[32px] p-10 backdrop-blur-xl">

         <h2 className="text-4xl font-bold text-white mb-10 flex items-center gap-4">
          <HiOutlineChatBubbleLeftRight className="text-violet-400" />
            Send Message
         </h2>

        <div className="space-y-6">

         {/* Name */}
        <div className="relative">
         <HiOutlineUser className="absolute left-6 top-1/2 -translate-y-1/2 text-violet-400 text-2xl" />

          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-white/5 border border-white/10 rounded-3xl py-5 pl-20 pr-6 text-white outline-none focus:border-violet-500"
          />
        </div>

         {/* Email */}
        <div className="relative">
         <HiOutlineEnvelope className="absolute left-6 top-1/2 -translate-y-1/2 text-violet-400 text-2xl" />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-white/5 border border-white/10 rounded-3xl py-5 pl-20 pr-6 text-white outline-none focus:border-violet-500"
          />
        </div>

        {/* Subject */}
        <div className="relative">
         <HiOutlineDocumentText className="absolute left-6 top-1/2 -translate-y-1/2 text-violet-400 text-2xl" />

         <input
           type="text"
           placeholder="Subject"
           className="w-full bg-white/5 border border-white/10 rounded-3xl py-5 pl-20 pr-6 text-white outline-none focus:border-violet-500"
         />
        </div>

       {/* Message */}
       <div className="relative">
          <HiOutlinePencilSquare className="absolute left-6 top-8 text-violet-400 text-2xl" />

          <textarea
           rows={6}
           placeholder="Write your message..."
           className="w-full bg-white/5 border border-white/10 rounded-3xl pt-8 pl-20 pr-6 text-white outline-none focus:border-violet-500 resize-none"
          ></textarea>
        </div>

        {/* Button */}
        <button className="w-full py-5 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 text-white font-semibold flex items-center justify-center gap-3 hover:scale-[1.02] duration-300">

          <HiOutlinePaperAirplane className="text-2xl" />
           Send Message
        </button>

        </div>

       </div>
      </div>

    </section>
  );
}