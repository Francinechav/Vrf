"use client";

import Image from "next/image";
import Link from "next/link";

export default function WhoWeAre() {
  return (
    <section
      id="who"
      className="relative bg-white py-10 md:py-14 px-4 md:px-6 overflow-hidden"
    >

      {/* BACKGROUND ACCENTS */}
      <div className="absolute top-20 left-0 w-[280px] h-[280px] bg-[#5FAFC2]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-[0.92fr_1.08fr] gap-14 lg:gap-16 items-center">

          {/* IMAGE SIDE */}
          <div className="relative">       

            {/* MAIN IMAGE WRAPPER */}
            <div className="relative">

              {/* BACK LAYER */}
             

              {/* MAIN IMAGE */}
              <div className="relative h-[320px] sm:h-[420px] lg:h-[520px] rounded-[12px] overflow-hidden">

                <Image
                  src="/va.jpg"
                  alt="VRF Community"
                  fill
                  className="object-cover"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B3A4A]/50 via-transparent to-transparent z-10" />

              </div>

            </div>

            {/* FLOATING IMPACT CARD */}
            <div className="absolute -bottom-8 right-2 sm:right-4 md:-right-4 z-30">

              <div className="bg-white/15 backdrop-blur-xl border border-white/20 shadow-2xl rounded-[20px] px-4 sm:px-5 py-4 max-w-[210px]">

                <div className="flex items-center gap-3">

                  {/* ICON */}
                  <div className="w-11 h-11 rounded-2xl bg-[#0B3A4A] text-white flex items-center justify-center shadow-lg shrink-0">

                    ✨

                  </div>

                  {/* TEXT */}
                  <div>

                    <h3 className="text-2xl font-bold text-[#0B3A4A] leading-none">
                      500+
                    </h3>

                    <p className="text-black text-xs mt-1 leading-relaxed">
                      Lives impacted through advocacy and legal empowerment.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* CONTENT SIDE */}
          <div className="lg:-translate-y-2">

            {/* LABEL */}
            <span className="text-[#5FAFC2] uppercase tracking-[0.18em] font-semibold text-[11px]">

              Who We Are

            </span>

            {/* TITLE */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#0B3A4A] leading-[1.02] mt-4 max-w-[700px]">

              A Community Driven Organization Fighting for Equity and Justice

            </h2>

            {/* TEXT */}
            <div className="mt-6 space-y-5">

              <p className="text-gray-600 text-[15px] md:text-base leading-relaxed">

                We are a team deeply passionate about the work we do here.
                It’s not just a job for us; it’s a calling. Here in Malawi,
                we see firsthand the devastating impact of unequal access
                to healthcare and justice.

              </p>

              <p className="text-gray-600 text-[15px] leading-relaxed">

                Too many people, especially women and adolescents,
                are denied their basic human rights. They are denied
                the right to quality healthcare, legal protection,
                and the opportunity to live healthy and fulfilling lives.

              </p>

              <p className="text-gray-600 text-[15px] leading-relaxed">

                That’s why VRF exists. We believe health is a fundamental
                human right, not a privilege, and we remain committed to
                fighting for that right for every Malawian.

              </p>

            </div>

            {/* MINI HIGHLIGHTS */}
<div className="grid sm:grid-cols-2 gap-3 mt-7">

  {/* CARD 1 */}
  <div className="group relative overflow-hidden rounded-[22px] border border-[#DDE5EA] bg-gradient-to-br from-white to-[#F7FAFC] p-4 md:p-[18px] shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">

    {/* GLOW */}
    <div className="absolute top-0 right-0 w-24 h-24 bg-[#5FAFC2]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition duration-500" />

    {/* ICON */}
<div className="relative z-10 w-10 h-10 rounded-full overflow-hidden shadow-md">

  <Image
    src="/iconf.png"
    alt="Human Rights"
    fill
    className="object-cover"
  />

</div>

    <div className="relative z-10">

      <h3 className="text-[#0B3A4A] font-semibold text-[16px] mt-3">

        Human Rights

      </h3>

      <p className="text-gray-600 text-[13px] leading-relaxed mt-1.5">

        Advocating for dignity, inclusion,
        and equal protection across communities.

      </p>

      <div className="w-8 h-[3px] rounded-full bg-[#5FAFC2] mt-3" />

    </div>

  </div>

  {/* CARD 2 */}
  <div className="group relative overflow-hidden rounded-[22px] bg-[#0B3A4A] p-4 md:p-[18px] text-white shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">

    {/* GLOW */}
    <div className="absolute bottom-0 left-0 w-28 h-28 bg-[#5FAFC2]/20 rounded-full blur-3xl opacity-60" />

    {/* ICON */}
<div className="relative z-10 w-10 h-10 rounded-full overflow-hidden shadow-md border border-white/10">

  <Image
    src="/icond.png"
    alt="SRHR Advocacy"
    fill
    className="object-cover"
  />

</div>

    <div className="relative z-10">

      <h3 className="font-semibold text-[16px] mt-3">

        SRHR Advocacy

      </h3>

      <p className="text-[#DDE5EA] text-[13px] leading-relaxed mt-1.5">

        Expanding equitable healthcare access,
        awareness, and justice for all.

      </p>

      <div className="w-8 h-[3px] rounded-full bg-[#5FAFC2] mt-3" />

    </div>

  </div>

</div>

            {/* CTA */}
            <div className="mt-8">

              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[#0B3A4A] font-semibold hover:gap-4 transition-all duration-300"
              >

                Learn More About Us →

              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}