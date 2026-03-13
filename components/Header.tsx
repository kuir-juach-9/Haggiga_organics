"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-primary text-white sticky top-0 z-50 shadow-lg">
      <nav className="container-custom py-3 sm:py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition">
            <Image 
              src="/images/haggiga-logo.jpg" 
              alt="Haggiga Organics Logo" 
              width={50} 
              height={50} 
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
            />
            <span className="text-xl sm:text-2xl font-bold hover:text-accent transition">Haggiga Organics</span>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <ul className="hidden md:flex space-x-2">
            <li>
              <Link href="/" className="px-3 lg:px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-accent transition-all duration-300 block text-sm lg:text-base">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="px-3 lg:px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-accent transition-all duration-300 block text-sm lg:text-base">
                About
              </Link>
            </li>
            <li>
              <Link href="/products" className="px-3 lg:px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-accent transition-all duration-300 block text-sm lg:text-base">
                Products
              </Link>
            </li>
            <li>
              <Link href="/process" className="px-3 lg:px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-accent transition-all duration-300 block text-sm lg:text-base">
                Process
              </Link>
            </li>
            <li>
              <Link href="/sustainability" className="px-3 lg:px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-accent transition-all duration-300 block text-sm lg:text-base">
                Sustainability
              </Link>
            </li>
            <li>
              <Link href="/contact" className="px-3 lg:px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-accent transition-all duration-300 block text-sm lg:text-base">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {isOpen && (
          <ul className="md:hidden mt-4 space-y-2">
            <li>
              <Link href="/" onClick={() => setIsOpen(false)} className="block py-3 px-4 rounded-lg bg-white/5 hover:bg-white/10 hover:text-accent transition text-base">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setIsOpen(false)} className="block py-3 px-4 rounded-lg bg-white/5 hover:bg-white/10 hover:text-accent transition text-base">
                About
              </Link>
            </li>
            <li>
              <Link href="/products" onClick={() => setIsOpen(false)} className="block py-3 px-4 rounded-lg bg-white/5 hover:bg-white/10 hover:text-accent transition text-base">
                Products
              </Link>
            </li>
            <li>
              <Link href="/process" onClick={() => setIsOpen(false)} className="block py-3 px-4 rounded-lg bg-white/5 hover:bg-white/10 hover:text-accent transition text-base">
                Process
              </Link>
            </li>
            <li>
              <Link href="/sustainability" onClick={() => setIsOpen(false)} className="block py-3 px-4 rounded-lg bg-white/5 hover:bg-white/10 hover:text-accent transition text-base">
                Sustainability
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="block py-3 px-4 rounded-lg bg-white/5 hover:bg-white/10 hover:text-accent transition text-base">
                Contact
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
