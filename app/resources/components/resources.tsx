"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Search,
  Download,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

const publications = [
  {
    id: 1,
    category: "Legal Documents",
    title: "AC Minor Vs State (Civil Cause No 162 of 2023)",
    description:
      "A landmark legal case exploring reproductive justice, healthcare rights, and protection of vulnerable individuals in Malawi.",
    image: "/vr.jpg",
    date: "2025",
    pdf: "/documents/AC-Pregnancy-termination-1.pdf",
  },

];

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPublications = publications.filter((publication) =>
    publication.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    publication.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    publication.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section
      id="read"
      className="bg-white py-12 md:py-16 px-4 md:px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">

        {/* TOP */}
        <div className="grid lg:grid-cols-[0.38fr_0.62fr] gap-8 md:gap-14 items-start border-b border-[#E5ECEF] pb-10 md:pb-12">

          {/* LEFT */}
          <div>

            <span className="text-[#5FAFC2] uppercase tracking-[0.16em] text-[10px] font-semibold">
              Resources
            </span>

            <h1 className="text-3xl md:text-5xl font-semibold text-[#0B3A4A] leading-[1.02] mt-4">
              Publications & Research
            </h1>

          </div>

          {/* RIGHT */}
          <div>

            <p className="text-[#2E5F73] text-sm md:text-[15px] leading-relaxed max-w-[720px]">
              We conduct in-depth research on pressing SRHR issues affecting
              vulnerable communities across Malawi. Through evidence-based
              advocacy, legal analysis, and community-centered documentation,
              we work to amplify marginalized voices and influence meaningful change.
            </p>

            <p className="text-[#2E5F73] text-sm md:text-[15px] leading-relaxed mt-4 max-w-[720px]">
              Explore our reports, legal documents, research publications,
              educational resources, and advocacy materials.
            </p>

          </div>
        </div>

        {/* SEARCH + FILTER */}
        <div className="flex flex-col lg:flex-row gap-5 lg:items-center lg:justify-between mt-8 md:mt-10">

          {/* SEARCH */}
          <div className="w-full lg:max-w-[420px]">

            <div className="flex items-center gap-3 border border-[#DDE5EA] rounded-full px-4 py-3">

              <Search size={16} className="text-[#7A8B94]" />

              <input
                type="text"
                placeholder="Search publications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent outline-none w-full text-sm text-[#0B3A4A] placeholder:text-[#7A8B94]"
              />

            </div>
          </div>

          {/* FILTERS */}
          <div className="flex flex-wrap gap-2">

            <button className="bg-[#0B3A4A] text-white text-xs px-4 py-2 rounded-full">
              All
            </button>

            <button className="border border-[#DDE5EA] text-[#0B3A4A] text-xs px-4 py-2 rounded-full hover:bg-[#F7FAFC] transition">
              Legal
            </button>

            <button className="border border-[#DDE5EA] text-[#0B3A4A] text-xs px-4 py-2 rounded-full hover:bg-[#F7FAFC] transition">
              Research
            </button>

            <button className="border border-[#DDE5EA] text-[#0B3A4A] text-xs px-4 py-2 rounded-full hover:bg-[#F7FAFC] transition">
              Toolkits
            </button>

            <button className="border border-[#DDE5EA] text-[#0B3A4A] text-xs px-4 py-2 rounded-full hover:bg-[#F7FAFC] transition">
              Advocacy
            </button>

          </div>
        </div>

        {/* FEATURED PUBLICATION */}
        <div className="border-b border-[#E5ECEF] py-10 md:py-12">

          <div className="grid lg:grid-cols-[180px_1fr] gap-6 md:gap-8 items-start">

            {/* COVER */}
            <div className="relative h-[220px] rounded-2xl overflow-hidden">

              <Image
                src="/re.jpg"
                alt="Publication"
                fill
                sizes="180px"
                className="object-cover"
              />

            </div>

            {/* CONTENT */}
            <div>

              <div className="flex items-center gap-3 flex-wrap">

                <span className="text-[#5FAFC2] uppercase tracking-[0.14em] text-[10px] font-semibold">
                  Featured Publication
                </span>

                <span className="text-[#7A8B94] text-xs">
                  2025
                </span>

              </div>

              <h2 className="text-2xl md:text-4xl font-semibold text-[#0B3A4A] leading-[1.08] mt-4 max-w-[850px]">
                AC Minor Vs State
                (Civil Cause No 162 of 2023)
              </h2>

              <p className="text-[#2E5F73] text-sm md:text-[15px] leading-relaxed mt-5 max-w-[760px]">
                A landmark legal case examining reproductive justice,
                healthcare rights, and protection of vulnerable populations
                within Malawi’s legal and healthcare systems.
              </p>

              {/* ACTIONS */}
              <div className="flex flex-wrap gap-3 mt-7">

                <a
                  href={publications[0].pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white bg-[#0B3A4A] px-5 py-3 rounded-full text-sm font-medium hover:bg-[#124B5F] transition"
                >
                  Read Publication
                  <ArrowUpRight size={16} />
                </a>

                <a
                  href={publications[0].pdf}
                  download
                  className="inline-flex items-center gap-2 border border-[#DDE5EA] px-5 py-3 rounded-full text-sm font-medium text-[#0B3A4A] hover:bg-[#F7FAFC] transition"
                >
                  Download PDF
                  <Download size={15} />
                </a>

              </div>
            </div>
          </div>
        </div>

        {/* PUBLICATIONS LIST */}
        <div className="pt-6 md:pt-8">

          {filteredPublications.map((publication) => (
            <a
              key={publication.id}
              href={publication.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full border-b border-[#E5ECEF] py-6 md:py-7 text-left group block hover:bg-[#F7FAFC]/50 transition"
            >

              <div className="grid lg:grid-cols-[160px_1fr_120px] gap-5 md:gap-8 items-start">

                {/* CATEGORY */}
                <div>

                  <span className="text-[#5FAFC2] uppercase tracking-[0.14em] text-[10px] font-semibold">
                    {publication.category}
                  </span>

                </div>

                {/* TITLE + DESC */}
                <div>

                  <h3 className="text-[#0B3A4A] text-lg md:text-2xl font-semibold leading-snug group-hover:text-[#5FAFC2] transition">
                    {publication.title}
                  </h3>

                  <p className="text-[#2E5F73] text-sm leading-relaxed mt-3 max-w-[700px]">
                    {publication.description}
                  </p>

                </div>

                {/* ACTION */}
                <div className="flex items-center lg:justify-end gap-2 text-[#0B3A4A] text-sm font-medium">

                  <span>
                    Read
                  </span>

                  <ArrowUpRight
                    size={16}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition"
                  />

                </div>
              </div>
            </a>
          ))}

        </div>

        {/* FOOTER CTA */}
        <div className="border-t border-[#E5ECEF] mt-10 md:mt-12 pt-8 flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">

          <div>

            <h3 className="text-[#0B3A4A] text-xl md:text-2xl font-semibold">
              Looking for a specific resource?
            </h3>

            <p className="text-[#2E5F73] text-sm leading-relaxed mt-2 max-w-[620px]">
              If you need assistance accessing a publication or would like to
              request a resource, feel free to contact us.
            </p>

          </div>
         <Link href="/contact">
          <button className="bg-[#0B3A4A] text-white px-5 py-3 rounded-full text-sm font-medium hover:bg-[#124B5F] transition whitespace-nowrap">
            Contact Us
          </button>
        </Link>
        </div>

      </div>
    </section>
  );
}