"use client";
import { useState } from "react";
import Carousel from "./Carousel";

export default function Products() {
  const products = [
    {
      name: "Pure Groundnut Cooking Oil",
      features: ["100% locally sourced groundnuts", "High smoke point for cooking", "Rich in healthy fats", "Affordable and high quality"],
      images: [
        "/images/OilPic.jpeg",
        "/images/OilPic2.jpeg",
        "/images/FirstPic.jpeg",
      ],
    },
    {
      name: "Premium Groundnut Oil - 1L",
      features: ["Perfect for households", "Natural and unrefined", "Supports local farmers", "Great for frying and cooking"],
      images: [
        "/images/SecondPic.jpeg",
        "/images/thirdPic.jpeg",
        "/images/fourPic.jpeg",
      ],
    },
    {
      name: "Bulk Groundnut Oil - 5L",
      features: ["Ideal for small businesses", "Cost-effective solution", "Consistent quality", "Supports food vendors"],
      images: [
        "/images/EightPic.jpeg",
        "/images/ninePic.jpeg",
        "/images/TenPic.jpeg",
      ],
    },
    {
      name: "Commercial Groundnut Oil - 20L",
      features: ["For restaurants and vendors", "Bulk pricing available", "Fresh and pure", "Locally produced"],
      images: [
        "/images/TwelevePic.jpeg",
        "/images/elevenPic.jpeg",
        "/images/sixPic.jpeg",
      ],
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  return (
    <section id="products" className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-primary mb-4 text-center">Our Products</h2>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
          High-quality groundnut cooking oil in various sizes to meet your needs - from households to commercial operations.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-2 hover:scale-105 group"
              onClick={() => setSelectedProduct(selectedProduct === index ? null : index)}
            >
              <div className="h-64 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300 z-10"></div>
                <Carousel images={product.images} autoPlayInterval={4000} showControls={false} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-4 text-center group-hover:text-secondary transition-colors duration-300">{product.name}</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-secondary mr-2 group-hover:scale-125 transition-transform duration-300">•</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Product Modal/Detail View */}
        {selectedProduct !== null && (
          <div 
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProduct(null)}
          >
            <div 
              className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-96">
                <Carousel images={products[selectedProduct].images} autoPlayInterval={4000} />
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white text-primary p-2 rounded-full z-30"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-primary mb-6">{products[selectedProduct].name}</h3>
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-secondary">Key Features:</h4>
                  <ul className="space-y-3">
                    {products[selectedProduct].features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-secondary text-xl mr-3">✓</span>
                        <span className="text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
