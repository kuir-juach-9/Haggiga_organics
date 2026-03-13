import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10"></div>
      
      {/* Background Image (fallback) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=1920&q=80"
          alt="Groundnut Oil"
          fill
          className="object-cover animate-slow-zoom"
          priority
        />
      </div>
      
      <div className="relative z-20 container-custom text-center px-4 py-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 drop-shadow-lg leading-tight animate-fade-in-up">Haggiga Organics</h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 sm:mb-6 md:mb-8 drop-shadow-md animate-fade-in-up animation-delay-200">From Our Land to Your Table</p>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-12 drop-shadow-md px-2 sm:px-4 leading-relaxed animate-fade-in-up animation-delay-400">
          Turning locally grown groundnuts into pure cooking oil while empowering farmers in South Sudan.
          High-quality, affordable, and sustainably produced.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2 sm:px-4 max-w-md sm:max-w-none mx-auto animate-fade-in-up animation-delay-600">
          <Link 
            href="/products" 
            className="bg-accent hover:bg-secondary text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 shadow-lg text-center text-sm sm:text-base transform hover:scale-110 hover:shadow-2xl"
          >
            View Our Products
          </Link>
          <Link 
            href="/contact" 
            className="bg-white hover:bg-gray-100 text-primary font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 shadow-lg text-center text-sm sm:text-base transform hover:scale-110 hover:shadow-2xl"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
