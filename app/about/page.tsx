import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Team from "@/components/Team";
import Carousel from "@/components/Carousel";

export const metadata = {
  title: "About Us - Haggiga Organics",
  description: "Learn about Haggiga Organics' mission to provide high-quality organic oils through sustainable farming practices.",
};

export default function AboutPage() {
  const heroImages = [
    "/images/FirstPic.jpeg",
    "/images/SecondPic.jpeg",
    "/images/thirdPic.jpeg",
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
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 drop-shadow-lg">About Us</h1>
            <p className="text-lg sm:text-xl drop-shadow-md">Committed to Quality, Sustainability, and Community</p>
          </div>
        </section>
        <About />
        <Team />
      </main>
      <Footer />
    </>
  );
}
