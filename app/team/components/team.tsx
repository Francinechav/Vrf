import Image from "next/image";
import Link from "next/link";
import {
  Mail,
} from "lucide-react";

import { FaLinkedinIn } from "react-icons/fa";

const teamMembers = [
  {
    name: "Molly Nkosi",
    role: "Executive Director",
    image: "/molly.jpg",
    linkedin: "https://www.linkedin.com/in/molly-nkosi-8a36b245/",
    email: "mailto:Mollynkosi@vitalrightsfoundation.com",
  },

  {
    name: "Richmond Nyasulu",
    role: "Office Assistant",
    image: "/rich.jpg",
    linkedin: "#",
    email: "mailto:Richmondnyasulu@vitalrightsfoundation.com",
  },

  {
    name: "Linda Sikelo",
    role: "Programme Officer",
    image: "/linda.jpg",
    linkedin: "https://www.linkedin.com/in/linda-sikelo-0301881b8/",
    email: "mailto:lindasikelo@vitalrightsfoundation.com",
  },

  {
    name: "Tadala Mtambo",
    role: "Paralegal Officer",
    image: "/tad.jpg",
    linkedin: "#",
    email: "mailto:tadalamtambo@vitalrightsfoundation.com",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-[#F6F7F8] px-5 py-14 md:px-8 lg:px-14 md:py-20 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* TOP */}
      {/* TOP */}
<div className="flex flex-col items-center text-center mb-12">

  {/* LABEL */}
  <span className="inline-flex items-center gap-2 rounded-full border border-[#DDE5EA] bg-white px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5FAFC2]">

    <span className="h-2 w-2 rounded-full bg-[#5FAFC2]" />

    Our Team

  </span>

  {/* TITLE */}
  <h2 className="text-2xl md:text-4xl font-semibold tracking-[-0.05em] leading-[0.95] text-[#0B3A4A] mt-6">

    Meet The
  
    VRF Team

  </h2>

  {/* TEXT */}
  <p className="mt-5 max-w-4xl text-sm sm:text-base md:text-lg  leading-[1.9] text-[#5C6F79]">

    Meet the dedicated team behind Vital Rights Foundation;
    passionate professionals committed to advancing health equity,
    human rights, legal empowerment, and community advocacy
    across Malawi.

  </p>


        </div>

        {/* TEAM GRID */}

{/* EXECUTIVE DIRECTOR */}
<div className="flex justify-center">

  <div className="text-center max-w-[320px]">

    {/* IMAGE */}
    <div className="relative mx-auto h-[220px] w-[220px] md:h-[280px] md:w-[280px] overflow-hidden rounded-full bg-[#EEF3F5]">

      <Image
        src={teamMembers[0].image}
        alt={teamMembers[0].name}
        fill
        className="object-cover object-top"
      />

    </div>

    {/* INFO */}
    <div className="mt-6">

      <h3 className="text-[28px] md:text-[34px] font-semibold tracking-[-0.03em] text-[#0B3A4A]">

        {teamMembers[0].name}

      </h3>

      <p className="text-[#5C6F79] text-base md:text-lg mt-2">

        {teamMembers[0].role}

      </p>

{/* ICONS */}
<div className="flex items-center justify-center gap-3 mt-6">

  <Link
    href={teamMembers[0].linkedin}
    className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0B3A4A] transition hover:bg-[#124B5F]"
  >
    <FaLinkedinIn className="h-4 w-4 text-white" />
  </Link>

  <Link
    href={teamMembers[0].email}
    className="flex h-11 w-11 items-center justify-center rounded-full bg-[#5FAFC2] transition hover:bg-[#4B9CAF]"
  >
    <Mail className="h-4 w-4 text-white" />
  </Link>

</div>

    </div>

  </div>

</div>

{/* OTHER TEAM MEMBERS */}
{/* OTHER TEAM MEMBERS */}
<div className="mt-16 flex flex-wrap justify-center gap-x-8 md:gap-x-14 gap-y-10">

  {teamMembers.slice(1).map((member, index) => (
    <div
      key={index}
      className="w-[170px] md:w-[210px] text-center"
    >

      {/* IMAGE */}
      <div className="relative mx-auto h-[140px] w-[140px] md:h-[170px] md:w-[170px] overflow-hidden rounded-full bg-[#EEF3F5] ring-1 ring-[#E7EDF0]">

        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-top"
        />

      </div>

      {/* INFO */}
      <div className="mt-4">

        <h3 className="text-[18px] md:text-[22px] font-semibold tracking-[-0.03em] text-[#0B3A4A] leading-tight">

          {member.name}

        </h3>

        <p className="text-[#6B7B84] text-[13px] md:text-[15px] mt-1.5">

          {member.role}

        </p>

        {/* ICONS */}
{/* ICONS */}
<div className="flex items-center justify-center gap-2 mt-4">

  <Link
    href={member.linkedin}
    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0B3A4A] transition hover:bg-[#124B5F]"
  >
    <FaLinkedinIn className="h-3.5 w-3.5 text-white" />
  </Link>

  <Link
    href={member.email}
    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#5FAFC2] transition hover:bg-[#4B9CAF]"
  >
    <Mail className="h-3.5 w-3.5 text-white" />
  </Link>

</div>

      </div>

    </div>
  ))}

</div>
      </div>

    </section>
  );
}