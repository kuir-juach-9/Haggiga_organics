import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Process from "@/components/Process";
import Carousel from "@/components/Carousel";

export const metadata = {
  title: "Our Process - Haggiga Organics",
  description: "Learn about our careful production process from crop selection to packaging.",
};

export default function ProcessPage() {
  const heroImages = [
    "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=80",
    "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1920&q=80",
    "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1920&q=80",
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
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 drop-shadow-lg">Our Process</h1>
            <p className="text-lg sm:text-xl drop-shadow-md">From Farm to Table - Quality at Every Step</p>
          </div>
        </section>
        <Process />
      </main>
      <Footer />
    </>
  );
}
