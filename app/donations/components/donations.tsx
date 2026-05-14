"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Scale,
  HeartHandshake,
  Users,
} from "lucide-react";

export default function SupportUsPage() {
  return (
    <main  id="don" className="bg-[#F7FAFC] text-[#0B3A4A] overflow-hidden">

      <section className="px-5 py-10 md:px-8 lg:px-14 md:py-14">

        <div className="max-w-7xl mx-auto">

          {/* MAIN LAYOUT */}
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-14 items-center">

            {/* IMAGE */}
            <div className="relative">

              <div className="relative overflow-hidden rounded-[5px] aspect-[16/11]">

                <Image
                  src="/vi.jpg"
                  alt="Support VRF"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />

              </div>

            </div>

            {/* CONTENT */}
            <div className="max-w-[620px]">

              {/* LABEL */}
              <span className="inline-flex rounded-full border border-[#DDE5EA] bg-white px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#5FAFC2]">

                Support Vital Rights Foundation

              </span>

              {/* TITLE */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[0.96] tracking-[-0.04em] mt-6">

                Why Your
                <br />
                Support Matters

              </h1>

              {/* TEXT */}
              <div className="space-y-5 mt-7">

                <p className="text-sm md:text-[15px] leading-[1.9] text-[#5C6F79]">

                  We can’t do this alone. We need your help,
                  your passion, your expertise, and your generosity
                  to make our vision a reality.

                </p>

                <p className="text-sm md:text-[15px] leading-[1.9] text-[#5C6F79]">

                  Join us in the fight for health equity and
                  justice in Malawi. Every contribution supports
                  legal aid, healthcare access, advocacy programs,
                  and community empowerment initiatives.

                </p>

              </div>


{/* FEATURE ROWS */}
<div className="space-y-2.5 mt-8">

  {/* ROW */}
  <div className="flex items-center overflow-hidden rounded-[1.2rem] border border-[#E7EDF0] bg-white shadow-[0_4px_18px_rgba(0,0,0,0.03)]">

    {/* LEFT ICON SIDE */}
    <div className="flex h-[64px] w-[62px] shrink-0 items-center justify-center bg-[#0B3A4A]">

      <Scale className="h-[15px] w-[15px] text-white" />

    </div>

    {/* TEXT */}
    <div className="px-4">

      <p className="text-[12.5px] md:text-[13px] font-medium leading-relaxed text-[#0B3A4A]">

        Provide free legal consultations for vulnerable individuals.

      </p>

    </div>

  </div>

  {/* ROW */}
  <div className="flex items-center overflow-hidden rounded-[1.2rem] border border-[#E7EDF0] bg-white shadow-[0_4px_18px_rgba(0,0,0,0.03)]">

    {/* LEFT ICON SIDE */}
    <div className="flex h-[64px] w-[62px] shrink-0 items-center justify-center bg-[#5FAFC2]">

      <HeartHandshake className="h-[15px] w-[15px] text-white" />

    </div>

    {/* TEXT */}
    <div className="px-4">

      <p className="text-[12.5px] md:text-[13px] font-medium leading-relaxed text-[#0B3A4A]">

        Fund mobile legal clinics in underserved communities.

      </p>

    </div>

  </div>

  {/* ROW */}
  <div className="flex items-center overflow-hidden rounded-[1.2rem] border border-[#E7EDF0] bg-white shadow-[0_4px_18px_rgba(0,0,0,0.03)]">

    {/* LEFT ICON SIDE */}
    <div className="flex h-[64px] w-[62px] shrink-0 items-center justify-center bg-[#124B5F]">

      <Users className="h-[15px] w-[15px] text-white" />

    </div>

    {/* TEXT */}
    <div className="px-4">

      <p className="text-[12.5px] md:text-[13px] font-medium leading-relaxed text-[#0B3A4A]">

        Train local leaders to advocate for human rights and justice.

      </p>

    </div>

  </div>

</div>

              {/* ACTIONS */}
              <div className="flex flex-col sm:flex-row gap-4 mt-10">

                {/* DONATE */}
               <a
  href="https://give.paychangu.com/dc-owvkhb"
  target="_blank"
  rel="noopener noreferrer"
  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#0B3A4A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#124B5F]"
>
  Donate Now

  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
</a>

                {/* PARTNER */}
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-[#DDE5EA] bg-white px-6 py-3 text-sm font-semibold text-[#0B3A4A] transition hover:bg-[#EEF3F5]"
                >

                  Partner With Us

                </Link>

              </div>

              {/* SMALL NOTE */}
              <p className="text-xs leading-relaxed text-[#8A99A1] mt-8 max-w-[520px]">

                Your support helps create sustainable change through
                legal advocacy, healthcare access, and community empowerment.

              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}