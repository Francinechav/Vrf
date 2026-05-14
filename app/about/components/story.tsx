import Image from "next/image";
import Link from "next/link";

export default function Story() {
  return (
    <section id="aboutus" className="bg-white py-8 md:py-14 px-4 md:px-6 overflow-hidden">

      <div className="max-w-6xl mx-auto">

        {/* TOP STORY INTRO */}
        <div className="grid lg:grid-cols-[0.35fr_0.65fr] gap-8 lg:gap-16 items-start">

          {/* LEFT META */}
          <div>

            <span className="text-[#5FAFC2] uppercase tracking-[0.16em] text-[10px] font-semibold">
              About Us
            </span>

            <div className="mt-5">

              <p className="text-[#0B3A4A] text-5xl md:text-6xl font-semibold leading-none">
                2023
              </p>

              <div className="w-14 h-[2px] bg-[#5FAFC2] mt-4" />

              <p className="text-[#2E5F73] text-xs mt-4 leading-relaxed max-w-[140px]">
                The beginning of a mission rooted in justice, dignity and health equity.
              </p>
            </div>

            {/* IMAGE NOW BELOW LEFT CONTENT */}
            <div className="mt-8 relative">

              <div className="relative rounded-[24px] overflow-hidden shadow-2xl">

                <Image
                  src="/ve.jpg"
                  alt="Vital Rights Foundation Community Work"
                  width={700}
                  height={900}
                  className="w-full h-[260px] sm:h-[320px] object-cover object-top"
                />
              </div>

              {/* SMALL OVERLAY QUOTE */}
              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md rounded-2xl px-4 py-3 max-w-[220px] shadow-lg border border-[#DDE5EA]">

                <p className="text-black text-xs font-medium leading-relaxed">
                  “True change begins when communities are empowered to defend and advocate for their rights.”
                </p>

              </div>
            </div>
          </div>

          {/* RIGHT STORY */}
          <div>

            <h2 className="text-2xl md:text-4xl font-semibold text-black leading-[1.05] max-w-[720px]">
              Our Story Started With a Simple Belief:
              Everyone Deserves Dignity, Justice and Access to Care.
            </h2>

            <div className="grid md:grid-cols-2 gap-5 mt-8">

              <p className="text-[#2E5F73] text-sm md:text-[15px] leading-relaxed">
                VRF was inspired by the urgent realities faced by vulnerable
                individuals who struggled to access healthcare, legal support,
                and protection of their fundamental human rights.
              </p>

              <p className="text-[#2E5F73] text-sm md:text-[15px] leading-relaxed">
                What began as concern became action. With support from partners
                like Afya Na Haki, we built a community-driven organization
                committed to advancing justice, health equity, and empowerment
                across Malawi.
              </p>

            </div>

            {/* LONGER STORY */}
            <div className="mt-6 border-l-2 border-[#5FAFC2] pl-5">

              <p className="text-[#2E5F73] text-sm md:text-[15px] leading-relaxed max-w-[650px]">
                We believe true transformation begins within communities.
                By empowering people to understand, claim, and advocate for
                their rights, we are helping build a more equitable and
                compassionate future for all.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8">

              <Link
                href="/programms"
                className="inline-flex items-center gap-2 text-[#0B3A4A] text-sm font-semibold hover:gap-3 transition-all duration-300"
              >
                Explore Our Work →
              </Link>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}