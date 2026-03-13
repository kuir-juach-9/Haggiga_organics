export default function Benefits() {
  return (
    <section className="section-padding bg-secondary text-white">
      <div className="container-custom">
        <h2 className="text-4xl font-bold mb-8 text-center">Benefits of Our Groundnut Oil</h2>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
          Pure groundnut cooking oil from Haggiga Organics provides many benefits:
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="bg-white/10 p-6 rounded-lg text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 group cursor-pointer">
            <span className="text-4xl mb-3 block group-hover:scale-125 transition-transform duration-300">✔</span>
            <p className="text-lg">100% Locally Sourced</p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 group cursor-pointer">
            <span className="text-4xl mb-3 block group-hover:scale-125 transition-transform duration-300">✔</span>
            <p className="text-lg">Affordable & High Quality</p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 group cursor-pointer">
            <span className="text-4xl mb-3 block group-hover:scale-125 transition-transform duration-300">✔</span>
            <p className="text-lg">Rich in Healthy Fats</p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 group cursor-pointer">
            <span className="text-4xl mb-3 block group-hover:scale-125 transition-transform duration-300">✔</span>
            <p className="text-lg">Supports Local Farmers</p>
          </div>
        </div>
      </div>
    </section>
  );
}
