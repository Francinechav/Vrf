import Link from "next/link";

export default function Hero2() {
  return (
    <section className="relative min-h-[58vh] sm:min-h-[65vh] md:min-h-[78vh] flex items-center justify-center text-center px-4">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/vd.jpg')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#2E5F73]/60" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-white">

        <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-tight mb-3 md:mb-5">
          Who We Are
        </h1>
   
        <p className="text-sm sm:text-base md:text-xl text-[#DDE5EA] mb-5 md:mb-7">
          Learn Our Story
        </p>
     
    
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
 
     <Link href="#aboutus">
          <p className="bg-[#5FAFC2] px-5 py-2.5 rounded-md text-sm md:text-base font-semibold hover:bg-[#4A9CAE] transition">
            About Us
          </p>
   </Link>
        </div>
      </div>
    </section>
  );
}