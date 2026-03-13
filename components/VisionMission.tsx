export default function VisionMission() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Mission Card - First */}
          <div className="bg-white p-8 sm:p-10 rounded-xl shadow-xl border-l-4 border-secondary hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary">Our Mission</h2>
            </div>
            <ul className="space-y-4 text-base sm:text-lg text-gray-700">
              <li className="flex items-start">
                <span className="text-accent mr-3 text-xl font-bold">•</span>
                <span>Create sustainable solutions for consumers and farmers</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 text-xl font-bold">•</span>
                <span>Provide reliable markets for local groundnut farmers</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 text-xl font-bold">•</span>
                <span>Produce affordable, high-quality cooking oil</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 text-xl font-bold">•</span>
                <span>Reduce post-harvest losses and strengthen value chains</span>
              </li>
            </ul>
          </div>

          {/* Vision Card */}
          <div className="bg-white p-8 sm:p-10 rounded-xl shadow-xl border-l-4 border-accent hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary">Our Vision</h2>
            </div>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              To reduce dependence on imported cooking oil and build a strong locally produced alternative 
              that empowers communities and supports economic development in South Sudan.
            </p>
          </div>

          {/* Core Values Card */}
          <div className="bg-white p-8 sm:p-10 rounded-xl shadow-xl border-l-4 border-primary hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="text-center mb-8">
              <h3 className="text-3xl sm:text-4xl font-bold text-primary mb-2">Our Core Values</h3>
              <p className="text-gray-600">The principles that guide everything we do</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center group cursor-pointer">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <svg className="w-10 h-10 text-accent group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="font-bold text-lg text-primary group-hover:text-accent transition-colors">Quality</p>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">Excellence in every drop</p>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                  <svg className="w-10 h-10 text-secondary group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="font-bold text-lg text-primary group-hover:text-secondary transition-colors">Resilience</p>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">Strength through challenges</p>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <svg className="w-10 h-10 text-primary group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <p className="font-bold text-lg text-primary group-hover:text-secondary transition-colors">Community</p>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">Together we grow</p>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <svg className="w-10 h-10 text-accent group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="font-bold text-lg text-primary group-hover:text-accent transition-colors">Sustainability</p>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">For future generations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
