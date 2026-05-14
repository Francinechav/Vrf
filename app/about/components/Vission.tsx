import Image from "next/image";
import {
  Scale,
  HeartHandshake,
  Users,
  ShieldCheck,
} from "lucide-react";

export default function MissionVisionValues() {
  return (
    <section className="bg-[#F7FAFC] py-12 md:py-16 px-4 md:px-6 overflow-hidden">

      <div className="max-w-5xl mx-auto">

        {/* TOP HEADER */}
        <div className="max-w-2xl">

          <span className="text-[#5FAFC2] uppercase tracking-[0.16em] text-[10px] font-semibold">
            Our Foundation
          </span>

          <h2 className="text-2xl md:text-4xl font-semibold text-[#0B3A4A] leading-[1.05] mt-3">
            Mission, Vision & Values
          </h2>

        </div>

        {/* MISSION */}
        <div className="grid md:grid-cols-[110px_1fr] gap-4 md:gap-6 pt-8 md:pt-10 border-t border-[#DDE5EA] mt-8">

          {/* TITLE */}
          <div>

            <h3 className="text-[#0B3A4A] text-lg md:text-xl font-semibold">
              Mission
            </h3>

          </div>

          {/* CONTENT */}
          <div className="grid md:grid-cols-[1fr_180px] gap-5 items-start">

            {/* TEXT */}
            <div>

              <p className="text-[#2E5F73] text-sm md:text-[15px] leading-relaxed max-w-[620px]">
                To advance human rights, health equity, Sexual and Reproductive
                Health and Rights (SRHR), and access to justice through advocacy,
                community empowerment, strategic partnerships, and sustainable action.
              </p>

            </div>

            {/* IMAGE */}
          {/* IMAGE */}
<div className="relative w-full flex justify-center md:justify-end">

  <div className="relative h-[110px] w-[150px] md:h-[120px] md:w-full md:max-w-[180px] rounded-lg overflow-hidden mt-2 md:mt-0">

    <Image
      src="/ab1.png"
      alt="Mission"
      fill
      sizes="(max-width: 768px) 150px, 180px"
      className="object-cover"
    />

  </div>

</div>

          </div>
        </div>

        {/* VISION */}
        <div className="grid md:grid-cols-[110px_1fr] gap-4 md:gap-6 pt-8 md:pt-10 border-t border-[#DDE5EA] mt-8">

          {/* TITLE */}
          <div>

            <h3 className="text-[#0B3A4A] text-lg md:text-xl font-semibold">
              Vision
            </h3>

          </div>

          {/* CONTENT */}
          <div className="grid md:grid-cols-[1fr_180px] gap-5 items-start">

            {/* TEXT */}
            <div>

              <p className="text-[#2E5F73] text-sm md:text-[15px] leading-relaxed max-w-[620px]">
                We envision a Malawi where every individual, regardless of their
                background or economic status, has access to quality healthcare,
                comprehensive Sexual and Reproductive Health and Rights (SRHR),
                and effective legal support through collaboration, partnership,
                and a deep unwavering commitment to the communities we serve.
              </p>

            </div>

            {/* IMAGE */}
{/* IMAGE */}
<div className="relative w-full flex justify-center md:justify-end">

  <div className="relative h-[110px] w-[150px] md:h-[120px] md:w-full md:max-w-[180px] rounded-lg overflow-hidden mt-2 md:mt-0">

    <Image
      src="/ae2.png"
      alt="Vision"
      fill
      sizes="(max-width: 768px) 150px, 180px"
      className="object-cover object-top"
    />

  </div>

</div>

          </div>
        </div>

        {/* VALUES */}
        <div className="pt-8 md:pt-10 border-t border-[#DDE5EA] mt-8">

          <h3 className="text-[#0B3A4A] text-lg md:text-xl font-semibold">
            Our Values
          </h3>

          {/* VALUES GRID */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-5">

            {/* VALUE */}
            <div className="bg-white border border-[#DDE5EA] rounded-2xl p-4 hover:shadow-md transition duration-300">

              <div className="w-9 h-9 rounded-xl bg-[#0B3A4A] text-white flex items-center justify-center">
                <Scale size={15} />
              </div>

              <h4 className="text-[#0B3A4A] font-semibold text-sm mt-3">
                Justice
              </h4>

              <p className="text-[#2E5F73] text-[11px] leading-relaxed mt-1.5">
                We advocate for fairness and equal protection for all.
              </p>

            </div>

            {/* VALUE */}
            <div className="bg-white border border-[#DDE5EA] rounded-2xl p-4 hover:shadow-md transition duration-300">

              <div className="w-9 h-9 rounded-xl bg-[#0B3A4A] text-white flex items-center justify-center">
                <HeartHandshake size={15} />
              </div>

              <h4 className="text-[#0B3A4A] font-semibold text-sm mt-3">
                Compassion
              </h4>

              <p className="text-[#2E5F73] text-[11px] leading-relaxed mt-1.5">
                We serve communities with empathy and care.
              </p>

            </div>

            {/* VALUE */}
            <div className="bg-white border border-[#DDE5EA] rounded-2xl p-4 hover:shadow-md transition duration-300">

              <div className="w-9 h-9 rounded-xl bg-[#0B3A4A] text-white flex items-center justify-center">
                <Users size={15} />
              </div>

              <h4 className="text-[#0B3A4A] font-semibold text-sm mt-3">
                Community
              </h4>

              <p className="text-[#2E5F73] text-[11px] leading-relaxed mt-1.5">
                Sustainable change begins within communities.
              </p>

            </div>

            {/* VALUE */}
            <div className="bg-white border border-[#DDE5EA] rounded-2xl p-4 hover:shadow-md transition duration-300">

              <div className="w-9 h-9 rounded-xl bg-[#0B3A4A] text-white flex items-center justify-center">
                <ShieldCheck size={15} />
              </div>

              <h4 className="text-[#0B3A4A] font-semibold text-sm mt-3">
                Integrity
              </h4>

              <p className="text-[#2E5F73] text-[11px] leading-relaxed mt-1.5">
                We are guided by transparency and accountability.
              </p>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}