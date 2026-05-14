export default function Hero5() {
  return (
    <section className="relative min-h-[68vh] sm:min-h-[76vh] md:min-h-[86vh] flex items-center justify-center text-center px-4">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/vg.jpg')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#2E5F73]/60" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-white">

        <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-tight mb-4 md:mb-6">
           Advocacy, Partnerships & Impact
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-[#DDE5EA] mb-6 md:mb-8">
         Follow the latest updates, legal advocacy initiatives, partnerships, public awareness campaigns and community-driven impact stories from Vital Rights Foundation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a className="bg-[#5FAFC2] px-6 py-3 rounded-md font-semibold hover:bg-[#4A9CAE] transition">
            Learn More
          </a>

        </div>
      </div>
    </section>
  );
}