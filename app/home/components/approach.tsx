"use client";

import Image from "next/image";

export default function Approach() {
  return (
    <section className="relative bg-white py-8 md:py-14 px-4 md:px-6 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="hidden md:block absolute top-0 left-0 w-[220px] h-[220px] bg-[#5FAFC2]/10 blur-3xl rounded-full" />
      <div className="hidden md:block absolute bottom-0 right-0 w-[180px] h-[180px] bg-[#5FAFC2]/10 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* SECTION HEADER */}
        <div className="text-center max-w-xl mx-auto">

          <span className="text-[#5FAFC2] uppercase tracking-[0.16em] text-[10px] font-semibold">
            Our Approach
          </span>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-black leading-tight mt-3">
            A Holistic and Community Driven Strategy
          </h2>

          <p className="text-black text-sm md:text-[15px] leading-relaxed mt-3">
            We combine advocacy, legal empowerment, partnerships, research,
            and community engagement to create long-term systemic change.
          </p>

        </div>

<div className="mt-8 md:mt-12 relative">

  {/* CONNECTING LINE */}
  <div className="hidden lg:block absolute top-6 left-0 w-full h-[1px] bg-[#D9E4E8]" />

  {/* THIS WRAPPER IS IMPORTANT */}
  <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory lg:grid lg:grid-cols-4 lg:gap-5 relative z-10 scrollbar-hide">
          
{/* ITEM 1 */}
<div className="min-w-[220px] sm:min-w-[240px] lg:min-w-0 text-center group relative bg-white lg:bg-transparent border border-[#E7EDF0] lg:border-0 p-4 rounded-2xl lg:rounded-none snap-start shadow-sm lg:shadow-none transition duration-300 hover:-translate-y-1">

  <div className="relative mx-auto w-fit">

    {/* ICON */}
    <div className="relative w-11 h-11 rounded-full overflow-hidden shadow-sm group-hover:scale-105 transition duration-300">

      <Image
        src="/iconf.png"
        alt="Legal Empowerment"
        fill
        className="object-cover"
      />

    </div>

    {/* NUMBER */}
    <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#081F28] border border-[#5FAFC2] flex items-center justify-center text-[9px] font-semibold text-white">
      01
    </div>

  </div>

  <h3 className="text-black text-[15px] font-semibold mt-3">
    Legal Empowerment
  </h3>

  <p className="text-[#5C6F79] text-xs leading-relaxed mt-2 max-w-[190px] mx-auto">
    Supporting communities with legal knowledge and access to justice.
  </p>

</div>

{/* ITEM 2 */}
<div className="min-w-[220px] sm:min-w-[240px] lg:min-w-0 text-center group relative bg-white lg:bg-transparent border border-[#E7EDF0] lg:border-0 p-4 rounded-2xl lg:rounded-none snap-start shadow-sm lg:shadow-none transition duration-300 hover:-translate-y-1">

  <div className="relative mx-auto w-fit">

    {/* ICON */}
    <div className="relative w-11 h-11 rounded-full overflow-hidden shadow-sm group-hover:scale-105 transition duration-300">

      <Image
        src="/iconc.png"
        alt="Research"
        fill
        className="object-cover"
      />

    </div>

    {/* NUMBER */}
    <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#081F28] border border-[#5FAFC2] flex items-center justify-center text-[9px] font-semibold text-white">
      02
    </div>

  </div>

  <h3 className="text-black text-[15px] font-semibold mt-3">
    Research & Advocacy
  </h3>

  <p className="text-[#5C6F79] text-xs leading-relaxed mt-2 max-w-[190px] mx-auto">
    Using evidence-based advocacy to influence policy and amplify voices.
  </p>

</div>

{/* ITEM 3 */}
<div className="min-w-[220px] sm:min-w-[240px] lg:min-w-0 text-center group relative bg-white lg:bg-transparent border border-[#E7EDF0] lg:border-0 p-4 rounded-2xl lg:rounded-none snap-start shadow-sm lg:shadow-none transition duration-300 hover:-translate-y-1">

  <div className="relative mx-auto w-fit">

    {/* ICON */}
    <div className="relative w-11 h-11 rounded-full overflow-hidden shadow-sm group-hover:scale-105 transition duration-300">

      <Image
        src="/icond.png"
        alt="Community"
        fill
        className="object-cover"
      />

    </div>

    {/* NUMBER */}
    <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#081F28] border border-[#5FAFC2] flex items-center justify-center text-[9px] font-semibold text-white">
      03
    </div>

  </div>

  <h3 className="text-black text-[15px] font-semibold mt-3">
    Community Engagement
  </h3>

  <p className="text-[#5C6F79] text-xs leading-relaxed mt-2 max-w-[190px] mx-auto">
    Empowering communities to advocate for their wellbeing and rights.
  </p>

</div>

{/* ITEM 4 */}
<div className="min-w-[220px] sm:min-w-[240px] lg:min-w-0 text-center group relative bg-white lg:bg-transparent border border-[#E7EDF0] lg:border-0 p-4 rounded-2xl lg:rounded-none snap-start shadow-sm lg:shadow-none transition duration-300 hover:-translate-y-1">

  <div className="relative mx-auto w-fit">

    {/* ICON */}
    <div className="relative w-11 h-11 rounded-full overflow-hidden shadow-sm group-hover:scale-105 transition duration-300">

      <Image
        src="/iconb.png"
        alt="Partnerships"
        fill
        className="object-cover"
      />

    </div>

    {/* NUMBER */}
    <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#081F28] border border-[#5FAFC2] flex items-center justify-center text-[9px] font-semibold text-white">
      04
    </div>

  </div>

  <h3 className="text-black text-[15px] font-semibold mt-3">
    Strategic Partnerships
  </h3>

  <p className="text-[#5C6F79] text-xs leading-relaxed mt-2 max-w-[190px] mx-auto">
    Collaborating with organizations to strengthen impact and reach.
  </p>

</div>

        </div>

      </div>
      </div>

    </section>
  );
}