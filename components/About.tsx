export default function About() {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-primary mb-12 text-center">About Haggiga Organics</h2>
        
        {/* Company Story Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-8 sm:p-10 rounded-xl shadow-xl border-l-4 border-accent hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
              <p>
                Haggiga Organics is a locally driven agribusiness dedicated to producing high-quality groundnut cooking oil 
                sourced from farmers in South Sudan. Guided by our motto <strong>"From Our Land to Your Table,"</strong> we transform 
                locally grown groundnuts into pure, healthy cooking oil while strengthening the local agricultural value chain.
              </p>
              
              <p>
                Our mission is to create a sustainable solution that benefits both consumers and farmers. By purchasing groundnuts 
                directly from local farmers, we provide them with a reliable market for their produce while reducing post-harvest 
                losses. At the same time, we produce affordable and high-quality cooking oil that supports households, small businesses, 
                and food vendors.
              </p>

              <p>
                Haggiga Organics was founded with the vision of reducing dependence on imported cooking oil and building a strong 
                locally produced alternative that empowers communities and supports economic development. Through responsible sourcing, 
                efficient processing, and strong community partnerships, we aim to create jobs, promote local agriculture, and contribute 
                to food sustainability.
              </p>

              <p>
                As we grow, our goal is to expand production, strengthen partnerships with farmers, and build a trusted brand that 
                represents quality, resilience, and community empowerment.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Section */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-primary mb-8 text-center">Why Choose Haggiga Organics?</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-accent group cursor-pointer">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent transition-all duration-300">
                  <svg className="w-8 h-8 text-accent group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg font-semibold text-primary">100% Locally Sourced Groundnuts</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-secondary group cursor-pointer">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-secondary transition-all duration-300">
                  <svg className="w-8 h-8 text-secondary group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <p className="text-lg font-semibold text-primary">Direct Support to Local Farmers</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-accent group cursor-pointer">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent transition-all duration-300">
                  <svg className="w-8 h-8 text-accent group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-lg font-semibold text-primary">Affordable & High Quality</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-secondary group cursor-pointer">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-secondary transition-all duration-300">
                  <svg className="w-8 h-8 text-secondary group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <p className="text-lg font-semibold text-primary">Strengthening Local Value Chains</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
