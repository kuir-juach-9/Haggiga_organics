import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Carousel from "@/components/Carousel";

export const metadata = {
  title: "Contact Us - Haggiga Organics",
  description: "Get in touch with Haggiga Organics for orders and inquiries.",
};

export default function ContactPage() {
  const heroImages = [
    "/images/sdgddgg.jpg",
    "/images/FirstPic.jpeg",
    "/images/SecondPic.jpeg",
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
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 drop-shadow-lg">Contact Us</h1>
            <p className="text-lg sm:text-xl drop-shadow-md">We'd Love to Hear From You</p>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
