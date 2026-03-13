export default function Sustainability() {
  return (
    <section id="sustainability" className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-primary mb-8 text-center">Our Impact</h2>
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg mb-6">
            Haggiga Organics is committed to creating sustainable solutions that benefit farmers, consumers, and communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 hover:scale-105 text-center group cursor-pointer border-t-4 border-transparent hover:border-accent">
            <span className="text-4xl mb-3 block group-hover:scale-125 transition-transform duration-300">🤝</span>
            <h3 className="font-bold text-primary group-hover:text-secondary transition-colors duration-300">Farmer Empowerment</h3>
            <p className="text-sm mt-2 text-gray-600">Direct partnerships with local farmers</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 hover:scale-105 text-center group cursor-pointer border-t-4 border-transparent hover:border-accent">
            <span className="text-4xl mb-3 block group-hover:scale-125 transition-transform duration-300">💼</span>
            <h3 className="font-bold text-primary group-hover:text-secondary transition-colors duration-300">Job Creation</h3>
            <p className="text-sm mt-2 text-gray-600">Creating employment opportunities</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 hover:scale-105 text-center group cursor-pointer border-t-4 border-transparent hover:border-accent">
            <span className="text-4xl mb-3 block group-hover:scale-125 transition-transform duration-300">🌾</span>
            <h3 className="font-bold text-primary group-hover:text-secondary transition-colors duration-300">Reducing Waste</h3>
            <p className="text-sm mt-2 text-gray-600">Minimizing post-harvest losses</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 hover:scale-105 text-center group cursor-pointer border-t-4 border-transparent hover:border-accent">
            <span className="text-4xl mb-3 block group-hover:scale-125 transition-transform duration-300">🇸🇸</span>
            <h3 className="font-bold text-primary group-hover:text-secondary transition-colors duration-300">Local Economy</h3>
            <p className="text-sm mt-2 text-gray-600">Supporting South Sudan's economy</p>
          </div>
        </div>

        <div className="text-center max-w-2xl mx-auto">
          <p className="text-lg font-semibold text-primary">
            Together, we're building a sustainable future - reducing import dependence while strengthening local agriculture.
          </p>
        </div>
      </div>
    </section>
  );
}
