"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { properties } from "./listings/data";
import PropertyCard from "./listings/PropertyCard";
import Header from "@/components/Header";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import Footer from "@/components/Footer";

const slides = [
  {
    image: "/bg1.png",
    subtext:
      "Discover the perfect property from our curated listings across Nigeria.",
  },
  {
    image: "/bg2.png",
    subtext: "Explore premium apartments and estates in prime locations.",
  },
  {
    image: "/bg3.png",
    subtext: "Unlock high‑return real‑estate investment opportunities.",
  },
];

const stats = [
  { label: "Properties", value: 2000, suffix: "+" },
  { label: "Site Engineers", value: 60, suffix: "+" },
  { label: "Office Staff", value: 400, suffix: "+" },
  { label: "Locations", value: 89, suffix: "+" },
  { label: "Paid out in Realty", value: 10, suffix: "B+", prefix: "" },
  { label: "Clients", value: 6000, suffix: "+" },
];

function CountUp({
  target,
  duration = 2000,
  suffix = "",
  prefix = "",
}: {
  target: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let startTime: number | null = null;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [hasStarted, target, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-[5rem] pb-10 sm:pb-16 bg-primary flex flex-col md:flex-row items-center overflow-hidden h-auto md:h-screen">
        {/* PNG Slider – left on desktop, top on mobile */}
        <div className="relative w-full md:w-1/2 h-64 sm:h-80 md:h-full flex-shrink-0">
          {slides.map((slide, index) => (
            <div
              key={slide.image}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={slide.image}
                alt=""
                fill
                className="object-contain p-4"
                unoptimized
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* Text side – right on desktop, below on mobile */}
        <div className="relative z-10 w-full md:w-1/2 flex items-center justify-center p-6 md:p-12">
          <div className="text-center md:text-left w-full max-w-xl">
            {slides.map((slide, index) => (
              <div
                key={slide.subtext}
                className={`transition-all duration-700 ${
                  index === currentIndex
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 absolute"
                }`}
                style={{
                  visibility:
                    index === currentIndex ? "visible" : "hidden",
                }}
              >
                {index === currentIndex && (
                  <>
                    <p className="text-base sm:text-lg md:text-2xl lg:text-3xl text-white/90 mb-8 font-medium">
                      {slide.subtext}
                    </p>

                    {/* Two buttons side by side */}
                    <div className="flex flex-row items-center justify-center md:justify-start gap-3">
                      <Link
                        href="/listings"
                        className="inline-block bg-white text-primary font-semibold px-5 py-3 sm:px-6 sm:py-3 rounded-full hover:bg-gray-100 transition text-sm sm:text-base"
                      >
                        Browse Properties
                      </Link>
                      <Link
                        href="/contact"
                        className="inline-block bg-transparent border-2 border-white text-white font-semibold px-5 py-3 sm:px-6 sm:py-3 rounded-full hover:bg-white hover:text-primary transition text-sm sm:text-base"
                      >
                        Book Inspection
                      </Link>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Wavy bottom with gradient strip */}
        <div className="absolute bottom-0 left-0 w-full z-20">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full h-16 sm:h-24 md:h-32"
          >
            <defs>
              <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0359a8" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#f3f4f6" stopOpacity="1" />
              </linearGradient>
            </defs>
            <path
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
              fill="url(#waveGradient)"
            />
          </svg>
        </div>
      </section>

      {/* Vision, Mission & Core Values – Card Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Our Vision Card */}
            <AnimateOnScroll delay={0}>
              <div className="bg-white shadow-lg rounded-xl p-8 text-center hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
                <div className="flex justify-center mb-5">
                  <div className="bg-primary w-14 h-14 flex items-center justify-center rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Our Vision
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To become a leading real estate brand, transforming lives by
                  making property ownership accessible, rewarding, and a lasting
                  legacy for generations.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Our Mission Card */}
            <AnimateOnScroll delay={200}>
              <div className="bg-white shadow-lg rounded-xl p-8 text-center hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
                <div className="flex justify-center mb-5">
                  <div className="bg-primary w-14 h-14 flex items-center justify-center rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To deliver exceptional real estate solutions through
                  integrity, innovation, and personalized service, helping every
                  client make confident investment decisions.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Our Core Values Card */}
            <AnimateOnScroll delay={400}>
              <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
                <div className="flex justify-center mb-5">
                  <div className="bg-primary w-14 h-14 flex items-center justify-center rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                  Our Core Values
                </h3>
                <ul className="space-y-3 text-left">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1 flex-shrink-0">
                      <svg className="h-3 w-3 fill-current" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                    </span>
                    <span className="text-gray-600">Customer Excellence</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1 flex-shrink-0">
                      <svg className="h-3 w-3 fill-current" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                    </span>
                    <span className="text-gray-600">
                      Integrity & Transparency
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1 flex-shrink-0">
                      <svg className="h-3 w-3 fill-current" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                    </span>
                    <span className="text-gray-600">Professionalism</span>
                  </li>
                </ul>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <AnimateOnScroll>
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
            {/* Image side – left on desktop, top on mobile */}
            <div className="w-full lg:w-1/2 flex-shrink-0">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/tbashad.jpeg"
                  alt="Tbash Global Limited story"
                  width={800}
                  height={600}
                  className="object-cover w-full h-auto"
                  unoptimized
                />
              </div>
            </div>

            {/* Text side */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Story
              </h2>
              <div className="text-gray-700 space-y-4 leading-relaxed text-justify">
                <p>
                  Founded with a vision to redefine excellence in the real
                  estate industry, <strong>Tbash Global Limited</strong> was
                  established to provide reliable, innovative, and value-driven
                  property solutions. From the very beginning, our focus has
                  been on helping individuals, families, and investors achieve
                  their dreams of owning quality real estate while building
                  lasting wealth.
                </p>
                <p>
                  Over the years, we have grown through a steadfast commitment
                  to integrity, professionalism, and customer satisfaction. By
                  understanding the evolving needs of our clients, we have
                  built a reputation for delivering exceptional service,
                  transparent transactions, and investment opportunities that
                  create long-term value.
                </p>
                <p>
                  At Tbash Global Limited, we believe that real estate is more
                  than buying and selling properties—it is about creating
                  opportunities, transforming communities, and helping people
                  build a secure future. Every project we undertake reflects our
                  dedication to quality, innovation, and sustainable
                  development.
                </p>
                <p>
                  As we continue to grow, our mission remains the same: to be a
                  trusted partner in real estate, delivering excellence,
                  fostering lasting relationships, and empowering our clients to
                  make confident property investment decisions. With a strong
                  foundation and a forward-thinking vision, Tbash Global
                  Limited is committed to shaping the future of real estate,
                  one property at a time.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Statistics Counter Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center text-white">
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-2">
                <div className="text-4xl md:text-5xl font-extrabold">
                  {stat.label === "Paid out in Realty" ? (
                    <span>
                      <CountUp target={10} duration={2000} />
                      B+
                    </span>
                  ) : (
                    <CountUp target={stat.value} suffix={stat.suffix} duration={2000} />
                  )}
                </div>
                <div className="text-sm uppercase tracking-wide opacity-80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            Featured Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.slice(0, 6).map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/listings"
              className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition"
            >
              View All Listings
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Move?</h2>
        <p className="text-lg mb-6">
          Contact us today and let&apos;s find your perfect home.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-primary font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition"
        >
          Get in Touch
        </Link>
      </section>

      {/* Footer (shared component with Privacy Policy link) */}
      <Footer />
    </div>
  );
}