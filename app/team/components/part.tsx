"use client";

import Image from "next/image";
import Link from "next/link";

const partners = [
  {
    name: "Afya Na Haki",
    logo: "/ahaki.png",
    url: "https://www.afyanahaki.org/",
  },

  {
    name: "Legal Aid Bureau",
    logo: "/legallogo.png",
    url: "https://legalaidbureau.org/",
  },

  {
    name: "Nyale Institute",
    logo: "/nyale-logo.png",
    url: "https://nyaleinstitute.org.mw/",
  },

  {
    name: "Centre for Human Rights and Rehabilitation",
    logo: "/cr.png",
    url: "https://chrrmw.org/",
  },
];

export default function PartnersSection() {
  return (
    <section className="bg-white py-14 md:py-20 overflow-hidden border-t border-[#E7EDF0]">

      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-14">

        {/* TOP */}
        <div className="max-w-7xl">

          <span className="inline-flex items-center gap-2 rounded-full border border-[#DDE5EA] bg-white px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5FAFC2]">

            <span className="h-2 w-2 rounded-full bg-[#5FAFC2]" />

            Our Partners

          </span>

          <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.05em] leading-[0.95] text-[#0B3A4A] mt-6">

            Partners Helping
            <br />
            Create Impact

          </h2>

          <p className="text-sm md:text-[15px] leading-[1.9] text-[#5C6F79] mt-6 max-w-2xl">

            We’re incredibly grateful for the support of our partners,
            who play a vital role in helping us achieve our mission.
            Their collaboration and commitment enable us to create
            lasting impact and drive meaningful change.

          </p>

        </div>

      </div>

      {/* MARQUEE */}
      <div className="relative mt-12 overflow-hidden">

        {/* LEFT FADE */}
        <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#F6F7F8] to-transparent" />

        {/* RIGHT FADE */}
        <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#F6F7F8] to-transparent" />

        {/* TRACK */}
        <div className="flex max-w-7xl animate-[marquee_24s_linear_infinite] hover:[animation-play-state:paused]">

          {[...partners, ...partners].map((partner, index) => (
            <Link
              key={index}
              href={partner.url}
              target="_blank"
              className="flex h-[90px] w-[190px] md:h-[100px] md:w-[210px] shrink-0 items-center justify-center mx-1 md:mx-2"
            >

              <Image
                src={partner.logo}
                alt={partner.name}
                width={160}
                height={80}
                className="h-auto w-auto max-h-[42px] md:max-h-[48px] object-contain"
              />

            </Link>
          ))}

        </div>

      </div>

      {/* PARTNER CTA */}
<div className="max-w-4xl mx-auto px-5 md:px-8 lg:px-14 mt-16">

  <div className="rounded-[28px] border border-[#E7EDF0] bg-[#F8FAFB] px-6 py-10 md:px-12 md:py-14 text-center">

    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#5FAFC2]">

      Collaborate With VRF

    </p>

    <h3 className="mt-4 text-2xl md:text-4xl font-semibold tracking-[-0.04em] leading-[1.05] text-[#0B3A4A]">

      Join Our Network
      <br />
      of Partners

    </h3>

    <p className="mt-5 max-w-2xl mx-auto text-sm md:text-[15px] leading-[1.9] text-[#5C6F79]">

      We are always looking to collaborate with organizations
      that share our vision. Partner with us and help create
      lasting impact across communities in Malawi.

    </p>

    {/* BUTTON */}
    <div className="mt-8">

      <Link
        href="/contact"
        className="inline-flex items-center justify-center rounded-full bg-[#0B3A4A] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#124B5F]"
      >

        Get In Touch

      </Link>

    </div>

  </div>

</div>

      {/* MARQUEE ANIMATION */}
      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }
      `}</style>

    </section>
  );
}