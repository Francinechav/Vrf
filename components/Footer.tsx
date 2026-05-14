import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0B3A4A] text-white">

      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 grid gap-10 sm:grid-cols-2 md:grid-cols-4">

        {/* LOGO + ABOUT */}
        <div>
          <Image
            src="/vrflogo.png"
            alt="VRF Logo"
            width={140}
            height={50}
            className="mb-4"
          />
          <p className="text-sm text-[#DDE5EA] leading-relaxed">
            Vital Rights Foundation is dedicated to promoting human rights,
            health equity, and access to justice in Malawi.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm text-[#DDE5EA]">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/programms">What We Do</Link></li>
            <li><Link href="/resources">Resources</Link></li>
          </ul>
        </div>

        {/* GET INVOLVED */}
        <div>
          <h4 className="font-semibold mb-4 text-white">Get Involved</h4>
          <ul className="space-y-2 text-sm text-[#DDE5EA]">
            <li><Link href="/donations">Donate</Link></li>
            <li><Link href="/contact">Volunteer</Link></li>
            <li><Link href="/contact">Partner With Us</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="font-semibold mb-4 text-white">Contact</h4>
          <p className="text-sm text-[#DDE5EA] leading-relaxed">
            Blantyre, Malawi <br />
            info@vitalrightsfoundation.com <br />
            +265 997 902 095
          </p>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-[#2E5F73]" />

      {/* BOTTOM BAR */}
      <div className="text-center text-sm text-[#DDE5EA] py-4 px-4">
        © {new Date().getFullYear()} Vital Rights Foundation. All rights reserved.
      </div>
    </footer>
  );
}