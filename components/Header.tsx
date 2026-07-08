"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  // Helper: active link style – darker background, no border
  const getDesktopLinkClass = (href: string) => {
    const isActive = pathname === href;
    const base = "transition-colors px-3 py-2 rounded-full";
    if (isActive) {
      // Active: solid darker background
      return scrolled
        ? "bg-primary-dark text-white " + base
        : "bg-white/20 text-white " + base;
    }
    return scrolled
      ? "text-gray-700 hover:text-primary " + base
      : "text-white hover:text-gray-200 " + base;
  };

  // Helper for "Earn with Us" pill – ensure text is readable
  const getEarnWithUsClass = () => {
    const isActive = pathname === "/earn-with-us";
    const base = "border-2 rounded-full px-4 py-2 font-medium transition";
    if (isActive) {
      // Active: solid white background with primary text (visible)
      return "bg-white text-primary border-white " + base;
    }
    return scrolled
      ? "border-primary text-primary hover:bg-primary hover:text-white " + base
      : "border-white text-white hover:bg-white hover:text-primary " + base;
  };

  const getMobileLinkClass = (href: string) => {
    const isActive = pathname === href;
    return isActive
      ? "block py-3 text-white font-semibold bg-white/10 rounded-lg px-3 border border-white/50"
      : "block py-3 text-white hover:bg-white/10 rounded-lg px-3 transition";
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-primary py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" onClick={closeMobileMenu}>
          <Image
            src={scrolled ? "/logo.png" : "/logowhite.png"}
            alt="RealEstate Logo"
            width={150}
            height={50}
            className="h-10 w-auto transition-all duration-300"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          <Link href="/" className={getDesktopLinkClass("/")}>Home</Link>
          <Link href="/listings" className={getDesktopLinkClass("/listings")}>Listings</Link>
          <Link href="/about" className={getDesktopLinkClass("/about")}>About</Link>
          <Link href="/contact" className={getDesktopLinkClass("/contact")}>Contact</Link>
          <Link href="/earn-with-us" className={getEarnWithUsClass()}>
            Earn with Us
          </Link>
        </nav>

        {/* Mobile controls: Earn with Us button + Hamburger */}
        <div className="flex md:hidden items-center space-x-3">
          <Link
            href="/earn-with-us"
            className="border-2 border-white text-white rounded-full px-3 py-1.5 text-sm font-medium"
          >
            Earn with Us
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {/* Hamburger icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay + Glass Dropdown */}
      {mobileMenuOpen && (
        <>
          {/* Blurred background overlay */}
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
            onClick={closeMobileMenu}
          />

          {/* Glass menu panel */}
          <div className="absolute top-full left-0 right-0 z-50 md:hidden">
            <div className="mx-4 mt-2 bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/30 overflow-hidden">
              {/* Close button (X) inside the panel */}
              <div className="flex justify-end p-3">
                <button
                  onClick={closeMobileMenu}
                  className="text-white hover:bg-white/10 p-2 rounded-full transition"
                  aria-label="Close menu"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="px-4 pb-4 space-y-1">
                <Link href="/" onClick={closeMobileMenu} className={getMobileLinkClass("/")}>Home</Link>
                <Link href="/listings" onClick={closeMobileMenu} className={getMobileLinkClass("/listings")}>Listings</Link>
                <Link href="/about" onClick={closeMobileMenu} className={getMobileLinkClass("/about")}>About</Link>
                <Link href="/contact" onClick={closeMobileMenu} className={getMobileLinkClass("/contact")}>Contact</Link>
                <div className="border-t border-white/20 pt-2">
                  <Link href="/earn-with-us" onClick={closeMobileMenu} className={getMobileLinkClass("/earn-with-us")}>Earn with Us</Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}