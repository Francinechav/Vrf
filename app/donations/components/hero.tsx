import Link from "next/link";

export default function Hero6() {
  return (
    <section className="relative min-h-[52vh] sm:min-h-[58vh] md:min-h-[64vh] flex items-center justify-center text-center px-4">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/d3.jpeg')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#2E5F73]/60" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-white py-16 md:py-20">

        <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-tight mb-4 md:mb-6">
          Support Us
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-[#DDE5EA] mb-6 md:mb-8">
          Join Us in the Fight for Health Equity and Justice
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="#don">
          <p className="bg-[#5FAFC2] px-6 py-3 rounded-md font-semibold hover:bg-[#4A9CAE] transition">
            Donate
          </p>
          </Link>
        </div>
      </div>
    </section>
  );
}