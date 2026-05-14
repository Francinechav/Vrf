"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const pathname = usePathname();

  const navLink = (path: string) =>
    pathname === path
      ? "text-[#5FAFC2]"
      : "hover:text-[#5FAFC2] transition";

  return (
    <header className="w-full bg-[#0B3A4A] text-white fixed top-0 left-0 z-50 shadow-md">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-5 md:py-7">

        {/* LOGO */}
        <Link href="/" className="flex items-center">

          <Image
            src="/vrflogo.png"
            alt="VRF Logo"
            width={130}
            height={45}
            className="object-contain"
            priority 
          />

        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">

          {/* HOME */}
          <Link href="/" className={navLink("/")}>
            Home
          </Link>

          {/* ABOUT DROPDOWN */}
          <div className="relative group">

            <button
              className={`flex items-center gap-1 ${
                pathname.startsWith("/about")
                  ? "text-[#5FAFC2]"
                  : "hover:text-[#5FAFC2] transition"
              }`}
            >
              About Us
              <ChevronDown size={16} />
            </button>

            {/* DROPDOWN */}
            <div className="absolute top-full left-0 mt-3 w-52 bg-white text-[#0B3A4A] rounded-2xl shadow-xl border border-[#DDE5EA] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden">

              <Link
                href="/about"
                className={`block px-5 py-3 text-sm hover:bg-[#F7FAFC] ${
                  pathname === "/about" ? "text-[#5FAFC2]" : ""
                }`}
              >
                Our Story
              </Link>

              <Link
                href="/team"
                className={`block px-5 py-3 text-sm hover:bg-[#F7FAFC] ${
                  pathname === "/team" ? "text-[#5FAFC2]" : ""
                }`}
              >
                Our Team / Partners
              </Link>

            </div>
          </div>

          {/* OTHER LINKS */}
          <Link href="/programms" className={navLink("/projects")}>
            What We Do
          </Link>

          <Link href="/resources" className={navLink("/resources")}>
            Resources
          </Link>

          <Link href="/donations" className={navLink("/donations")}>
            Support Us
          </Link>

        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-block bg-[#5FAFC2] px-5 py-2 rounded-md text-sm font-semibold hover:bg-[#4A9CAE] transition"
        >
          CONTACT US
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-full w-[78%] bg-[#0B3A4A] z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >

        {/* TOP */}
        <div className="flex justify-between items-center p-5 border-b border-[#2E5F73]">

          <span className="font-semibold">
            Menu
          </span>

          <button onClick={() => setMenuOpen(false)}>
            ✕
          </button>

        </div>

        {/* MOBILE NAV */}
        <nav className="flex flex-col p-6 text-base font-medium">

          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className={`py-4 border-b border-[#2E5F73] ${
              pathname === "/" ? "text-[#5FAFC2]" : ""
            }`}
          >
            Home
          </Link>

          {/* ABOUT MOBILE */}
          <div className="border-b border-[#2E5F73]">

            <button
              onClick={() => setAboutOpen(!aboutOpen)}
              className={`w-full flex items-center justify-between py-4 ${
                pathname.startsWith("/about")
                  ? "text-[#5FAFC2]"
                  : ""
              }`}
            >
              About Us

              <ChevronDown
                size={18}
                className={`transition-transform ${
                  aboutOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* SUBMENU */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                aboutOpen ? "max-h-40 pb-3" : "max-h-0"
              }`}
            >

              <div className="flex flex-col gap-3 pl-4 text-sm text-[#DDE5EA]">

                <Link
                  href="/about"
                  onClick={() => setMenuOpen(false)}
                  className={
                    pathname === "/about"
                      ? "text-[#5FAFC2]"
                      : ""
                  }
                >
                  Our Story
                </Link>

                <Link
                  href="/team"
                  onClick={() => setMenuOpen(false)}
                  className={
                    pathname === "/team"
                      ? "text-[#5FAFC2]"
                      : ""
                  }
                >
                  Our Team / Partners
                </Link>

              </div>
            </div>
          </div>

          {/* OTHER LINKS */}
          <Link
            href="/programms"
            onClick={() => setMenuOpen(false)}
            className={`py-4 border-b border-[#2E5F73] ${
              pathname === "/projects" ? "text-[#5FAFC2]" : ""
            }`}
          >
            What We Do
          </Link>

          <Link
            href="/resources"
            onClick={() => setMenuOpen(false)}
            className={`py-4 border-b border-[#2E5F73] ${
              pathname === "/resources" ? "text-[#5FAFC2]" : ""
            }`}
          >
            Resources
          </Link>

          <Link
            href="/donations"
            onClick={() => setMenuOpen(false)}
            className={`py-4 border-b border-[#2E5F73] ${
              pathname === "/donations" ? "text-[#5FAFC2]" : ""
            }`}
          >
            Support Us
          </Link>

          {/* CTA */}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-6 bg-[#5FAFC2] text-center py-3 rounded-xl font-semibold"
          >
            CONTACT US
          </Link>

        </nav>
      </div>
    </header>
  );
}