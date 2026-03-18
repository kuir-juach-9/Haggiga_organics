import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Products from "@/components/Products";
import Benefits from "@/components/Benefits";
import Carousel from "@/components/Carousel";

export const metadata = {
  title: "Our Products - Haggiga Organics",
  description: "Explore our range of premium groundnut cooking oil in various sizes for households and businesses.",
};

export default function ProductsPage() {
  const heroImages = [
    "/images/OilPic.jpeg",
    "/images/OilPic2.jpeg",
    "/images/fourPic.jpeg",
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
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 drop-shadow-lg">Our Products</h1>
            <p className="text-lg sm:text-xl drop-shadow-md">Premium Groundnut Cooking Oil for Every Need</p>
          </div>
        </section>
        <Products />
        <Benefits />
      </main>
      <Footer />
    </>
  );
}
