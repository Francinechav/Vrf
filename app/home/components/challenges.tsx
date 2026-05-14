import Image from "next/image";

export default function Challenges() {
  return (
    <section className="relative bg-[#F7FAFC] py-11 md:py-15 px-4 md:px-6 overflow-hidden">

      {/* SOFT BACKGROUND ACCENT */}
      <div className="absolute top-20 right-0 w-[250px] h-[250px] bg-[#5FAFC2]/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* CENTERED HEADER */}
        <div className="max-w-2xl mx-auto text-center">

          <span className="text-[#5FAFC2] uppercase tracking-[0.18em] font-bold text-[10px]">
            The Challenges We Face
          </span>

          <h2 className="text-2xl md:text-4xl font-semibold text-[#0B3A4A] leading-[1.08] mt-3">
            Fighting Inequality Through Advocacy, Access and Justice
          </h2>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-12 mt-10 items-center">

          {/* LEFT SIDE */}
          <div className="relative">

           

            {/* MAIN IMAGE */}
            <div className="relative h-[300px] sm:h-[360px] md:h-[410px] rounded-[10px] overflow-hidden">

              <Image
                src="/vc.jpg"
                alt="Community support"
                fill
                className="object-cover"
              />
            </div>


{/* FLOATING INFO CARD */}
<div className="absolute bottom-3 right-2 sm:right-3 md:right-[-14px] max-w-[180px] sm:max-w-[200px] overflow-hidden bg-white/60 backdrop-blur-xl px-4 py-3 rounded-[22px] shadow-2xl ">

  <h3 className="text-2xl font-bold text-[#0B3A4A] leading-none">
    Millions
  </h3>

  <p className="text-black text-[11px] leading-relaxed mt-2">
    continue to face barriers to healthcare, legal support and SRHR services.
  </p>

</div>


          </div>
 
          {/* RIGHT SIDE */}
          <div className="lg:-translate-y-2">

            <p className="text-[15px] text-gray-600 leading-relaxed">
              Across Malawi, vulnerable communities continue to experience
              systemic barriers in accessing healthcare, legal support, and
              Sexual and Reproductive Health Rights services.
            </p>

            <p className="text-gray-600 text-sm leading-relaxed mt-4">
              Women, adolescents, and marginalized populations are often excluded
              from systems designed to protect them. We believe every person
              deserves dignity, equitable healthcare, and access to justice.
            </p>

            {/* CHALLENGE ITEMS */}
{/* CHALLENGE ITEMS */}
<div className="space-y-3 mt-6">

  {/* ITEM 1 */}
  <div className="group flex gap-3 items-start bg-white p-4 rounded-2xl border border-[#DDE5EA] hover:shadow-lg transition duration-300">

    {/* ICON */}
    <div className="relative min-w-[44px] h-[44px] rounded-[12px] overflow-hidden shadow-sm">

      <Image
        src="/icong.png"
        alt="Healthcare"
        fill
        className="object-cover"
      />

    </div>

    {/* TEXT */}
    <div>

      <h3 className="text-[#0B3A4A] text-[15px] font-semibold">
        Limited Healthcare Access
      </h3>

      <p className="text-gray-600 text-xs leading-relaxed mt-1">
        Many underserved communities continue to struggle with access
        to affordable healthcare services.
      </p>

    </div>

  </div>

  {/* ITEM 2 */}
  <div className="group flex gap-3 items-start bg-[#0B3A4A] p-4 rounded-2xl text-white shadow-xl">

    {/* ICON */}
    <div className="relative min-w-[44px] h-[44px] rounded-[12px] overflow-hidden shadow-sm border border-white/10">

      <Image
        src="/iconf.png"
        alt="Justice"
        fill
        className="object-cover"
      />

    </div>

    {/* TEXT */}
    <div>

      <h3 className="text-[15px] font-semibold">
        Access to Justice
      </h3>

      <p className="text-[#DDE5EA] text-xs leading-relaxed mt-1">
        Vulnerable individuals often lack legal support when their
        rights are violated.
      </p>

    </div>

  </div>

  {/* ITEM 3 */}
  <div className="group flex gap-3 items-start bg-white p-4 rounded-2xl border border-[#DDE5EA] hover:shadow-lg transition duration-300">

    {/* ICON */}
    <div className="relative min-w-[44px] h-[44px] rounded-[12px] overflow-hidden shadow-sm">

      <Image
        src="/iconh.png"
        alt="Inequality"
        fill
        className="object-cover"
      />

    </div>

    {/* TEXT */}
    <div>

      <h3 className="text-[#0B3A4A] text-[15px] font-semibold">
        Structural Inequality
      </h3>

      <p className="text-gray-600 text-xs leading-relaxed mt-1">
        Poverty and discrimination continue to deepen inequities
        across communities.
      </p>

    </div>

  </div>

</div>
          </div>

        </div>
      </div>
    </section>
  );
}