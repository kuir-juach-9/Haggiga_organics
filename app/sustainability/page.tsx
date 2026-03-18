import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sustainability from "@/components/Sustainability";
import Carousel from "@/components/Carousel";

export const metadata = {
  title: "Sustainability - Haggiga Organics",
  description: "Our commitment to environmental protection and sustainable farming practices.",
};

export default function SustainabilityPage() {
  const heroImages = [
    "/images/sixPic.jpeg",
    "/images/elevenPic.jpeg",
    "/images/TwelevePic.jpeg",
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
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 drop-shadow-lg">Our Impact</h1>
            <p className="text-lg sm:text-xl drop-shadow-md">Building Sustainable Communities in South Sudan</p>
          </div>
        </section>
        <Sustainability />
      </main>
      <Footer />
    </>
  );
}
