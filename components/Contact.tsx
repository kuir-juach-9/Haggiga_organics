"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    product: "",
    quantity: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry! We will contact you soon.");
    setFormData({ fullName: "", phone: "", email: "", product: "", quantity: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-primary mb-12 text-center">Contact Us</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Haggiga Organic</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="font-semibold">Location</p>
                  <p>Highland Juba, South Sudan</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p>+211 926 086 083</p>
                  <p>+211 928 981 981</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🌐</span>
                <div>
                  <p className="font-semibold">Website</p>
                  <p>www.haggigaorganics.com</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:bg-white transition-all duration-300 shadow-md hover:shadow-xl transform hover:scale-105">
              <h4 className="font-bold text-primary mb-3">Business Hours</h4>
              <p>Monday – Friday: 8:00 AM – 5:00 PM</p>
              <p>Saturday: Closed</p>
              <p>Sunday: 9:00 AM – 2:00 PM</p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <h3 className="text-2xl font-bold text-primary mb-6">Order / Inquiry Form</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-300 hover:border-secondary"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-300 hover:border-secondary"
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-300 hover:border-secondary"
              />
              <select
                required
                value={formData.product}
                onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-300 hover:border-secondary"
              >
                <option value="">Product Interested In</option>
                <option value="1L">Pure Groundnut Oil - 1L</option>
                <option value="5L">Bulk Groundnut Oil - 5L</option>
                <option value="20L">Commercial Groundnut Oil - 20L</option>
                <option value="custom">Custom Order</option>
              </select>
              <input
                type="text"
                placeholder="Quantity"
                required
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-300 hover:border-secondary"
              />
              <textarea
                placeholder="Message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-300 hover:border-secondary"
              />
              <button
                type="submit"
                className="w-full bg-secondary hover:bg-primary text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                Submit Order Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
