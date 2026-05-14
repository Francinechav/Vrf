export default function ContactHero() {
  return (
    <section className="relative min-h-[42vh] sm:min-h-[48vh] md:min-h-[56vh] overflow-hidden flex items-center justify-center text-center px-4">

      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#5FAFC2_0%,#124B5F_35%,#0B3A4A_70%,#071E27_100%)]" />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/20" />

      {/* GLOW EFFECTS */}
      <div className="absolute -top-20 left-[-10%] h-[320px] w-[320px] rounded-full bg-[#5FAFC2]/20 blur-3xl" />

      <div className="absolute bottom-[-120px] right-[-10%] h-[320px] w-[320px] rounded-full bg-[#124B5F]/30 blur-3xl" />

      {/* DECORATIVE CIRCLES */}
      <div className="absolute left-[12%] top-[30%] h-28 w-28 rounded-full border border-white/10" />

      <div className="absolute left-[13%] top-[31%] h-28 w-28 rounded-full border border-white/10" />

      <div className="absolute left-[14%] top-[32%] h-28 w-28 rounded-full border border-white/10" />

      <div className="absolute right-[12%] top-[22%] h-24 w-24 rounded-full border border-white/10" />

      <div className="absolute right-[13%] top-[23%] h-24 w-24 rounded-full border border-white/10" />

      <div className="absolute right-[14%] top-[24%] h-24 w-24 rounded-full border border-white/10" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-3xl text-white py-16 md:py-20">

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-[-0.04em] leading-none">

          Contact Us

        </h1>

        <p className="mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-[#DDE5EA] max-w-2xl mx-auto">

          Have questions, need support, or interested in partnering
          with Vital Rights Foundation? We&apos;d love to hear from you.

        </p>

      </div>

    </section>
  );
}