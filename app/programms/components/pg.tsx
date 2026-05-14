"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Scale,
  HeartHandshake,
  Users,
  X,
} from "lucide-react";
import Link from "next/link";


type Program = {
  id: number;
  title: string;
  image: string;
  short: string;
  intro: string;
  whatWeDo: string;
  whoWeHelp: string;
  impact: string;
};

const programs: Program[] = [
  {
    id: 1,
    title: "Litigating Reproductive Justice in Africa (LIRA)",
    image: "/vj.jpg",
    short:
      "Reproductive justice and legal advocacy in health rights.",

    intro:
      "Our Access to Justice Program is built on the belief that everyone deserves legal support regardless of their financial situation.",

    whatWeDo:
      "We provide free legal consultations, run mobile legal clinics in remote communities, and support strategic litigation to challenge discriminatory laws and policies.",

    whoWeHelp:
      "We prioritize support for women, adolescents, and vulnerable populations facing barriers to healthcare and justice.",

    impact:
      "We envision a Malawi where everyone understands their rights and can access healthcare and justice with dignity.",
  },
];

export default function Programs2() {
 const [selectedProgram, setSelectedProgram] = useState<Program>(programs[0]);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (program: Program) => {
    setSelectedProgram(program);
    setModalOpen(true);
  };

  return (
    <>
      <section id="pg" className="bg-[#F7FAFC] py-12 md:py-16 px-4 md:px-6 overflow-hidden">

        <div className="max-w-6xl mx-auto">

          {/* HEADER */}
          <div className="max-w-3xl">

            <span className="text-[#5FAFC2] uppercase tracking-[0.16em] text-[10px] font-semibold">
              Our Programs
            </span>

            <h2 className="text-3xl md:text-5xl font-semibold text-[#0B3A4A] leading-[1.05] mt-3">
              Advancing Justice, Health Equity & Human Rights
            </h2>

            <p className="text-[#2E5F73] text-sm md:text-[15px] leading-relaxed mt-5 max-w-[700px]">
              Explore the programs and initiatives through which VRF works to
              expand access to justice, strengthen community empowerment, and
              advance SRHR in Malawi.
            </p>

          </div>

          {/* FEATURED PROGRAM */}
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 md:gap-10 items-center mt-12 md:mt-14">

            {/* IMAGE */}
            <div className="relative">

              <div className="relative h-[300px] sm:h-[380px] md:h-[470px] rounded-[10px] overflow-hidden shadow-2xl">

                <Image
                  src="/vg.jpg"
                  alt="LIRA Program"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />

              </div>

              {/* FLOATING TAG */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-xl border border-[#DDE5EA] max-w-[220px]">

                <p className="text-[#0B3A4A] text-xs font-medium leading-relaxed">
                  Access to justice should never depend on income, location, or status.
                </p>

              </div>
            </div>

            {/* CONTENT */}
            <div>

              <span className="inline-flex items-center gap-2 bg-[#DFF4F8] text-[#0B3A4A] text-xs font-semibold px-3 py-1 rounded-full">
                Featured Program
              </span>

              <h3 className="text-2xl md:text-4xl font-semibold text-[#0B3A4A] leading-[1.08] mt-5">
                Litigating Reproductive Justice in Africa (LIRA)
              </h3>

              <p className="text-[#2E5F73] text-sm md:text-[15px] leading-relaxed mt-5">
                Our Access to Justice Program is built on the belief that everyone
                deserves legal support regardless of their financial situation.
              </p>

              {/* MINI ITEMS */}
              <div className="space-y-4 mt-7">

                <div className="flex gap-4 items-start">

                  <div className="w-10 h-10 rounded-xl bg-[#0B3A4A] text-white flex items-center justify-center shrink-0">
                    <Scale size={16} />
                  </div>

                  <div>
                    <h4 className="text-[#0B3A4A] text-sm font-semibold">
                      Legal Advocacy
                    </h4>

                    <p className="text-[#2E5F73] text-xs leading-relaxed mt-1">
                      Free legal consultations and strategic litigation.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">

                  <div className="w-10 h-10 rounded-xl bg-[#0B3A4A] text-white flex items-center justify-center shrink-0">
                    <Users size={16} />
                  </div>

                  <div>
                    <h4 className="text-[#0B3A4A] text-sm font-semibold">
                      Community Empowerment
                    </h4>

                    <p className="text-[#2E5F73] text-xs leading-relaxed mt-1">
                      Supporting communities to understand their rights.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">

                  <div className="w-10 h-10 rounded-xl bg-[#0B3A4A] text-white flex items-center justify-center shrink-0">
                    <HeartHandshake size={16} />
                  </div>

                  <div>
                    <h4 className="text-[#0B3A4A] text-sm font-semibold">
                      Health Equity
                    </h4>

                    <p className="text-[#2E5F73] text-xs leading-relaxed mt-1">
                      Supporting vulnerable populations across Malawi.
                    </p>
                  </div>
                </div>

              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
             

  <Link href="/donations">
    <button
      className="inline-flex items-center justify-center gap-2 bg-[#0B3A4A] text-white px-5 py-3 rounded-xl text-sm font-semibold hover:bg-[#124B5F] transition"
    >
      Support This Program
      <ArrowRight size={16} />
    </button>
  </Link>
      

                <button
                  onClick={() => openModal(programs[0])}
                  className="inline-flex items-center justify-center gap-2 border border-[#DDE5EA] text-[#0B3A4A] px-5 py-3 rounded-xl text-sm font-semibold hover:bg-white transition"
                >
                  Learn More
                </button>

              </div>
            </div>
          </div>

          {/* OTHER PROGRAMS */}
          <div className="mt-14 md:mt-16 bborder-t border-[#DDE5EA] pt-8">

            <div className="flex items-center justify-between gap-4 flex-wrap">

              <h3 className="text-[#0B3A4A] text-xl md:text-2xl font-semibold">
                More Programs
              </h3>

              <p className="text-[#2E5F73] text-sm">
                Select any program below to learn more.
              </p>

            </div>

            {/* PROGRAM CARDS */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">

              {programs.map((program) => (
                <div
                  key={program.id}
                  className="bg-white border border-[#DDE5EA] rounded-[10px] overflow-hidden hover:shadow-xl transition duration-300"
                >

                  {/* IMAGE */}
                  <div className="relative h-[170px]">

                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />

                  </div>

                  {/* CONTENT */}
                  <div className="p-5">

                    <h4 className="text-[#0B3A4A] font-semibold text-base leading-snug">
                      {program.title}
                    </h4>

                    <p className="text-[#2E5F73] text-xs leading-relaxed mt-2">
                      {program.short}
                    </p>
                 
                    <button
                      onClick={() => openModal(program)}
                      className="inline-flex items-center gap-2 text-[#0B3A4A] text-sm font-semibold mt-5 hover:gap-3 transition-all duration-300"
                    >
                      Learn More →
                    </button>
                

                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>
      </section>

      {/* MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">

          <div className="bg-white w-full max-w-3xl rounded-[6px] overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto">

            {/* TOP IMAGE */}
            <div className="relative h-[240px] md:h-[320px]">

              <Image
                src={selectedProgram.image}
                alt={selectedProgram.title}
                fill
                sizes="100vw"
                className="object-cover"
              />

              {/* CLOSE */}
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 text-black w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-lg"
              >
                <X size={18} />
              </button>

            </div>

            {/* CONTENT */}
            <div className="p-6 md:p-8">

              <h2 className="text-2xl md:text-4xl font-semibold text-[#0B3A4A] leading-tight">
                {selectedProgram.title}
              </h2>

              <p className="text-[#2E5F73] text-sm md:text-[15px] leading-relaxed mt-5">
                {selectedProgram.intro}
              </p>

              {/* DETAILS */}
              <div className="space-y-6 mt-8">

                <div>
                  <h3 className="text-[#0B3A4A] font-semibold text-lg">
                    What We Do
                  </h3>

                  <p className="text-[#2E5F73] text-sm leading-relaxed mt-2">
                    {selectedProgram.whatWeDo}
                  </p>
                </div>

                <div>
                  <h3 className="text-[#0B3A4A] font-semibold text-lg">
                    Who We Help
                  </h3>

                  <p className="text-[#2E5F73] text-sm leading-relaxed mt-2">
                    {selectedProgram.whoWeHelp}
                  </p>
                </div>

                <div>
                  <h3 className="text-[#0B3A4A] font-semibold text-lg">
                    What We Hope To Achieve
                  </h3>

                  <p className="text-[#2E5F73] text-sm leading-relaxed mt-2">
                    {selectedProgram.impact}
                  </p>
                </div>

              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
             <Link href="/donations">
                <button className="bg-[#0B3A4A] text-white px-5 py-3 rounded-xl text-sm font-semibold hover:bg-[#124B5F] transition">
                  Support This Program
                </button>
                </Link>

                <button
                  onClick={() => setModalOpen(false)}
                  className="border border-[#DDE5EA] text-[#0B3A4A] px-5 py-3 rounded-xl text-sm font-semibold hover:bg-[#F7FAFC] transition"
                >
                  Close
                </button>

              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}