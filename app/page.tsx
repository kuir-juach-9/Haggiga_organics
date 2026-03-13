import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import VisionMission from "@/components/VisionMission";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <VisionMission />
        
        {/* Quick Features Section */}
        <section className="section-padding bg-gradient-to-br from-white to-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 px-4">Why Choose Us</h2>
              <p className="text-gray-600 text-lg">What makes Haggiga Organics different</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-white to-accent/5 p-6 sm:p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 hover:scale-105 group cursor-pointer border-l-4 border-accent">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🌿</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors duration-300">100% Locally Sourced</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">All groundnuts sourced directly from South Sudanese farmers, ensuring freshness and supporting local agriculture.</p>
              </div>
              <div className="bg-gradient-to-br from-white to-secondary/5 p-6 sm:p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 hover:scale-105 group cursor-pointer border-l-4 border-secondary">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors duration-300">Empowering Farmers</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">Direct partnerships providing reliable markets for local farmers, reducing post-harvest losses.</p>
              </div>
              <div className="bg-gradient-to-br from-white to-primary/5 p-6 sm:p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 hover:scale-105 group cursor-pointer border-l-4 border-primary">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">💚</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors duration-300">Affordable Quality</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">High-quality cooking oil at prices everyone can afford, supporting households and businesses.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-secondary text-white">
          <div className="container-custom text-center px-4">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Ready to Experience Pure Quality?</h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
              Discover our range of premium groundnut cooking oil and support local farmers
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-white hover:bg-gray-100 text-primary font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition shadow-lg"
            >
              Get In Touch
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
