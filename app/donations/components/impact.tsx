"use client";

export default function Impact() {
  return (
    <section className="relative bg-white py-8 md:py-12 px-4 md:px-6 overflow-hidden">

      {/* SOFT BACKGROUND ACCENT */}
      <div className="absolute top-10 right-0 w-[220px] h-[220px] bg-[#5FAFC2]/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">

        <div className="relative">

          {/* TEXT */}
          <div>

            <span className="text-[#5FAFC2] uppercase tracking-[0.16em] font-semibold text-[10px]">
              Our Impact
            </span>

            <h2 className="text-2xl md:text-4xl font-semibold text-[#0B3A4A] leading-[1.08] mt-3 max-w-[620px]">
              Building Stronger Communities Through Advocacy and Action
            </h2>

            <p className="text-gray-600 text-[15px] leading-relaxed mt-4 max-w-[580px]">
              Through partnerships, advocacy initiatives, legal support, and
              community engagement, we are working toward a more equitable
              future for all.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-5 mt-7 max-w-[520px]">

              <div className="border-l-2 border-[#5FAFC2] pl-4">
                <h3 className="text-2xl md:text-3xl font-bold text-[#0B3A4A]">
                  500+
                </h3>

                <p className="text-gray-600 text-[12px] mt-1 leading-relaxed">
                  Community Members Reached
                </p>
              </div>

              <div className="border-l-2 border-[#0B3A4A] pl-4">
                <h3 className="text-2xl md:text-3xl font-bold text-[#0B3A4A]">
                  30+
                </h3>

                <p className="text-gray-600 text-[12px] mt-1 leading-relaxed">
                  Advocacy Initiatives
                </p>
              </div>

              <div className="border-l-2 border-[#124B5F] pl-4">
                <h3 className="text-2xl md:text-3xl font-bold text-[#0B3A4A]">
                  10+
                </h3>

                <p className="text-gray-600 text-[12px] mt-1 leading-relaxed">
                  Strategic Partnerships
                </p>
              </div>

              <div className="border-l-2 border-[#5FAFC2] pl-4">
                <h3 className="text-2xl md:text-3xl font-bold text-[#0B3A4A]">
                  100%
                </h3>

                <p className="text-gray-600 text-[12px] mt-1 leading-relaxed">
                  Commitment to Justice
                </p>
              </div>

            </div>

            {/* FLOATING STORY CARD */}
            <div className="relative mt-10 max-w-[240px]">

              <div className="bg-[#0B3A4A]/95 backdrop-blur-xl px-5 py-4 rounded-[1.4rem] shadow-2xl">

                <p className="text-white font-medium text-[13px] leading-relaxed">
                  “Together, we are helping communities understand and claim their rights.”
                </p>

                <div className="w-8 h-[2px] bg-[#5FAFC2] mt-4 rounded-full" />

                <p className="text-[#DDE5EA] text-[10px] mt-3 uppercase tracking-[0.12em]">
                  Vital Rights Foundation
                </p>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}