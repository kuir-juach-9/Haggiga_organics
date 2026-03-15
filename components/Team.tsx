"use client";

export default function Team() {
  const teamMembers = [
    {
      name: "Mabior Diing Bul",
      position: "Co-Founder & Chief Executive Officer (CEO)",
      image: "/images/sdgddgg.jpg",
      bio: "Mabior Diing Bul is a Co-Founder of Haggiga Organics and leads the overall strategic direction of the company. As CEO, he focuses on shaping the vision of the business, building strong partnerships, and guiding the long-term growth of the company. His leadership ensures that Haggiga Organics continues to expand its impact while supporting local farmers and promoting locally produced groundnut oil.",
    },
    {
      name: "Thon Kuot Amol",
      position: "Co-Founder & Chief Operations Officer (COO)",
      image: "/images/thon-kuot.webp",
      bio: "Thon Kuot Amol is a Co-Founder of Haggiga Organics and oversees the operational side of the business. He manages the sourcing of groundnuts from farmers, coordinates the oil production process, and ensures that quality standards are maintained throughout the production chain. His work ensures efficiency and consistency in delivering high-quality groundnut oil to customers.",
    },
    {
      name: "Kuir Juach Kuir Thuch",
      position: "Co-Founder & Chief Marketing & Finance Officer (CMFO)",
      image: "/images/kuir-juach.webp",
      bio: "Kuir Juach Kuir Thuch a Co-Founder of Haggiga Organics and leads the company's marketing and financial strategy. He is responsible for brand development, financial planning, and market growth initiatives. His role ensures that the product reaches customers effectively while supporting the sustainable growth of the business.",
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Meet Our Team</h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto px-4">
            Our dedicated team of co-founders working together to bring you the finest groundnut cooking oil
            while supporting sustainable agriculture and local communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 overflow-hidden group cursor-pointer"
            >
              <div className="relative h-80 sm:h-96 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"></div>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  style={member.name === "Mabior Diing Bul" ? { objectPosition: "center 20%" } : {}}
                />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-secondary font-semibold mb-4 text-sm sm:text-base">{member.position}</p>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
