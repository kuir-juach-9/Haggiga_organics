import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Team from "@/components/Team";
import Carousel from "@/components/Carousel";

export const metadata = {
  title: "Our Team - Haggiga Organics",
  description: "Meet the dedicated team behind Haggiga Organics' commitment to quality organic oils and sustainable agriculture.",
};

export default function TeamPage() {
  const heroImages = [
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80",
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80",
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1920&q=80",
  ];

  return (
    <>
      <Header />
      <main>
        <section className="relative h-[60vh] flex items-center justify-center text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/70 z-10"></div>
          <div className="absolute inset-0">
            <Carousel images={heroImages} autoPlayInterval={5000} />
          </div>
          <div className="relative z-20 container-custom text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 drop-shadow-lg">Our Team</h1>
            <p className="text-lg sm:text-xl drop-shadow-md">The People Behind Our Success</p>
          </div>
        </section>
        <Team />
      </main>
      <Footer />
    </>
  );
}
